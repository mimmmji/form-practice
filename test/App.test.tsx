
// @jest-environment jsdom

import React from "react";
import {fireEvent, render} from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";
import { max, min, required } from "../src/utils/Validation";
import '@testing-library/jest-dom';

describe('SimpleForm', () => {
    it('should render TextField', () => {
        const { getByLabelText } = render(
            <SimpleForm>
                <TextField
                    source={'name'}
                    label={'name'}
                    id={'name'}
                />
            </SimpleForm>
        );
        const input = getByLabelText("name");
        expect(input).toBeInTheDocument();
    })

    it('should validate length of TextField', () => {
        const { getByTestId, getByLabelText } = render(
            <SimpleForm>
                <TextField
                    source={'name'}
                    label={'name'}
                    id={'name'}
                    validate={[min(5), max(10), required()]}
                />
            </SimpleForm>
        );

        fireEvent.change(getByLabelText('name'), { target: { value: '1234' } });

        const errorElement = getByTestId('error-message');
        expect(errorElement).toBeInTheDocument();
    })


    it('should submit if there are no errors', () => {
        const inputValues = { name: 'minji', password: '12345' };

        const { getByLabelText, getByText, getByTestId } = render(
          <SimpleForm>
            <TextField id={'name'} source={'name'} label={'이름'} validate={[min(5), max(10), required()]} />
            <TextField id={'password'} source={'password'} label={'비밀번호'} validate={[min(5), max(10), required()]} />
          </SimpleForm>
        );

        fireEvent.change(getByLabelText('이름'), { target: { value: inputValues.name } });
        fireEvent.change(getByLabelText('비밀번호'), { target: { value: inputValues.password } });

        fireEvent.submit(getByText('제출'));

        expect(() => getByTestId('error-message')).toThrow();
        expect(getByLabelText('이름')).toHaveValue(inputValues.name);
        expect(getByLabelText('비밀번호')).toHaveValue(inputValues.password);
      });

});
