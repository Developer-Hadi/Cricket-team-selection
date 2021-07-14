import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Player from './Components/Player/Player';
import data from './Data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './Components/Count/Count';
function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(data);
  },[])

  const [count, setCount] = useState([]);
  const handleAddPlayer = (player) =>{
    const newCount = [...count, player];
    setCount(newCount);
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center', padding: '15px', color: 'goldenrod'}}>Cricket Team Selection</h1>
      <Container>
        <Row>
          <Col sm={8}>
            {
              players.map(player => <Player key={player.id} player={player} handleAddPlayer={handleAddPlayer}></Player>)
            }
          </Col>
          <Col sm={4} style={{backgroundColor:'whitesmoke', height:'500px', padding:'10px', marginTop:'20px'}}>
            <h2>Total Players : {players.length} </h2>
            <Count count={count}></Count>            
          </Col>
        </Row>
      </Container>  
      
    </div>
  );
}

export default App;
