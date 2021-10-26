import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/css/Searchbar.css';

export default function Searchbar() {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`/search?q=${keyword}`)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <i className="fas fa-search"></i>
      <input
        type="text"
        id="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
    </form>
  )
}
