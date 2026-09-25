import { useState } from 'react';
import site from '../data/site';

const enquiryTypes = [
  'General enquiry',
  'Sponsor ELARA 2026',
  'Volunteer with TBWACT',
  'Education support',
  'Healthcare camps',
  'Skill development training',
  'Technical awareness programmes',
  'Media and press'
];

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: enquiryTypes[0],
  message: ''
};

/**
 * Submits by opening the visitor's mail client with a pre-filled message.
 * To route enquiries through EmailJS instead, replace `handleSubmit` with an
 * emailjs.send() call — the field names below map straight to template vars.
 */
export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Enter an email address we can reply to.';
    if (values.phone && !/^[0-9+\-\s()]{6,18}$/.test(values.phone))
      next.phone = 'Use digits, spaces, + or - only.';
    if (values.message.trim().length < 10)
      next.message = 'Tell us a little more — at least 10 characters.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      const first = document.getElementById(Object.keys(found)[0]);
      if (first) first.focus();
      return;
    }

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      '',
      values.message
    ]
      .filter((l) => l !== null)
      .join('\n');

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `${values.subject} — website enquiry`
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setValues(emptyForm);
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name ? (
          <span className="field__error" id="name-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email ? (
          <span className="field__error" id="email-error">
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update('phone')}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone ? (
          <span className="field__error" id="phone-error">
            {errors.phone}
          </span>
        ) : null}
      </div>

      {/* <div className="field">
        <label htmlFor="subject">What is this about?</label>
        <select id="subject" name="subject" value={values.subject} onChange={update('subject')}>
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div> */}

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <span className="field__error" id="message-error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <div>
        <button type="submit" className="btn btn--primary">
          Send enquiry
        </button>
      </div>

      <p className="form__status" role="status" aria-live="polite">
        {sent
          ? `Your mail app should now be open with the message ready to send to ${site.contact.email}.`
          : `Enquiries reach the trust at ${site.contact.email}. We reply on working days.`}
      </p>
    </form>
  );
}
