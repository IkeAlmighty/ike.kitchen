import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [messageText, setMessageText] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function sendMessageOnBackend() {
    // if the form is blank at all, then abort:
    // TODO: add a popup message here to let user know the message didn't go through
    if (messageText === "" || email === "" || name === "") return;

    // create Text from input tag values:
    const message = `${email}, ${name}: ${messageText}`;

    // TODO: make the backend request

    // TODO: remove alert once backend is connected
    alert(`message: "${message}" passed to backend api call function`);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          placeholder="Write your message here..."
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
        />
        <input
          type="submit"
          value="Send Message"
          onClick={() => sendMessageOnBackend()}
        />
      </form>
    </div>
  );
}
