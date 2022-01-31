import React, {useState} from 'react';

function SearchBar() {
    const [term, setTerm] = useState('')

    const handleTextInput = (e) => {
        setTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(term)
        setTerm('')
    }

  return <div className='search-container'>
      <form onSubmit={handleSearch} className='search-form'>
          <input placeholder='Search...' onChange={handleTextInput} name='search-input' value={term} />
          <button>🔎</button>
      </form>
  </div>;
}

export default SearchBar;
