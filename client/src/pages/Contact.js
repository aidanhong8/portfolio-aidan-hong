import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  const [opened, setOpened] = useState(false);
  const sendEmail = event => {
    event.preventDefault();
    const body = `${state.message}\n\nFrom: ${state.name}\nReply to: ${state.email}`;
    window.location.href = `mailto:ahong97@gatech.edu?subject=${encodeURIComponent(state.subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <div className="content contact-page">
      <header className="page-header">
      <p className="projects-eyebrow">LET’S CONNECT</p>
      <h1>Contact Me</h1>
      <p>Get in touch at <a href="mailto:ahong97@gatech.edu">ahong97@gatech.edu</a>, or fill out the form to prepare an email.</p>
      <p className="contact-note">This opens your email app. Review your message and send it there.</p>
      </header>
      <form className="surface-card" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            autoComplete="name"
            value={state.name}
            placeholder="Name"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            name="email"
            autoComplete="email"
            value={state.email}
            placeholder="Email"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject: </Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Subject"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message: </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows={5}
            placeholder="Message"
            onChange={onInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Open Email App
        </Button>
        {opened && (
          <p className="contact-note mt-3" role="status">
            Your email draft is ready to open. Send it from your email app. If nothing opens,
            you can copy ahong97@gatech.edu into your preferred email service. Your message stays here.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
