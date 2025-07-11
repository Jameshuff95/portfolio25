import { useState } from 'react';
import { emailPattern } from '../_regex/regex';
import Button from './Button';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isValid, setIsValid] = useState(true);

  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'error' | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'email') {
        setIsValid(emailPattern.test(value));
      }
      return updated;
    });
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

      if (!res.ok) {
        setSubmissionStatus('error');
        throw new Error(data.error || 'Something went wrong');
      }

      setFormData({ name: '', email: '', message: '' });
      setSubmissionStatus('success');
    } catch (err) {
      console.error(err);
      setSubmissionStatus('error');
    }

    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-start p-5 rounded-lg w-full min-h-175"
      >
        {/* name and email container */}
        <div className=" min-h-40 text-3xl flex flex-col gap-4 w-full">
          {/* name */}
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

          {/* email */}
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
            {!isValid && formData.email.length >= 5 && (
              <p className="text-red-600 text-sm">
                Please enter a valid email.
              </p>
            )}
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
        <Button title="Submit Message" onClick={handleSubmit} />
      </form>

      {submissionStatus === 'success' && <SuccessMessage />}
      {submissionStatus === 'error' && <ErrorMessage />}
    </section>
  );
};

export default ContactForm;
