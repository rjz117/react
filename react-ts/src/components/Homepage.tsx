import "./menus/menus.css";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const {t} = useTranslation();

  
  return (
    <div className="menus">
      <h2>{t('homepage')}</h2>
    </div>
  );
};

export default Homepage;
