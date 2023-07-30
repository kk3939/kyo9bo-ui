import React from "react";
import { styled } from "styled-components";

type Props = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

const Component = styled.textarea`
  padding: 10px;
  min-height: 120px;
  min-width: 300px;
  font-size: 1rem;
  border: 2px solid #cbcbcb;
  border-radius: 5px;
  font-family: "メイリオ";
`;

const TextArea = (props: Props) => {
  return (
    <Component
      style={props.style}
      className="kyo9bo-ui__text-area"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextArea;
