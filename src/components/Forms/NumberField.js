import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            id: props.id,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="₽"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs({ value, setValue }) {
  return (
    <TextField
      label="Сумма"
      value={value}
      onChange={setValue}
      id="sum"
      InputProps={{ inputComponent: NumberFormatCustom, }}
    />
  );
}
