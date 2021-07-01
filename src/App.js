import React,{useState,useEffect} from 'react';
import './App.css';
import PostBlock from './Component/PostBlock';
import Header  from './Component/Header';
import Loader from './Component/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from './Component/Navbar';


function App() {

  const [posts,setposts] = useState([]);

  useEffect(() => {
     FetchData();
  }, [])

  const FetchData = async () =>{
      const apikey = "K5biUivSj1cHvDbsQZRrI3-Oev-BZPrvQHrUzSzILbU";
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apikey}&count=10`);
      const data = await response.json();
      setposts([...posts,...data]);
  }

  console.log(posts);

  return (
    <div className="App">
        <Navbar/>
        <Header/>

        <InfiniteScroll
          dataLength = {posts.length}
           next = {FetchData}
          hasMore = {true}
          loader={<Loader/>}
          >
            <div className="post-container">
              {posts.map((post,index) =>(
                <PostBlock key={index} data={post} />
              ))}
            </div>
        </InfiniteScroll> 
    </div> 
  );
}

export default App;
