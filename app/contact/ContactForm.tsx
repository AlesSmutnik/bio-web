"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ContactFormProps {
  defaultMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ defaultMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: defaultMessage || "",
  });
  const [status, setStatus] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.push("/message-sent");
    } else {
      setStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border border-[1px] rounded-xl bg-black/45 flex flex-col max-w-[400px] mx-auto p-4">
      <section>
        <label htmlFor="name" className="mb-2 font-semibold">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 h-[35px] p-2 rounded w-full mb-4 shadow-lg shadow-white/70 "
        />
        <label htmlFor="email" className="mb-2 font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 h-[35px] rounded w-full mb-4 shadow-lg shadow-white/70"
        />
        <label htmlFor="message" className="mb-2 font-semibold ">Zpráva:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 p-2 rounded w-full mb-4 shadow-lg shadow-white/70 "
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Odeslat
        </button>
        {status && <p className="mt-4 text-red-500">{status}</p>}
      </section>
    </form>
  );
};

export default ContactForm;