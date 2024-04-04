import React from 'react';

const Counter = () => {
    const [Counter, SetCounter];

    function btnAdd() {
        setCounter(counter + 1)
    }
    function btnReduse() {
        setCounter(counter - 1)
    }
    function btnRestart() {
        setCounter(0)
    }
    function btnRestart() {
        setCounter(0)
    }


    return (
        <div>
            {counter.state}
            <div>
                <button onClick={setCounter(counter += 1)}>+</button>
                <button onClick={setCounter(counter -= 1)}>-</button>
                <button onClick={setCounter(0)}>Restart</button>
            </div>
        </div>
    )
}

export default Counter;
