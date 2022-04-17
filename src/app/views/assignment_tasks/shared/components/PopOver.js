import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
const PopOver = (props) => {
  const popover = (props) => (
    <Popover id="popover-basic" {...props}>
      <Popover.Header as="h3">Original School Information</Popover.Header>
      <Popover.Body>
        School Code: {props.schoolCode} <br></br>School Name: {props.schoolName}
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger
      trigger="hover"
      placement="auto"
      overlay={popover({
        schoolCode: props.invigilator.user.school.schoolCode,
        schoolName: props.invigilator.user.school.schoolName,
      })}
      delay={{ show: 250, hide: 400 }}
    >
      <div>{props.invigilator.teacherName}</div>
    </OverlayTrigger>
  );
};

export default PopOver;
