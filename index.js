export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Home({ post }) {
  return (
    <div>
      <h1>Server-side Rendered React App</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
