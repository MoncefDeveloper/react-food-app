import React from "react";

export const Form = () => {
  return (
    <form className="my-form" onSubmit={(e) => e.preventDefault()}>
      <div className="title">Send us a message</div>
      <input className="my-form-input" type="text" placeholder="Name" />
      <input className="my-form-input" type="email" placeholder="Email" />
      <input
        className="my-form-input"
        type="phone"
        placeholder="Phone number"
      />
      <input className="my-form-input" type="text" placeholder="Subject" />
      <textarea
        placeholder="Comment"
        className="my-form-input my-form-text-area"
        rows={10}
      />
    </form>
  );
};
