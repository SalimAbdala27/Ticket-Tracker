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
      <h2 className="innerCard__heading">Counter</h2>
      <span>{ticket}</span>
        <div className="innerCard__buttons">
          <button className="innerCard__buttons--btn lower" onClick={decrementTicket}>-</button>
          <button className="innerCard__buttons--btn higher" onClick={incrementTicket}>+</button>
        </div>
      </div>
    </>
    )
}

export default InnerCard
