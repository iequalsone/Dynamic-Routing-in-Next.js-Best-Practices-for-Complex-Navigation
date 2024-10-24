// File: pages/blog/[slug].tsx

import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

interface BlogPostProps {
  title: string;
  content: string;
}

export default function BlogPost({ title, content }: BlogPostProps) {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchAllBlogPosts(); // Fetch your blog posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug }, // Match [slug]
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchBlogPost(params?.slug as string);
  return {
    props: {
      title: post.title,
      content: post.content,
    },
  };
};
