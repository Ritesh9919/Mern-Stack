import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  async function getData() {
    const res = await fetch('http://localhost:8000/data');
    const datas = await res.json();
    setData(datas);
  }

  useEffect(()=> {
    getData();
  },[]);

  return (
    <div className="App">
      <h1>{data.name}</h1>
    </div>
  );
}

export default App;
