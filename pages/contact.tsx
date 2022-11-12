import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/mugshot.png";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact page</title>
      </Head>
      <div className="card border">
        <div className="card-body">
          <p className="card-title">Contact information</p>
        </div>
      </div>
      <p className="mx-0 sm:mx-32 my-5 text-lg prose-base">
        {" "}
        For job offers, business inquiries, or miscellaneous questions, feel
        free to use the contact form below. You can also find me on various
        social platforms, if you need to get in touch as quickly as possible, or
        if you're interested in following the content I post online.
      </p>
      <div className="flex flex-col w-full md:flex-row">
        <div className="h-auto card bg-base-300 rounded-box p-2">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Name"
              className="input m-1 w-full max-w-xs"
            />
            <div className="divider divider-horizontal"></div>
            <input
              type="text"
              placeholder="Email"
              className="input m-1 w-full max-w-xs"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input m-1 w-full max-w-xs"
          />
          <textarea
            className="m-1 h-52 textarea"
            placeholder="Message body"
          ></textarea>
          <button className="w-min btn btn-success"> Send </button>
        </div>
        <div className="divider md:divider-horizontal"></div>
        <div className="h-auto card bg-base-300 rounded-box p-2">
          <div className="card">
            <div className="prose-base card-body">
              <div className="avatar">
                <Image src={profilePic} alt=""></Image>
              </div>
              <h1>Heorhii Ozharenkov</h1>
              <h2>Software Engineer</h2>
              Email - georgeozharenkov@gmail.com <br />
              <button className="btn w-min btn-info">CV</button>
              <div className="divider">Social</div>
              <FaGithub size={"2em"} />
              <Link href={"https://github.com/iiorHe"}>Github</Link>
              <div className="divider"></div>
              <FaLinkedin size={"2em"} />
              <Link href={"https://www.linkedin.com/in/george-ozharenkov/"}>
                Linkedin{" "}
              </Link>
              <div className="divider"></div>
              <FaTwitter size={"2em"} />
              <Link href={"https://twitter.com/Iiorhe"}>Twitter</Link>
              <div className="divider"></div>
              <FaYoutube size={"2em"} />
              <Link
                href={
                  "https://www.youtube.com/channel/UCUhy3lLsBisiQk2CDfahTUw"
                }
              >
                YouTube
              </Link>
              <div className="divider"></div>
              <FaTelegram size={"2em"} />
              <Link href={"https://t.me/Nevilnine"}>Telegram</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
