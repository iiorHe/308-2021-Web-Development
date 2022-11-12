import { getAllPosts, PostMeta } from "../../utils/api";
import Articles from "../../components/articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-4 w-auto items-center card border border-primary">
          <div className="card-body p-4">
            <p className="card-title">Articles</p>
          </div>
        </div>
      </div>
      <Articles posts={posts} />
    </>
  );
}

export async function getServerSideProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
