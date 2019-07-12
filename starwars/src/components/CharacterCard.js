import React from 'react';
import { Card } from "semantic-ui-react";

const CharacterCard = (props) => {
    return (
        <Card id={props.id} style={{margin: '25px auto'}}>

            <Card.Content header={props.name} />

            <Card.Content extra>
                Gender: {props.gender}
            </Card.Content>

            <Card.Content extra>
                Birth Year: {props.birthYear}
            </Card.Content>

            <Card.Content extra>
                Hair Color: {props.hairColor}
            </Card.Content>

            <Card.Content extra>
                Eye Color: {props.eyeColor}
            </Card.Content>

            <Card.Content extra>
                Skin Color: {props.skinColor}
            </Card.Content>

            <Card.Content extra>
                Height: {props.height} cm 
            </Card.Content>

            <Card.Content extra>
                Mass: {props.mass} kg
            </Card.Content>

            <Card.Content extra>
                Startships: {props.starships.length}
            </Card.Content>

            <Card.Content extra>
                Vehicles: {props.vehicles.length}
            </Card.Content>

            <Card.Content extra>
                Films Appeared In: {props.films.length}
            </Card.Content>

        </Card>
    )
}

export default CharacterCard;