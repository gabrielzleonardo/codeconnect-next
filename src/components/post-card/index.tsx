import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/avatar";
import { cn } from "@/utils/cn";

interface PostCard {
  post: Post;
  highlight?: boolean;
}
const PostCard = ({ post, highlight }: PostCard) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      title={post.title}
      className={cn({
        "pointer-events-none": highlight,
      })}
    >
      <article className="rounded-lg overflow-hidden bg-gray-400 text-gray-100 w-full">
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
            />
          </figure>
        </header>
        <section className="p-4 space-y-2">
          <h2 className="font-semibold paragraph">{post.title}</h2>
          {/* <p className="paragraph-sm">{post.body}</p> */}
          <p className="paragraph-sm">{post.body}</p>
        </section>
        <footer className="px-4 flex">
          <div className="grow"></div>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};

export default PostCard;
