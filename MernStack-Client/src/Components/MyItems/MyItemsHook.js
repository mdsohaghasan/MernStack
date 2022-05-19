import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


function MyItemsHook() {
    const [user] = useAuthState(auth);
    const [Itemes, setItemes] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/MyItems?email=${email}`
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => res.json())
            .then((data) => setItemes(data));
    }, [user]);


    // delete button
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('are you sure deleteing');
        if (proceed) {
            console.log(id);
            const url = `https://thawing-harbor-02230.herokuapp.com/MyItems/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = Itemes.filter(item => item._id !== id);
                        setItemes(remaining)
                    }
                })
        }
    }

    return (

        <div>
            <div className="Itmes-container container">
                <div class="row">
                    {Itemes.map((item) => (
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <img src={item.img} alt="item-pic" />
                                    <h5 class="card-title">Name : {item.name}</h5>
                                    <h5 class="card-title">Price : {item.price}</h5>
                                    <h5 class="card-title">Quantity : {item.quantity}</h5>
                                    <p class="card-text">ShortDes : {item.description}</p>
                                    <p class="card-text">Supplier : {item.supplier}</p>
                                    <button onClick={() => handleDelete(item._id)} class="btn btn-info">delete</button>
                                    <Link to={`/MyItemDetails/${item._id}`} class="btn btn-primary">Update btn</Link>

                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </div>

    )
}

export default MyItemsHook