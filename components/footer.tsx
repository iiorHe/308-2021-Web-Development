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
              <button>
                <FaGithub size={"2em"} />
              </button>
            </Link>
            <Link href={"https://www.google.com"}>
              <button>
                <FaTwitterSquare size={"2em"} />
              </button>
            </Link>
            <Link href={"https://www.google.com"}>
              <button>
                <FaLinkedin size={"2em"} />
              </button>
            </Link>
            <Link href={"https://www.google.com"}>
              <button>
                <FaYoutube size={"2em"} />
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
