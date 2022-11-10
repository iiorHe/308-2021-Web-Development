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
        <div className="mx-72 p-5 border border-primary mt-10 rounded-xl">
          <div className="float-right ">
            <Image
              src={profilePic}
              height={200}
              width={200}
              alt=""
              className="rounded-full border border-primary"
            ></Image>
          </div>
          <p className="text-3xl font-bold mb-8">Howdy!</p>
          <p className="text-lg">
            I'm <b>Heorhii</b> and you've stumbled into my personal website,
            where I share my unsolicited thoughts and opinions on the internet.
          </p>
          <p>
            I'm a 4th year Software Engineering student from Ukraine, and a big
            computer graphics and software enthusiast. I regularly dabble in 3D
            modelling, procedural textures, desktop applications and games!
          </p>
        </div>
      </div>
      <div className="prose-base mx-40 mt-5">
        If you're interested in looking at some of my work, you can do so{" "}
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
      </div>
    </>
  );
}
