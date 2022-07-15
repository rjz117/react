import { useEffect, useState } from "react";
import { getData } from "../../services/getPageData";


type Post = {
    userId: number;
    id: number;
    title: string;
    body: string
  }

const useScroolHook = (pageNmber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);    
    const request = async () => {
      const response = await getData(pageNmber, 20);
      setPosts(prevPosts => {
        return [...new Set([...prevPosts, ...response.results])]})
      setHasMore(response.next.page !== 0);
    };
    request();
    setLoading(false);
  }, [pageNmber]);

  return { loading, error, posts, hasMore };
};

export default useScroolHook;
