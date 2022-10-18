import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Pages/Loginpage/Login";
import Loginform from "../Pages/Loginpage/Loginform";
import Signupform from "../Pages/Loginpage/Signupform";
import PageNotFound from "../Pagenotfound/PageNotFound"
import Base from "../layout/Base";

const Routs = () => {
  return (
    <div className="Routs"> 
    <BrowserRouter>
    <Base>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/signupfrom" element={<Signupform />} />
        <Route path="*" exact={true} element={<PageNotFound />} />
      </Routes>
      </Base>
      </BrowserRouter>
    </div>
  );
};

export default Routs;
