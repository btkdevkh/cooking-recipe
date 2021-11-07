import { useEffect, useState } from 'react';
import Recipes from '../../components/Recipes';
import { projectFirestore } from '../../firebase/config';
import '../../assets/css/Home.css';

export default function Home() {
  const [datas, setDatas] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').onSnapshot(snapshot => {
      if(snapshot.empty) {
        setError("No recipes exists !");
        setIsPending(false);
      } else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })

        setDatas(results);
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message);
      setIsPending(false);
    })

    return () => unsub();
  }, [])

  return (
    <section className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h4>Loading...</h4>}
      {datas && <Recipes recipes={datas} />}
    </section>
  )
}
