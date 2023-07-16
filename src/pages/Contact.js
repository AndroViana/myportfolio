import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if required fields are empty
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return; // Prevent form submission
    }

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
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="email" name="user_email" placeholder="Email" />
      <input type="number" name="number" placeholder="Phone Number" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Your Message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
