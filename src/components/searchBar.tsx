import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

interface ISearchBarProps {
    onSearch: (query: string) => void; // Function to handle search
}

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearch(query);
        onSearch(query); // Pass the query to the parent component for filtering
    };

    return (
        <div className="container">
            <Form className="d-flex">
                <Form.Control
                    onChange={handleChange}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
        </div>
    );
};

export default SearchBar;
