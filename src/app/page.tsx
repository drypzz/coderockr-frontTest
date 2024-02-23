"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "@/utils/Api";
import formatDate from "@/utils/FormatDate";

type Post = {
  id: number;
  title: string;
  author: { name: string };
  content: string;
  createdAt: string;
  image: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts()
    .then((data: Post[]) => {
      setPosts(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
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
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div>
            <p>Carregando...</p>
          </div>
        </div>
      )}
    </div>
  );
};