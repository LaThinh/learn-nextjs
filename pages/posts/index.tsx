import Header from "@/components/common/header";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { AdminLayout, MainLayout } from "@/components/layout";

export interface PostListPageProps {
  posts: any[];
}

PostListPage.Layout = AdminLayout;

export default function PostListPage({ posts }: PostListPageProps) {
  const router = useRouter();
  //const query = router.query;
  console.log("Post List query: ", router.query);

  const [postList, setPostList] = React.useState([]);
  const page = Number(router.query?.page) || 1;

  React.useEffect(() => {
    if (!page) return;

    (async () => {
      const urlPostList = `https://js-post-api.herokuapp.com/api/posts?_page=${page}`;
      const response = await fetch(urlPostList);
      const data = await response.json();

      console.log("Fetch Data from url : " + urlPostList);
      setPostList(data.data);
      console.log(postList);
    })();
  }, [page]);

  function handlePrevClick() {
    router.push(
      {
        pathname: "posts",
        query: {
          page: Number(page) - 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  function handleNextClick() {
    router.push(
      {
        pathname: "posts",
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }

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

  return (
    <>
      <Head>
        <title>This is Post Lists Page | Paul La</title>
      </Head>

      <main className="flex flex-col items-center p-5 ">
        <h1> Post List Page {page}</h1>

        <div className="toolbar toolbar-top">
          <div className="page flex m-4 items-end hidden ">
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 post-list w-full max-w-screen-2xl ">
          {postList.map((post: any) => (
            <li
              key={post?.id}
              className="post w-200 h-100 p-2 justify-center border-1 border-gray-200 rounded-lg"
            >
              <h3 className="post-title text-xl font-bold">{post.title}</h3>
              <p className="flex justify-between">
                <span className="post-author">{post.author}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </p>

              <Link href={`posts/${post?.id}`}>
                <img
                  className=" w-80 h-40 mx-auto flex text-center rounded-lg cursor-pointer hover:opacity-70"
                  src={post.imageUrl ? post.imageUrl : "no-image"}
                  alt={post.imageUrl}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="toolbar toolbar-bottom">
          <p>Current page: {router.query.page}</p>
          <div className="page flex m-4">
            <button onClick={handlePrevClick}>Prev Page</button>
            <button onClick={handleNextClick}>Next Page</button>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  console.log("Get static props");
  return {
    props: {},
  };
}

// export const getStaticProps: GetStaticProps<PostListPageProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   // server side
//   // build time
//   // console.log("Static props server");

//   // const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=2");
//   // const data = await response.json();

//   // return {
//   //   props: {
//   //     posts: data.data.map((post: any) => ({
//   //       id: post.id,
//   //       title: post.title,
//   //       imageUrl: post.imageUrl,
//   //     })),
//   //   },
//   // };

//   return {
//     props: {},
//   };
// };
