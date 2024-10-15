import { redirect } from "next/navigation";
import db from "../../../../prisma/db";
import { remark } from "remark";
import html from "remark-html";
import logger from "@/logger";
import PostCard from "@/components/post-card";

const getPost = async (slug: string) => {
  try {
    const post = await db.post.findUnique({
      where: { slug },
      include: { author: true },
    });

    if (!post) throw new Error(`Post with slug ${slug} not found`);

    const processedContent = await remark().use(html).process(post?.markdown);
    const parsedMarkdown = processedContent.toString();
    post.markdown = parsedMarkdown;

    return post;
  } catch (error: unknown) {
    logger.error("Failed to obtain post with slug", {
      slug,
      error,
    });
    redirect("/not-found");
  }
};

const PostPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPost(slug);
  if (!post) return <h1>Post not found</h1>;

  return (
    <div className="space-y-6">
      <PostCard post={post} highlight />
      <div className="space-y-2">
        <h2 className="paragraph-lg font-semibold text-gray-200">Código:</h2>
        <div className="bg-gray-400 p-4 text-gray-100 font-mono shadow-[0px_8px_24px_0px_rgba(0,0,0,0.24)] rounded-lg">
          <div
            className="lg:max-h-[220px] md:max-h-[260px] overflow-y-auto text-[15px] custom-scrollbar"
            dangerouslySetInnerHTML={{ __html: post.markdown }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
