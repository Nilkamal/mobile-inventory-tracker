import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "../pages/mobiles/Create";
import Mobiles from "../pages/mobiles";

export default function Router(props) {
  return (
    <Routes>
      <Route path='/mobiles' element={<Mobiles />}></Route>
      <Route path='/mobiles/create/:id' element={<Create />}></Route>
      <Route path='/mobiles/create' element={<Create />}></Route>
    </Routes>
  );
}
