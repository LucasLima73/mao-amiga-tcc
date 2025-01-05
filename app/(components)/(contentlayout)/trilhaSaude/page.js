'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Modal,
  Pagination,
  ProgressBar,
  Row,
} from 'react-bootstrap'
const Select = dynamic(() => import('react-select'), { ssr: false })
const Todolistdata = dynamic(
  () => import('../../../../shared/data/pages/todolistdataTrilhaSaude'),
  { ssr: false }
)
import DatePicker from 'react-datepicker'

const TrilhaSaude = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleItemClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index) // Fecha se já estiver aberto
  }
  //Assigned Selectdata
  const notifications = [
    {
      Progresso: 'Primeiro Passo',
      time: 'Primeiro Passo',
      title: 'Obter um documento de Identificação',
      description:
        'Garanta o acesso a serviços e benefícios com um documento de identificação válido. \nEste é o primeiro passo para exercer seus direitos e deveres como cidadão.\nAcompanhe as instruções e obtenha o seu documento com facilidade!',
      //badge: 'April 15, 2024',
      image: '../../assets/images/faces/identidade.jpg',
    },
    {
      //date: 'Monday',
      time: 'Segundo Passo',
      title: 'Conseguir o CPF (Cadastro de Pessoa Física)',
      description:
        'O CPF é exigido em muitos serviços públicos, incluindo o SUS.',
      //badge: 'January 1, 2020',
      image: '../../assets/images/faces/cpf.jpg',
    },
    {
      //date: 'Yesterday',
      time: 'Terceiro Passo',
      title: 'Garantir um Comprovante de Residência',
      description:
        "O que pode ser usado: Conta de água, luz, telefone, ou contrato de aluguel.",
      //badge: 'June 1, 2022',
      image: '../../assets/images/faces/2.jpg',
    },
    {
      date: 'Today',
      time: 'Quarto Passo',
      title: 'Solicitar a carteirinha do SUS',
      description:
        'Solicitar a carteirinha do SUS é essencial para garantir acesso gratuito a serviços de saúde pública no Brasil, como consultas, exames e medicamentos.',
      //badge: 'September 10, 2024',
      image: '../../assets/images/faces/8.jpg',
    },
    {
      //date: 'Today',
      time: 'Quinto Passo',
      title: 'Confira as Unidades Básicas de Saúde (UBS) próximos a sua residência',
      description:
        'Encontre as Unidades Básicas de Saúde (UBS) mais próximas da sua casa e facilite seu acesso à saúde.',
      //badge: 'November 5-7, 2021',
      image: '../../assets/images/faces/13.jpg',
    },

  ]

  //Datepicker
  const [startDate1, setStartDate1] = useState(new Date())
  const [startDate2, setStartDate2] = useState(new Date())

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
                  style={{ cursor: 'pointer' }}
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
                      <div>
                        <span className="badge bg-light text-default">
                          {notification.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                {selectedIndex === index && (
                  <li>
                    <Todolistdata />
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

export default TrilhaSaude
