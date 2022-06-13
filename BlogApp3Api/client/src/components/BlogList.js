import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddBlog from './AddBlog';


class BlogList extends Component {
  
  state = { List : [] }
 
 componentDidMount()  {
      this.fetchBlogs()
 }

fetchBlogs = () =>{
  fetch('/listAPI')
  .then(res => res.json())
  .then((List)=>{
    this.setState({List:List})
  })
  .catch(err => err);
}
  render() {
    console.log("Blog List Loaded")
    return (
      <div> 
     <AddBlog  fetchBlogs={this.fetchBlogs} />
      <div>
        <h1 className="App">Blog List</h1>
          {this.state.List.map(blog =>
            <div key={blog._id} className="card">
             <div className="header">
             <h3>{blog.title}</h3>
         </div>
         <div>
    <p className="body">
        {blog.body}
      </p>
      <Link to={`listAPI/${blog.slug}`}>
      <p>Continue Reading...</p> </Link>
      </div>    
    </div>
  )}
  </div>  
  </div>
    );
  }
}

export default BlogList;



