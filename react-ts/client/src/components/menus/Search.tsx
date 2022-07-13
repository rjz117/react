import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'
import './menus.css';

const Search = () => {
  const {t} = useTranslation();
  const history = useNavigate();
  return (
    <div className='menus'>
      <h2>{t('search')}</h2>
      <button onClick={() => history('/home')}>{t('Home')}</button>
    </div>
  )
}

export default Search