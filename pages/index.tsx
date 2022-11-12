import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/mugshot.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <Head>
          <title>Heorhii Ozharenkov - Home</title>
        </Head>
        {/* Intro card */}
        <div className="mx-30 md:mx-44 p-5 border border-primary mt-10 rounded-xl">
          <div className="avatar-group float-right ">
            <Image
              src={profilePic}
              height={200}
              width={200}
              alt=""
              className="avatar rounded-full border border-primary"
            ></Image>
          </div>
          <p className="text-3xl font-bold mb-8">Howdy!</p>
          <p className="text-xl">
            I&apos;m <b>Heorhii</b> and you&ve stumbled into my personal
            website, where I share my unsolicited thoughts and opinions on the
            internet.
          </p>
          <br />
          <p className="text-lg">
            I&apos;m a 4th year Software Engineering student from Ukraine, and a
            big computer graphics and software nerd. I dabble in 3D modelling,
            procedural textures, desktop applications and games!
          </p>
        </div>
      </div>
      <p className="mx-4 text-justify sm:mx-24 my-5 text-lg prose-base">
        If you&apos;re interested in looking at some of my work, you can do so{" "}
        <Link href={"/portfolio"} className="link link-primary">
          here
        </Link>
        .
        <br />
        If you wish to read some of my ornate and superfluous rants, you can
        find them{" "}
        <Link href={"/posts"} className="link link-secondary">
          here
        </Link>
        .
      </p>
    </>
  );
}
