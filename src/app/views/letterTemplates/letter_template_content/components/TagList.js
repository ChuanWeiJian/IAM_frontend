import React from "react";
import { Col } from "react-bootstrap";
import { tagFieldsOptions } from "fake-db/static_data/LetterTemplate";

const TagList = (props) => {
  return (
    <Col lg={4} md={4} sm={4} xs={12} className="mb-4">
      <div className="card h-100">
        <div className="card-body">
          <div className="ul-widget__head __g-support v-margin">
            <div className="ul-widget__head-label">
              <h3 className="ul-widget__head-title">Tags List</h3>
            </div>
          </div>

          <div className="ul-widget__body">
            <div className="ul-widget6">
              <div className="ul-widget6__head">
                <div className="ul-widget6__item">
                  <span>Tag</span>
                  <span className="text-start">Field</span>
                </div>
              </div>
              {props.items.map((tag, index) => {
                const tagField = tagFieldsOptions.find(
                  (option) => option.value === tag.value
                );
                return (
                  <div className="ul-widget6__body" key={index}>
                    <div className="ul-widget6__item">
                      <span>{`<${index + 1}>`}</span>
                      <span className="text-start">{tagField.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default TagList;
