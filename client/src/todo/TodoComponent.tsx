import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTodoForUsername,
  getTodoForUsername,
  updateTodoForUsername,
} from "./api/TodoApiService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAuth } from "../seurity/AuthContext";
import moment from "moment";

const TodoComponent = () => {
  const { id } = useParams();
  const { username } = useAuth();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState(moment().format("YYYY-MM-DD"));
  const retrieveTodo = () => {
    if (id != "-1") {
      getTodoForUsername("Sambo", id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSubmit = (values: any) => {
    const todo: Todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };

    if (id == "-1") {
      createTodoForUsername(username, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    } else {
      updateTodoForUsername(username, id, todo)
        .then((response) => {
          navigate("/todos");
        })
        .catch((error) => console.log(error));
    }
  };

  const validateForm = (values: Todo) => {
    let errors: { description?: string; targetDate?: string } = {};

    if (values.description.length < 5) {
      errors.description = "Enter atleast 5 characters";
    }

    if (values.targetDate == null || values.targetDate == "") {
      errors.targetDate = "Enter a target date";
    }

    return errors;
  };

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form>
            <ErrorMessage
              name={"description"}
              component={"div"}
              className={"alert alert-warning"}
            />
            <ErrorMessage
              name={"targetDate"}
              component={"div"}
              className={"alert alert-warning"}
            />
            <fieldset className="form-group">
              <label>Description</label>
              <Field type="text" className="form-control" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Target Date</label>
              <Field type="date" className="form-control" name="targetDate" />
            </fieldset>
            <button className="btn btn-success m-5" type="submit">
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export type Todo = {
  id?: string;
  username?: string;
  description: string;
  targetDate: string;
  done?: boolean;
};

export default TodoComponent;
