import { useFetch } from '../../hooks/useFetch';
import '../../assets/css/Home.css';
import Recipes from '../../components/Recipes';

export default function Home() {
  const { datas: recipes, isPending, error } = useFetch("http://localhost:8000/recipes");

  return (
    <section className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h4>Loading...</h4>}
      {recipes && <Recipes recipes={recipes} />}
    </section>
  )
}
