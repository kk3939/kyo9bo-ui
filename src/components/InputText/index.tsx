import React from "react";
import { styled } from "styled-components";

type Props = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

const Component = styled.input`
  padding: 5px 5px;
  min-height: 30px;
  min-width: 100px;
  font-size: 1rem;
  border: 2px solid #cbcbcb;
  border-radius: 5px;
  font-family: "メイリオ";
`;

const InputText = (props: Props) => {
  return (
    <Component
      style={props.style}
      className="kyo9bo-ui__input-text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputText;
