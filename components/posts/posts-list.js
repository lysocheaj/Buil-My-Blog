function PostsList(props) {
  const { posts } = props;
  
  return (
    <ul>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsList;
