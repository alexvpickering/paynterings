import React from "react";
import {
  FormContainer,
  Form,
  Input,
  Button,
  S3Uploader,
  UploadLabel,
  HalfGrid
} from "../Form/Form";
import MonthPicker from "../Form/MonthPicker";

class AddForm extends React.Component {
  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.onSubmit}>
          <h1>Add Post</h1>
          <label htmlFor="title">Title:</label>
          <Input type="text" id="title" />
          <HalfGrid>
            <MonthPicker />
            <UploadLabel htmlFor="upload">Choose a video</UploadLabel>
            <S3Uploader id="upload" />
          </HalfGrid>

          <Button type="submit">Add Post</Button>
        </Form>
      </FormContainer>
    );
  }
}

export default AddForm;
