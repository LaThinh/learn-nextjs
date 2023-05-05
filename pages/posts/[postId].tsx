import Header from "@/components/common/header";
import { AdminLayout } from "@/components/layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostPageProps {
  post: any;
}

export interface PostType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  author: string;
}

PostDetailPage.Layout = AdminLayout;

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="post-detail-page w-full px-10">
        <div
          className="post-detail flex flex-col justify-center 
        mx-auto p-5 bg-white rounded-xl max-w-screen-xl"
        >
          <h2>Loading ...</h2>
        </div>
      </div>
    );
  }

  // const [post, setPost] = React.useState<PostType | undefined>(undefined);
  // const postId = router.query?.postId || null;

  // React.useEffect(() => {
  //   if (!postId) return;

  //   console.log("PostId : " + postId);
  //   (async () => {
  //     const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  //     const data = await response.json();
  //     setPost(data);
  //   })();
  // }, [postId]);

  if (!post) return null;

  return (
    <>
      <div className="post-detail-page w-full px-10">
        <div
          className="post-detail flex flex-col justify-center 
        mx-auto p-5 bg-white rounded-xl max-w-screen-xl"
        >
          <h1 className="post-title font-bold">Post Detail {post?.title}</h1>
          <p className="flex justify-between">
            <Link href="../posts" className="text-blue-500 hover:text-blue-700">
              Back to Post List
            </Link>
            <span className="post-author">{post?.author}</span>
            <span>{post?.createdAt}</span>
          </p>

          <p className="my-5">Query: {JSON.stringify(router.query)}</p>
          <Link href={`posts/${post?.id}`}>
            <img
              className=" rounded-lg"
              src={post?.imageUrl ? post?.imageUrl : "no-image"}
              alt={post?.imageUrl}
            />
          </Link>
          <div className="post-desc my-5 text-xl capitalize ">{post?.description}</div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("Get Statics Path");

  // const postId = router.query;
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=1`);
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  };
  // return {
  //   paths: [],
  //   fallback: false,
  // };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side
  // build time
  console.log("Get Static props Post Detail from server", context.params?.postId);
  const postId = context.params?.postId;

  if (!postId) return { notFound: true };

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
