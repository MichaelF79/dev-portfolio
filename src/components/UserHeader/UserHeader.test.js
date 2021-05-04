import React from "react";
import { render } from "@testing-library/react";
import UserHeader from "./UserHeader";

describe("UserHeader tests", () => {
  it("should render", () => {
    expect(render(<UserHeader />)).toBeTruthy();
  });
});
