import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import Recipes from '../../components/Recipes';
import '../../assets/css/Search.css';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const { datas: recipes, isPending, error } = useFetch("http://localhost:8000/recipes?q="+query);

  return (
    <section className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {recipes && <Recipes recipes={recipes} />}
    </section>
  )
}
