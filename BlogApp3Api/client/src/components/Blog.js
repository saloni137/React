import React,{useState,useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';

const  Blog = props => {
    const [detailedblog ,setDetailedblog]= useState([]);

    useLayoutEffect(() =>{
        fetch(`http://localhost:3000/listAPI/${props.match.params.slug}`, console.log(props))
        .then(res => res.json())
        .then(Blog => {setDetailedblog( Blog )
        })
        .catch(err => err);
        // eslint-disable-next-line
    },[]);
    
    return (
        <>
        <Link to= "/" >
            <h1 className="App">Blogs</h1>
        </Link>
            <div className= "card">
                <div className="Btitle">
                    <b>
                    {detailedblog.title}   
                    </b>
                </div>
                <div className="Bdetail">
                        {detailedblog.body}
                </div>
            </div>
            </>
        )
    }

export default Blog;