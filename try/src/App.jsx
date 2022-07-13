import React from "react";
import axios from "axios";
import './App.css';
import { BrowserRouter, Route,Link, Routes } from 'react-router-dom';
import Next from './Next'

function App() {
	const [data, setData] = React.useState();
	const url = "http://127.0.0.1:8000";

	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	};
	// return (
	// 	<div>
	// 		<div>ここに処理を書いていきます</div>
	// 		{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
	// 	</div>
	// );

  const Home = () => {
    return (
      <div>
       <h1>
         元ページ
       </h1>
       <Link to="/Next">遷移</Link>
     </div>
   )
}

  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Next" element={<Next />} />
       </Routes>
    </BrowserRouter>
   )



}

// export default App;

// 最初に表示されている遷移元ページ
// const Home = () => {
//    return (
//      <div>
//        <h1>
//          元ページ
//        </h1>
//        <Link to="/Next">遷移</Link>
//      </div>
//    )
// }

// メイン画面（pathによって表示数画面を変更）
// const App = () => {
//   return (
//    <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Next" element={<Next />} />
//       </Routes>
//    </BrowserRouter>
//   )
// };

export default App;