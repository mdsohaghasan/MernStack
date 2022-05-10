import React from 'react'
import { useForm } from "react-hook-form";

function AddItem() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = `https://thawing-harbor-02230.herokuapp.com/Items/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        console.log(data)
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Add Iteme Form</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name'{...register("name")} />
                <input className='mb-2' placeholder='price' type="number"{...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number"{...register("quantity")} />
                <input className='mb-2' placeholder='description'{...register("description")} />
                <input className='mb-2' placeholder='supplier'{...register("supplier")} />
                <input className='mb-2' placeholder='pic' type="text"{...register("pic", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='mb-2' type="submit" />
            </form>
        </div>
    )
}

export default AddItem