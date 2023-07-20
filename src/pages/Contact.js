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
      return;
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-96 mx-auto bg-white rounded-lg shadow-md p-8 space-y-4 mt-10"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        name="number"
        placeholder="Phone Number"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        rows="4"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
