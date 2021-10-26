import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <Link to="/">
            <h1>Jim Cook</h1>
          </Link>
          <Searchbar />
          <Link to="/create">Create Recipe</Link>
        </nav>
      </div>
    </header>
  )
}
