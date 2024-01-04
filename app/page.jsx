"use client";
import Image from "next/image";
import img1 from "../public/img1.jpg";
import { Button } from "flowbite-react";
import Link from "next/link";
import "./events/eve.css"
export default function Home() {
  return (
    <section className="flex flex-center flex-col w-full md:px-52 md:mt-52 pl-4 md:pl-72">
      <div className="flex md:flex-row flex-col-reverse">
        <div className="flex flex-col">
          <h1 className="md:text-7xl w-72 pl-3 text-4xl mt-8">
            <span className="text-red-700">Event</span> Calender
          </h1>

          <p className="w-[400px] text-md mt-5 pr-10">
            Explore a world of tech events! Stay informed about the latest in
            expert talks, hackathons, and more. Your go-toplatform for all
            things tech excitment!!
          </p>
          <Link href="/events">
            <button role="button" className="button-name mt-4">
              Explore
            </button>
          </Link>
        </div>

        <div className="right-img ">
          <Image
            src={img1}
            width={360}
            height={360}
            className="ml-28 -mt-52 md:w-[360px] md:h-[560px] w-36 pt-52 "
          />
        </div>
      </div>
    </section>
  );
}
