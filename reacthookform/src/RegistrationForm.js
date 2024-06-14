import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., send to API)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>} 
      </div>

      {/* Add more input fields for email, password, etc. */}

      <button type="submit">Register</button>
    </form>
  );
}
export default RegistrationForm;