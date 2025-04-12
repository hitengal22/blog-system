'use client'
import * as React from 'react'
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import Posts from "@/components/Posts";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string) : 1;
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <Posts />
      <Pagination currentPage={page} totalPages={2} onPageChange={() => console.log()} />
    </div>
  );
}
