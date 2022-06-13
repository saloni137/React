import React, { useState,useEffect } from 'react'
import axios from 'axios';

const AddBlog = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [flag,setFlag]=useState(0)


   function addBlog() {
    axios.post('/listAPI/add', {
        title: title,
        body: body
      })
      .then(res => {
    //    console.log(res.data);
        setFlag(1)
      })
        console.log("Sent: Title: ", title, "& Body: ", body )
    }
// eslint-disable-next-line
    useEffect(() => {
// eslint-disable-next-line
        if(flag==1)
       { 
        props.fetchBlogs()
            setFlag(0)
       }
      })
    return (
        <div>
            <h1 className="App">Add New Blog</h1>
            <div className="addCard">
                <div >
                    <b>Title: </b>
                    <input
                    className= "Btitle"
                    placeholder="Enter Blog Title"
                    value={title}
                    onChange={e => setTitle(e.target.value) 
                    }/>
                </div>
                <div>
                    <b>Details: </b>
                    <input  
                    className = "BdetailBox"
                    placeholder="Enter Blog Detail"
                    value={body}
                    onChange={e => setBody(e.target.value) 
                    } />
                </div>
                <div >
                    <button 
                    className = "button" 
                    onClick= {()=>{
                        addBlog();   
                    }}
                    >
                        Add New Blog
                    </button>
                </div>
            </div>
            <hr />
        

        </div>
    )

}

export default AddBlog;