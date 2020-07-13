/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { addTag } from '../../store/actions/eventActions';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({ method }) {
  const [value, setValue] = React.useState(null);
  const tags = useSelector(state => state.events.tags)
  const currentTags = tags.filter(tag => tag.method === method);
  const dispatch = useDispatch();


  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
          // add newValue to server
          dispatch(addTag({ title: newValue, method }))
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
          //add newValue.inputValue to server
          dispatch(addTag({ title: newValue.inputValue, method }))
        } else {
          setValue(newValue);
        }

      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Добавить тег "${params.inputValue}"`,
          });
        }
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="tag"
      options={currentTags}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Тег" />
      )}
    />
  );
}