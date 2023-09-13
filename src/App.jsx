import "./App.css";
import Header from "./Components/Header/Header";
import PostList from './Components/PostList/PostList'
import NewPostForm from "./Components/NewPostForm/NewPostForm";

function App() {
  const posts = [
    {
      id: 1,
      name: 'Kyle',
      body: "Goodmorning everyone!",
      liked: false,
    },
    {
      id: 2,
      name: 'James',
      body: "Did anyone catch the Monday night game last night? What a way to win in OT!",
      liked: true,
    }
  ];

  const addPost = (newPost) => {
    newPost.id = posts.length + 1;
    posts.push(newPost);
  };


  return (
    <div className="App">
      <Header />
      <NewPostForm onAddPost={addPost}/>
      <h1>My Post Feed</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
