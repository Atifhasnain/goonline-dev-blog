import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Geek SG",
  facebook: "https://goonline.dev/",
  github: "https://geek.sg/",
  linkedin: "https://goonline.dev/",
};

story.add("Footer", () => <Footer {...data} />);
