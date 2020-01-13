import React from "react";
import * as rtl from "@testing-library/react";
import HomePage from "../components/HomePage";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("render pls", () => {
  it("shallow renders", () => {
    const wrapper = shallow(<HomePage />);
    const head = wrapper.getByText(/Dad/gi);

    expect(head).ToBeVisible();
  });
});
