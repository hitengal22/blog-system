'use client';
import React from 'react';
import Button from './ui/Button';
import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

function Pagination({ currentPage, totalPages }: PaginationProps) {
   
    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <Button
                    key={i}
                    href={`/?page=${i}`}
                    className={i === currentPage ? '!bg-foreground text-white' : ''}
                    islink="true"
                >
                    {i}
                </Button>
            );
        }
        return pages;
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <Button
                disabled={currentPage === 1}
                href={`/?page=${currentPage - 1}`}
                islink="true"
            >
                {`Previous`}
            </Button>
            {renderPageNumbers()}
            <Button
                disabled={currentPage === totalPages}
                href={`/?page=${currentPage + 1}`}
                islink="true"
            >
                {`Next`}
            </Button>
        </div>
    );
}

export default Pagination;