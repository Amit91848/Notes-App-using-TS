import * as React from 'react';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
    const titleRef = useRef<HTMLInputElement | null>();
    const textRef = useRef<HTMLTextAreaElement | null>();
    const colorRef = useRef<HTMLInputElement | null>();


  return (
      <>
        <h2>Create Notes</h2>
        <Form className="mt-3 mb-3">
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter the title for the note" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder="Enter your note" as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" placeholder="Choose the color for the note" />
            </Form.Group>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
      </>
  );
};

export default CreateNotes;
