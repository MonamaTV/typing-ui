const Header = () => {
  return (
    <header className="border container mx-auto bg-gray-900 py-4 rounded-md text-white px-10 my-3">
      <nav className="flex flex-row justify-between">
        <h3 className="font-bold">
          Tad<span className="text-yellow-500">Typing_</span>
        </h3>
        <ul className="flex gap-3 text-sm">
          <li>Home</li>
          <li>Profile</li>
          <li>Leaderboard</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
