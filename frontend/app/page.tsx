'use client'
import * as React from 'react'
import Pagination from "@/components/Pagination";
import Posts from "@/components/Posts";
import { useSearchParams } from 'next/navigation';
import { getPosts } from '@/lib/Network';
import { PostsResponse } from '@/lib/types';
import SearchBox from '@/components/SearchBox';


export default function Home() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string) : 1;
  const [posts, setPosts] = React.useState<PostsResponse["data"]["posts"]>([]);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [currentPage, setCurrentPage] = React.useState<number>(page);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleSetResponse = (response: PostsResponse) => {
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.page);
  }

  const handleSearch = async (search: string) => {
      const response: PostsResponse = await getPosts(1, search);
      handleSetResponse(response);
  }

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response: PostsResponse = await getPosts(page);
      handleSetResponse(response);
      setLoading(false);
    }
    fetchPosts();
  }, [page]);

  return (
    <>
      <SearchBox handleSearch={handleSearch} />
      <Posts posts={posts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
