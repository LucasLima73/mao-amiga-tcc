'use client'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
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
                  <div className="faq-text lh-1 mb-3">MÃO AMIGA</div>
                  <span className="d-block op-8">
                    Welcome t o our FAQ page, your go-to resource for answers to
                    common queries and valuable information about our platform.
                    Whether you're a newcomer or an experienced user, this
                    section aims to address your most pressing questions and
                    concerns.
                  </span>
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
                    src="../../assets/images/media/media-65.png"
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
              <Link href='/trilhaSaude'>
                <Card className="custom-card">
                  <img
                    src="../../assets/images/media/media-44.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <Card.Body>
                    <h6 className="card-title fw-medium">Saúde</h6>
                    <p className="card-text">
                      {' '}
                      Aqui você encontra tudo sobre saúde.
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </div>
            <div className="col">
              <Card className="custom-card">
                <img
                  src="../../assets/images/media/media-43.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <Card.Body>
                  <h6 className="card-title fw-medium">
                    Research improves ability & agility !
                  </h6>
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
                  src="../../assets/images/media/media-45.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <Card.Body>
                  <h6 className="card-title fw-medium">
                    Most tropical areas are suitable
                  </h6>
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
                  <h6 className="card-title fw-medium">
                    Are They seasonal fruits ?
                  </h6>
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
