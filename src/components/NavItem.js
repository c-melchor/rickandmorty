import React from "react";
import styled from "styled-components";


const StyledItem = styled.li`
    padding: .5rem;

`
const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover{
        color: lightgreen;
    }
`

export default function NavItem({ item }) {
    if (item.name === "LinkedIn" || item.name === "GitHub") {
        return (<>
            <StyledItem>
                <StyledLink href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</StyledLink>
            </StyledItem>
        </>)
    } else {
        return (<>
            <StyledItem>
                <StyledLink href={item.link}>{item.name}</StyledLink>
            </StyledItem>
        </>)
    }
}
