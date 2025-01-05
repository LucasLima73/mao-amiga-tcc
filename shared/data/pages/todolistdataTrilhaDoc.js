import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Dragula from 'react-dragula';
import moment from 'moment';

const Data = [
  {
    id: '1',
    title: 'Acesse o site da Polícia Federal (link) para agendar a solicitação',
    status: 'In Progress',
    statuscolor: 'primary',
    checked: '',
  },
  {
    id: '2',
    title: 'Reúna os documentos necessários',
    status: 'Not Started',
    statuscolor: 'success',
    checked: 'defaultChecked',
  },
  {
    id: '3',
    title: 'Compareça na Polícia Federal na data agendada em ',
    status: 'Completed',
    statuscolor: 'warning',
    checked: '',
  },
  {
    id: '4',
    title: 'Retire o protocolo com o número do RNM e aguarde a emissão da CRNM (60 a 90 dias)',
    status: 'Not Started',
    statuscolor: 'success',
    checked: '',
  },
];

const Todolistdata = () => {
  const tableBodyRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    if (appointmentDate) {
      const now = moment().startOf('day');
      const appointment = moment(appointmentDate).startOf('day');
      const difference = appointment.diff(now, 'days');
      setDaysLeft(difference);
    }
  }, [appointmentDate]);

  useEffect(() => {
    if (tableBodyRef.current) {
      const drake = Dragula([tableBodyRef.current], {
        moves: (el, container, handle) => {
          return handle?.classList.contains('todo-handle') ?? false;
        },
      });

      return () => {
        drake.destroy();
      };
    }
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="table-responsive">
          <table className="table text-nowrap table-sm">
            <thead>
              <tr>
                <th style={{ width: '5%' }}>
                  <input
                    className="form-check-input check-all"
                    type="checkbox"
                    id="all-tasks"
                    value=""
                    aria-label="..."
                  />
                </th>
                <th
                  style={{ width: '10%' }}
                  className="todolist-handle-drag"
                ></th>
                <th scope="col" style={{ width: '60%' }}>
                  TAREFAS
                </th>
                <th scope="col" style={{ width: '25%' }}>
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody id="todo-drag" ref={tableBodyRef}>
              {Data.map((idx) => (
                <tr className="todo-box" key={idx.id}>
                  <td className="task-checkbox">
                    <input
                      defaultChecked={idx.checked === 'defaultChecked'}
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                  </td>
                  <td>
                    <Button
                      variant=""
                      className="btn btn-icon btn-sm btn-light todo-handle"
                      style={{ padding: '2px 5px' }}
                    >
                      : :
                    </Button>
                  </td>
                  <td>
                    {idx.id === '3' ? (
                      <div>
                        <span className="fw-medium" style={{ fontSize: '0.85rem' }}>
                          {idx.title}
                        </span>
                        <input
                          type="date"
                          className="form-control mt-2"
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                        />
                        {appointmentDate && daysLeft !== null && (
                          <div className="mt-2">
                            {daysLeft > 0 ? (
                              <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                                Faltam {daysLeft} dias.
                              </span>
                            ) : daysLeft === 0 ? (
                              <span className="text-success" style={{ fontSize: '0.85rem' }}>
                                Hoje é o dia agendado!
                              </span>
                            ) : (
                              <span className="text-danger" style={{ fontSize: '0.85rem' }}>
                                A data já passou.
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    ) : idx.id === '4' ? (
                      <div>
                        <span className="fw-medium" style={{ fontSize: '0.85rem', whiteSpace: 'pre-line' }}>
                          {idx.title}
                        </span>
                      </div>
                    ) : (
                      <span
                        className="fw-medium"
                        style={{ fontSize: '0.85rem', cursor: idx.id === '2' ? 'pointer' : 'default' }}
                        onClick={idx.id === '2' ? handleShowModal : undefined}
                      >
                        {idx.title}
                      </span>
                    )}
                  </td>
                  <td>
                    <span
                      className={`fw-medium text-${idx.statuscolor}`}
                      style={{ fontSize: '0.85rem' }}
                    >
                      {idx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Documents List */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Documentos Necessários</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Passaporte válido ou documento de viagem internacional.</li>
            <li>Certidão de antecedentes criminais do país de origem (com tradução juramentada, se aplicável).</li>
            <li>Declaração de meios de subsistência, como:
              <ul>
                <li>Contrato de trabalho ou prestação de serviços.</li>
                <li>Comprovante de aposentadoria.</li>
                <li>Declaração de imposto de renda.</li>
                <li>Registro como Microempreendedor Individual (MEI).</li>
                <li>Autodeclaração de renda (quando permitido).</li>
              </ul>
            </li>
            <li>Certidão de nascimento ou casamento (com tradução juramentada, se não estiver em português).</li>
            <li>Fotos 3x4 recentes, coloridas e com fundo branco (duas unidades).</li>
            <li>Comprovante de endereço, como:
              <ul>
                <li>Conta de água, luz, telefone ou contrato de aluguel.</li>
                <li>Declaração de residência com firma reconhecida, caso o comprovante esteja em nome de terceiros.</li>
              </ul>
            </li>
            <li>Formulário de requerimento preenchido no SISMIGRA.</li>
            <li>Comprovante de pagamento das taxas migratórias (GRU) ou declaração de hipossuficiência econômica para isenção.</li>
            <li>Certidão de ausência de antecedentes criminais no Brasil.</li>
            <li>Documentos específicos dependendo do caso, como:
              <ul>
                <li>Comprovante de matrícula (para solicitação de residência por estudos).</li>
                <li>Carta da empresa contratante e contrato de trabalho (para residência por trabalho).</li>
                <li>Certidões que comprovem parentesco (para reunião familiar).</li>
                <li>Protocolo de solicitação de refúgio ou DPRNM (em casos de refúgio).</li>
              </ul>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Todolistdata;
