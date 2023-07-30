import React, { useState } from "react";

import InputText from "./index";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "InputText",
  component: InputText,
} as Meta<typeof InputText>;

export const InputTextControl: StoryFn<typeof InputText> = () => {
  const [value, setValue] = useState("");
  return (
    <InputText
      placeholder="placeholder"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
