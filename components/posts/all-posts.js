import classes from "./all-posts.module.css";
import PostsList from "./posts-list";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsList posts={props.posts} />
    </section>
  );
}

export default AllPosts;
