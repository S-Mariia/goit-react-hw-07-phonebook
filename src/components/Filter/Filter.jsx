import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';

import { Paragraph, Input } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
      />
    </>
  );
};
