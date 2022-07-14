import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import classes from "./SideBar.module.css";
import { userContext } from "../../context/user-context";
import { useTranslation } from "react-i18next";
import { getMenusData } from "../../services/Menus";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

type userMenus = {
  _id: string;
  name: string;
  flag: string;
};

const SideBar = () => {
  const [myMenus, setMyMenus] = useState<userMenus[]>([]);
  const userCtx = useContext(userContext);
  const role = userCtx.role;
  const { t } = useTranslation();

  const getMenus = useCallback(async () => {
    const menus = await getMenusData(role);
    setMyMenus(menus);
  }, [role]);

  useEffect(() => {
    getMenus();
  }, [getMenus]);

  let mn: ReactNode;
  if (myMenus.length === 0) {
    mn = <p>Loading..</p>;
  } else {
    mn = myMenus.map((menu) => {
      return (
        <NavLink
          to={`./${menu.name}`}
          key={menu._id}
          style={{ textDecoration: 'none' }}
          className={(navData) => (navData.isActive ? `${classes.active}` : "")}
        >
          <h3 key={`${menu._id}h3`}>{t(`${menu.name}`)}</h3>
        </NavLink>
      );
    });
  }

  const logoutHandler = () => {
    userCtx.logout();
    Cookies.remove("auth");
  };

  return (
    <div className={classes.container}>
      <h1>{t("sidebar")}</h1>
      <h2>{t(`${role}`)}</h2>
      <div className={classes.menu}>{mn}</div>
      <button onClick={logoutHandler}>{t("logout")}</button>
    </div>
  );
};

export default React.memo(SideBar);
