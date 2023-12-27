import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container mx-auto bg-gray-900/20 py-4 rounded-md text-white px-10">
      <nav className="flex flex-row justify-between">
        <h3 className="font-bold">
          Tad<span className="text-yellow-500">Typing_</span>
        </h3>
        <ul className="flex gap-3 text-sm">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/leaderboard"}>Leaderboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
