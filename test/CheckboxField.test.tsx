import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import CheckboxField from "../src/components/CheckboxField";

describe('CheckboxField', () => {
  it('should render CheckboxField', () => {
      render(
            <SimpleForm>
                <CheckboxField
                    id={'smoking'}
                    source={'smoking'}
                    label={'흡연 여부'}
                />
            </SimpleForm>
      );

      expect(screen.getByLabelText('흡연 여부')).toBeInTheDocument();
  });

    it('should render CheckboxField', () => {
        render(
            <SimpleForm>
                <CheckboxField
                    id={'smoking'}
                    source={'smoking'}
                    label={'흡연 여부'}
                />
            </SimpleForm>
        );

        const checkboxElement = screen.getByLabelText('흡연 여부');

        fireEvent.click(checkboxElement);

        expect(checkboxElement).toBeChecked();
    });
});
