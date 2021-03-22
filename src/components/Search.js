import React, { useState } from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    .err{
        color:red;
        text-shadow: 1px 1px black;
        font-size:1.5rem;
    }
`
const StyledForm = styled.form`
    width: 60vw;
    display: flex;
    justify-content: space-between;
    padding:.5rem;
    color: white;
    font-weight: bold;
}
    .btn {
        background-color:black;
        color: white;
        border: 1px solid white;
        border-radius: 10px;
        &:hover{
            color:#66FF00;
        }
    }
    @media(max-width:700px){
        height: 20vh;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
        align-items: space-around;
    }
`

export default function Search(props) {
    const [option, setOption] = useState({
        checked: false,
        option: "",
        name: "",
        error: ""
    });


    const onChange = e => {
        setOption({ ...option, checked: true, option: e.target.value });
    }
    const onChange2 = e => {
    \        setOption({ ...option, checked: true, name: e.target.value });
}

const onSearch = e => {
    e.preventDefault();
    if (option.option && !option.name) {
        setOption({ ...option, error: "" });
        props.filterChars(option.option);
    } else if (option.name && !option.option) {
        setOption({ ...option, error: "" });
        props.searchName(option.name)
    } else if (!option.option && !option.name) {
        setOption({ ...option, error: "*Choose a search method*" });
    } else {
        setOption({ ...option, error: "*Choose ONE search method*" })
    }
}


return (
    <StyledDiv>
        <StyledForm>
            <label htmlFor="Alien">
                <input id="Alien" type="radio" value="Alien" checked={option.option === "Alien"} onChange={onChange} />
                Alien
                </label>
            <label htmlFor="Human">
                <input id="Human" type="radio" value="Human" checked={option.option === "Human"} onChange={onChange} />
                Human
                </label>
            <label htmlFor="name">
                Search by Name:
                    <input type="text" value={option.name} onChange={onChange2} placeholder="e.g. Morty" />
            </label>
            <button onClick={onSearch} className="btn">Search <i class="fas fa-search"></i></button>
            <button onClick={props.clearFilter} className="btn"> Clear <i class="fas fa-trash"></i></button>
        </StyledForm>
        <div className="err"><p>{props.nameErr}</p></div>
        <div className="err"><p>{option.error}</p></div>
    </StyledDiv>
)
}
