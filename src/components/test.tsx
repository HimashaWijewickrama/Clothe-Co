import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

interface ISearchItem {
    id: string;
    name: string;
}

const students: ISearchItem[] = [
    { id: '1', name: 'Alice Johnson' },
    { id: '2', name: 'Bob Smith' },
    { id: '3', name: 'Alice Williams' },
    { id: '4', name: 'Charlie Brown' },
    { id: '5', name: 'Alison Johnson' },
    { id: '6', name: 'John Doe' },
    { id: '7', name: 'Jane Doe' },
];

const Test: React.FC = () => {
    const [searchItem, setSearchItems] = useState<ISearchItem[]>(students);
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredSearchItem = searchItem.filter((searchItem) =>
        searchItem.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <Form className="d-flex" >
                <Form.Control
                onChange={handleChange} 
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />

            {/* <input type="text" onChange={handleChange} placeholder="Search by name" /> */}
            <ul className="posts">
                {filteredSearchItem.map((searchItem) => (
                    <li key={searchItem.id}>
                        <h3>{searchItem.name}</h3>
                    </li>
                ))}
                {filteredSearchItem.length === 0 && <li>No matching results found</li>}
            </ul>
            </Form>
        </div>
    );
};

export default Test;
