import PostItem from "./post-item";
import classes from './posts-list.module.css';

function PostsList(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} posts={post} />
      ))}
    </ul>
  );
}

export default PostsList;
