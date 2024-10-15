import PostCard from "@/components/post-card";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";
import { Prisma } from "@prisma/client";

const getAllPosts = async (currentPage: number, searchTerm?: string) => {
  try {
    const where: Prisma.PostWhereInput = {};
    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }
    const perPage = 6;
    const skip = (currentPage - 1) * perPage;
    const totalPosts = await db.post.count({
      where,
    });
    const totalPages = Math.ceil(totalPosts / perPage);
    const prev = currentPage > 1 ? currentPage - 1 : null;
    const next = currentPage < totalPages ? currentPage + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      data: posts,
      prev,
      next,
    };
  } catch (error) {
    logger.error("Ops, algo correu mal: ", { error });
    return { data: [], prev: null, next: null };
  }
};

const Home = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const currentPage = parseInt(searchParams?.page ?? "1");
  const searchTerm = searchParams?.q;
  const {
    data: postsData,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);

  return (
    <main className="grid gap-6 md:grid-cols-2 auto-rows-max">
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {prev && (
        <Link
          href={{
            pathname: "/",
            query: { page: prev, q: searchTerm },
          }}
        >
          Previous
        </Link>
      )}
      {next && (
        <Link
          href={{
            pathname: "/",
            query: { page: next, q: searchTerm },
          }}
        >
          Next
        </Link>
      )}
    </main>
  );
};

export default Home;
