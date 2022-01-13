import axios from 'axios';
import React from 'react';
import {useState, useEffect} from "react";
import _ from "lodash";

const pageSize = 10
export default function Post() {
    const [posts, setPosts] = useState();
    const [paginatedPosts, setpaginatedPosts] = useState();
    const [currentPage, setcurrentPage] = useState(1);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=>{
            console.log(res.data)
            setPosts(res.data)
            setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
        });
    }, []);

    const pageCount = posts? Math.ceil(posts.length / pageSize) : 0;
    if (pageCount ===1) return null;
    const pages = _.range(1, pageCount + 1)

    const pagination=(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPost)
    }

    return (
        <>
        {!paginatedPosts ? (
            "No data found"
        ) : (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedPosts.map((post, index)=>(
                            <tr key={index}>
                                <td>{post.id}</td>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <td>
                                    <p
                                        className={post.completed ? "btn btn-success" : "btn btn-danger"}
                                    >
                                        {post.completed ? "Completed" : "Pending"}
                                    </p>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )}
        <nav className='d-flex justify-content-center'>
            <ul className='pagination'>
               {pages.map((page)=>(
                   <li className={
                       page === currentPage ? "page-item active" : "page-item"
                   }>
                    <p className='page-link'
                    onClick={()=>pagination(page)}>{page}</p>
                   </li>
               ))}
            </ul>
        </nav>

        </>
    )
}
