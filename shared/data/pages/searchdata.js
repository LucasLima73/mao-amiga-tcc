import { Fragment, useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <Row>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-40.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/6.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Tech Gadgets</div>
                                </div>
                                <div className="fs-12 text-default">Innovative Marvels</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-41.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/2.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Healthy Recipes</div>
                                </div>
                                <div className="fs-12 text-default">Nutrient Nourish</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-42.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/4.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Travel Explorer</div>
                                </div>
                                <div className="fs-12 text-default">Global Wander</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-43.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/5.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Fashion Finds</div>
                                </div>
                                <div className="fs-12 text-default">Chic Styles</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-44.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/6.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Nature Photography</div>
                                </div>
                                <div className="fs-12 text-default">Wild Beauty</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-45.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/7.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Future Tales</div>
                                </div>
                                <div className="fs-12 text-default">Innovative Marvels</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-46.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/8.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Science Fiction Books</div>
                                </div>
                                <div className="fs-12 text-default">Future Tales</div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card search-images-card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-60.jpg" alt="image"/>
                            <div className="p-2">
                                <div className="d-flex align-items-center gap-1">
                                    <div className="avatar avatar-xs">
                                        <img src="../../assets/images/company-logos/9.png" alt="" />
                                    </div>
                                    <div className="figure-caption fs-13 fw-medium text-default">Fitness Fanatics</div>
                                </div>
                                <div className="fs-12 text-default">Active Vibes</div>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={12} className=" mb-4">
                        <Button variant="" className="btn btn-info-light btn-loader mx-auto">
                            <span className="me-2">Loading</span>
                            <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                        </Button>
                    </Col>
            </Row>
  

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
            slides={[{ src: "../../assets/images/media/media-40.jpg" }, { src: "../../assets/images/media/media-41.jpg" }, { src: "../../assets/images/media/media-43.jpg" }, { src: "../../assets/images/media/media-44.jpg" }, { src: "../../assets/images/media/media-45.jpg" }, { src: "../../assets/images/media/media-46.jpg" }, { src: "../../assets/images/media/media-60.jpg" },
           
            ]}/>

        </Fragment>
    );
};



