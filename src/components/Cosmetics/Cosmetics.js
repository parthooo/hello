import React, { useEffect, useState } from 'react';
import Shoe from '../Shoe/Shoe';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setCosmetics(data))
    },[])

    return (
        <div>
            <h1>Hello</h1>
            {
                cosmetics.map(cosmetic => <Shoe 
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                ></Shoe>)    
            }
        </div>
    );
};

export default Cosmetics;