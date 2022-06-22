import React from 'react';

function HookWish(props) {

    const [count, setCount] = React.useState(0);

    const [wish, setWish] = React.useState('');

    const manageCount = () => {
        setCount(Math.floor((Math.random() * 10) + 1) % 3)
        manageWish();
    }

    const manageWish = () => {
        if(count === 1) {
            setWish('Happy Birthday');
        }else if(count === 2) {
            setWish('Happy Anniversary');
        }else if(count === 0) {
            setWish('Happy Deepawali');
        }
    }

    return (
        <div>
            <h1> {wish} </h1>
            <button onClick={manageCount}>count == {count}</button>
        </div>
    );
}

export default HookWish;