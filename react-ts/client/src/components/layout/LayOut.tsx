import { Fragment } from "react";
import SideBar from "../sidebar/SideBar";
import Search from "../menus/Search";
import Manage from "../menus/Manage";
import Dashboard from "../menus/Dashboard";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import classes from "./Layout.module.css";
import NotFound from "../NotFound";
import Authrization from "../auth/Authrization";
import Unauthorized from "../Unauthorized";

const LayOut = () => {
  return (
    <Fragment>
      <SideBar />
      <div className={classes.main}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<Authrization allowedRoles={["admin", "regular"]} />}>
            <Route path="/search" element={<Search />} />
          </Route>
          <Route element={<Authrization allowedRoles={["admin"]} />}>
            <Route path="/manage" element={<Manage />} />
          </Route>
          <Route element={<Authrization allowedRoles={["admin", "regular"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default LayOut;
