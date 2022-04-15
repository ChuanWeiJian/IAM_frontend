import React from "react";
import { Col, Row, Accordion, useAccordionButton } from "react-bootstrap";

const SchoolInformationHeader = ({ school }) => {
  function CustomToggle({ children, eventKey, Tag, className }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <Tag onClick={decoratedOnClick} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <React.Fragment>
      <section className="ul-product-detail__box">
        <div className="row">
          <div className="col-lg-3 col-md-3 mt-4 text-center">
            <div className="card">
              <div className="card-body">
                <div className="ul-product-detail__border-box">
                  <h5 className="heading">School Code</h5>
                  <p className="text-muted text-12">{school.schoolCode}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-4 text-center">
            <div className="card">
              <div className="card-body">
                <div className="ul-product-detail__border-box">
                  <h5 className="heading">Registered Exam Centers</h5>
                  <p className="text-muted text-12">
                    {school.examCenters ? school.examCenters.length : 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 mt-4 text-center">
            <div className="card">
              <div className="card-body">
                <div className="ul-product-detail__border-box">
                  <h5 className="heading">School Name</h5>
                  <p className="text-muted text-12">{school.schoolName}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 mt-4 text-center">
            <div className="card">
              <div className="card-body">
                <div className="ul-product-detail__border-box">
                  <h5 className="heading">Address</h5>
                  <p className="text-muted text-12">{school.schoolAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Row className="justify-content-center">
        <Col lg={6} md={6} sm={6} xs={12} className="mt-4">
          <Accordion>
            <div className="card card-body py-3">
              <div className="text-center">
                <h5 className="heading text-primary">Other informations</h5>
                <CustomToggle
                  eventKey={2}
                  Tag={"span"}
                  className="text-default collapsed cursor-pointer"
                >
                  <i className="i-Arrow-Down-2 t-font-boldest"></i>
                </CustomToggle>
              </div>
              <Accordion.Collapse eventKey={2}>
                <div className="mt-3">
                  <div className="ul-widget__body">
                    <div className="ul-widget6">
                      <div className="ul-widget6__head">
                        <div className="ul-widget6__item">
                          <span>Information</span>
                          <span className="text-start">Data</span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>Postcode</span>
                          <span className="text-start">{school.postcode}</span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>City</span>
                          <span className="text-start">{school.city}</span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>School Phone Number</span>
                          <span className="text-start">
                            {school.schoolPhoneNumber}
                          </span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>School Email Address</span>
                          <span className="text-start">
                            {school.schoolEmailAddress}
                          </span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>Type of School</span>
                          <span className="text-start">
                            {school.typeOfSchool}
                          </span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>State Code</span>
                          <span className="text-start">{school.stateCode}</span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>Area Code</span>
                          <span className="text-start">{school.areaCode}</span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>DUN code</span>
                          <span className="text-start">{school.codeDun}</span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>Parlimen Code</span>
                          <span className="text-start">
                            {school.codeParlimen}
                          </span>
                        </div>
                      </div>
                      <div className="ul-widget6__body">
                        <div className="ul-widget6__item">
                          <span>Tax Number</span>
                          <span className="text-start">{school.taxNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SchoolInformationHeader;
