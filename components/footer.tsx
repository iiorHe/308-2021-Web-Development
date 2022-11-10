import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-base-300">
      <footer className="footer mx-auto max-w-5xl grid-flow-col p-10 text-base-content">
        <div>
          <span className="footer-title">Navigation</span>
          <Link href={"/"} className="link link-hover">
            Home
          </Link>
          <Link href={"/portfolio"} className="link link-hover">
            Portfolio
          </Link>
          <Link href={"/posts"} className="link link-hover">
            Blog
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link href={"https://www.google.com"}>
              <div className="btn btn-sm btn-circle">
                <FaGithub size={"2em"} />
              </div>
            </Link>
            <Link href={"https://www.google.com"}>
              <div className="btn btn-sm btn-circle">
                <FaTwitterSquare size={"2em"} />
              </div>
            </Link>
            <Link href={"https://www.google.com"}>
              <div className="btn btn-sm btn-circle">
                <FaLinkedin size={"2em"} />
              </div>
            </Link>
            <Link href={"https://www.google.com"}>
              <div className="btn btn-sm btn-circle">
                <FaYoutube size={"2em"} />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
