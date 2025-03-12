'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../utils/context/authContext';
import { registerUser } from '../../utils/auth';

function RegisterForm() {
  const { user, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    uid: user.fbUser.uid,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.fbUser.uid));
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <label htmlFor="state">State</label>
      <input type="text" id="state" name="state" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <label htmlFor="zip">Zip Code</label>
      <input type="text" id="zip" name="zip" required onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      <button type="submit">Submit</button>
    </form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    fbUser: PropTypes.shape({
      uid: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RegisterForm;
