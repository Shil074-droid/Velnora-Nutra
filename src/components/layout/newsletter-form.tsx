"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("No signup was submitted. The demo has no newsletter service connected.");
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" name="email" type="email" placeholder="Your email address" required />
      <button type="submit" aria-label="Submit newsletter form"><ArrowRight size={18} /></button>
      <p role="status">{message || "Demo only. This form does not collect or store email addresses."}</p>
    </form>
  );
}
