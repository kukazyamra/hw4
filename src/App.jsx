import React from 'react';
import Container from "./components/Container/Container.jsx";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer.jsx";
import UserList from "./components/UserList/UserList.jsx";

function App() {

  return (
    <>
        <Container >
            <CountdownTimer/>
            <UserList/>
        </Container>
    </>
  )
}

export default App
