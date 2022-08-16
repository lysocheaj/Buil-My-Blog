import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Dummy_Data = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  slug: "getting-started-with-nextjs",
  date: "2022-08-15",
  content: "# This is the first post",
};

function PostContent() {
  const imagePath = `/images/posts/${Dummy_Data.slug}/${Dummy_Data.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={Dummy_Data.title} image={imagePath} />
      <ReactMarkdown>{Dummy_Data.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
