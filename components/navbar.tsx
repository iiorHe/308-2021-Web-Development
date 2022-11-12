import Link from "next/link";
import { FaList } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start md:w-1/2 w-0" />
        <div className="dropdown text-xl md:hidden">
          <label tabIndex={0} className="btn m-1">
            <FaList size={"2em"} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
        </div>
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

        <div className="navbar-end" />
      </div>
    </>
  );
}
