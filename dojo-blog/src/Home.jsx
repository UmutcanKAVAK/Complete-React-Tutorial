// // import React, { useState, useEffect } from 'react';
// // import  CSSProperties  from 'react';
// // import PacmanLoader from "react-spinners/PacmanLoader";
// // import BlogList from './BlogList';
// // import axios from 'axios';
// // const baseURL = 'http://localhost:8000/blogs';
// // const Home = () => {

// //   const [blogs, setBlogs] = useState([]);
// //   const [ispPending, setIsPending] = useState(true);

// //   //!
// //   setTimeout(() =>{

// //   useEffect(() => {
// //     axios.get(baseURL).then((res) => {
// //       setBlogs(res.data);
// //       setIsPending(false)
// //     }).catch(error => {
// //       console.error(error);
// //     });
// //   }, []);
// //   }
// //   ,2000)

// //   const createPost = () => {
// //     axios
// //       .post(baseURL, {
// //         id: "",
// //         title: "MAKING POST REQUESTS USING AXIOS ",
// //         content: " THE SAME CONTENT",
// //         author: " IT'S ALMIGHTY PRINCE VAGETA"
// //       }).then((res) => {
// //         const newBlog = res.data

// //         setBlogs((prev) => [...prev, newBlog])
// //         console.log(res.data)
// //       });
// //   }

// //   const deletePost = (id) => {
// //     axios
// //       .delete(`${baseURL}/${id}`).then(
// //         (res) => {
// //           setBlogs(prevBlogs => prevBlogs.filter((blog => blog.id !== id)));
// //         }
// //       )

// //   };
// //   const override: CSSProperties = {
// //     display: "block",
// //     margin: "0 auto",
// //     borderColor: "red",
// //   };

// //   return (
// //     <div className="home">
// //       <h2>Homepage</h2>
// //       {
// //         ispPending && <div className='Loading'>Loading ...</div>
// //       }
// //       {ispPending && <PacmanLoader
// //         cssOverride={override}
// //         loading={ispPending}
// //         size={30} // Adjust the size as needed
// //       // Other PacmanLoader props can be added here
// //       />}
// //       {blogs && <BlogList blogs={blogs} title={"All Blogs"} deletePost={deletePost} />}

// //       <br />
// //       {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Professor Alexander Bennett")} title={"Professor Alexander Bennett's Blogs"} deletePost={deletePost} />}

// //       <button onClick={createPost}>make a post </button>

// //     </div>
// //   );
// // };

// // export default Home;

// // // import { useState, CSSProperties } from "react";
// // //

// // // function App() {
// // //   let [loading, setLoading] = useState(true);
// // //   let [color, setColor] = useState("#ffffff");

// // //   return (
// // //     <div className="sweet-loading">
// // //       <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
// // //       <input
// // //         value={color}
// // //         onChange={(input) => setColor(input.target.value)}
// // //         placeholder="Color of the loader"
// // //       />

// // //       <PacmanLoader
// // //         color={color}
// // //         loading={loading}
// // //         size={30} // Adjust the size as needed
// // //         // Other PacmanLoader props can be added here
// // //       />
// // //     </div>
// // //   );
// // // }

// // // export default App;
// import React, { useState, useEffect } from "react";
// import { CSSProperties } from "react";
// import PacmanLoader from "react-spinners/PacmanLoader";
// import BlogList from "./BlogList";
// import axios from "axios";

// const baseURL = "http://localhost:8000/blogs";

// // Define the CSSProperties outside the functional component

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [ispPending, setIsPending] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       axios
//         .get(baseURL)
//         .then((res) => {
//           setBlogs(res.data);
//           setIsPending(false);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }, 2000);
//   }, []);

//   const createPost = () => {
//     axios
//       .post(baseURL, {
//         id: "",
//         title: "MAKING POST REQUESTS USING AXIOS",
//         content: "THE SAME CONTENT",
//         author: "IT'S ALMIGHTY PRINCE VEGETA",
//       })
//       .then((res) => {
//         const newBlog = res.data;
//         setBlogs((prev) => [...prev, newBlog]);
//         console.log(res.data);
//       });
//   };

//   const deletePost = (id) => {
//     axios.delete(`${baseURL}/${id}`).then((res) => {
//       setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
//     });
//   };
//   const override = {
//     display: "flex",
//     justifyContent: "center",
//     margin: "20px 0",
//     borderColor: "red",
//   };

//   return (
//     <div className="home">
//       {ispPending && <div> Loading ... </div>}
//       {ispPending && (
//         <PacmanLoader cssOverride={override} loading={ispPending} size={30} />
//       ) }
//       <h2>Homepage</h2>

//       {blogs && (
//         <BlogList blogs={blogs} title={"All Blogs"} deletePost={deletePost} />
//       )}
//       <br />
//       {blogs && (
//         <BlogList
//           blogs={blogs.filter(
//             (blog) => blog.author === "Professor Alexander Bennett"
//           )}
//           title={"Professor Alexander Bennett's Blogs"}
//           deletePost={deletePost}
//         />
//       )}
//       <button onClick={createPost}>make a post</button>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect, useRef } from "react";
import { CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import BlogList from "./BlogList";
import axios from "axios";

const baseURL = "http://localhost:8000/blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [ispPending, setIsPending] = useState(true);
  const loaderRef = useRef(null); // Create a ref for the loading indicator

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(baseURL)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Could not`);
          }
          setBlogs(res.data);
          setIsPending(false);
          if (loaderRef.current) {
            loaderRef.current.focus(); // Set focus on the loading indicator
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
  }, []);

  const createPost = () => {
    axios
      .post(baseURL, {
        id: "",
        title: "MAKING POST REQUESTS USING AXIOS",
        content: "THE SAME CONTENT",
        author: "IT'S ALMIGHTY PRINCE VEGETA",
      })
      .then((res) => {
        const newBlog = res.data;
        setBlogs((prev) => [...prev, newBlog]);
        console.log(res.data);
      });
  };

  const deletePost = (id) => {
    axios.delete(`${baseURL}/${id}`).then((res) => {
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    });
  };

  const override = {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
    borderColor: "red",
  };

  return (
    <div className="home">
      {ispPending && (
        <div
          ref={loaderRef}
          tabIndex={0}
          onFocus={() => loaderRef.current.blur()}
        >
          Loading ...
        </div>
      )}
      {ispPending && (
        <PacmanLoader cssOverride={override} loading={ispPending} size={30} />
      )}
      <h2>Homepage</h2>
      {blogs && (
        <BlogList blogs={blogs} title={"All Blogs"} deletePost={deletePost} />
      )}
      <br />
      {blogs && (
        <BlogList
          blogs={blogs.filter(
            (blog) => blog.author === "Professor Alexander Bennett"
          )}
          title={"Professor Alexander Bennett's Blogs"}
          deletePost={deletePost}
        />
      )}
      <button onClick={createPost}>make a post</button>
    </div>
  );
};

export default Home;
