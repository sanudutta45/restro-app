import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import QrReader from "react-qr-reader";

//scss
import QrModalStyle from "./QrModal.module.scss";

const QrModal = (props) => {
  const [error, setError] = useState("");

  const { history } = props;

  const handleScan = (data) => {
    if (data) {
      history.push(`restaurant/${data}`);
    }
  };

  const handleError = (err) => {
    setError(`${err}`);
    console.log(err);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      backdrop={false}
      centered={true}
      dialogClassName="add_folder_modal"
    >
      <Modal.Header closeButton className="modal_header"></Modal.Header>
      <Modal.Body className="text-center">
        <h1 className={`text-danger ${QrModalStyle.header}`}>Restro</h1>
        <div className={QrModalStyle.qrScanWraapper}>
          <QrReader delay={300} onError={handleError} onScan={handleScan} />
        </div>
        <div htmlFor="desc" className="text-center mt-3 text-success desc">
          Scan the restaurant's QR Code
        </div>
        {error && <div className="mt-3 text-danger">{error}</div>}
      </Modal.Body>
    </Modal>
  );
};

export default QrModal;
