import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card, Button, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/Actions/actionTodo";
import "./AddItem.css";

function AddTask() {

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    task !== "" ?
      dispatch(
        addTask({
          description: task,
          isDone: false,
          id: uuidv4(),
        })
      ) : alert('Please enter a Task');
    setTask("")
  }

  return (
    <div className="Container-Style">
      <Card className="Card-Style">
        <Card.Header className="Header-Card">Checkpoint Redux</Card.Header>

        <Card.Body>
          <Card.Title>New Task</Card.Title>

          <Card.Text>
            <Form >
              <Form.Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                  <Form.Control
                    placeholder="Add task"
                    onChange={(e) => setTask(e.target.value)}
                    value={task} />

                </Col>
                <Col xs={1}>
                  <Button
                    onClick={() => handleAdd()}>
                    Add
                  </Button>
                </Col>
                <Col xs={1}></Col>
              </Form.Row>
            </Form>
          </Card.Text>
        </Card.Body>

      </Card>

    </div>
  );
}

export default AddTask;
