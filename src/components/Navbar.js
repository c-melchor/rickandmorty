import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";


const StyledNav = styled.nav`
    background-color: black;
    border: 1px solid black;

`

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
`


export default function Navbar() {

    const nav = [
        {
            id: 1,
            link: "https://github.com/c-melchor",
            name: "GitHub",
        }, {
            id: 2,
            link: "https://www.linkedin.com/in/camelchor/",
            name: "LinkedIn",

        }
    ]

    return (
        <StyledNav>
            <StyledList>
                {nav.map(item => {
                    return <NavItem key={item.id} item={item} />
                })}
            </StyledList>
        </StyledNav>
    )
}
