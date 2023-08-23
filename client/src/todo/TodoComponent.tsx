import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoForUsername } from "./api/TodoApiService";
import { Field, Form, Formik } from "formik";

const TodoComponent = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const retrieveTodo = () => {
    if (id != null) {
      getTodoForUsername("Sambo", id)
        .then((response) => {
          setDescription(response.data.todo.description);
          setTargetDate(response.data.todo.targetDate);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik initialValues={{ description, targetDate }}>
          {(props) => (
            <Form>
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export type Todo = {
  id: number;
  username: string;
  description: string;
  targetDate: string;
  done: boolean;
};

export default TodoComponent;
