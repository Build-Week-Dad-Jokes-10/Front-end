import React from "react";
import * as rtl from "@testing-library/react";
import { Login } from "../components/Login";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import JokeCardList from "../components/JokeCardList";
import { UserContext } from "../contexts/UserContext";
import Enzyme, { mount } from "enzyme";

// beforeEach(() => {
//   jest.resetModules();
// });

// const user = (
//   context = {
//     state: {
//       username: "",
//       password: ""
//     }
//   }
// ) => {
//   jest.doMock("../contexts/UserContext", () => {
//     return {
//       UserContext: {
//         Consumer: props => props.children(context)
//       }
//     };
//   });

//   return require("../components/Login").Login;
// };

test("should render login page", () => {
  const wrapper = rtl.render(<Login />);

  const form = wrapper.getByTestId(/login-form/gi);
  expect(form).toBeVisible();
});
