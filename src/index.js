// Har doim srcni ichida index.js yaratiladi

import React from "react"; // reactni narsalarini olib keltiradi
import ReactDOM from "react-dom"; // rendor qlish uchun kerak
import App from "./components/App.js";
import SearchBar from "./components/SearchBar.js";

// const App=()=>{

// }

ReactDOM.render(<App />, document.querySelector("#root"));
