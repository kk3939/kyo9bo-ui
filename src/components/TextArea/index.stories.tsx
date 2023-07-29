import React, { useState } from "react";

import  TextArea  from "./index";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "TextArea",
  component: TextArea,
} as Meta<typeof TextArea>;

export const Default: StoryFn<typeof TextArea> = () => {
  const [value, setValue] = useState("");
  return (
    <TextArea
      placeholder="placeholder"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
