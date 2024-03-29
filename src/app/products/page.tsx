import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products list",
};

export default function ProductList() {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>{" "}
      {/* Link components */}
    </>
  );
}

// (replace) props replace the history state to base URL/homepage