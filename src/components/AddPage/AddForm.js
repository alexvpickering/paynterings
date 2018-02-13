import React from "react";
import { withRouter } from "react-router-dom";
import { FormContainer, Form } from "../Form/Form";
import { Input, FileInput, FileInputLabel, InlineInputs } from "../Form/Inputs";
import LoaderButton from "../Form/LoaderButton";
import MonthPicker from "../Form/MonthPicker/MonthPicker";
import { invokeApig, s3Upload } from "../../libs/awsLib";
import { months } from "../../utils/utils";

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
    return this.state.title.length > 0 && this.state.file;
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

    this.setState({ isLoading: true });

    try {
      const uploadedFilename = this.state.file
        ? (await s3Upload(this.state.file)).Location
        : null;

      await this.createPost({
        title: this.state.title,
        videoDate: `${months[this.state.month]} ${this.state.year}`,
        attachment: uploadedFilename
      });

      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  };

  createPost(post) {
    return invokeApig({
      path: "/posts",
      method: "POST",
      body: post
    });
  }

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
            onClick={this.handleSubmit}
            text="Add Post"
            loadingText=" adding ..."
          />
        </Form>
      </FormContainer>
    );
  }
}

// connect to store
export default withRouter(AddForm);
