import React from "react";
import QrReader from "react-qr-reader";

const Scanner = (props) => {
  const { handleError, handleScan, error } = props;
  return (
    <section id="scanner">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-12">
            <div className="d-flex justify-content-center title__wrapper">
            <h1 className="text-danger">Restro</h1>
            <span className="text-success">The next generation restaurant app</span>
            </div>
            <div className="scanner_container mt-4">
              <QrReader delay={300} onError={handleError} onScan={handleScan} />
            </div>
            <div htmlFor="desc" className="text-center mt-3 text-success desc">Scan the restaurant's QR Code</div>
            <div className="text-center text-danger mt-3">{error}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
