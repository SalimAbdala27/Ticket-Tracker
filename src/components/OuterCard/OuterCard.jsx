import React from 'react'
import "./OuterCard.scss"

const OuterCard = (props) => {

    const  { team } = props;

    return (
        <>
            <div>
                <p>{team.name} </p>
                <p>{team.role} </p>
            </div>
        </>
    )
}

export default OuterCard
