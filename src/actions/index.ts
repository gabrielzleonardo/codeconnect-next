"use server";
import { revalidatePath } from "next/cache";
import db from "../../prisma/db";

export async function incrementThumbsUp(post: Post) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  await db.post.update({
    where: { id: post.id },
    data: { likes: { increment: 1 } },
  });
  revalidatePath(`/post/${post.id}`);
  revalidatePath(`/`);
}
