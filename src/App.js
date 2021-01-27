import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  //useState and useEffect is same but used for functions rather than turning this into a class
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true) //true by default but after data has loaded set it to false
  const [query, setQuery] = useState('')

  useEffect(() => {
    //async is similar to .then syntax but axios makes it easier because it returns a promise
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <br/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
