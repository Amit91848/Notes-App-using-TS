import React, { useState } from 'react';
import { Note } from './Models/note.model';
import Header from './Components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [name, useName] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Scheduled meeting with ui ux team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return (
    <>
      <Header/>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
