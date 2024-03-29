import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// dynamic routing metadata using async
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: { params: { productId: string } }) {
  return <h1>Details about product {params.productId}</h1>;
}
