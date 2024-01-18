import React, { useState } from 'react'
import Card from '../components/card1/Card';

const Home = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div>
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            {
                cardData.map((item, index) => (
                    <Card key={index} data={item} index={index} select={selected===index} setSelected={setSelected}/>
                ))
            }
            </div>
        </div>
    )
}

export default Home;

const cardData = [
    {
        heading: 'Select Forum Members',
        text: 'Select the members of your AI Forum'
    },
    {
        heading: 'Condition AI',
        text: 'Select the parameters of your AI'
    },
    {
        heading: 'Enrich AI',
        text: 'Enrich your AI with data from your organisation and members'
    }
]
