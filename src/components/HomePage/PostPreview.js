import React from "react";
import styled from "styled-components";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const PreviewWrapper = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.border.radius};
  border: 1px solid ${props => props.theme.color.gray};
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Title = styled.div`
  /* background: green; */
  padding: 20px;
`;

const Date = styled.div`
  /* background: red; */
  white-space: nowrap;
  padding: 20px;
  color: gray;
  text-align: right;
`;

class PostPreview extends React.Component {
  render() {
    return (
      <PreviewWrapper>
        <Video loop preload="metadata">
          <source src={this.props.video} />
        </Video>
        <TextWrapper>
          <Title>{this.props.title}</Title>
          <Date>{this.props.date}</Date>
        </TextWrapper>
      </PreviewWrapper>
    );
  }
}

export default PostPreview;
