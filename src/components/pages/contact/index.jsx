import React, { useEffect } from "react";
import { Header } from "./header";
import "../../../styles/contact.css";
import { Form } from "./form";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <main className="contact-page">
      <Header />
      <Form />
    </main>
  );
};
