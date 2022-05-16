import React, { useState } from 'react';
import Game from './Game';
import Home from './Home';

const container = {
    height: '100vh', display: 'flex',
    justifyContent: 'center', alignItems: 'center',
}

const App = () => {
    const [begin, setBegin] = useState(false)

    const goToGame = () => setBegin(true)
    const goToHome = () => setBegin(false)

    return <div style={container}>
       {begin ? <Game goToHome={goToHome}/> : <Home goToGame={goToGame} />}
    </div>
}

export default App