import React from 'react';

const CharacterCard = (props) => {
    return (
        <div className="Character-Card" id={props.id}>

            <div>
                Name: {props.name}
            </div>

            <div>
                Gender: {props.gender}
            </div>  

            <div>
                Birth Year: {props.birthYear}
            </div>

            <div>
                Hair Color: {props.hairColor}
            </div>

            <div>
                Eye Color: {props.eyeColor}
            </div>

            <div>
                Skin Color: {props.skinColor}
            </div>

            <div>
                Height: {props.height} cm 
            </div>

            <div>
                Mass: {props.mass} kg
            </div>

            <div>
                Startships: {props.starships.length}
            </div>

            <div>
                Vehicles: {props.vehicles.length}
            </div>

            <div>
                Films Appeared In: {props.films.length}
            </div>

        </div>
    )
}

export default CharacterCard;