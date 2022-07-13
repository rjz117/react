import "./menus/menus.css";
import { useTranslation } from "react-i18next";
import Home from "../paggination/Home";

const Homepage = () => {
  const {t} = useTranslation();

  
  return (
    <div className="menus">
      <h2>{t('homepage')}</h2>
      <Home />
    </div>
  );
};

export default Homepage;
