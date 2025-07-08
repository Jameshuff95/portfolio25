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

  const showSuccessMessage = () => (
    <div className="border p-2 bg-foreground text-background">
      <p>Your message has been sent successfully!</p>
      <p>
        Thank you for your message! You will hear back from me as soon as I am
        available.
      </p>
    </div>
  );

  const showFailureMessage = () => (
    <div className="border p-2 bg-foreground text-background">
      <p>There was an error sending your message. Please Try again Later.</p>
    </div>
  );

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
      showSuccessMessage();
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      showFailureMessage();
      console.error(err);
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-start p-5 rounded-lg w-full min-h-175"
      >
        {/* name and email container */}
        <div className=" min-h-40 text-3xl flex flex-col gap-4 w-full">
          <label className="flex flex-col">
            <span className="mb-1">Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded bg-foreground text-background outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-3xl">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded bg-foreground text-background outline-none"
            />
          </label>
        </div>

        {/* message */}
        <label className="flex flex-col">
          <span className="mb-1 text-3xl">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            maxLength={250}
            value={formData.message}
            onChange={handleChange}
            className="p-2 border rounded resize-none bg-foreground min-h-80 p-4 text-background text-2xl select-text outline-none"
          />
        </label>

        {/* submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
