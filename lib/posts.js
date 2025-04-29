import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export function loadPost(slug) {
  const filename = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "content", filename));
}

export async function getPost(slug) {
  const source = loadPost(slug);

  // retrurn { frontmatter, content }
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
}

export async function getPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  return await Promise.all(
    files.map(async (filename) => {
      const { frontmatter } = await getPost(filename);

      return {
        frontmatter,
        slug: filename.replace(".mdx", ""),
      };
    })
  );
}
