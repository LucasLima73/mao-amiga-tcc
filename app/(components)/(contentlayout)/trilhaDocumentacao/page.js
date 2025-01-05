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
  () => import('../../../../shared/data/pages/todolistdataTrilhaDoc'),
  { ssr: false }
)
import DatePicker from 'react-datepicker'

const TrilhaDocumentacao = () => {
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
      // date: 'Primeiro Passo',
      time: 'Primeiro Passo',
      title: 'Obter o CRNM (Carteira de Registro Nacional Migratório)',
      description:
        'O CRNM é um documento essencial que garante sua identificação no Brasil, possibilitando acesso a serviços, direitos e oportunidades. Sua obtenção é o primeiro passo para se regularizar no país!',
      badge: 'Progresso',
      image: '../../assets/images/faces/1.jpg',
    },
    {
      // date: 'Monday',
      time: 'Segundo Passo',
      title: 'Obter CPF (Cadastro de Pessoa Física)',
      description:
        'Our journey began on this day when we officially established [Your Company Name]. Cheers to the years of growth and success!',
      badge: 'January 1, 2020',
      image: '../../assets/images/faces/15.jpg',
    },
    {
      // date: 'Yesterday',
      time: 'Terceiro Passo',
      title: 'Obter CTPS Digital (Carteira de Trabalho e Previdência Social)',
      description:
        "We've hit a milestone! Thanks to each and every one of our followers for being part of our community. Here's to the next 10,000!",
      badge: 'June 1, 2022',
      image: '../../assets/images/faces/2.jpg',
    },
    {
      // date: 'Today',
      time: 'Quarto Passo',
      title: 'Autorização de Residência',
      description:
        'Introducing Innovation X, our latest creation that will revolutionize the way you [brief description of the product/service]. Get ready for a new era!',
      badge: 'September 10, 2024',
      image: '../../assets/images/faces/8.jpg',
    },
    {
      // Documentos Complementares
      date: 'Today',
      time: '12:24',
      title: 'Team Building Retreat',
      description:
        'Our team took a break to recharge and bond. We came back stronger and more motivated than ever to bring you top-notch products/services!',
      badge: 'November 5-7, 2021',
      image: '../../assets/images/faces/13.jpg',
    },
    {
      date: 'Today',
      time: '04:11',
      title: 'Community Engagement: Charity Event',
      description:
        'Proud to give back to the community! Our team organized a charity event to support [Charity Name]. Together, we can make a difference.',
      badge: 'December 12, 2022',
      image: '../../assets/images/faces/6.jpg',
    },
    {
      date: 'Today',
      time: '02:52',
      title: 'Industry Conference: Blue Ribbon Conference',
      description:
        'Our team attended Blue Ribbon Conference, gaining valuable insights and networking with industry leaders. Exciting times ahead!',
      badge: 'March 5-8, 2022',
      image: '../../assets/images/faces/11.jpg',
    },
    {
      date: 'Wednesday',
      time: '10:15',
      title: 'Workshop: AI for Beginners',
      description:
        'Learn the basics of artificial intelligence in this beginner-friendly workshop. No prior experience required!',
      badge: 'July 20, 2023',
      image: '../../assets/images/faces/3.jpg',
    },
    {
      date: 'Thursday',
      time: '14:30',
      title: 'Webinar: Future of Technology',
      description:
        'Join us for an exciting webinar exploring the future trends in technology and how they’ll impact our daily lives.',
      badge: 'August 10, 2023',
      image: '../../assets/images/faces/4.jpg',
    },
    {
      date: 'Saturday',
      time: '16:00',
      title: 'Hackathon: Code for Good',
      description:
        'Be part of our hackathon to develop innovative solutions for social challenges. Collaborate, code, and make an impact!',
      badge: 'October 15, 2023',
      image: '../../assets/images/faces/5.jpg',
    },
    {
      date: 'Sunday',
      time: '09:00',
      title: 'Fitness Challenge: 5K Run',
      description:
        'Start your Sunday with an energetic 5K run. Let’s promote health and fitness together!',
      badge: 'March 12, 2023',
      image: '../../assets/images/faces/7.jpg',
    },
    {
      date: 'Tuesday',
      time: '13:45',
      title: 'Announcement: New Office',
      description:
        'We’re expanding! Our new office space is designed to foster creativity and collaboration. Come visit us soon!',
      badge: 'November 25, 2023',
      image: '../../assets/images/faces/12.jpg',
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

export default TrilhaDocumentacao
