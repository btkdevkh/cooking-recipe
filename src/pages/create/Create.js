import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/Create.css';
import { projectFirestore } from '../../firebase/config';

export default function Create() {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  const ingredientRef = useRef(null);
  const history = useHistory();

  const handleAdd = (e) => {
    e.preventDefault();

    const ingred = ingredient.trim();

    if(ingred && !ingredients.includes(ingred)) {
      setIngredients(oldIngred => [...oldIngred, ingred]);
    }

    setIngredient('');
    ingredientRef.current.focus();
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const recipe = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' min'
    }

    try {
      await projectFirestore.collection('recipes').add(recipe);

      history.push('/');
    } catch(err) {
      setError(err);
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      {error && <h3>{error}</h3>}
      <label>
        <span>Recipe Title : </span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        <span>Recipe Ingredients : </span>
        <div className="ingredients">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            ref={ingredientRef}
          />
          <button className="ingBtn" onClick={handleAdd}>Add</button>
        </div>
      </label>
      <div className="ingred-output">Current ingredients: {ingredients.map(x => <em key={x}>{x}, </em>)}</div>

      <label>
        <span>Recipe Method : </span>
        <textarea
          type="text"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          required
        ></textarea>
      </label>
      <label>
        <span>Recipe Cooking Time (min) : </span>
        <input
          type="number"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  )
}
