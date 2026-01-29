import Container from "@/components/containers";
import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getSingleBlog } from "@/util/mdx_clean";


export const metadata: Metadata = {
  title: "Blog | Parth",
  description: "Reading a blog...",
};

type PageParams = Promise<{ slug: string }>;

export default async function SingleBlogPage({ params }: { params: PageParams }) {
  // `params` may be a Promise in some Next versions; await to unwrap it safely
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  let content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let frontmatter: Record<string, any> = {};
  try {
    const res = await getSingleBlog(slug);
    content = res.content;
    frontmatter = res.data || {};
  } catch {
    notFound();
  }

  return (
    <Container className="min-h-screen px-8 pt-24 md:p-20 md:pb-10 font-custom2 tracking-tight">
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-neutral-100/30 dark:from-neutral-900/30 to-transparent pointer-events-none"></div>

      {/* LEFT BORDER */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-neutral-100/30 dark:from-neutral-900/30 to-transparent pointer-events-none"></div>
      <h1 className="text-neutral-900 dark:text-neutral-50 text-4xl font-custom font-bold  md:text-5xl">
        {frontmatter.title ?? slug}
      </h1>

      {frontmatter.date ? (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-right mt-2">{frontmatter.date}</p>
      ) : null}

      {frontmatter.image ? (
        <div className="my-6 mx-auto max-w-2xl" >
          <Image
            src={frontmatter.image.startsWith("/public") ? frontmatter.image.replace("/public", "") : frontmatter.image}
            alt={frontmatter.title ?? ""}
            width={800}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-xl"
          />
        </div>
      ) : null}

      <div className="prose tracking-normal font-custom2 mx-auto">
        <MDXRemote source={content} />
      </div>
    </Container>
  );
}
