import { Link } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';
import trashcan from '../assets/img/trashcan.svg';
import '../assets/css/Recipes.css';

export default function Recipes({recipes}) {

  if(recipes.length === 0) {
    return <div>No recipes found...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  }

  return (
    <div className="recipes">
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={trashcan}
            alt="delete icon"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  )
}
