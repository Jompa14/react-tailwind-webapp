import { useState } from 'react';
import Button from '../utils/Button.jsx'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (!value.trim()) {
      error = "Can't be empty";
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please use a valid email address';
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!name.trim()) {
      errors.name = "Can't be empty";
    }

    if (!email.trim()) {
      errors.email = "Can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please use a valid email address';
    }

    if (!message.trim()) {
      errors.message = "Can't be empty";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // submit the form here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pr-10 sm:pr-0">
      <div className="relative mb-3 border-b-2 border-grey-dark">
        <input
          type="text"
          name="name"
          value={name}
          onBlur={handleBlur}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full py-2 pl-2 pr-12 bg-white placeholder-grey-light"
        />
        {errors.name && (
          <p className="absolute bottom-0 right-0 text-red">{errors.name}</p>
        )}
      </div>
      <div className="relative mb-3 border-b-2 border-grey-dark">
        <input
          type="email"
          name="email"
          value={email}
          onBlur={handleBlur}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full py-2 pl-2 pr-12 bg-white placeholder-grey-light"
        />
        {errors.email && (
          <p className="absolute bottom-0 right-0 text-red">{errors.email}</p>
        )}
      </div>
      <div className="relative mb-3 border-b-2 border-grey-dark">
        <textarea
          name="message"
          value={message}
          onBlur={handleBlur}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows={5}
          className="w-full py-2 pl-2 pr-12 bg-white placeholder-grey-light"
        />
        {errors.message && (
          <p className="absolute bottom-0 right-0 text-red">{errors.message}</p>
        )}
      </div>
      <div className="flex justify-end">
        <Button />
      </div>
    </form>
  );
};

export default ContactForm;
