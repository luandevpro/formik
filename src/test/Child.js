import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

export default class Child extends Component {
  render() {
    return (
      <div>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            {errors.email && touched.email && errors.email}
            <Field type="password" name="password" />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </div>
    );
  }
}
