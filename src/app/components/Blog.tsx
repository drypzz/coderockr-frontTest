import React from "react";

import { PropsPosts } from "@/utils/PropsPost";

import SquareLoader from "react-spinners/SquareLoader";
import Link from "next/link";

interface BlogProps {
    posts: PropsPosts[];
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
    let isRight = true;

    const Textlimit = ({ texto, limit }: { texto: string, limit: number }) => {
        const caracteresPorLinha = limit;
        const limite = 3 * caracteresPorLinha;
        if (texto.length > limite) {
            return texto.substring(0, limite).trim() + "...";
        }
        return texto;
    };

    return (
        <div className="container blog">
            {posts.length >= 1 ? (
                <>
                    {posts.map((post, index) => {
                        if (index % 3 === 2) {
                            let cardClass = "big-card";
                            cardClass += isRight ? " right" : " left";
                            isRight = !isRight;
                            return (
                                <div key={post.id} className={cardClass}>
                                    <Link href={`/view/${post.id}`} key={post.id}>
                                        <div id={`${isRight}`}>
                                            <div className="big-card--container">
                                                <div className="big-card--content">
                                                    <img src={post.image} alt={`Imagem - ID: ${post.id}`} />
                                                </div>
                                                <div className="big-card--content">
                                                    <div className="big-card--content-container">
                                                        <div>
                                                            <h3 className="author">{post.author.name}</h3>
                                                        </div>
                                                        <div>
                                                            <h2 className="title">{Textlimit({ texto: post.title, limit: 25 })}</h2>
                                                        </div>
                                                        <div>
                                                            <p>{Textlimit({ texto: post.content, limit: 45 })}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        } else if (index % 3 === 0) {
                            return (
                                <div key={`group-${index}`} className={`small-card-group ${isRight}`}>
                                    <Link href={`/view/${post.id}`} key={post.id}>
                                        <div className="small-card--container">
                                            <div className="small-content">
                                                <img src={post.image} alt={`Imagem - ID: ${post.id}`} />
                                            </div>
                                            <div className="small-content text">
                                                <div>
                                                    <h3 className="author">{post.author.name}</h3>
                                                </div>
                                                <div>
                                                    <h2 className="title">{Textlimit({ texto: post.title, limit: 25 })}</h2>
                                                </div>
                                                <div>
                                                    <p>{Textlimit({ texto: post.content, limit: 45 })}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    {posts[index + 1] && (
                                        <>
                                            <Link href={`/view/${posts[index + 1].id}`} key={posts[index + 1].id}>
                                                <div className="small-card--container">
                                                    <div className="small-content">
                                                        <img src={posts[index + 1].image} alt={`Imagem - ID: ${posts[index + 1].id}`} />
                                                    </div>
                                                    <div className="small-content text">
                                                        <div>
                                                            <h3 className="author">{posts[index + 1].author.name}</h3>
                                                        </div>
                                                        <div>
                                                            <h2 className="title">{Textlimit({ texto: posts[index + 1].title, limit: 25 })}</h2>
                                                        </div>
                                                        <div>
                                                            <p>{Textlimit({ texto: posts[index + 1].content, limit: 45 })}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            );
                        } else {
                            return null;
                        };
                    })}
                </>
            ) : (
                <div className="loading">
                    <SquareLoader color="#F1A10A" loading={true} size={150} />
                </div>
            )}
        </div>
    );
};

export default Blog;