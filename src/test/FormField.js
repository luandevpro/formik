import React, { Component, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import Page from "./Page";

class Basic extends Component {
  static Page = Page;
  state = {
    activeIndex: 0,
    total: 0,
  };
  componentDidMount() {
    this.setState({
      total: this.props.children.length - 1,
    });
    document.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeModal);
  }

  closeModal = () => console.log("closeModal");

  onNext = e => {
    if (this.state.activeIndex < this.state.total) {
      this.setState({
        activeIndex: this.state.activeIndex + 1,
      });
    }
    e.stopPropagation();
  };
  onPrevious = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
    });
  };
  render() {
    var { activeIndex, total } = this.state;
    console.log(total);
    var children = React.Children.toArray(this.props.children)[activeIndex];
    return (
      <div>
        <h1>Anywher in your app!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {children}
              {activeIndex === total && (
                <Fragment>
                  <button onClick={this.onPrevious}>Previous</button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onSubmit={this.onNext}
                  >
                    Next
                  </button>
                </Fragment>
              )}
              {activeIndex < total ? (
                <button type="submit" onClick={this.onNext}>
                  Next
                </button>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Basic;
