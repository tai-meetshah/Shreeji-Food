import { useState } from "react";
import contactUs from "../Images/contactUs.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageText: "",
  });
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    setFormData({
      name: "",
      email: "",
      messageText: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contactUs} alt="Contact us" />
      </div>
      <div className="contact-right">
        <h1>Contact US</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="messageText"
            placeholder="Type your Message here..."
            value={formData.messageText}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting Shreeji Food, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
