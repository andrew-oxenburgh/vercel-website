import { Summary } from "../components/Summary";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
      <>
        {posts.map((post) => (
            <Summary key={post.link} post={post} />
        ))}
      </>
  );
}
