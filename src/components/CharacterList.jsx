import React from 'react'
import { useEffect, useState } from "react";

import Character from './Character'
import Navegation from "./Navegation"
import Spinner from './Spinner';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json();
      setLoading(false)
      setCharacters(data.results)
    }
    fetchData()
  }, [page]);
  return (
    <div className='container'>
      < Navegation page={page} setPage={setPage}/>
      {loading ? <Spinner /> :
          <div className='row'>
            {characters.map((character) => {
              return (
                <div className='col-md-4' key={character.id}>
                  <Character character={character} />
                </div>
                )})}
          </div>}
      < Navegation page={page} setPage={setPage}/>
    </div>
  )};