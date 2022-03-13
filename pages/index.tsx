import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [search, setSearch] = useState('')
  function handleSearch(){
    
  }
  return (
    <div>
    <h1> Busca </h1>

    <form onSubmit={handleSearch}>
      <input 
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit"> Buscar </button>
    </form>
    </div>
  )
}
