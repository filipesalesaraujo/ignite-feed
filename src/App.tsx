import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Wrapper } from "./components/Wrapper";

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Post />
      </Wrapper>
    </>
  );
}
