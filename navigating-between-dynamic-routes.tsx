// Navigating between pages using next/link
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      ))}
    </div>
  );
}
