import { useForm } from 'react-hook-form'

import React from 'react'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function submitForm(data) {
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name:</label>
          <input
            id="first"
            {...register('name', { required: 'name cant be empty' })}
          />
          <br></br>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age:</label>
          <input
            id="second"
            {...register('age', {
              required: 'Age is requied',
              min: {
                value: 18,
                message: 'Age must be at least 10',
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password:</label>
          <input
            id="third"
            {...register('password', {
              minLength: {
                value: 5,
                message: 'Minimum length should be 5',
              },
              maxLength: {
                value: 20,
                message: 'Maximum length should be 20',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>submit</button>
      </form>
    </>
  )
}

export default Form
