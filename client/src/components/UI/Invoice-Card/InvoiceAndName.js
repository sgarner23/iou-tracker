import React, { useContext } from "react";
import { userContext } from "../../../store/userStore";
import "./InvoiceAndName.css";

function InvoiceAndName({ number, clientName }) {
  const { state, dispatch } = useContext(userContext);
  return (
    <div className="invoice-name">
      <div className="left-container">
        <p className="num-sign">#</p>
        <p className="invoice-number">{`IOU${number}`}</p>
      </div>
      <p className="customer-name">{clientName}</p>
    </div>
  );
}

export default InvoiceAndName;
