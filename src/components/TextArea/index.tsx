import React from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const TextArea = (props: Props) => {
  return (
      <textarea
        style={props.style}
        className="kyo9bo-ui__text-area"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
  );
}

export default TextArea;
