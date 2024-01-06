import React from "react";

export default async function getPostById(id) {
  // const result = (`https://jsonplaceholder.typicode.com/posts/${id}`)
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return result.json();
}
