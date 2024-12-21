import React, { Fragment, useEffect, useRef } from 'react'
import { Button, Dropdown, ProgressBar } from 'react-bootstrap'
import Dragula from "react-dragula";


const Data=[
{id:'1', title:'Complete Project Proposal', status:'In Progress', statuscolor:'primary' ,duedate:'2024-03-10', badge:'Medium', badgecolor:'secondary', progress:'primary', width:40,  checked:''},
{id:'2', title:'Client Meeting', status:'Not Started', statuscolor:'success' ,duedate:'2024-03-15', badge:'High', badgecolor:'danger', progress:'secondary', width:70, checked:'defaultChecked'},
{id:'3', title:'Research Market Trends', status:'Completed', statuscolor:'warning' ,duedate:'2024-03-12', badge:'Low', badgecolor:'success', progress:'success', width:62, checked:''},
{id:'4', title:'Update Website Content', status:'Not Started', statuscolor:'success' ,duedate:'2024-03-18', badge:'Low', badgecolor:'success', progress:'orange', width:85, checked:''},
{id:'5', title:'Team Meeting', status:'Pending', statuscolor:'secondary' ,duedate:'2024-03-22', badge:'Medium', badgecolor:'secondary', progress:'info', width:55, checked:'defaultChecked'},
{id:'6', title:'Prepare Monthly Report', status:'Not Started', statuscolor:'success' ,duedate:'2024-03-28', badge:'High', badgecolor:'danger', progress:'warning', width:96, checked:'defaultChecked'},
{id:'7', title:'Review Project Milestones', status:'In Progress', statuscolor:'success' ,duedate:'2024-03-14', badge:'Low', badgecolor:'success', progress:'danger', width:78, checked:''},
{id:'8', title:'Customer Feedback Analysis	', status:'Not Started', statuscolor:'success' ,duedate:'2024-03-20', badge:'High', badgecolor:'danger', progress:'teal', width:71, checked:'defaultChecked'},
{id:'9', title:'Training Session', status:'Not Started', statuscolor:'success' ,duedate:'2024-03-24', badge:'Medium', badgecolor:'secondary', progress:'pink', width:60, checked:''},
{id:'10', title:'Finalize Budget', status:'Not Started', statuscolor:'success' ,duedate:'2024-03-24', badge:'Low', badgecolor:'success', progress:'dark', width:80, checked:''}
]   
const Todolistdata = () => {
    ////
const tableBodyRef = useRef(null);

useEffect(() => {
  if (tableBodyRef.current) {
    const drake = Dragula([tableBodyRef.current], {
      moves: (el, container, handle) => {
        // Type assertion to ensure handle is not undefined
        return handle?.classList.contains('todo-handle') ?? false;
      },
    });

    return () => {
      drake.destroy();
    };
  }
}, []);
  return (
    <Fragment>
        <div>
            <div className="table-responsive">
                <table className="table text-nowrap">
                    <thead>
                        <tr>
                            <th>
                                <input className="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..." />
                            </th>
                            <th className="todolist-handle-drag">

                            </th>
                            <th scope="col">Task Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Priority</th>
                            <th scope="col" className="todolist-progress">Progress</th>
                            <th scope="col" className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody id="todo-drag" ref={tableBodyRef}>
                        {Data.map((idx)=>(
                        <tr className="todo-box" key={Math.random()}>
                            <td className="task-checkbox"><input defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                            <td>
                                <Button variant="" className="btn btn-icon btn-sm btn-wave btn-light todo-handle">: :</Button>
                            </td>
                            <td>
                                <span className="fw-medium">{idx.title}</span>
                            </td>
                            <td>
                                <span className={`fw-medium text-${idx.statuscolor}`}><i className="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>{idx.status}</span>
                            </td>
                            <td>
                                {idx.duedate}
                            </td>
                            <td>
                                <span className={`badge bg-${idx.badgecolor}`}>{idx.badge}</span>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <ProgressBar variant={idx.progress} striped animated className="progress progress-xs w-100" now={idx.width} />
                                    <div className="ms-2">{idx.width}%</div>
                                </div>
                            </td>
                            <td className="text-end">
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm btn-wave no-caret" href="#!" data-bs-toggle="dropdown"> 
                                        <i className="ri-more-2-fill text-muted"></i>
                                    </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"> 
                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-5-line me-2"></i>Delete</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
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