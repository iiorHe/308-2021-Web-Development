import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostFromSlug, getSlugs, PostMeta } from "../../utils/api";
import Comments from "../../components/comments";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <div className="mx-16">
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={post.meta.thumb}
            alt={post.meta.title}
            width="800"
            height="800"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.meta.title}</h2>
          <p className="prose">{post.meta.excerpt}</p>
          <div className="card-actions justify-end">
            {post.meta.tags.map((tag) => (
              <Link
                className="badge badge-info"
                key={tag}
                href={`/tags/${tag}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5 mx-5 prose-base">
        {" "}
        <MDXRemote {...post.source} components={{ Image }} />
        <Comments />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {});

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
