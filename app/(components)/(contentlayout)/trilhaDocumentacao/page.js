'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Col, Row, ProgressBar } from 'react-bootstrap'

// Importa os dados do arquivo externo
import {
  DataCRNM,
  DataCPF,
} from '../../../../shared/data/pages/todolistdataTrilhaDoc'
import GoogleMapComponent from './GoogleMapComponent';

// Componente dinâmico para Todolistdata
const Todolistdata = dynamic(
  () => import('../../../../shared/data/pages/todolistdataTrilhaDoc'),
  { ssr: false }
)

const TrilhaDocumentacao = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [tasksData, setTasksData] = useState({
    0: [...DataCRNM], // Copiando dados do primeiro passo
    1: [...DataCPF], // Copiando dados do segundo passo
  })
  const [unlockedSteps, setUnlockedSteps] = useState([true, false, false]) // Apenas o primeiro passo habilitado

  const calculateProgress = (tasks) => {
    if (!tasks || tasks.length === 0) return 0
    const completedTasks = tasks.filter(
      (task) => task.status === 'Completed'
    ).length
    return Math.round((completedTasks / tasks.length) * 100)
  }

  const handleItemClick = (index) => {
    if (!unlockedSteps[index]) return // Impede interação com passos bloqueados
    setSelectedIndex(selectedIndex === index ? null : index) // Alterna o bloco aberto
  }

  const handleTaskUpdate = (updatedTasks) => {
    setTasksData((prev) => ({
      ...prev,
      [selectedIndex]: updatedTasks, // Atualiza as tarefas do passo atual
    }))

    const progress = calculateProgress(updatedTasks)
    if (progress === 100) {
      setUnlockedSteps((prev) => {
        const newSteps = [...prev]
        if (selectedIndex + 1 < newSteps.length) {
          newSteps[selectedIndex + 1] = true // Desbloqueia o próximo passo
        }
        return newSteps
      })
    }
  }

  const notifications = [
    {
      time: 'Primeiro Passo',
      title: 'Obter o CRNM (Carteira de Registro Nacional Migratório)',
      description:
        'O CRNM é um documento essencial que garante sua identificação no Brasil.',
      image: '../../assets/images/faces/1.jpg',
    },
    {
      time: 'Segundo Passo',
      title: 'Obter CPF (Cadastro de Pessoa Física)',
      description:
        'O CPF é essencial para abrir contas bancárias, realizar compras e acessar diversos outros serviços fundamentais no Brasil.',
      image: '../../assets/images/faces/15.jpg',
    },
    {
      time: 'Terceiro Passo',
      title: 'Obter CTPS Digital (Carteira de Trabalho e Previdência Social)',
      description:
        'A CTPS Digital é importante para formalizar o vínculo empregatício no Brasil.',
      image: '../../assets/images/faces/2.jpg',
    },
  ]

  return (
    <Fragment>
      <Row>
        <Col xl={12}>
          <h6>TIMELINE 3</h6>
          <ul className="notification">
            {notifications.map((notification, index) => (
              <Fragment key={index}>
                <li
                  onClick={() => handleItemClick(index)}
                  style={{
                    cursor: unlockedSteps[index] ? 'pointer' : 'not-allowed',
                    opacity: unlockedSteps[index] ? 1 : 0.5,
                  }}
                >
                  <div className="notification-time">
                    <span className="date">{notification.date}</span>
                    <span className="time">{notification.time}</span>
                  </div>
                  <div className="notification-icon">
                    <Link scroll={false} href="#!"></Link>
                  </div>
                  <div className="notification-body">
                    <div className="d-flex align-items-start gap-3 flex-wrap">
                      <div>
                        <span className="avatar avatar-lg online">
                          <img src={notification.image} alt="" />
                        </span>
                      </div>
                      <div className="flex-fill w-50">
                        <h5 className="mb-1 fs-15 fw-medium text-dark">
                          {notification.title}
                        </h5>
                        <p className="mb-0 fs-13 mb-0 text-muted">
                          {notification.description}
                        </p>
                      </div>
                      <div className="w-100">
                        <ProgressBar
                          now={calculateProgress(tasksData[index])}
                          label={`${calculateProgress(tasksData[index])}%`}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                {selectedIndex === index && (
                  <li>
                    <Todolistdata
                      taskData={tasksData[index]}
                      title={notification.title}
                      onTaskUpdate={handleTaskUpdate} // Passa a função de atualização
                    />
                    {/* Renderiza o mapa para o primeiro passo */}
                    {selectedIndex === 0 && (
                      <div style={{ marginTop: '20px' }}>
                        <GoogleMapComponent />
                      </div>
                    )}
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </Col>
      </Row>
    </Fragment>
  )
}

export default TrilhaDocumentacao
