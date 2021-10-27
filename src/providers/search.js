import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const SearchContext = React.createContext({})

export const SearchProvider = (props) => {
  const [search, setSearch] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const results = await axios.get(
          `https://api.github.com/search/users?q=${search}`
        )
        setUserData(results)
      } catch (error) {}
    }
    if (search) {
      fetchResult()
    }
  }, [search])

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
