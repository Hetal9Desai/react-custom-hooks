import React from "react";
import useFetch from "./hooks/useFetch";
// import Counter from "./componenets/counter";
import DocTitleOne from "./componenets/DocTitleOne";
import DocTitleTwo from "./componenets/DocTitleTwo";

import "./App.css";

function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.posts) return <p>No data available.</p>;

  return (
    <>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div className="App">
        {/* <Counter /> */}
        <DocTitleOne />
        <DocTitleTwo />
      </div>
    </>
  );
}

export default App;
