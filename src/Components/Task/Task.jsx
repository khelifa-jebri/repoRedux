import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  completeTask,
  editTask,
} from "../../redux/Actions/actionTodo";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./Task.css";
import { BsFillTrashFill } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";

function Task({ todoTask, className }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(completeTask(todoTask.id));
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [edit, setEdit] = useState(todoTask.description);


  return (
    <div className="taskTodo">
      <div>
        <div className={todoTask.isDone ? "todoMessagetrue" : "todoMessagefalse"}>
          {todoTask.description}
        </div>
        <div className="taskButtons">
          <FaRegEdit
            style={{
              color: "blue",
              fontSize: "30px",
              cursor: "pointer",
              margin: "10px",
            }}
            onClick={() => toggle()}
          />
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader
              toggle={toggle}
              onClick={() => setEdit(todoTask.description)}
            >
              Edit your todo task{" "}
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label>Task:</Label>
                  <Input
                    type="text"
                    name="title"
                    required
                    placeholder="Description of a task"
                    value={edit}
                    onChange={(e) => setEdit(e.target.value)}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => { dispatch(editTask({ id: todoTask.id, description: edit })); toggle() }}
              >
                Save
            </Button>
              <Button
                color="secondary"
                onClick={() => {
                  toggle();
                  setEdit(todoTask.description);
                }}
              >
                Cancel
            </Button>
            </ModalFooter>
          </Modal>

          <div>
            {todoTask.isDone ? (
              <CgCloseR
                onClick={() => handleCheck()}
                style={{
                  color: "red",
                  fontSize: "30px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
            ) : (
              <AiOutlineFileDone
                onClick={() => handleCheck()}
                style={{
                  color: "green",
                  fontSize: "30px",
                  cursor: "pointer",
                  margin: "10px",
                }}
              />
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <BsFillTrashFill
              onClick={() => dispatch(deleteTask(todoTask.id))}
              style={{
                color: "red",
                fontSize: "30px",
                cursor: "pointer",
                margin: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
