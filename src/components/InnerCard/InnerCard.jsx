import React, {useState} from 'react'
import "./InnerCard.scss"

const InnerCard = () => {

    const [ticket, setTicket] = useState(0);

    function incrementTicket() {
        setTicket(prevTicket => prevTicket + 1);
    }

    function decrementTicket() {
        setTicket(prevTicket => prevTicket -1)
    }

    return (
        <>
            <h2>Counter</h2>
            <span>{ticket}</span>
            <button onClick={incrementTicket}>+</button>
            <button onClick={decrementTicket}>-</button>
        </>
    )
}

export default InnerCard
