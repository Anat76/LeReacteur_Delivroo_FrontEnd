import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Categories from "./components/Categories";

const App = () => {
  // State qui gere la data reçue
  const [data, setData] = useState();
  // State qui permet de savoir si la requete au serveur est bien arrivée
  const [isLoadind, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://site--delivroobackend--c876mslb4blp.code.run"
        );
        // je stock la reponse dans le state data
        setData(result.data);
        // je passe mon state isloading en false
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // j'appel ma fonction fetchData
    fetchData();
    // console.log("mon useEffect se render");
  }, []);
  // console.log("mon composant est render");

  return (
    <div>
      <div>
        <Header />
        {isLoadind ? (
          <p>Please Loading . . .</p>
        ) : (
          <>
            <Restaurants data={data} />
            <Categories data={data} cart={cart} setCart={setCart} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
