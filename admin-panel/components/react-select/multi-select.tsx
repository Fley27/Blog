import React from 'react';
import chroma from 'chroma-js';

import { ColourOption } from '../../docs/data.ts';
import Select, { StylesConfig } from 'react-select';

const colourStyles: StylesConfig<ColourOption, true> = {
    control: (styles) => ({ ...styles, backgroundColor: 'rgb(223, 223, 223);', height: 60, fontSize: 15   }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
        return {
        ...styles,
        backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? data.color
            : isFocused
            ? color.alpha(0.1).css()
            : undefined,
        color: isDisabled
            ? '#ccc'
            : isSelected
            ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled
            ? isSelected
                ? data.color
                : color.alpha(0.3).css()
            : undefined,
        },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

const MultiSelect = ({handleChange, name, options}) => (
    <Select
        closeMenuOnSelect={false}
        isMulti
        options={options}
        styles={colourStyles}
        onChange = {handleChange}
        name = {name}
    />
);

export default MultiSelect;