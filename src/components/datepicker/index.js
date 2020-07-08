import React from 'react';
import DatePicker from 'react-date-picker';

export default function Datepicker({ value, onChange, dark }) {
  const className = dark ? 'form__input form__input--dark' : 'form__input form__input--light'

  return (
    <div>
      <DatePicker
        className={className}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}