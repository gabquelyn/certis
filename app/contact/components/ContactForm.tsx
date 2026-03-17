"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";
import axios from "axios";

export default function ContactForm() {
  interface FormDetails {
    fullname: string;
    email: string;
    organization: string;
    areaOfInterest: string;
    message: string;
  }
  const [form, setForm] = useState<FormDetails>({
    fullname: "",
    email: "",
    organization: "",
    areaOfInterest: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/api/send-email", {
        name: form.fullname,
        email: form.email,
        message: [
          ...Object.keys(form).map((p) => ({
            ans: form[p as keyof FormDetails],
          })),
        ],
      });
      alert("Thank you! We will get back to you shortly.");
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    setForm({
      fullname: "",
      email: "",
      organization: "",
      areaOfInterest: "",
      message: "",
    });
  };

  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 bg-white rounded-2xl  max-w-5xl mx-auto"
      id="contact"
    >
      <div className="mb-8 text-center">
        <p className="text-3xl font-bold text-primary">Get in Touch</p>
        <p className="text-secondary max-w-xl mx-auto mt-2">
          Have a question or want to discuss your ESG journey? Fill out the form
          below and we will respond promptly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullname" className="mb-1 font-medium text-secondary">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="rounded-3xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="rounded-3xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Organization */}
        <div className="flex flex-col">
          <label
            htmlFor="organization"
            className="mb-1 font-medium text-secondary"
          >
            Organization Name
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="rounded-3xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Area of Interest */}
        <div className="flex flex-col">
          <label
            htmlFor="areaOfInterest"
            className="mb-1 font-medium text-secondary"
          >
            Area of Interest
          </label>
          <select
            id="areaOfInterest"
            name="areaOfInterest"
            value={form.areaOfInterest}
            onChange={handleChange}
            className="rounded-3xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select an area</option>
            <option value="sustainability-strategy">
              Sustainability Strategy
            </option>
            <option value="climate-risk">Climate Risk & Resilience</option>
            <option value="impact-measurement">Impact Measurement</option>
            <option value="climate-finance">
              Climate & Development Finance
            </option>
            <option value="policy-advisory">
              Policy & Institutional Advisory
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="mb-1 font-medium text-secondary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
            className="rounded-3xl border border-gray-300 p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center mt-2">
          <Button
            disabled={isLoading}
            className="bg-primary w-full md:w-fit text-white px-8 py-3 shadow-lg hover:shadow-xl transition disabled:cursor-wait"
          >
            {isLoading ? <p>Sending...</p> : <p>Send Message</p>}
          </Button>
        </div>
      </form>
    </section>
  );
}
