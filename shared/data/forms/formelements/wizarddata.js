import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

import DatePicker from "react-datepicker";

const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>

            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy" // Customize date format as needed
                isClearable // Option to clear date
                placeholderText="Select a date" // Placeholder text when no date is selected
            />
        </>
    );
};

const steps = [
    {
        label: 'Personal Information',
        description:
            (
                <div className='wizard-step wizard-tab'>
                    <div className="row justify-content-center wizard-content container">
                        <Col xl={12}>
                            <div className="register-page">
                                <h6 className="mb-3">Registration : </h6>
                                <div className="row gy-3">
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Customer" className="form-label">First Name</Form.Label>
                                        <Form.Control type="text" className="form-control " id="Customer"
                                            placeholder="Enter First Name" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="last-name" className="form-label">Last Name</Form.Label>
                                        <Form.Control type="text" className="form-control " id="last-name"
                                            placeholder="Enter Last Name" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Email" className="form-label">Email Address</Form.Label>
                                        <Form.Control type="email" className="form-control " id="Email"
                                            placeholder="Enter Email Adress" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Phone Number</Form.Label>
                                        <InputGroup>
                                            <span className="input-group-text"
                                                id="inputGroup-sizing-default">+99</span>
                                            <Form.Control type="text" className="form-control "
                                                placeholder="Enter Phone Number"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default" />
                                        </InputGroup>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Date of Birth</Form.Label>
                                        <InputGroup>
                                            <div className="input-group-text text-muted">
                                                <i className="ri-calendar-line"></i>
                                            </div>
                                            <MyDatePicker />
                                        </InputGroup>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Select Gender
                                            :</Form.Label>
                                        <select className="form-control " data-trigger>
                                            <option value="Choice 2">Male</option>
                                            <option value="Choice 1">Female</option>
                                        </select>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Country</Form.Label>
                                        <select className="form-control " data-trigger>
                                            <option value="Choice 2">United States</option>
                                            <option value="Choice 1">China</option>
                                            <option value="Choice 1">India</option>
                                            <option value="Choice 1">Brazil</option>
                                            <option value="Choice 1">Russia</option>
                                        </select>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Select City
                                            :</Form.Label>
                                        <select className="form-control" data-trigger>
                                            <option value="choose">India</option>
                                            <option value="Choice 1">USA</option>
                                            <option value="Choice 2">Australia</option>
                                        </select>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                        <Col xl={7}>
                            <div className="login-page d-none">
                                <h6 className="mb-3">Sign In :</h6>
                                <div className="row justify-content-center gy-4">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="email-adress" className="form-label">Email
                                            Address</Form.Label>
                                        <Form.Control type="text" className="form-control " id="email-adress"
                                            placeholder="Enter Email Adress" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="password" className="form-label">Enter
                                            Password</Form.Label>
                                        <Form.Control type="text" className="form-control " id="password"
                                            placeholder="Enter Password" />
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-grid">
                                            <a href="#!"
                                                className="btn btn-primary px-4">Login</a>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            )
    },
    {
        label: 'Select Service',
        description:
            (
                <div className='wizard-step wizard-tab'>
                    <div className="row gy-4 wizard-content container">
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked">Cardio Check</label>
                                        <span className="fs-12 text-muted">$249</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-primary rounded-circle" type="checkbox" id="flexCheckChecked" defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-secondary-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked1">Ortho Consult</label>
                                        <span className="fs-12 text-muted">$120</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-secondary rounded-circle" type="checkbox" id="flexCheckChecked1" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-success-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked2">Gyn Exam</label>
                                        <span className="fs-12 text-muted">$100</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-success rounded-circle" type="checkbox" id="flexCheckChecked2" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-orange-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked3">Pediatric Vaccines</label>
                                        <span className="fs-12 text-muted">$50</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-orange rounded-circle" type="checkbox" id="flexCheckChecked3" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-info-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked4">Dental Checkup</label>
                                        <span className="fs-12 text-muted">$80</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-info rounded-circle" type="checkbox" id="flexCheckChecked4" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-warning-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked5">X-ray Imaging</label>
                                        <span className="fs-12 text-muted">$80</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-warning rounded-circle" type="checkbox" id="flexCheckChecked5" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-danger-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked6">Blood Tests</label>
                                        <span className="fs-12 text-muted">Varies</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-danger rounded-circle" type="checkbox" id="flexCheckChecked6" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={3} xl={4}>
                            <div className="col">
                                <div className="form-check d-flex align-items-center gap-3 p-2 border rounded-pill">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded bg-dark-transparent">
                                            <i className="bi bi-hospital fs-5"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <label className="form-check-label d-block fw-medium fs-15" htmlFor="flexCheckChecked7">Eye Exam</label>
                                        <span className="fs-12 text-muted">$90</span>
                                    </div>
                                    <div>
                                        <input className="form-check-input form-checked-dark rounded-circle" type="checkbox" id="flexCheckChecked7" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            )
    },
    {
        label: 'Appointment Details',
        description:
            (
                <div className='wizard-step wizard-tab'>
                    <div className="row justify-content-center summary-view wizard-content container">
                        <Col xl={7}>
                            <div className="border border-bottom-0 rounded-1 mb-3 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table  text-nowrap">
                                            <thead>
                                                <tr className="bg-light">
                                                    <th scope="col">Appointment Details</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Category</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start  text-muted">
                                                        Neuro Clinic
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Service</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Heart Care
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Service
                                                            providers</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Jiohn Alzian
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Branch</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        India
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Appointment
                                                            Date</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        12-Sep-2024
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span
                                                            className="d-block fw-semibold">Appointment
                                                            Time</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        10:00 AM
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={7}>
                            <div className="border border-bottom-0 rounded-1 mb-3 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr className="bg-light">
                                                    <th scope="col">Persional Details</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">First
                                                            Name</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start  text-muted">
                                                        Jogh barle
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Last Name
                                                        </span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Jogh barle
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Email
                                                            Address</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        Jogh12@gamil.com
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Phone
                                                            Number</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        98765433221
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Country
                                                        </span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start text-muted">
                                                        India
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col xl={7}>
                            <div className="border border-bottom-0 rounded-1 mb-3 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr className="bg-light">
                                                    <th scope="col">Payment Details</th>
                                                    <th scope="col"></th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <span className="d-block fw-semibold">Mode of
                                                            Payment</span>
                                                    </td>
                                                    <td className="w-10">:</td>
                                                    <td className="text-start  text-muted">
                                                        Paypal
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col xl={7}>
                            <div className="p-3 rounded-2 bg-light">
                                <label className="mb-1 fw-semibold">Source Information:</label>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="d-flex gap-2 form-check-sm">
                                        <Form.Check className="" type="radio" name="Radio"
                                            id="Radio-sm" />
                                        <label className="form-check-label" htmlFor="Radio-sm"> Google
                                        </label>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Form.Check className="" type="radio" name="Radio"
                                            id="Radio-md" />
                                        <label className="form-check-label" htmlFor="Radio-md">
                                            Advertisement </label>
                                    </div>
                                    <div className="d-flex gap-2 form-check-sm ">
                                        <Form.Check className="" type="radio" name="Radio"
                                            id="Radio-s" />
                                        <label className="form-check-label" htmlFor="Radio-s"> Other</label>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </div>
                </div>

            )
    },
    {
        label: 'Payment',
        description:
            (
                <div className='wizard-step wizard-tab'>
                    <Row className='wizard-content container'>
                        <Col xl={12}>
                            <div>
                                <div className="fs-15 fw-medium d-sm-flex d-block align-items-center justify-content-between mb-3">
                                    <div>Payment Details :</div>
                                </div>
                                <Row>
                                    <Col xl={12}>
                                        <div className="mb-3">
                                            <label className="form-label">Delivery Address</label>
                                            <div className="input-group">
                                                <Form.Control type="text" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="1234 Elm Street,Anytown, USA,12345" />
                                                <button type="button" className="btn btn-info-light input-group-text" id="payment-address">Change</button>
                                            </div>
                                        </div>
                                        <div className="card custom-card border shadow-none mb-3">
                                            <Card.Header>
                                                <Card.Title>
                                                    Payment Methods
                                                </Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                                    <label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio1">C.O.D(Cash on delivery)</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                    <label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio2">UPI</label>
                                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                                    <label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</label>
                                                </div>
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="payment-card-number" className="form-label">Card Number</Form.Label>
                                                        <Form.Control type="text" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
                                                        <Form.Control type="text" id="payment-card-name" placeholder="Name On Card" defaultValue="Jack Miller" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
                                                        <Form.Control type="text" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
                                                        <Form.Control type="text" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <Form.Label htmlFor="payment-security" className="form-label">O.T.P</Form.Label>
                                                        <Form.Control type="text" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                        <label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <div className="form-check">
                                                            <input className="form-check-input form-checked-success" type="checkbox" id="payment-card-save" defaultChecked />
                                                            <label className="form-check-label" htmlFor="payment-card-save">
                                                                Save this card
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                            <div className="card-footer">
                                                <div className="row gy-3">
                                                    <p className="fs-15 fw-medium mb-1">Saved Cards :</p>
                                                    <Col xl={6}>
                                                        <div className="form-check payment-card-container mb-0 lh-1">
                                                            <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked />
                                                            <div className="form-check-label">
                                                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                    <div className="me-2 lh-1">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../assets/images/ecommerce/png/26.png" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="saved-card-details pe-5">
                                                                        <p className="mb-0 fw-medium">XXXX - XXXX - XXXX - 7646</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <div className="form-check payment-card-container mb-0 lh-1">
                                                            <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input" />
                                                            <div className="form-check-label">
                                                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                    <div className="me-2 lh-1">
                                                                        <span className="avatar avatar-md">
                                                                            <img src="../../assets/images/ecommerce/png/27.png" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="saved-card-details pe-5">
                                                                        <p className="mb-0 fw-medium">XXXX - XXXX - XXXX - 9556</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            )
    },
    {
        label: 'Confirmation',
        description:
            (

                <Row className='wizard-content container'>
                    <Col xl={12}>
                        <div className="checkout-payment-success">
                            <div className="mb-4">
                                <h5 className="text-success fw-medium">Appointment Booked...</h5>
                            </div>
                            <div className="mb-4">
                                <img src="../../assets/images/ecommerce/png/24.png" alt="" className="img-fluid" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-1 fs-14">You will get the appointment details with appointment id <b>SPK#1FR</b> to <a className="link-success" href="#!"><u>Jogh12@gamil.com</u></a></p>
                                <p className="text-muted">Thank you for booking an appointment .</p>
                            </div>
                            <a href="#!" className="btn btn-success">Book Another Appointment</a>
                        </div>
                    </Col>
                </Row>
            )
    },

];
export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep} className='wizard-nav'>
                {steps.map((step, index) => (
                    <Step key={step.label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {step.label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            {steps[activeStep].description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                className='btn btn-primary'
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button className='btn btn-primary' onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}