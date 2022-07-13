import { useState, useEffect } from "react";
import Page from "./Page";
import Pagination from "./Pagination";
import getPageData from "../services/getPageData";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await getPageData();
      setPosts(res);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate: (p: number) => void = (pageNumber) =>
    setCurrentPage(pageNumber);
//className="container mt-5"

  return (
    <div >
      <h1 className="text-primary mb-3">Data </h1>
      <Page posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        cPage = {currentPage}
      />
    </div>
  );
};

export default Home;
