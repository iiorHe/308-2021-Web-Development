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
      <div className="flex flex-col items-center">
        <div className="w-auto mt-4 items-center card border border-primary">
          <div className="card-body p-4">
            <p className="card-title">Contact information</p>
          </div>
        </div>
      </div>
      <p className="mx-4 text-justify sm:mx-24 my-5 text-lg prose-base">
        {" "}
        For job offers, business inquiries, or miscellaneous questions, feel
        free to use the contact form below. You can also find me on various
        social platforms, if you need to get in touch as quickly as possible, or
        if you&apos;re interested in following the content I post online.
      </p>
      <div className="flex p-4 w-auto flex-col md:flex-row">
        <div className="h-auto w-full card bg-base-300 rounded-box p-2">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Name"
              className="input m-1 w-full"
            />
            <div className="divider divider-horizontal"></div>
            <input
              type="text"
              placeholder="Email"
              className="input m-1 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input m-1 w-auto"
          />
          <textarea
            className="m-1 w-auto h-full textarea"
            placeholder="Message body"
          ></textarea>
          <button className="w-min self-end btn btn-success"> Send </button>
        </div>
        <div className="divider md:divider-horizontal"></div>
        <div className="h-auto w-full card bg-base-300 rounded-box p-2">
          <div className="card-body">
            <div className="flex flex-row">
              <div className="">
                <Image
                  className="rounded-full avatar border border-primary"
                  src={profilePic}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </div>
              <div className="ml-4 prose-base">
                <b className="text-2xl">Heorhii Ozharenkov</b> <br />
                <b className="text-lg">Software Engineer</b> <br />
                Email - georgeozharenkov@gmail.com <br />
                <div className="flex flex-col w-full">
                  <button className="btn self-end justify-self-end w-min btn-info">
                    CV
                  </button>
                </div>
              </div>
            </div>
            <div className="divider m-0">Social</div>
            <div className="flex items-center justify-center">
              <FaGithub size={"2em"} />
              <Link className="link ml-1" href={"https://github.com/iiorHe"}>
                Github
              </Link>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Followers</div>
                <div className="stat-value">0</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Repositories</div>
                <div className="stat-value">6</div>
              </div>
            </div>

            <div className="divider m-0"></div>
            <div className="flex items-center justify-center">
              <FaLinkedin size={"2em"} />
              <Link
                className="link ml-1"
                href={"https://www.linkedin.com/in/george-ozharenkov/"}
              >
                Linkedin
              </Link>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Connections</div>
                <div className="stat-value">5</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Followers</div>
                <div className="stat-value">5</div>
              </div>
            </div>

            <div className="divider m-0"></div>
            <div className="flex items-center justify-center">
              <FaTwitter size={"2em"} />
              <Link className="link ml-1" href={"https://twitter.com/Iiorhe"}>
                Twitter
              </Link>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Followers</div>
                <div className="stat-value">48</div>
                <div className="stat-desc">Following 167</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Tweets</div>
                <div className="stat-value">556</div>
                <div className="stat-desc">Since 2016</div>
              </div>
            </div>

            <div className="divider m-0"></div>
            <div className="flex items-center justify-center">
              <FaYoutube size={"2em"} />
              <Link
                className="link ml-1"
                href={
                  "https://www.youtube.com/channel/UCUhy3lLsBisiQk2CDfahTUw"
                }
              >
                YouTube
              </Link>
            </div>
            <div className="divider m-0"></div>
            <div className="flex items-center justify-center">
              <FaTelegram size={"2em"} />
              <Link className="link ml-1" href={"https://t.me/Nevilnine"}>
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
