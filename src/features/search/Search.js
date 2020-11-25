import { setSearchTerm, clearSearchTerm } from './searchSlice.js';

export const Search = ({ searchTerm, dispatch }) => {
  
  const onSearchChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
  <>
    <input type="text" value={searchTerm} onChange={onSearchChangeHandler} />
    <button onClick={onClearSearchTermHandler}>X</button>
  </>
)};