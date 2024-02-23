"use client";

import { useEffect, useState } from "react";

import { getPostID } from "@/utils/Api";
import { PropsPosts } from "@/utils/PropsPost";
import formatDate from "@/utils/FormatDate";

import Header from "@/app/components/Header";

import SquareLoader from "react-spinners/SquareLoader";

type PropsView = {
    params: {
        id: string;
    }
};

export default function View({ params: { id } }: PropsView) {
    const [post, setPost] = useState<PropsPosts | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const retorned = (Number(id) === 0 || Number(id) > 23);

    useEffect(() => {
        if (retorned) {
            setPost(null);
            setLoading(true);
        } else {
            getPostID(Number(id))
            .then((data) => {
                setPost(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        };
    }, [id]);

    return (
        <>
            <Header />
            <div className="container">
                <div className="main--post">
                    {post ? (
                        <div className="container--content" key={post.id}>
                            <div className="container--content--post">
                                <div className="content--post--header">
                                    <img src={post.image} alt={`Imagem - ID: ${post.id}`} />
                                </div>
                                <div className="content--post--header">
                                    <div>
                                        <span className="date">{formatDate(post.createdAt)}</span>
                                    </div>
                                    <div>
                                        <h2 className="author">{post.author.name}</h2>
                                    </div>
                                    <div>
                                        <h1 className="title">{post.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="content--post">
                                <p>{post.content}</p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {retorned ? <p>Post Não encontrado</p> : (
                                loading ? <SquareLoader color="#F1A10A" loading={loading} size={150} /> : <p>Carregando Post...</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};