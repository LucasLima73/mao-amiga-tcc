import React, { Fragment } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

  
  const SignupSchema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().defined(),
      age: yup.number().required().positive().integer(),
      website: yup.string().url().defined()
    })
    .required();
const Reacthookform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(SignupSchema)
      });
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='form-label'>First Name</label>
                    <input className='form-control mb-3' {...register("firstName")} />
                    {errors.firstName && <p className='text-danger'>{errors.firstName.message}</p>}
                </div>
                <div style={{ marginBottom: 10 }}>
                    <label className='form-label'>Last Name</label>
                    <input className='form-control mb-3' {...register("lastName")} />
                    {errors.lastName && <p className='text-danger'>{errors.lastName.message}</p>}
                </div>
                <div>
                    <label className='form-label'>Age</label>
                    <input className='form-control mb-3' type="number" {...register("age", { valueAsNumber: true })} />
                    {errors.age && <p className='text-danger'>{errors.age.message}</p>}
                </div>
                <div>
                    <label className='form-label'>Website</label>
                    <input className='form-control mb-3' {...register("website")} />
                    {errors.website && <p className='text-danger'>{errors.website.message}</p>}
                </div>
                <input className='btn btn-primary' type="submit" />
        </form>
    </Fragment>
  )
}

export default Reacthookform