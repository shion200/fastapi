// import './Next.css';
import { BrowserRouter, Route,Link, Routes } from 'react-router-dom';
import React from "react";
import axios from "axios";

function App() {
	const [data, setData] = React.useState();
	const url = "http://127.0.0.1:8000/Next";

  const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	};
  
  const Next = () => {
        return (
          <div>
            {data.Second}
            <h1>
              遷移
            </h1>
            <h2>
              Hello World!!
            </h2>
          </div>
        )
      }

}

export default Next;