my-next-app/
├── pages/
│   ├── index.js       # Home page using Server-side Rendering (SSR)
│   └── about.js       # Static page
├── package.json       # Project metadata and dependencies

// This function runs on the server on every request
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await res.json();

  return {
    props: {
      post, // passed to the component as props
    },
  };
}
