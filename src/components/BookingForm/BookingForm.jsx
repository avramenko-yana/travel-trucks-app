import { useState } from 'react';
import Button from '../common/Button/Button';
import s from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Put in correct email';
    if (!formData.date) newErrors.date = "Data is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Booking submitted:', formData);
      setIsSent(true);
      setFormData({ name: '', email: '', date: '', comment: '' });
      setTimeout(() => setIsSent(false), 5000);  
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={s.inputsWrapper}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={s.input}
        />
        {errors.name && <p className={s.error}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={s.input}
        />
        {errors.email && <p className={s.error}>{errors.email}</p>}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={s.input}
        />
        {errors.date && <p className={s.error}>{errors.date}</p>}
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          className={s.textarea}
        ></textarea>
      </div>
      <Button type="submit">Send</Button>
      {isSent && (
        <p className={s.success}>Booking successfully sent.</p>
      )}
    </form>
  );
};

export default BookingForm;
