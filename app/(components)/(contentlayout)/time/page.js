"use client"
import Link from 'next/link'
import React from 'react'
import {
  Button,
  Col,
  Dropdown,
  Form,
  Modal,
  Offcanvas,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import {
	Autoplay, Pagination, 
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const TimePage = () => {
    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    };



  return (
    <Row>
                    <Col xl={12}>
                        <h6 className="mb-3">REVIEWS STYLE 4</h6>
                        <Swiper breakpoints={breakpoints}   modules={[Pagination, Autoplay]} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService1" autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>This product simplifies a daily task and has become indispensable for me. I can't imagine going back to the old way   -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/1.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Abigail Scott</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">UX Guru</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>The sleek design caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/13.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Leo Phillips</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Visual Wizard</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>I'm not tech-savvy, but this product is so easy to use. It's like it read my mind. If you want simplicity without sacrificing quality, this is it! -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/3.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Amelia Turner</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Innovation Ninja</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>Small in size, big on impact. This compact product packs a punch. Perfect for those tight on space but not willing to compromise on performance. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/9.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Zachary Carter</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Design Maven</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>Exceptional product, excellent customer service. Quick responses and a genuine commitment to customer satisfaction. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/5.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Aria Robinson</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">UI Trailblazer</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/15.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Wyatt Thompson</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Aesthetics Pro</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </Col>
                </Row>
  )
}

export default TimePage
