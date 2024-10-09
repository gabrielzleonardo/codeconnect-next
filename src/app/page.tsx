import PostCard from "@/components/aside/post-card";

const getPosts = async () => {
  const postsData = await fetch("http://localhost:5000/posts");
  return (await postsData.json()) as Post[];
};

const Home = async () => {
  const postsData = await getPosts();
  // return <pre className="text-white">{JSON.stringify(postsData, null, 2)}</pre>;

  return (
    <div>
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
