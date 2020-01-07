import React from "react";
import * as rtl from "@testing-library/react";
import HomePage from "../components/HomePage";
import "@testing-library/jest-dom/extend-expect";

test("renders header and nav", () => {
  const wrapper = rtl.render(<HomePage />);

  const header = wrapper.getByText(/Dad/i);
  expect(header).toBeVisible();
});
