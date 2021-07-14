import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';

const Player = (props) => {
    const {name, salary, picture} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
            <div className="player">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title> <h4>{name}</h4> </Card.Title>
                    <Card.Text>
                        Yearly Salary : $ {salary}
                    </Card.Text>
                    <Button onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faPlusCircle} /> Add team</Button>
                </Card.Body>
            </Card>
            </div>
        
    );
};

export default Player;