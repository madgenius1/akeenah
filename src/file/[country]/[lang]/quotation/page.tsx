"use client";

import { useState } from "react";

export default function QuotationPage() {
  const [form, setForm] = useState({ name: "", email: "", request: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request submitted: ${JSON.stringify(form)}`);
  };

  return (
    <section className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Request a Quotation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} placeholder="Your Name" className="w-full p-2 border rounded" />
        <input name="email" onChange={handleChange} placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea name="request" onChange={handleChange} placeholder="Your Request" className="w-full p-2 border rounded h-24" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
