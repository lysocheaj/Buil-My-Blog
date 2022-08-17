import AllPosts from "../../components/posts/all-posts";

function AllPostsPage() {
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
    },
  ];

  return <AllPosts posts={Dummy_Data} />;
}

export default AllPostsPage;
