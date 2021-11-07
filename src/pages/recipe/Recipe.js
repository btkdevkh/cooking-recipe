import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import '../../assets/css/Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'pie'
    })
  }

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot(doc => {
      if(!doc.exists) {
        setError("No recipes exists !");
        setIsPending(false);
      } else {
        setRecipe(doc.data());
        setIsPending(false);
      }
    })

    return () => unsub();

  }, [id])

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
          <button onClick={handleClick}>Update me</button>
        </div>
      )}
    </div>
  )
}
