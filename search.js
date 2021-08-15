const SearchBar = () => (
    <form action="/" method="get"  style={{borderRadius: '60px'}}>
        <label htmlFor="header-search">
            <span className="visually-hidden" >Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit" style={{backgroundColor: '#c2bcbc', borderRadius: '60px'}}>Search</button>
    </form>
);

export default SearchBar;