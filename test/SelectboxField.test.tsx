import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import SelectboxField from "../src/components/SelectboxField";

describe('SelectboxField', () => {
    it('should render SelectboxField', () => {
        const options = [
            { label: "1~3잔", value: "light drinker" },
            { label: "4~6잔", value: "average drinker" },
            { label: "7잔 이상", value: "heavy drinker" }
        ];
  
      render(
        <SimpleForm>
          <SelectboxField
            id={'drinking'} 
            source={'drinking'} 
            label={'주량'} 
            options={options}
          />
        </SimpleForm>
      );
  
      expect(screen.getByLabelText('주량')).toBeInTheDocument();
    });
  
    it('should render SelectboxField', () => {
        const options = [
            { label: "1~3잔", value: "light drinker" },
            { label: "4~6잔", value: "average drinker" },
            { label: "7잔 이상", value: "heavy drinker" }
        ];

      render(
        <SimpleForm>
          <SelectboxField
            id={'drinking'} 
            source={'drinking'} 
            label={'주량'} 
            options={options}
          />
        </SimpleForm>
      );
  
      const selectElement = screen.getByLabelText('주량');
      fireEvent.change(selectElement, { target: { value: 'average drinker' } });

    expect(selectElement).toHaveValue('average drinker');
    });
});