"use client";

import { useEffect, useState } from "react";

import getAllPosts from "@/utils/Api";
import formatDate from "@/utils/FormatDate";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      {posts.length >= 1 ? (
        <div>
          {posts.map((e: any) => (
            <div key={e.id}>
              <div>
                <h1>{e.title}</h1>
              </div>
              <div>
                <h2>{e.author.name}</h2>
              </div>
              <div>
                <p>{e.content}</p>
              </div>
              <div>
                <span>{formatDate(e.createdAt)}</span>
              </div>
              <div>
                <img src={e.image} alt={`Imagem - ID: ${e.id}`} />
              </div>
            </div>
          ))}
        </div>
      )
      : (
        <div>
          <div>
            <p>Carregando...</p>
          </div>
        </div>
      )}
    </div>
  );
};