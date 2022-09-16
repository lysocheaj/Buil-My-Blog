import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

// import settings from "./settings.json";
// settings.debug === true;
// settings.dry === 2;

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>Sochea' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomePage;
