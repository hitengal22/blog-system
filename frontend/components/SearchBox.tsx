import React from "react";
import Button from "./ui/Button";
import Input from "./ui/input";

export default function SearchBox({ handleSearch }: { handleSearch: (search: string) => void }) {
    const [searchText, setSearchText] = React.useState<string>("");
    return (
        <div className="flex items-center justify-center w-full mt-4 mb-4 gap-4">
            <Input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button onClick={() => handleSearch(searchText)}>Search</Button>
        </div>
    )
}