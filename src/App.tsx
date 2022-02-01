import React, { useState } from 'react';
import { Note } from './Models/note.model';
import Header from './Components/Header';
import NotesList from './Components/NotesList';
import CreateNotes from './Components/CreateNotes';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
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
            <CreateNotes notes={ notes } setNotes={ setNotes } />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
