import React from "react";
import { Container } from "react-bootstrap";
export default function Email() {
  const sendEmail = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group mt-4">
          <label >Adi Soyadi</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mt-4">
          <label >Konu</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mt-4">
          <label > Mesaj </label>
          <textarea
            required
            rows="5"
            className="form-control"
            name="detail"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Gönder
        </button>
      </form>
    </Container>
  );
}
