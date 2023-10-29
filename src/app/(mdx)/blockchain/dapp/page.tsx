import { PostListCard } from "@/components/postListCard/PostListCard";
import { getPosts } from "@/helper/middle";
import React from "react";

export const getAllPost = async () => {
  const categories = getPosts("blockchain/dapp");
  return categories;
};

export default async function DappPage() {
  const post = await getAllPost();

  return (
    <div>
      <p>Dapp Page</p>
      {post.map((data) => (
        <PostListCard {...data} key={data.path} />
      ))}
    </div>
  );
}
