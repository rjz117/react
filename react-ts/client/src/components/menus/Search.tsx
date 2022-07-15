import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./menus.css";
import { getData } from "../../services/getPageData";
import { Fragment, useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Search = () => {
  const { t } = useTranslation();
  const history = useNavigate();
  const[page, setPage] = useState<number>(1);
  const[posts, setPosts] = useState<Post[]>([]);
  const[next, setNext] = useState<boolean>(true)
  const[previous, setPrevious] = useState<boolean>()

  const getPosts = async (pagenumber: number, limit: number) => {
    const myposts = await getData(pagenumber, limit);
    setPosts(myposts.results);
    myposts.next.page === 0 ? setNext(false) : setNext(true)
    myposts.previous.page === 0 ? setPrevious(false) : setPrevious(true);
  };
  
  const nextHandler = () => {
    setPage(prev => {
      return prev+1;
    })
  }

  const previousHandler = () => {
    setPage(prev => {
      return prev-1;
    })
  }

  useEffect(() => {
    getPosts(page, 10);
  }, [page]);

  if (posts.length > 0) {
    return (
      <Fragment>
        <div className="menus">
          <h2>{t("search")}</h2>
          <button onClick={() => history("/home")}>{t("Home")}</button>
        </div>
        <div>
          <ul>
            {posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
          <button onClick={previousHandler} disabled={!previous}>{t('previous')}</button>
          <button onClick={nextHandler} disabled={!next}>{t('next')}</button>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="menus">
      <h2>{t("search")}</h2>
      <button onClick={() => history("/home")}>{t("Home")}</button>
    </div>
  );
};

export default Search;
