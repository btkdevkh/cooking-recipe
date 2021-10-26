import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import '../../assets/css/Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { datas: recipe, isPending, error } = useFetch("http://localhost:8000/recipes/"+id);

  return (
    <div className="recipe">
      {error && <h3>{error}</h3>}
      {isPending && <h4>Loading...</h4>}
      {recipe && (
        <div className="recipe-card">
          <h1>{recipe.title}</h1>
          <p>Durée: {recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}> * {ingredient}</li>)}
          </ul>
          <hr />
          <p>{recipe.method}</p>
        </div>
      )}
    </div>
  )
}
