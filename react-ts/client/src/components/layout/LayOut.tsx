import { Fragment } from "react";
import SideBar from "../sidebar/SideBar";
import Search from "../menus/Search";
import Manage from "../menus/Manage";
import Dashboard from "../menus/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import classes from './Layout.module.css'
import NotFound from "../NotFound";

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
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default LayOut;
