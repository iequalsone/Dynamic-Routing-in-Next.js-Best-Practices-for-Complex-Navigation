// File: pages/docs/[...slug].tsx

import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

interface DocPageProps {
  title: string;
  content: string;
}

export default function DocPage({ title, content }: DocPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <article>{content}</article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await fetchAllDocPaths(); // Fetch available documentation paths
  const paths = docs.map((doc) => ({
    params: { slug: doc.pathSegments },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const docContent = await fetchDocContent(
    (params?.slug as string[]).join("/")
  );
  return {
    props: {
      title: docContent.title,
      content: docContent.content,
    },
  };
};
