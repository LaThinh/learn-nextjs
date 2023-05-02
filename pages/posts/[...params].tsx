import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostParamsPageProps {
}

export default function PostParamsPage (props: PostParamsPageProps) {
    const router = useRouter ();

  return (
    <div>
      <h1>Post Post Params Page </h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
