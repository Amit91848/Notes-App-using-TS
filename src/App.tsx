import React, { useState } from 'react';
import { Note } from './Models/note.model';
import Header from './Components/Header';
import NotesList from './Components/NotesList';
import CreateNotes from './Components/CreateNotes';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Scheduled meeting with ui ux team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);


  return (
    <>
      <Header/>
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={ notes } setNotes={ setNotes } />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
