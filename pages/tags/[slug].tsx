import type { GetStaticProps, GetStaticPaths } from "next";
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
      <div className="card-body">
        <h1 className="card-title flex flex-col items-center">
          <b>Tag: {slug}</b>
        </h1>
      </div>
      <Articles posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
