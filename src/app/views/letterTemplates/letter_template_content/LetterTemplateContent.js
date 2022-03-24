import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, SimpleCard } from "@gull";
import { LetterTemplates } from "fake-db/static_data/LetterTemplate";
import TagList from "./components/TagList";
import "../../../../../node_modules/react-quill/dist/quill.core.css";

const LetterTemplateContent = (props) => {
  const templateId = useParams().templateId;

  const letterTemplate = LetterTemplates.find(
    (template) => template.id === templateId
  );
  return (
    <div>
      <Breadcrumb
        routeSegments={[
          { name: "Letter Templates", path: "/letter" },
          { name: "Letter Templates List", path: "/letter/list" },
          { name: "Letter Template Content" },
        ]}
      ></Breadcrumb>
      <SimpleCard title={letterTemplate.title}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body ql-editor">
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: letterTemplate.content }}
                ></p>
              </div>
            </div>
          </div>
        </div>
        <TagList items={letterTemplate.tags} />
      </SimpleCard>
    </div>
  );
};

export default LetterTemplateContent;
