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

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Search Query:', search); // search query
        onSearch(search);
    };
    

    return (
        <div className="container outline-dark">
            <Form onSubmit={handleSubmit} className="d-flex form-inline">
                <Form.Control
                    onChange={handleChange}
                    value={search} // Bind input value to search state
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
                    Search
                </button>
            </Form>
        </div>
    );
};

export default SearchBar;
