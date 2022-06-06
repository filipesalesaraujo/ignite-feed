import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Wrapper } from "./components/Wrapper";
import { Posts } from "./components/Posts";

import { posts } from "./utils/posts";

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar /> 
        <Posts>
          {posts.map((post) => {
            return (
              <Post
                key={uuidv4()}
                avatarUrl={post.author.avatarUrl}
                name={post.author.name}
                role={post.author.role}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </Posts>
      </Wrapper>
    </>
  );
}
