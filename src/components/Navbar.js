import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';
import '../assets/css/Navbar.css';

export default function Navbar() {
  const { color } = useTheme();

  return (
    <header className="navbar" style={{ background: color }}>
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
