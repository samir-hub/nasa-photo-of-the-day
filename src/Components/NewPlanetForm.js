import React, {useState} from 'react';

const NewPlanetForm = ({addDate}) => {
    const [date, setDate]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(date);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Date:</label>
            <input type="text" value = {date} required onChange={(e)=>setDate(e.target.value)}/>
            <input type="submit" value="add date"/>
        </form>
    );
}

export default NewPlanetForm;