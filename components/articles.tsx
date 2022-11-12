import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "../utils/api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="flex flex-row flex-wrap justify-center">
      {posts.map((post) => (
        <li
          className="card border border-primary m-4 w-96 bg-base-100 shadow-xl"
          key={post.slug}
        >
          <div className="card">
            <figure>
              <Link href={`/posts/${post.slug}`}>
                <Image
                  src={post.thumb}
                  alt={post.title}
                  width={500}
                  height={500}
                />
              </Link>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <div className="card-actions justify-end">
                {post.tags.map((tag) => (
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
        </li>
      ))}
    </ul>
  );
}
