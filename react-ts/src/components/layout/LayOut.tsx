import { Fragment } from "react";
import SideBar from "../sidebar/SideBar";
import Search from "../menus/Search";
import Manage from "../menus/Manage";
import Dashboard from "../menus/Dashboard";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import classes from './Layout.module.css'

const LayOut = () => {
  return (
    <Fragment>
      <SideBar />
      <div className={classes.main}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default LayOut;
