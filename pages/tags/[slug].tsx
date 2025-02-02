import type { GetServerSideProps } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "../../utils/api";
import Articles from "../../components/articles";

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <div>
      <Head>
        <title>Results for tag: {slug}</title>
      </Head>
      <div className="flex flex-col items-center">
        <div className="mt-4 w-auto items-center card border border-primary">
          <div className="card-body p-4">
            <p className="card-title">Results for tag: {slug}</p>
          </div>
        </div>
      </div>
      <Articles posts={posts} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = getAllPosts();
//   const tags = new Set(posts.map((post) => post.meta.tags).flat());
//   const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));
//
//   return {
//     paths,
//     fallback: false,
//   };
// };
