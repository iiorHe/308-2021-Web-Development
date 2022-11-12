import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostFromSlug, getSlugs, PostMeta } from "../../utils/api";
import {
  FaLink,
  FaTwitterSquare,
  FaClipboardList,
  FaTelegramPlane,
} from "react-icons/fa";
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
      <input type="checkbox" id="sharemodal" className="modal-toggle" />
      <label htmlFor="sharemodal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Share post</h3>
          <ul className="menu">
            <li>
              <Link href={"https://www.twitter.com/"}>
                <FaClipboardList size={"2em"} />
                Copy to Clipboard
              </Link>
            </li>
            <li>
              <Link href={"https://www.twitter.com/"}>
                <FaTwitterSquare size={"2em"} />
                Tweet
              </Link>
            </li>
            <li>
              <Link href={"https://www.twitter.com/"}>
                <FaTwitterSquare size={"2em"} />
                Direct message
              </Link>
            </li>
            <li>
              <Link href={"https://www.twitter.com/"}>
                <FaTelegramPlane size={"2em"} />
                Telegram
              </Link>
            </li>
          </ul>
        </label>
      </label>
      <div className="mt-5 card lg:card-side bg-base-100 shadow-xl">
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

          <div className="card-actions justify-start">
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
        <div className="self-end pb-2 pr-2">
          <label htmlFor="sharemodal" className="btn btn-circle">
            <FaLink size={"2em"} />
          </label>
        </div>
      </div>
      <div className="mt-5 mx-5 prose-base">
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
