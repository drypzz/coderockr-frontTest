"use client";

import { useEffect, useState } from "react";

import { getPostID } from "@/utils/Api";
import formatDate from "@/utils/FormatDate";

type Post = {
    id: number;
    title: string;
    author: { name: string };
    content: string;
    createdAt: string;
    image: string;
};

type PostProps = {
    params: {
        id: string;
    }
};

export default function View({ params: { id } }: PostProps) {
    const [post, setPost] = useState<Post | null>(null);

    const retorned = (Number(id) === 0 || Number(id) > 23);

    useEffect(() => {
        if (retorned) {
            setPost(null);
        } else {
            getPostID(Number(id))
            .then((data) => {
                setPost(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [id]);

    return (
        <div>
            {post ? (
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
                </div>
            ) : (
                <div>
                    {retorned ? <p>Post Não encontrado</p> : <p>Carregando...</p>}
                </div>
            )}
        </div>
    );
};