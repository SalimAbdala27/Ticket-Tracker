import React, {useState} from 'react'
import "./InnerCard.scss"

const InnerCard = () => {

    const [ticket, setTicket] = useState(0);

    function incrementTicket() {
        setTicket(prevTicket => prevTicket + 1);
    }

    function decrementTicket() {
        setTicket(prevTicket => prevTicket=== 0 ? prevTicket: prevTicket-1)
    }

    return (
        <>
            <div className="innerCard">
            <h2>Counter</h2>
            <span>{ticket}</span>
                <div className="innerCard__buttons">
                    <button onClick={incrementTicket}>+</button>
                    <button onClick={decrementTicket}>-</button>
                </div>
            </div>
        </>
    )
}

export default InnerCard
