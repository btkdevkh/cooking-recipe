import { Link } from 'react-router-dom';
import '../assets/css/Recipes.css';

export default function Recipes({recipes}) {

  if(recipes.length === 0) {
    return <div>No recipes found...</div>
  }

  return (
    <div className="recipes">
      {recipes.map(recipe => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
