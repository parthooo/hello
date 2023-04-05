import React from 'react';
import { addToDb } from '../../Utlities/fakedb';
import './Shoe.css'
const Shoe = (props) => {
    const {id, name, price} = props.cosmetic

    const handler = (id) =>{
        addToDb(id)
    }


    return (
        <div className='shoe'> 
            <h2>{name}</h2>
            <h3>{id}</h3>
            <h3>{price}</h3>
            <button onClick={()=>handler(id)}>Add Me</button>
        </div>
    );
};

export default Shoe;