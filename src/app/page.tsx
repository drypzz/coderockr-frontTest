"use client";

import React, { useEffect, useState } from "react";

import { getAllPosts } from "@/utils/Api";

import Header from "./components/Header";
import Blog from "./components/Blog";

import { PropsPosts } from "@/utils/PropsPost";

export default function Home() {
  const [posts, setPosts] = useState<PropsPosts[]>([]);

  const getLoadPosts = async () => {
    const data = await getAllPosts();

    return setPosts(data);
  };

  useEffect(() => {
    getLoadPosts();
  }, []);

  return (
    <>
      <Header />
      <Blog posts={posts} />
    </>
  );
};