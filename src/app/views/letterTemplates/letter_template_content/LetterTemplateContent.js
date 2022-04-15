import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Breadcrumb, SimpleCard } from "@gull";

import ErrorModal from "app/views/shared/components/ErrorModal";
import Loader from "app/views/shared/components/Loader";
import { getLetterTemplateById } from "app/redux/actions/LetterTemplateContentActions";
import { resetError } from "app/redux/actions/ErrorModalActions";
import TagList from "./components/TagList";
import "../../../../../node_modules/react-quill/dist/quill.core.css";

const LetterTemplateContent = (props) => {
  const templateId = useParams().templateId;

  useEffect(() => {
    props.getLetterTemplateById(templateId);
  }, []);

  return (
    <div>
      {props.loading && <Loader></Loader>}
      <ErrorModal error={props.httpError} onConfirm={props.resetError} />
      <Breadcrumb
        routeSegments={[
          { name: "Letter Templates", path: "/letter" },
          { name: "Letter Templates List", path: "/letter/list" },
          { name: "Letter Template Content" },
        ]}
      ></Breadcrumb>
      <SimpleCard title={props.letterTemplate.title}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body ql-editor">
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{
                    __html: props.letterTemplate.content,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
        <TagList items={props.letterTemplate.tags} />
      </SimpleCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    letterTemplate: state.letterTemplateContent.letterTemplate,
    httpError: state.error.error,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps, { getLetterTemplateById, resetError })(
  LetterTemplateContent
);
