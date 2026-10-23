import React from "react";
import { useGetPosts } from "../posts.hooks";

const PostList = () => {
    const{isLoading, isError, error, data} = useGetPosts();

    if(isLoading) return <div>Loading...</div>

    if(isError) return <p>Error: {error.message}</p>



    return <div>{JSON.stringify(data)} </div>
};


export default PostList;






