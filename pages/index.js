import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

function HomePage() {

  const Dummy_Data = [
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt: "The NextJS is react framwork for production.",
      date: "2022-08-15",
      slug: "getting-started-with-nextjs",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt: "The NextJS is react framwork for production.",
      date: "2022-08-15",
      slug: "getting-started-with-nextjs",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt: "The NextJS is react framwork for production.",
      date: "2022-08-15",
      slug: "getting-started-with-nextjs",
    }
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={Dummy_Data} />
    </Fragment>
  );
}

export default HomePage;
