import React from 'react';
import { Col, Row } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <Row>
                    <Col xl={18}>
                        <div className="card custom-card card-bg-primary border-0 shadow-none faq-banner-card">
                            <div className="card-body p-4">
                                <Row>
                                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} className="col-12 my-auto">
                                        <div className="faq-text lh-1 mb-3">MÃO AMIGA</div>
                                        <span className="d-block op-8">Welcome t   o our FAQ page, your go-to resource for answers to common queries and valuable information about our platform. Whether you're a newcomer or an experienced user, this section aims to address your most pressing questions and concerns.</span>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} className="d-sm-block d-none my-auto">
                                        <img src="../../assets/images/media/media-65.png" alt="" className="img-fluid"/>
                                    </Col>
                                </Row>
                            </div>
                        </div>  
                    </Col>
                </Row>
        </div>
    );
};

export default HomePage;