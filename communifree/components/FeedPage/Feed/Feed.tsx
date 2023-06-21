import Post from "./Post";
import './Feed.css';
import {useState, useEffect} from 'react';
import React from "react";
import supabase from '../../../utils/supabaseClient'

export default function Feed () {

const [fetchError, setFetchError] = useState(null)
const [posts, setPosts] = useState([])

useEffect(() => {
    const fetchPosts = async() => {
    const {data, error} = await supabase
    .from('post_info')
    .select()

    if (error){
        setFetchError('Could not fetch any posts')
        setPosts(null)
        console.log(error)
    }

    if (data){
        console.log(data)
        setPosts(posts => [...data])
        console.log(posts)

        setFetchError(null)
    }
    }
    
fetchPosts()

}, [] )

     return (
    <div className ='postGrid'>
        <Post/>
    </div>
    )
}