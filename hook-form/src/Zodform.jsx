import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { email, z } from 'zod'
import React from 'react'

const formSchema = z
  .object({
    name: z
      .string()
      .min(5, 'Minimum length should be three')
      .max(20, 'maximum length should be 20'),
    age: z.coerce
      .number()
      .min(10, 'minimum age should be 10')
      .max(20, 'Age must be leas of equal to 20'),
    password: z
      .string()
      .min(5, 'Minimum length should be 5')
      .max(20, 'maximum length should be 20'),
    email: z.email('Email is invalid'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Password dont match',
    path: ['confirm'],
  })
const Zodform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  function submitForm(data) {
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" {...register('email')} />
        </div>
        <br />
        {errors.email && <span>{errors.email.message}</span>}
        <div>
          <label htmlFor="first">Name:</label>
          <input id="first" {...register('name')} />
          <br></br>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age:</label>
          <input id="second" {...register('age')} />
        </div>
        <br />
        {errors.age && <span>{errors.age.message}</span>}
        <div>
          <label htmlFor="third">Password:</label>
          <input id="third" {...register('password')} />
        </div>

        <br />
        {errors.age && <span>{errors.age.message}</span>}
        <div>
          <label htmlFor="confirm"> ConfirmPassword:</label>
          <input id="confirm" {...register('confirm')} />
        </div>
        <br />
        {errors.confirm && <span>{errors.confirm.message}</span>}
        <br />
        <button>submit</button>
      </form>
    </>
  )
}

export default Zodform
