import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const AddProduct = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" {...register("pName")}/>
            <input type="text" placeholder="Product Image" className="input input-bordered w-full max-w-xs" {...register("pImage")}/>
            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" {...register("description")}/>
            <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" {...register("price")}/>
            <input type="text" placeholder="Category" className="input input-bordered w-full max-w-xs" {...register("category")}/>
            <input type="text" placeholder="Ratings" className="input input-bordered w-full max-w-xs" {...register("ratings")}/>
            <input type="text" placeholder="Product Creation Date Time" className="input input-bordered w-full max-w-xs" {...register("productCreationDateTime")}/>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default AddProduct;