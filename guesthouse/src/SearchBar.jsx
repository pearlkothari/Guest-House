import SearchBar from "material-ui-search-bar";

export default function Searchbar(){
  return (
    <div className="search">
      {/* <img className="logo" src={logo} alt="" width="70px" height="70px" /> */}
      <SearchBar
        style={{
          margin: "0 400px",
          width: "800px",
          minWidth: "300px"
        }}
      />
    </div>
  );
}