/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
          // add newValue to server
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
          //add newValue.inputValue to server
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
      id="free-solo-with-text-demo"
      options={outcomeArr}
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

const outcomeArr = [
  { title: "Супермаркеты", method: "outcome" },
  { title: "Отдых и развлечения", method: "outcome" },
  { title: "Транспорт", method: "outcome" },
  { title: "Образование", method: "outcome" },
  { title: "Красота и здоровье", method: "outcome" },
  { title: "ЖКХ", method: "outcome" },
  { title: "Связь и коммуникации", method: "outcome" },
  { title: "Дом и ремонт", method: "outcome" },
  { title: "Рестораны и кафе", method: "outcome" },
  { title: "Госуслуги", method: "outcome" },
  { title: "Перевод и снятие наличных", method: "outcome" },
  { title: "Другое", method: "outcome" },
  { title: "Одежда и аксессуары", method: "outcome" }
]