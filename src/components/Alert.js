import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div>
      <div
        className={"alert alert-"+props.alert.type+" alert-dismissible fade show"}
        role="alert"
      >
        <strong>{props.alert.type[0].toUpperCase() + props.alert.type.slice(1)}</strong>: {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}
