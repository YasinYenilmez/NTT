import React, { useEffect, useState } from "react";
import CardList from "./component/cards/CardList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [datak, setDatak] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    //fetch("https://snetmyapp.herokuapp.com/case1")
    fetch("https://snetmyapp.herokuapp.com/case2")
      .then((response) => response.json())

      .then((data) => {
        setData(data.offerList);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    //fetch("https://snetmyapp.herokuapp.com/case2")
    fetch("https://snetmyapp.herokuapp.com/case1")

      .then((response) => response.json())

      .then((datak) => {
        setDatak(datak.offerList);
      })
      ;
  }, []);


  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }


  return <CardList datas={data} dataks={datak} />;

}

export default App;
