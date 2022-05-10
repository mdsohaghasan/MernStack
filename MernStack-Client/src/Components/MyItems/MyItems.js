import React from 'react'
import { Link } from 'react-router-dom';
import MyItemsHook from './MyItemsHook';

function MyItems() {


    return (
        <div>
            <h1>MyItems</h1>

            <MyItemsHook></MyItemsHook>

            <Link to={`/addmyitem/`} class="btn btn-primary">Add Item</Link>

        </div>
    )
}

export default MyItems