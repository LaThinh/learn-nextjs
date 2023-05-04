import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Post Detail Page </h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      <h3>Demo</h3>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("Get Statics Path");

  const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1");
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  console.log("Get Static props Post Detail from server", context.params?.postId);

  const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1");
  const data = await response.json();

  return {
    props: {
      posts: {},
    },
  };
};
