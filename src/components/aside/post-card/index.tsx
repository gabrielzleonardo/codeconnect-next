import Image from "next/image";
import Avatar from "@/components/avatar";

interface PostCard {
  post: Post;
}
const PostCard = ({ post }: PostCard) => {
  return (
    <article>
      <header>
        <figure>
          <Image
            src={post.cover}
            alt={"Capa do post de título " + post.title}
            width={438}
            height={133}
          />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};

export default PostCard;
