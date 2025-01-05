import React, { Fragment, useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Dragula from 'react-dragula'

const Data = [
  {
    id: '1',
    title: 'Complete Project Proposal',
    status: 'In Progress',
    statuscolor: 'primary',
    checked: '',
  },
  {
    id: '2',
    title: 'Client Meeting',
    status: 'Not Started',
    statuscolor: 'success',
    checked: 'defaultChecked',
  },
  {
    id: '3',
    title: 'Research Market Trends',
    status: 'Completed',
    statuscolor: 'warning',
    checked: '',
  },
  {
    id: '4',
    title: 'Update Website Content',
    status: 'Not Started',
    statuscolor: 'success',
    checked: '',
  },
]

const Todolistdata = () => {
  const tableBodyRef = useRef(null)

  useEffect(() => {
    if (tableBodyRef.current) {
      const drake = Dragula([tableBodyRef.current], {
        moves: (el, container, handle) => {
          return handle?.classList.contains('todo-handle') ?? false
        },
      })

      return () => {
        drake.destroy()
      }
    }
  }, [])

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
                  Task Title
                </th>
                <th scope="col" style={{ width: '25%' }}>
                  Status
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
                    <span className="fw-medium" style={{ fontSize: '0.85rem' }}>
                      {idx.title}
                    </span>
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
    </>
  )
}

export default Todolistdata
