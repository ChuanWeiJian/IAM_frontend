import React from "react";

const ExamCenterInformationHeader = ({
  schoolCode,
  examCenterCode,
  name,
  address,
}) => {
  return (
    <section className="ul-product-detail__box">
      <div className="row">
        <div className="col-lg-3 col-md-3 mt-4 text-center">
          <div className="card">
            <div className="card-body">
              <div className="ul-product-detail__border-box">
                <h5 className="heading">School Code</h5>
                <p className="text-muted text-12">{schoolCode}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 mt-4 text-center">
          <div className="card">
            <div className="card-body">
              <div className="ul-product-detail__border-box">
                <h5 className="heading">Exam Center Code</h5>
                <p className="text-muted text-12">{examCenterCode}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 mt-4 text-center">
          <div className="card">
            <div className="card-body">
              <div className="ul-product-detail__border-box">
                <h5 className="heading">School Name</h5>
                <p className="text-muted text-12">{name}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 mt-4 text-center">
          <div className="card">
            <div className="card-body">
              <div className="ul-product-detail__border-box">
                <h5 className="heading">School Address</h5>
                <p className="text-muted text-12">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamCenterInformationHeader;
