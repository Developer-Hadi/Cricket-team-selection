import React from 'react';

const Count = (props) => {
    const count = props.count;
    const totalBudget = count.reduce((sum,player) => sum + player.salary,0)
    return (
        <div>
            <h3>Selected Players : {count.length} </h3>
            <h5>Selected Players Budget : $ {totalBudget}</h5>
            <h5>Selected Players Name : </h5>
            <ol>
                {count.map(player =><li>{player.name}</li>)}
            </ol>
        </div>
    );
};

export default Count;