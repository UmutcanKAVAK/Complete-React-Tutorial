import React from 'react'

const BlogList = ({blogs , title ,deletePost}) => {
    
  return (
    <div>
        <strong>{title}</strong>
      {
      blogs.map((blog)=> (
        <div className="blog-preview"  key={blog.id}>
          <li >
            <p>
             <strong>Title :</strong> {blog.title}
            </p>
            <p>
             <strong>Content :</strong> {blog.content}
            </p>
            <p>
             <strong>Author :</strong> {blog.author}
            </p>
          </li>
          {/* <button onClick={()=>deletePost(blog.id)}>delete</button> */}
          <button onClick={()=>deletePost(blog.id)}>delete </button>
        </div>
      ))
    }
    </div>
  )
}

export default BlogList
