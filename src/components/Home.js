import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import styled from "styled-components";
import Search from "./Search";


const StyledOuterDiv = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;

`

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [err, setErr] = useState("")

    const filterChars = type => {
        const charsList = characters.filter(c => {
            return c.species === type;
        })
        if (charsList.length > 0) {
            setErr("");
            setCharacters(charsList);
        } else {
            setErr("*Clear filter to begin new search*");
        }
    };

    const searchName = name => {
        const newName = name.toLowerCase()
        const charList = characters.filter(n => {
            return n.name.toLowerCase().includes(`${newName}`)
        })
        if (charList.length > 0) {
            setErr("");
            setCharacters(charList);
        } else {
            setErr("*Name not found*");
        }
    };

    const clearFilter = () => {
        window.location.reload(false);
        setCharacters(characters);
    };

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => { setCharacters(res.data.results) })
            .catch(err => { console.log(err) })

    }, []);

    return (
        <>
            <Search characters={characters} filterChars={filterChars} clearFilter={clearFilter} searchName={searchName} nameErr={err} />
            <StyledOuterDiv>
                {characters.map(person => {
                    return <Character person={person} />
                })}
            </StyledOuterDiv>
        </>
    )
}
