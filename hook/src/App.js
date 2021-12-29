import React, { useState } from 'react'
import MyNav from './Component/Nav/MyNav'
import MoviesData from './Component/MoviesData/MoviesData'
import MoviesListe from './Component/MoviesListe/MoviesListe'
import './App.css'
import AddMovie from './Component/AddMovie/AddMovie'




function App() {



  const [titleSearch,setTitleSearch]=useState('')
  const handleTitle=(input)=>{
  setTitleSearch(input)

  };


  const [ratingSearch,setRatingSearch]=useState(0)
  const handleStar=(input)=>{
    setRatingSearch (input)


  }

  const [data,setData]= useState(MoviesData)

const getData = (input)=>{
  setData([...data, input]);


}


  return (
    <div className="App">
      <MyNav
      handleTitle={handleTitle}
      handleStar={handleStar}/>

<AddMovie getData={getData}/>

      <MoviesListe

      titleSearch={titleSearch}
      ratingSearch={ratingSearch}
      data={data}
      />
    </div>
  )
}

export default App