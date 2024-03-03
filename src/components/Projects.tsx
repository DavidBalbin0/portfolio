import {getAllPosts} from "../service/PostRepository";
import {useEffect, useState} from "react";
import {PostCard} from "./PostCard";
import Post from "../models/Post";


export const Projects = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const posts = await getAllPosts();
                setPosts(posts);
                setLoading(false);
            } catch (error) {
                console.error('Error on fetch posts/', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {loading ? (
                    <p>Loading...</p>
                ) : (

                    posts.map((post) => (
                        <PostCard
                            key={post.id}
                            {...post}
                        />
                    ))


                )}
            </div>
        </section>
    )
}