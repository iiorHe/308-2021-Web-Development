import Link from "next/link";
import { FaList } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start" />
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-wide bg-neutral md:hidden">
            <FaList size={"2em"} className="swap-off" />
          </label>
          <ul
            tabIndex={0}
            className="md:hidden p-2 w-full dropdown-content swap-off menu bg-base-100 rounded-lg"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link href={"/posts/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <div className="navbar-center md:flex hidden">
            <ul className="p-0 place-content-center space-x-5 flex">
              <li className="btn">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="btn">
                <Link href={"/portfolio"}>Portfolio</Link>
              </li>
              <li className="btn">
                <Link href={"/posts/"}>Blog</Link>
              </li>
              <li className="btn">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end" />
      </div>
    </>
  );
}
