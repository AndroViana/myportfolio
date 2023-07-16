import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hwble2h",
        "template_gl7hyzr",
        form.current,
        "dZGnF6ULIbcbLx_Qt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Phone Number</label>
        <input type="number" name="number" />
        <label>Message</label>
        <textarea name="message" />
        <label>Message2</label>
        <textarea name="message2" />
        <input type="submit" value="Send" />
      </form>
  );
};

export default Contact;

