'use client';
import React from 'react';
import Button from './ui/Button';
import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <Button
                    key={i}
                    onClick={() => onPageChange(i)}
                    href={`/?page=${i}`}
                    className={i === currentPage ? '!bg-foreground text-white' : ''}
                    isLink
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
                onClick={handlePrevious}
                disabled={currentPage === 1}
                href={`/?page=${currentPage - 1}`}
                isLink
            >
                {`Previous`}
            </Button>
            {renderPageNumbers()}
            <Button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                href={`/?page=${currentPage + 1}`}
                isLink
            >
                {`Next`}
            </Button>
        </div>
    );
}

export default Pagination;