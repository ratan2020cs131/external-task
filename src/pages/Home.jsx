import React, { useState } from 'react'
import Card from '../components/card1/Card';
import Button from '../components/button1/Button';
import Button2 from '../components/button2/Button';
import Status from '../components/status/Status';

const Home = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div style={{padding:'50px'}}>
            <div style={{display:'flex', marginBottom:'40px', gap:'20px'}}>
                <Button/>
                <Button2/>
            </div>

            <div style={{display:'flex',flexDirection:'column', marginBottom:'40px', gap:'20px'}}>
                <Status/>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {
                    cardData.map((item, index) => (
                        <Card key={index} data={item} index={index} select={selected === index} setSelected={setSelected} />
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
