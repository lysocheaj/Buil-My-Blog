import PostsList from "../posts/posts-list";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsList posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
 