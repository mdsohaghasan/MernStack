import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './InventoryItem.css';

function InventoryItem() {
    const [pages, setpages] = useState(0);
    const [size, setSize] = useState(10);
    const [Itemes, setItemes] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/Items?pages=${pages}&size=${size}`)
            .then((res) => res.json())
            .then((data) => setItemes(data));
    }, [pages, size]);

    // https://thawing-harbor-02230.herokuapp.com/Items/ 

    // pagination
    const [pagecount, setpagecount] = useState(0);
    useEffect(() => {
        fetch("http://localhost:5000/ItemsCount/")
            .then((res) => res.json())
            .then((data) => {
                const count = data.count
                const pages = Math.ceil(count / 10);
                setpagecount(pages);
            });
    }, []);

    // delete button
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('are you sure deleteing');
        if (proceed) {
            console.log(id);
            const url = `https://thawing-harbor-02230.herokuapp.com/Items/${id}`;
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
                                    <Link to={`/ItemDetails/${item._id}`} class="btn btn-primary">Update inven btn</Link>

                                </div>
                            </div>
                        </div>


                    ))}
                </div>
                {/* pagination button */}
                <div className="pagination">
                    {
                        [...Array(pagecount).keys()]

                            .map(number => <button
                                className={pages === number ? 'selected' : ''}
                                // "btn btn-primary m-2"
                                onClick={() => setpages(number)}> {number}</button>)


                    }

                    <select onChange={e => setSize(e.target.value)}>
                        <option value='10' selected>10</option>
                        <option value='12'>12</option>
                        <option value='15'>15</option>
                    </select>

                </div>
            </div>
        </div >

    )
}

export default InventoryItem