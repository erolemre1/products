import React from 'react';
import style from './styles.module.css'

const Search = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.filterSearchWrapper}>
      <img src="/assets/Search.svg" alt="Arama"  />
      <input 
        type="text" 
        placeholder={'Search'} 
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
