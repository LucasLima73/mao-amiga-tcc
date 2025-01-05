'use client'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Carousel, Col, ListGroup, Row } from 'react-bootstrap'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomePage = () => {
  const breakpoints1 = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }

  return (
    <Fragment>
      <Row>
        <Col xl={18}>
          <div className="card custom-card card-bg-primary border-0 shadow-none faq-banner-card">
            {/* <div
            className="card custom-card border-0 shadow-none faq-banner-card"
            style={{ backgroundColor: 'rgb(243, 238, 224)' }} */}

            <div className="card-body p-4">
              <Row>
                <Col
                  xxl={7}
                  xl={7}
                  lg={7}
                  md={7}
                  sm={7}
                  className="col-12 my-auto"
                >
                  {/* <div className="faq-text lh-1 mb-3 fs-3 fw-bold text-primary">
                    MÃO AMIGA
                  </div>
                  <span className="d-block op-8 fs-5 text-secondary">
                    Conectando refugiados a recursos, apoio e esperança para
                    recomeçar no Brasil.
                      Uma solução prática e acessível para quem busca recomeçar.
                  </span> */}

                  {/* <div className="faq-text lh-1 mb-3 fs-3 fw-bold text-primary">
                    MÃO-AMIGA
                  </div> */}
                  <div className="faq-text lh-1 mb-3 fw-bold text-yellow-400 text-4xl">
                    MÃO-AMIGA
                  </div>
                  <span className="d-block op-8 fs-5 text-white">
                    <em>
                      Transformando desafios em oportunidades para refugiados
                      recomeçarem suas vidas no Brasil.
                      <br />
                      <br />
                      Apoio prático e acessível para integração com dignidade.
                    </em>
                  </span>
                  {/* <em className="d-block mt-2 fs-6 text-white">
                    Apoio prático e acessível para integração com dignidade.
                  </em> */}
                </Col>
                <Col
                  xxl={5}
                  xl={5}
                  lg={5}
                  md={5}
                  sm={5}
                  className="d-sm-block d-none my-auto"
                >
                  <img
                    src="../../assets/images/media/bg-home-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col xl={12}>
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
            <div className="col">
              <Link href="/trilhaSaude">
                <Card className="custom-card">
                  <img
                    src="../../assets/images/media/media-44.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <Card.Body>
                    <h6 className="card-title fw-medium">Saúde</h6>
                    {/* <p className="card-text">
                      Explore nossa trilha detalhada com informações para
                      acessar recursos sobre saúde e conseguir atender às suas
                      necessidades.
                    </p> */}
                    <p className="card-text">
                      Explore nossa trilha de saúde para acessar informações
                      completas sobre
                      <strong>
                        {' '}
                        saúde pública, serviços disponíveis, benefícios do SUS,
                        cuidados preventivos, estabelecimentos próximos a você
                      </strong>{' '}
                      e demais orientações para facilitar o acesso a
                      atendimentos essenciais.
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="col">
              <Link href="/trilhaDocumentacao">
                <Card className="custom-card">
                  <img
                    src="../../assets/images/media/media-43.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <Card.Body>
                    <h6 className="card-title fw-medium">Documentação</h6>
                    <p className="card-text">
                      Explore nossa trilha de informações para acessar conteúdos
                      completos sobre
                      <strong>
                        emissão de CPF, acesso a documentos essenciais, direitos
                        básicos
                      </strong>{' '}
                      e<strong>orientações práticas</strong>. Descubra como
                      utilizar recursos, entender processos burocráticos e
                      facilitar sua integração na sociedade.
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="col">
              <Card className="custom-card">
                <img
                  src="../../assets/images/media/media-45.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <Card.Body>
                  <h6 className="card-title fw-medium">Direitos Humanos</h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="custom-card">
                <img
                  src="../../assets/images/media/media-46.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <Card.Body>
                  <h6 className="card-title fw-medium">Apoio Socieconômico</h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>

        <Col xl={7}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="p-0">
              <Carousel
                fade
                indicators={false}
                controls={false}
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <Link
                  scroll={false}
                  href="/pages/blog/blogdetails/"
                  className="stretched-link"
                >
                  <div className="carousel-inner rounded-0">
                    <Carousel.Item className="active">
                      <img
                        src="../../../assets/images/media/blog/2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </Carousel.Item>
                    <Carousel.Item className="">
                      <img
                        src="../../../assets/images/media/blog/3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </Carousel.Item>
                    <Carousel.Item className="">
                      <img
                        src="../../../assets/images/media/blog/1.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </Carousel.Item>
                  </div>
                </Link>
              </Carousel>
              <div className="p-4">
                <h5 className="fw-semibold mb-3">
                  <Link scroll={false} href="/pages/blog/blogdetails/">
                    The Basics of 3D Imaging
                  </Link>
                </h5>
                <p className="mb-4">
                  To kick things off, let's delve into the basics. Unlike
                  traditional 2D images, 3D images add an extra dimension –
                  depth. This depth is achieved by representing objects in three
                  axes: width, height, and depth. It's this added dimension that
                  tricks our brains into perceiving depth and realism.{' '}
                  <Link
                    scroll={false}
                    href="#!"
                    className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline"
                  >
                    Read More
                  </Link>
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-xs avatar-rounded me-2">
                      <img src="../../../assets/images/faces/11.jpg" alt="" />
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">Alister Chuk</p>
                    </div>
                  </div>
                  <p className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={5}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card shadow-none">
                <div className="row g-0">
                  <div className="col-sm-8">
                    <Card.Body>
                      <h6 className="fw-semibold">
                        <Link scroll={false} href="#!">
                          Stereoscopic 3D: How It Works
                        </Link>
                      </h6>
                      <span className="d-block mb-2">
                        Ever wondered how those jaw-dropping 3D movies create an
                        illusion of depth that makes you feel like you're part
                        of the action?{' '}
                        <Link
                          scroll={false}
                          href="#!"
                          className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline"
                        >
                          Read More
                        </Link>
                      </span>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-xs avatar-rounded me-2">
                            <img
                              src="../../../assets/images/faces/10.jpg"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="mb-0 fw-medium">Justin Kim</p>
                          </div>
                        </div>
                        <div className="text-muted fs-12 mb-0">
                          20,Aug 2024 - 16:32
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="../../../assets/images/media/blog/4.jpg"
                      className="img-fluid rounded-end h-100 w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </Card>
              <Card className="custom-card shadow-none">
                <div className="row g-0">
                  <div className="col-sm-8">
                    <Card.Body>
                      <h6 className="fw-semibold">
                        <Link scroll={false} href="#!">
                          Anaglyph 3D: Old School, Still Cool
                        </Link>
                      </h6>
                      <span className="d-block mb-4">
                        Remember those red and blue glasses from the past?
                        relies on this classic technique.{' '}
                        <Link
                          scroll={false}
                          href="#!"
                          className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline"
                        >
                          Read More
                        </Link>
                      </span>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-xs avatar-rounded mb-1 me-2">
                            <img
                              src="../../../assets/images/faces/5.jpg"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="mb-0 fw-medium">Monika Karen</p>
                          </div>
                        </div>
                        <div className="text-muted fs-12 mb-0">
                          25,Aug 2024 - 11:45
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="../../../assets/images/media/blog/5.jpg"
                      className="img-fluid rounded-end h-100 w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </Card>
              <Card className="custom-card shadow-none">
                <div className="row g-0">
                  <div className="col-sm-8">
                    <Card.Body>
                      <h6 className="fw-semibold">
                        <Link scroll={false} href="#!">
                          Anaglyph 3D: Old School, Still Cool
                        </Link>
                      </h6>
                      <span className="d-block mb-4">
                        Remember those red and blue glasses from the past?
                        relies on this classic technique.{' '}
                        <Link
                          scroll={false}
                          href="#!"
                          className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline"
                        >
                          Read More
                        </Link>
                      </span>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-xs avatar-rounded mb-1 me-2">
                            <img
                              src="../../../assets/images/faces/5.jpg"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="mb-0 fw-medium">Monika Karen</p>
                          </div>
                        </div>
                        <div className="text-muted fs-12 mb-0">
                          25,Aug 2024 - 11:45
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                  <div className="col-sm-4">
                    <img
                      src="../../../assets/images/media/blog/5.jpg"
                      className="img-fluid rounded-end h-100 w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>

        <Row>
          <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
            <Card className="custom-card">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <div>
                      <span className="d-block mb-2">Refugiados no Brasil</span>
                      <h5 className="mb-4 fs-4">32,981</h5>
                    </div>
                    <span className="text-success me-2 fw-medium d-inline-block">
                      <i className="ti ti-trending-up fs-5 align-middle me-1 d-inline-block"></i>
                      0.45%
                    </span>
                    <span className="text-muted">Since last month</span>
                  </div>
                  <div>
                    <div className="main-card-icon primary">
                      <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                        <div className="avatar avatar-sm svg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
            <Card className="custom-card main-card">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <div>
                      <span className="d-block mb-2">Pessoas impactadas</span>
                      <h5 className="mb-4 fs-4">$645</h5>
                    </div>
                    <span className="text-success me-2 fw-medium d-inline-block">
                      <i className="ti ti-trending-up fs-5 align-middle me-1 d-inline-block"></i>
                      0.18%
                    </span>
                    <span className="text-muted">than last month</span>
                  </div>
                  <div>
                    <div className="main-card-icon secondary">
                      <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                        <div className="avatar avatar-sm svg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
            <Card className="custom-card main-card">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <div>
                      <span className="d-block mb-2">Acessos as trilhas</span>
                      <h5 className="mb-4 fs-4">$14,32,145</h5>
                    </div>
                    <span className="text-success me-2 fw-medium d-inline-block">
                      <i className="ti ti-trending-up fs-5 align-middle me-1 d-inline-block"></i>
                      0.29%
                    </span>
                    <span className="text-muted">Since last month</span>
                  </div>
                  <div>
                    <div className="main-card-icon success">
                      <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                        <div className="avatar avatar-sm svg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
            <Card className="custom-card main-card">
              <Card.Body className="p-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <div>
                      <span className="d-block mb-2">Vizualizações</span>
                      <h5 className="mb-4 fs-4">4,678</h5>
                    </div>
                    <span className="text-danger me-2 fw-medium d-inline-block">
                      <i className="ti ti-trending-down fs-5 align-middle me-1 d-inline-block"></i>
                      0.05%
                    </span>
                    <span className="text-muted">Since last month</span>
                  </div>
                  <div>
                    <div className="main-card-icon orange">
                      <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                        <div className="avatar avatar-sm svg-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                          >
                            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card.Body className="p-4">
          <Swiper
            className="swiper testimonialSwiper swiper-initialized swiper-horizontal swiper-backface-hidden"
            breakpoints={breakpoints1}
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <Card className="mb-0 border-0 shadow-none border-0 shadow-none overflow-hidden">
                <Card.Body className="p-4">
                  <p>
                    "Efficiently innovate customized growth strategies whereas
                    error free para digms. Monotonectally enhance stand-alone
                    data with prospective innovation."
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/faces/1.jpg"
                        alt="img"
                        className="avatar avatar-md avatar-rounded"
                      />
                      <div className="ms-2 my-auto mb-0">
                        <h6 className="mb-0 lh-1">Riley Anderson</h6>
                        <p className="fs-14 mb-0">Client</p>
                      </div>
                    </div>
                    <div className="mb-0 text-warning fs-12 my-auto">
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-0 border-0 shadow-none overflow-hidden">
                <div className="card-body p-4">
                  <p>
                    "The fact that we were able choose them as experts for our
                    valuable product launch and support inspires us with
                    pleasure they lead us at every step of the way."
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/faces/6.jpg"
                        alt="img"
                        className="avatar avatar-md avatar-rounded"
                      />
                      <div className="ms-2 my-auto mb-0">
                        <h6 className="mb-0 lh-1">Lily Brown</h6>
                        <p className="fs-14 text-muted mb-0">Designer</p>
                      </div>
                    </div>
                    <div className="mb-0 text-warning fs-12 my-auto">
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-0 border-0 shadow-none overflow-hidden">
                <div className="card-body p-4">
                  <p>
                    "Efficiently innovate customized growth strategies whereas
                    error free para digms. Monotonectally enhance stand-alone
                    data with prospective innovation."
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/faces/3.jpg"
                        alt="img"
                        className="avatar avatar-md avatar-rounded"
                      />
                      <div className="ms-2 my-auto mb-0">
                        <h6 className="mb-0 lh-1">Zachary Carter</h6>
                        <p className="fs-14 text-muted mb-0">Client</p>
                      </div>
                    </div>
                    <div className="mb-0 text-warning fs-12 my-auto">
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-0 border-0 shadow-none overflow-hidden">
                <div className="card-body p-4">
                  <p>
                    "The fact that we were able choose them as experts for our
                    valuable product launch and support inspires us with
                    pleasure they lead us at every step of the way."
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/faces/10.jpg"
                        alt="img"
                        className="avatar avatar-md avatar-rounded"
                      />
                      <div className="ms-2 my-auto mb-0">
                        <h6 className="mb-0 lh-1">Ava Taylor</h6>
                        <p className="fs-14 text-muted mb-0">Client</p>
                      </div>
                    </div>
                    <div className="mb-0 text-warning fs-12 my-auto">
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-0 border-0 shadow-none overflow-hidden">
                <div className="card-body p-4">
                  <p>
                    "Efficiently innovate customized growth strategies whereas
                    error free para digms. Monotonectally enhance stand-alone
                    data with prospective innovation."
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/faces/5.jpg"
                        alt="img"
                        className="avatar avatar-md avatar-rounded"
                      />
                      <div className="ms-2 my-auto mb-0">
                        <h6 className="mb-0 lh-1">Amelia Turner</h6>
                        <p className="fs-14 text-muted mb-0">Designer</p>
                      </div>
                    </div>
                    <div className="mb-0 text-warning fs-12 my-auto">
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-0 border-0 shadow-none overflow-hidden">
                <div className="card-body p-4">
                  <p>
                    "The fact that we were able choose them as experts for our
                    valuable product launch and support inspires us with
                    pleasure they lead us at every step of the way."
                  </p>
                  <div className="d-flex justify-content-between flex-wrap gap-3">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/faces/6.jpg"
                        alt="img"
                        className="avatar avatar-md avatar-rounded"
                      />
                      <div className="ms-2 my-auto mb-0">
                        <h6 className="mb-0 lh-1">Leo Phillips</h6>
                        <p className="fs-14 text-muted mb-0">Client</p>
                      </div>
                    </div>
                    <div className="mb-0 text-warning fs-12 my-auto">
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-fill me-1"></i>
                      <i className="ri-star-half-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Card.Body>
      </Row>
    </Fragment>
  )
}

export default HomePage
