import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoForUsername } from "./api/TodoApiService";
import { ErrorMessage, Field, Form, Formik } from "formik";

const TodoComponent = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const retrieveTodo = () => {
    if (id != null) {
      getTodoForUsername("Sambo", id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSubmit = (values: Todo) => {
    console.log(values);
  };

  const validateForm = (values: Todo) => {
    let errors = {
      description: "",
      targetDate: "",
    };

    if (values.description.length < 5) {
      errors.description = "Enter atleast 5 characters";
    }

    if (values.targetDate == null) {
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
          {(props) => (
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
              <button className="btn btn-success m-5" type="submit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export type Todo = {
  id?: number;
  username?: string;
  description: string;
  targetDate: string;
  done?: boolean;
};

export default TodoComponent;
