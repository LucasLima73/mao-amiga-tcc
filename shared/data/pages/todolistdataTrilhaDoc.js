import React, { Fragment, useEffect, useState } from 'react'

export const DataCRNM = [
  {
    id: '1',
    title: 'Acesse o site da Polícia Federal (link) para agendar a solicitação',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '2',
    title: 'Reúna os documentos necessários',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '3',
    title: 'Compareça na Polícia Federal na data agendada em',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '4',
    title:
      'Retire o protocolo com o número do RNM e aguarde a emissão da CRNM (60 a 90 dias)',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
]

export const DataCPF = [
  {
    id: '1',
    title:
      'Acesse o site da Receita Federal para preencher o formulário do CPF',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '2',
    title: 'Separe os documentos necessários para a solicitação do CPF',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '3',
    title:
      'Compareça a uma agência dos Correios, Banco do Brasil ou Caixa Econômica',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '4',
    title: 'Realize o pagamento da taxa de emissão do CPF',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
  {
    id: '5',
    title: 'Receba o comprovante com o número do CPF',
    status: 'Not Started',
    statuscolor: 'primary',
    checked: false,
  },
]

// Componente Reutilizável
const Todolistdata = ({ taskData = [], title = '', onTaskUpdate }) => {
  const [tasks, setTasks] = useState(
    taskData.map((task) => ({ ...task })) // Inicializa com o estado original
  )

  // Sincroniza o estado local sempre que o `taskData` mudar
  useEffect(() => {
    setTasks(taskData)
  }, [taskData])

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const isCompleted = task.status === 'Completed'
        return {
          ...task,
          status: isCompleted ? 'Not Started' : 'Completed',
          statuscolor: isCompleted ? 'primary' : 'success',
          checked: !isCompleted, // Atualiza o estado do checkbox
        }
      }
      return task
    })
    setTasks(updatedTasks)
    onTaskUpdate(updatedTasks) // Notifica o componente pai
  }

  return (
    <Fragment>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="table-responsive">
          <table className="table text-nowrap table-sm">
            <thead>
              <tr>
                <th style={{ width: '5%' }}> </th>
                <th style={{ width: '10%' }}> </th>
                <th style={{ width: '60%' }}>TAREFAS</th>
                <th style={{ width: '25%' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={task.status === 'Completed'}
                      onChange={() => handleTaskToggle(task.id)} // Atualiza a tarefa
                    />
                  </td>
                  <td> : : </td>
                  <td>
                    <span
                      className="fw-medium"
                      style={{
                        fontSize: '0.85rem',
                        whiteSpace: 'normal', // Permite quebra de linha
                        wordWrap: 'break-word', // Quebra palavras longas
                        lineHeight: '1.5', // Melhora a legibilidade
                        display: 'block', // Garante o alinhamento vertical
                      }}
                    >
                      {task.title}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`text-${
                        task.status === 'Completed' ? 'success' : 'primary'
                      }`}
                    >
                      {task.status === 'Completed' ? 'Concluído' : 'Pendente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}

export default Todolistdata
