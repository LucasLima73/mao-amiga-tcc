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
import { Col, Row } from "react-bootstrap";


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
              <Row className="row gy-3">
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-48.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-49.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-50.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-51.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-52.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-53.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-54.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-55.jpg" alt="image"  />
                        </Link>
                    </Col>
                    <Col lg={4} md={4} sm={6} className="col-6">
                        <Link scroll={false} href="#!" className="glightbox card mb-0" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../../assets/images/media/media-56.jpg" alt="image"  />
                        </Link>
                    </Col>
                </Row>
  

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
            slides={[{ src: "../../../assets/images/media/media-48.jpg" }, { src: "../../../assets/images/media/media-49.jpg" }, { src: "../../../assets/images/media/media-50.jpg" }, { src: "../../../assets/images/media/media-51.jpg" }, { src: "../../../assets/images/media/media-52.jpg" }, { src: "../../../assets/images/media/media-53.jpg" }, { src: "../../../assets/images/media/media-54.jpg" }, { src: "../../../assets/images/media/media-55.jpg" }, { src: "../../../assets/images/media/media-56.jpg" }
           
            ]}/>

        </Fragment>
    );
};



