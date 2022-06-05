import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Wrapper } from "./components/Wrapper";
import { Posts } from "./components/Posts";

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Posts>
          <Post />
          <Post />
        </Posts>
      </Wrapper>
    </>
  );
}
