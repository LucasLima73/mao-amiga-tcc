import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Fragment, useState } from 'react';

export const Gallerdata = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <Row>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-40.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-41.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-42.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-43.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-44.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-45.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-46.jpg" alt="image" />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link scroll={false} href="#!" className="glightbox card" data-gallery="gallery1" onClick={() => setOpen(true)}>
                            <img src="../../assets/images/media/media-60.jpg" alt="image" />
                        </Link>
                    </Col>
                </Row>
  

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
            slides={[{ src: "../../assets/images/media/media-40.jpg" }, { src: "../../assets/images/media/media-41.jpg" }, { src: "../../assets/images/media/media-42.jpg" }, 
                { src: "../../assets/images/media/media-43.jpg" }, { src: "../../assets/images/media/media-44.jpg" }, { src: "../../assets/images/media/media-45.jpg" },
                 { src: "../../assets/images/media/media-46.jpg" },{ src: "../../assets/images/media/media-60.jpg" },
           
            ]}/>

        </Fragment>
    );
};