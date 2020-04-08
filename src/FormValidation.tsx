import React, { Component } from "react";

class FormValidation extends Component<
  {},
  {
    firstName: string;
    feedback: string;
    acceptedTerms: boolean;
    submitted: number;
    validationErrors: Record<string, string>;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: "",
      feedback: "",
      acceptedTerms: false,
      validationErrors: {},
      submitted: 0
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }
  handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name: string = target.name;
    const value = target.type === "text" ? target.value : target.checked;

    this.setState({
      [name]: value
    } as any);
  }

  handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.validateFields();
  }

  validateFields() {
    const { firstName, feedback, acceptedTerms } = this.state;

    const errors: Record<string, string> = {};

    if (!firstName) {
      errors["firstName"] = "First name cannot be empty";
    }
    if (!feedback) {
      errors["feedback"] = "Feedback cannot be empty";
    }
    if (!acceptedTerms) {
      errors["acceptedTerms"] = "Please accept terms";
    }

    this.setState({
      validationErrors: errors
    } as any);
  }

  render() {
    return (
      <>
        <section>
          <h3>Form Submit Events:</h3>
          <form onSubmit={this.handleOnSubmit}>
            <label>
              <span className="error">
                {this.state.validationErrors.firstName}
              </span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleOnChange}
              />
            </label>
            <label>
                <span className="error">{this.state.validationErrors.feedback}</span>
              <input
                type="text"
                name="feedback"
                placeholder="Feedback"
                value={this.state.feedback}
                onChange={this.handleOnChange}
              />
            </label>
            <label htmlFor="">
            <span className="error">{this.state.validationErrors.acceptedTerms }</span>
                <input 
                type="checkbox"
                name="acceptedTerms"
                checked={this.state.acceptedTerms}
                onChange={this.handleOnChange}                
                /> I accept the terms
                </label>

            <button type="submit">Submit</button>

            <p>Submitted {this.state.submitted} times!</p>
          </form>
        </section>
      </>
    );
  }
}

export default FormValidation;
