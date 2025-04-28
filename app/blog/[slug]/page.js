import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
const titles = {
  first: "Hello First!",
  second: "Hello Second!",
};

export async function generateMetadata({ params }, parent) {
  const description = (await parent).description ?? "Default description";

  return {
    title: titles[params.slug],
    description,
  };
}

export default function BlogPage({ params }) {
  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      <MDXRemote source={`# Hello World

      This is from Server Components!
      `}
      />
    </article>
  );
}
