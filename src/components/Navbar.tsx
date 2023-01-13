import { Link } from "react-router-dom";
import { ThemeContext } from "utils/context";
import { useContext } from "react";
import Button2 from "./Button2";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <div className="sticky top-0">
      <div className="navbar bg-[#7f1d1d] dark:bg-[#52525b]">
        <div className="flex-1 text-center">
          <a className="btn btn-ghost normal-case text-center text-2xl text-white">
            <Link to="/">PokeMonApp</Link>
          </a>
        </div>
        <div className="flex-none gap-4">
          <div>
            <Button2 label="" onClick={() => handleTheme()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
