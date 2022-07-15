import "./menus.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback, useRef, useState } from "react";
import useScroolHook from "../hooks/useScroolHook";

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(1);  
  const { loading, error, posts, hasMore } = useScroolHook(pageNumber);

  const observer = useRef<IntersectionObserver | null>();
  const lastElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {        
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const { t } = useTranslation();
  const history = useNavigate();

  return (
    <div className="menus">
      <h2>{t("dashboard")}</h2>
      <button onClick={() => history("/home")}>{t("Home")}</button>
      <div className="post-container">
        <ol>
          {posts.map((post, index) => {
            if (posts.length === index + 1) {
              return (                
                <li key={post.id} ref={lastElementRef}>
                  {post.title}
                </li>
              );
            }else {
              return <li key={`${post.id}+${Math.random()}`}>{post.title}</li>;
            }
          })}
        </ol>
          <div>{loading && "Loading..."}</div>
          <div>{error && "Error"}</div>
      </div>
    </div>
  );
};

export default Dashboard;
