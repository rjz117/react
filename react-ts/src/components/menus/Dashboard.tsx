import './menus.css';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const {t} = useTranslation();
  const history = useNavigate();
  return (
    <div className='menus'>
      <h2>{t('dashboard')}</h2>
      <button onClick={() => history('/home')}>{t('Home')}</button>
    </div>
  )
}

export default Dashboard