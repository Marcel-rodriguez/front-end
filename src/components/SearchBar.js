import React, {useState} from 'react';

function SearchBar({specificRecipe}) {
    const [term, setTerm] = useState('')
    const [searchMessage, setSearchMessage] = useState(false)

    const handleTextInput = (e) => {
        setTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        specificRecipe(term)
        if(term === ''){
            setSearchMessage(false)
        } else {
            setSearchMessage(true)
        }
    }

  return <div className='search-container'>
      <form onSubmit={handleSearch} className='search-form'>
          <input placeholder='Search...' onChange={handleTextInput} name='search-input' value={term} />
          <button>🔎</button>
          <br />
          {searchMessage && <p>Showing results for {term}...</p>}
          {!searchMessage && <p>Showing All Recipes - Search for category, name, or family member</p>}
          
      </form>
  </div>;
}

export default SearchBar;
