import React from 'react'
import Weather from './Weather'

const View = ({ countries, countriesToShow }) => {

    const data = countries.filter( place => place.name.common == countriesToShow[0] )
    const population = data[0].population
    const capital = data[0].capital
    const lang = Object.values(data[0].languages)
    const flag = data[0].flags.png
    
    return (
      <div>
        <h2>
          {countriesToShow}
        </h2>
        <div>
          capital {capital} <br />
          population {population}
          <br />
        </div>
        <div>
          <h3>
            languages
          </h3>
          <ol>
            {lang.map( l => <li> {l} </li> )}
          </ol>
        </div>
        <div>
          <img src={flag} ></img>
        </div>
        <Weather capital={capital} />
      </div>
    )

}

export default View