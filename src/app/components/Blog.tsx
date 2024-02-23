import React from "react";

import formatDate from "@/utils/FormatDate";
import { PropsPosts } from "@/utils/PropsPost";

import SquareLoader from "react-spinners/SquareLoader";

interface BlogProps {
  posts: PropsPosts[];
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
    return (
        <div className="container">
            {posts.length >= 1 ? (
                <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <div>
                            <h1>{post.title}</h1>
                        </div>
                        <div>
                            <h2>{post.author.name}</h2>
                        </div>
                        <div>
                            <p>{post.content}</p>
                        </div>
                        <div>
                            <span>{formatDate(post.createdAt)}</span>
                        </div>
                        <div>
                            <img src={post.image} alt={`Imagem - ID: ${post.id}`} />
                        </div>
                        <div>
                            <a href={`/view/${post.id}`}>{">>"}</a>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
                <div className="loading">
                    <SquareLoader color="#F1A10A" loading={true} size={150} />
                </div>
            )}
        </div>
    );
};

export default Blog;