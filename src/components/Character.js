import React, { useState } from "react";
import styled from "styled-components";

const StyledCharDiv = styled.div`
    margin: 1rem auto;
    padding: .75rem;
    border: 1px solid black;
    background-color : lightgrey;
    border-radius: 10px;
    .btn {
        background-color: black;
        color:white;
        border-radius:10px;
        padding: .25rem;
    }
    &:hover {
        background-color: #E3FBE3;
        border-color: #A74471;
        cursor: pointer;
    }
    @media(max-width:700px){
        width: 50vh;
        img {
            width:80%;
        }
    }
`


export default function Character({ person }) {
    const [toggleInfo, setToggleInfo] = useState(false);


    const handleClick = () => {
        setToggleInfo(!toggleInfo);
    }

    return (
        !toggleInfo ?
            <StyledCharDiv key={person.id} onClick={handleClick}>
                <img src={person.image} alt={person.name} />
                <h2>{person.name}</h2>
            </StyledCharDiv>
            :
            <StyledCharDiv key={person.id} onClick={handleClick} className="flip">
                <h3>Additional Information <span role="img" aria-label="rocket">🚀</span></h3>
                <h4>Gender: {person.gender}</h4>
                <h4>Species: {person.species}</h4>
                <h4>Location: {person.location.name}</h4>
            </StyledCharDiv>
    )
}
