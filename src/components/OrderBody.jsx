import React from "react";
import Accordion from "./Accordion";
import { Modal } from "@material-ui/core";

function OrderBody() {
  return (
    <>
      <div className="order-body">
        <Accordion />
        <Modal/>
      </div>
    </>
  );
}

export default OrderBody;