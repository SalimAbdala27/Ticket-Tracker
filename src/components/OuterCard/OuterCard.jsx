import React from 'react'
import "./OuterCard.scss"

const OuterCard = (props) => {

    const  { team } = props;

    return (
        <>
            <div className="outercard">
                <p className="outercard__label">{team.name} </p>
                <p className="outercard__label">{team.role} </p>
            </div>
        </>
    )
}

export default OuterCard
