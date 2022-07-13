
type Post = {
    id:string;
    title:string
}

const Page:React.FC<{ posts:Post[], loading:boolean }> = ({ posts, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Page;