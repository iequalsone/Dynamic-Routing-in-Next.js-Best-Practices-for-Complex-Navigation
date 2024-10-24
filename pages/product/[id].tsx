// File: pages/product/[id].tsx

import Head from "next/head";

interface ProductPageProps {
  product: {
    id: string;
    name: string;
    description: string;
  };
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </>
  );
}
