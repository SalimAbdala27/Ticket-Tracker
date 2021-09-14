import React from 'react'
import "./OuterCard.scss"

const OuterCard = (props) => {

    const  { name, role} = props;


    return (
        <>
            <div>
                <p>{name} </p>
                <p>{role} </p>
            </div>
        </>
    )
}

export default OuterCard
