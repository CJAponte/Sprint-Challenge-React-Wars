import React from 'react';
import CharacterCard from './CharacterCard'

const Character = (props) => {
    return (
        <div className="Character" >
            {props.starwarsChars.map(item => {
                return (
                    <CharacterCard 
                        key={item.created}
                        id={item.created}
                        name={item.name}
                        birthYear={item.birth_year}

                        eyeColor={item.eye_color}
                        hairColor={item.hair_color}
                        skinColor={item.skin_color}

                        films={item.films}

                        gender={item.gender}
                        height={item.height}
                        mass={item.mass}

                        homeworld={item.homeworld}

                        species={item.species}

                        starships={item.starships}
                        vehicles={item.vehicles}

                        url={item.url}

                    />
                )
            })}
        </div>
    )
}

export default Character