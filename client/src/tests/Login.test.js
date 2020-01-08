import React from 'react';
import * as rtl from '@testing-library/react';
import Login from '../components/Login';
import "@testing-library/jest-dom/extend-expect";


test('render Login form', () => {
    const wrapper = rtl.render(<Login />);

    const form = wrapper.getByTestId(/login-form/i);
    expect(form).toBeVisible();
})