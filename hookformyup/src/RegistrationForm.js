import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data); // Handle form submission

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <TextField type="text" id="name" {...register("name", { required: true })} />
        {errors.name && <p>This field is required</p>} 
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <TextField type="email" id="email" {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i 
        })} />
        {errors.email && <p>Invalid email address</p>}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default RegistrationForm;
