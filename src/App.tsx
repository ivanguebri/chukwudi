import "./App.css";

import { Route, Routes } from "react-router";
import HomePage from "./modules/home/pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
