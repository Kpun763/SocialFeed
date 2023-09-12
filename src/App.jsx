import "./App.css";
import Header from "./Components/Header/Header";
import PostList from './Components/PostList/PostList'

function App() {
  const posts = [
    {
      id: 1,
      name: 'Kyle',
      body: "Goodmorning everyone!",
      liked: false,
    }
  ];


  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
