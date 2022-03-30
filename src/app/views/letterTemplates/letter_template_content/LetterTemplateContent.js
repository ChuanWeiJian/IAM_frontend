import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Breadcrumb, SimpleCard } from "@gull";


import { getLetterTemplateById } from "app/redux/actions/LetterTemplateContentActions";
import TagList from "./components/TagList";
import "../../../../../node_modules/react-quill/dist/quill.core.css";

const LetterTemplateContent = (props) => {
  const templateId = useParams().templateId;

  useEffect(() => {
    props.getLetterTemplateById(templateId);
  }, [])

  return (
    <div>
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
                  dangerouslySetInnerHTML={{ __html: props.letterTemplate.content }}
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
  return { letterTemplate: state.letterTemplateContent.letterTemplate };
};

export default connect(mapStateToProps, { getLetterTemplateById })(
  LetterTemplateContent
);
