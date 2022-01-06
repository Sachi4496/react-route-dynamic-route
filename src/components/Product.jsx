import {Button,Div} from "../stylecomponents/style"
import { useState, useEffect } from "react";
export const Product = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((d) => d.json())
      .then((res) => {
        setdata(res);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns:"23% 23% 23% 23%", gap:"15px", width:"90%", margin:"auto"}}>
      {data.map((e,i)=> (
            <Div key={i}>
                <img src={e.api_featured_image} style={{width: '100ppx', height: '100px'}}/> 
                <h2><span style={{color:"red"}}>Brand:-</span> {e.brand} </h2>
                <p>category:- {e.category}</p>
                <Button>Details</Button>
            </Div>
        ))}
      </div>
    </>
  );
};
