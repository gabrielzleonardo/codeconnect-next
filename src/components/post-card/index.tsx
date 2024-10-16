import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/avatar";
import { cn } from "@/utils/cn";
import { incrementThumbsUp } from "@/actions";
import ThumbsUpButton from "./thumbs-up-button";
import ModalComment from "../modal-comment";

interface PostCard {
  post: Post & { blurHash?: string };
  highlight?: boolean;
}
const PostCard = ({ post, highlight }: PostCard) => {
  const handleThumbsUpClick = incrementThumbsUp.bind(null, post);
  return (
    <article className="rounded-lg grid overflow-hidden h-full bg-gray-400 text-gray-100 w-full">
      <header>
        <figure
          className={cn("bg-[#848484] p-6", {
            "py-6 px-4": highlight,
          })}
        >
          <Image
            src={post.cover}
            alt={"Capa do post de título " + post.title}
            width={438}
            height={133}
            className={cn("rounded-lg shadow-card-image mx-auto w-auto", {
              "size-full min-h-32 max-h-[300px]": highlight,
            })}
            blurDataURL={post.blurHash}
          />
        </figure>
      </header>
      <div className="p-4 grid content-between gap-y-8">
        <section className="space-y-2">
          <h2 className="font-semibold paragraph">{post.title}</h2>
          <p className="paragraph-sm">{post.body}</p>
          {!highlight && (
            <Link
              href={`/post/${post.slug}`}
              title="Ver detalhes"
              className="text-link underline"
            >
              Ver detalhes
            </Link>
          )}
        </section>
        <footer className="flex justify-between">
          <div className="flex gap-2 [&_p]:text-center [&_p]:paragraph-sm">
            <form action={handleThumbsUpClick}>
              <ThumbsUpButton />
              <p>{post.likes}</p>
            </form>
            <div>
              <ModalComment />
              <p>{post.comments.length}</p>
            </div>
          </div>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </div>
    </article>
  );
};

export default PostCard;
