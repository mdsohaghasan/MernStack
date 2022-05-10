import React from 'react'
import { Link } from 'react-router-dom'
import InventoryItem from './InventoryItem'

function Inventory() {

    return (
        <div>
            <h1>Inventory manage</h1>

            <InventoryItem></InventoryItem>

            <Link to={`/additem/`} class="btn btn-primary">Add Item</Link>

        </div>
    )
}

export default Inventory
