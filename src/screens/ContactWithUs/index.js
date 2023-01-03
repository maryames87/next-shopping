import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from 'axios';


function ContactWithUs() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleEmail = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      text,
    };
   const res= await axios.post("/api/auth",formData)
   console.log(res)
  };
  return (
    <>
      <Container>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "#0d6efd" }}>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "#0d6efd" }}>
              Enter your message
            </Form.Label>
            <Form.Control
              placeholder="Enter comment..."
              onChange={(e) => setText(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button onClick={handleEmail} variant="primary" type="submit">
            send
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ContactWithUs;
