import React from 'react'
import "./OuterCard.scss"
import InnerCard from "../InnerCard/InnerCard";

const OuterCard = (props) => {

    const  { team } = props;

    return (
        <>
            <div className="outercard">
                <p className="outercard__label">{team.name} </p>
                <p className="outercard__label">{team.role} </p>

                <InnerCard/>
            </div>
        </>
    )
}

export default OuterCard
