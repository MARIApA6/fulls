import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useMemo, useRef, useState } from "react";


export default function Navbar() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const inputRef = useRef();

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
    }, [items, query]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if (value === "") return;
        setItems(prev => [...prev, value]);
        inputRef.current.value = "";
    };

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site Title</Link>
            <form onSubmit={onSubmit} className="searchbtn">
                <input
                    ref={inputRef}
                    value={query}
                    onChange={handleSearch}
                    type="search"
                    placeholder="Search..."
                />
                <button className="searchbtn" type="submit">Search</button>
            </form>
            <div className="search-results">
                {filteredItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <ul>
                <CustomLink to="/">Main</CustomLink>
                <CustomLink to="/SignUp">Sign Up</CustomLink>
                <CustomLink to="/Login">Login</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
