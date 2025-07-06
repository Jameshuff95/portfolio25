import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      console.log('Message Sent!');
    } catch (err) {
      console.error('Submission error:', err);
    }
    console.log('Submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 border rounded-lg max-w-lg mx-auto"
    >
      <label className="flex flex-col">
        <span className="mb-1 font-medium">Name</span>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-medium">Email</span>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </label>

      <label className="flex flex-col">
        <span className="mb-1 font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="p-2 border rounded resize-none"
        />
      </label>

      <button
        type="submit"
        className="self-end bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
