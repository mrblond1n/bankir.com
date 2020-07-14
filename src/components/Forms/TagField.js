// /* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { addTag } from '../../store/actions/eventActions';
import { useFirestoreConnect } from 'react-redux-firebase';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({ method, setValue, value }) {
  const auth = useSelector(state => state.firebase.auth)
  const remoteTags = useSelector((state) => state.firestore.ordered.tags)
  const defaultTags = useSelector(state => state.events.tags);
  const tags = remoteTags ? defaultTags.concat(remoteTags) : defaultTags;
  const currentTags = tags.filter(tag => tag.method === method).map(({ title }) => title);
  const dispatch = useDispatch();

  useFirestoreConnect([{
    collection: 'tags',
    where: [
      ['authorId', '==', auth.uid],
    ],
  }])

  const setTag = val => {
    const title = val?.title || val
    setValue(title);
    if (!currentTags.includes(title) && title !== null) dispatch(addTag({ title, method }))
  }

  const nonExistTag = (options, params) => {
    const filtered = filter(options, params);
    if (params.inputValue !== '' && filtered.length === 0) {
      filtered.push({ text: `Добавить тег "${params.inputValue}"`, title: params.inputValue })
    }
    return filtered;
  }

  return (
    <Autocomplete
      value={value}
      onChange={(event, val) => setTag(val)}
      filterOptions={(options, params) => nonExistTag(options, params)}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="tag"
      options={[...new Set(currentTags)]}
      getOptionLabel={(option) => option?.text || option}
      renderOption={(option) => option?.text || option}
      style={{ width: 300 }}
      freeSolo
      renderInput={params => <TextField {...params} label="Тег" />}
    />
  );
}