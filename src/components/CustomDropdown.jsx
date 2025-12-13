import React, {useState} from 'react';
import '../styles/customDropdown.css';

const CustomDropdown = ({ options, placeholder, onChange }) => {
    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
        onChange && onChange(e.target.value);
    };

    return (
        <select
            className="custom-dropdown"
            value={selected}
            onChange={handleChange}
        >
            <option value="">{placeholder}</option>

            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default CustomDropdown;