import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Details from "./Details";
import ThemeContext from "./ThemeContext";



const App = () => {

  const theme = useState("darkblue")
  return (
    <ThemeContext.Provider value = {theme}>
    <BrowserRouter>
  <header>
  <Link to="/">Adopt Me!</Link>
</header>
  {/* <header>
  <Link to="/">Adopt Me!</Link>
</header> */}
  <Routes>
    <Route path="/details/:id" element={<Details />} />
    <Route path="/" element={<SearchParams />} />
  </Routes>
</BrowserRouter>
</ThemeContext.Provider>
  )
}

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mixed",
//     }),
//   ]);
// };

ReactDOM.render(<App/>, document.getElementById("root"));
