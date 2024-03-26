import React from "react";
import { Header } from "./header";
import "../../../styles/contact.css";
import { Form } from "./form";

export const Contact = () => {
  return (
    <main className="contact-page">
      <Header />
      <Form />
    </main>
  );
};
