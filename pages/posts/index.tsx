import { getAllPosts, PostMeta } from "../../utils/api";
import Articles from "../../components/articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <div className="card-body">
        <h1 className="card-title flex flex-col items-center">Articles</h1>
      </div>
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
