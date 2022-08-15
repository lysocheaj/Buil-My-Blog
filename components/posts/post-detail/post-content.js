import Image from "next/image";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const Dummy_Data = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt: "The NextJS is react framwork for production.",
  date: "2022-08-15",
  content: "# This is the first post",
};

function PostContent() {
  const imagePath = `/images/posts/${Dummy_Data.slug}/${Dummy_Data.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={Dummy_Data.title} image={imagePath} />
      {Dummy_Data.content}
    </article>
  );
}

export default PostContent;
