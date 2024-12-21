"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Pagination, ProgressBar, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Todolistdata = dynamic(() => import("../../../../shared/data/pages/todolistdata"), { ssr: false });
import DatePicker from 'react-datepicker';
 
const TrilhaSaude = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Assigned Selectdata
    const Assigneddata=[
        {value:'Angelina May', label:'Angelina May'},
        {value:'Kiara advain', label:'Kiara advain'},
        {value:'Hercules Jhon', label:'Hercules Jhon'},
        {value:'Mayor Kim', label:'Mayor Kim'},
    ]
    //Status data
    const Statusdata=[
        {value:'Select', label:'Select'},
        {value:'In Progress', label:'In Progress'},
        {value:'Not Started', label:'Not Started'},
        {value:'Completed', label:'Completed'},
        {value:'Pending', label:'Pending'},
    ]
 //Priority data
    const Prioritydata=[
        {value:'Select', label:'Select'},
        {value:'Critical', label:'Critical'},
        {value:'High', label:'High'},
        {value:'Medium', label:'Medium'},
        {value:'Low', label:'Low'},
    ]
    //Datepicker
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());


    return (
        <Fragment>
            <Row>
                    <Col xl={12}>
                        <h6>TIMELINE 3</h6>
                        <ul className="notification">
                            <li>
                                <div className="notification-time">
                                   <span className="date">Friday</span>
                                   <span className="time">02:31</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/1.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Event: Launch Party</h5>
                                            <p className="mb-0 mb-0 text-muted">Join us for a night of celebration as we unveil our latest product/service. There will be music, food, and exciting surprises!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                April 15, 2024
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">Monday</span>
                                   <span className="time">08:47</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Milestone: Company Establishment</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Our journey began on this day when we officially established [Your Company Name]. Cheers to the years of growth and success!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                January 1, 2020
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">Yesterday</span>
                                   <span className="time">18:43</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/2.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Achievement: 10,000 Followers</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">We've hit a milestone! Thanks to each and every one of our followers for being part of our community. Here's to the next 10,000!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                June 1, 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                            <li>
                               <div className="notification-time">
                                  <span className="date">Today</span>
                                  <span className="time">03:18</span>
                               </div>
                               <div className="notification-icon">
                                  <Link scroll={false} href="#!"></Link>
                               </div>
                               <div className="notification-body">
                                   <div className="d-flex align-items-start gap-3 flex-wrap">
                                       <div>
                                           <span className="avatar avatar-lg online">
                                               <img src="../../assets/images/faces/8.jpg" alt="" />
                                           </span>
                                       </div>
                                       <div className="flex-fill w-50">
                                           <h5 className="mb-1 fs-15 fw-medium text-dark">Product Launch: Innovation X</h5>
                                           <p className="mb-0 fs-13 mb-0 text-muted">Introducing Innovation X, our latest creation that will revolutionize the way you [brief description of the product/service]. Get ready for a new era!</p>
                                       </div>
                                       <div>
                                            <span className="badge bg-light text-default">
                                                September 10, 2024
                                            </span>
                                       </div>
                                   </div>
                               </div>
                            </li>
                            <li>
                                <div className="notification-time">
                                   <span className="date">Today</span>
                                   <span className="time">12:24</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/13.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Team Building Retreat</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Our team took a break to recharge and bond. We came back stronger and more motivated than ever to bring you top-notch products/services!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                November 5-7, 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">Today</span>
                                   <span className="time">04:11</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/6.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Community Engagement: Charity Event</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Proud to give back to the community! Our team organized a charity event to support [Charity Name]. Together, we can make a difference.</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                December 12, 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">today</span>
                                   <span className="time">02:52</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/11.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Industry Conference: Blue Ribbon Conference</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Our team attended Blue Ribbon Conference, gaining valuable insights and networking with industry leaders. Exciting times ahead!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                March 5-8, 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                         </ul>
                         <div className="text-center mb-4">
                            <button className="btn btn-info-light btn-loader mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </button>
                         </div>
                    </Col>
                </Row>

                <Row>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Body className="card-body p-0">
                                    <div className="p-3 d-grid border-bottom border-block-end-dashed">
                                        <Button variant="" onClick={handleShow} className="btn btn-primary d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#addtask">
                                            <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                                        </Button>
                                        <Modal centered show={show} onHide={handleClose} className="fade" id="addtask" tabIndex={-1}  >
                                            <Modal.Header closeButton className="">
                                                <h6 className="modal-title" id="mail-ComposeLabel">Create Task</h6>
                                            </Modal.Header>
                                            <Modal.Body className="px-4">
                                                <div className="row gy-2">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="task-name" placeholder="Task Name"/>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label>Assigned To</Form.Label>
                                                        <Select isMulti name="colors" options={Assigneddata} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Assigneddata[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Assigned Date</Form.Label>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <DatePicker  className="form-control" id="exampleInput" aria-describedby="inputHelp" placeholderText="Enter text" showIcon selected={startDate1} onChange={(date) => setStartDate1(date )} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Target Date</Form.Label>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <DatePicker  className="form-control" id="exampleInput" aria-describedby="inputHelp" placeholderText="Enter text" showIcon selected={startDate2} onChange={(date) => setStartDate2(date )} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Status</Form.Label>
                                                        <Select name="colors" options={Statusdata} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Priority</Form.Label>
                                                        <Select name="colors" options={Prioritydata} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2"
                                                        />
                                                    </Col>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer className="">
                                                <Button variant="" type="button" className="btn btn-light" onClick={handleClose}
                                                    data-bs-dismiss="modal">Cancel</Button>
                                                <Button variant="" type="button" className="btn btn-primary">Create</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                        <ul className="list-unstyled task-main-nav mb-0">
                                            <li className="px-0 pt-0">
                                                <span className="fs-11 text-muted op-7 fw-medium">TASKS</span>
                                            </li>
                                            <li className="active">
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-task-line align-middle fs-14"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            All Tasks
                                                        </span>
                                                        <span className="badge bg-success-transparent rounded-pill">167</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-star-line align-middle fs-14"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Starred
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-delete-bin-5-line align-middle fs-14"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Trash
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="px-0 pt-2">
                                                <span className="fs-11 text-muted op-7 fw-medium">CATEGORIES</span>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-price-tag-line align-middle fs-14 fw-medium text-primary"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Personal
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-price-tag-line align-middle fs-14 fw-medium text-secondary"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Work
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-price-tag-line align-middle fs-14 fw-medium text-warning"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Health & Fitness
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-price-tag-line align-middle fs-14 fw-medium text-success"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Daily Goals
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li> 
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <span className="me-2 lh-1">
                                                            <i className="ri-price-tag-line align-middle fs-14 fw-medium text-danger"></i>
                                                        </span>
                                                        <span className="flex-fill text-nowrap">
                                                            Financial Management
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-3 text-center">
                                        <img src="../../assets/images/media/media-66.png" alt="" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                           <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <div> 
                                        <input className="form-control" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
                                    </div> 
                                    <div className="d-flex flex-wrap gap-2"> 
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-light btn-wave no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
                                            </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu"> 
                                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li> 
                                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li> 
                                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown> 
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0 position-relative" id="todo-content">
                                  <Todolistdata/>
                                </Card.Body>
                                <Card.Footer className="border-top-0"> 
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2"> 
                                        <div> Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                        <div> 
                                            <nav aria-label="Page navigation" className="pagination-style-4"> 
                                                <Pagination as="ul" className="pagination mb-0"> 
                                                    <Pagination.Item disabled className="" href="#!"> Prev </Pagination.Item>
                                                    <Pagination.Item active href="#!">1</Pagination.Item> 
                                                    <Pagination.Item href="#!">2</Pagination.Item> 
                                                    <Pagination.Item className="pagination-next" href="#!"> next </Pagination.Item> 
                                                </Pagination> 
                                            </nav> 
                                        </div> 
                                    </div> 
                                </Card.Footer>
                           </Card>
                        </Col>
                    </Row>
        </Fragment>
    );
};
 
export default TrilhaSaude;
 