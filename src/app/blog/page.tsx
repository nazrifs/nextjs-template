import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog", // display only this title no template
  },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
