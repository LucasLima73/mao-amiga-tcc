import { useState } from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css'; 
const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' },
    { value: 'six', label: 'Six' },
    { value: 'seven', label: 'Seven' },
    { value: 'eight', label: 'Eight' },
    { value: 'nine', label: 'Nine' },
    { value: 'ten', label: 'Ten' },
];

export const  Dualbox =()=> {
    const [selected, setSelected] = useState([]);

    return (
        <DualListBox
            options={options}
            selected={selected}
            onChange={(newValue) => setSelected(newValue)}
        />
    );
}

export const Tagifyselectdata=[
	{value:"First option", label:"First option"},
	{value:"second option", label:"second option"},
	{value:"third option", label:"third option"},
];
