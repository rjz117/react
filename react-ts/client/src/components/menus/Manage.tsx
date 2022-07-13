import { useNavigate } from 'react-router-dom'
import './menus.css';
import { useTranslation } from "react-i18next";

const Manage = () => {
  const {t} = useTranslation();
  const history = useNavigate();

  return (
    <div className='menus'>
      <h2>{t('manage')}</h2>
      <button onClick={() => history('/home')}>{t('Home')}</button>
    </div>
  )
}

export default Manage