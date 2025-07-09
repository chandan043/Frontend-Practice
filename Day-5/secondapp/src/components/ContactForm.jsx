 import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Form submitted values:", name, email);
    alert(`Name: ${name}, Email: ${email}`);
    setName("");
    setEmail("");
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>This is Contact form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          value={name}
          onChange={changeName}
          //   onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <br />

        <label htmlFor="emailInput">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
