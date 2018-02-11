import React from "react";
import { FormContainer, Form } from "../Form/Form";
import { Input, FileInput, FileInputLabel, InlineInputs } from "../Form/Inputs";
import LoaderButton from "../Form/LoaderButton";
import MonthPicker from "../Form/MonthPicker/MonthPicker";
import config from "../../config";

import { truncateString } from "../../utils/utils";

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      file: null,
      title: "",
      year: null,
      month: null
    };
  }

  validateForm() {
    return this.state.title.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  setDate = (month, year) => {
    this.setState({ month, year });
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (this.state.file && this.state.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert("Please pick a file smaller than 1GB");
      return;
    }

    this.setState({ isLoading: true });
  };

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.onSubmit}>
          <h1>Add Post</h1>
          <label htmlFor="title">Title:</label>
          <Input
            type="text"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <InlineInputs>
            <MonthPicker
              year={this.state.year}
              month={this.state.month}
              setDate={this.setDate}
            />
            <FileInputLabel htmlFor="upload">
              {this.state.file
                ? truncateString(this.state.file.name, 22)
                : "Choose a video"}
            </FileInputLabel>
            <FileInput
              id="upload"
              type="file"
              onChange={this.handleFileChange}
            />
          </InlineInputs>

          <LoaderButton
            type="submit"
            disabled={!this.validateForm()}
            isLoading={this.state.isLoading}
            text="Add Post"
            loadingText="Add Post"
          />
        </Form>
      </FormContainer>
    );
  }
}

export default AddForm;
