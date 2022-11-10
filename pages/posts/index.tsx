import { getAllPosts, PostMeta } from "../../utils/api";
import Articles from "../../components/articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1 className="flex flex-col items-center">Articles</h1>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
