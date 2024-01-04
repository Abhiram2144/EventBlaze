"use client";
import { FileInput, Label, Textarea } from "flowbite-react";
import { Button, Checkbox, TextInput } from "flowbite-react";
import React from "react";
import "./addevents.css";
import Link from "next/link";
const page = () => {
  return (
    <div className=" mx-10 mt-7">
      {/* basic info */}
      <section className="mb-4">
        <div>
          <h1 className="text-2xl mb-3">1. Basic Info</h1>
          <form action="" className="ml-5 mb-5">
            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="text"
                placeholder="Name"
                required
                className="w-[450px] mb-3"
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
                className="mb-3 w-[450px]"
              />
            </div>
            <div>
              <div className="mb-2 block ">
                <Label htmlFor="date" value="Date" />
              </div>
              <TextInput
                id="date"
                type="date"
                placeholder="Date"
                required
                className="mb-3 w-[450px]"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="dur" value="Duration" />
              </div>
              <TextInput
                id="dur"
                type="text"
                placeholder="Duration"
                required
                className="w-[450px]"
              />
            </div>
          </form>
        </div>
      </section>
      {/* Links and Contacts */}
      <section className="mb-4">
        <h1 className="text-2xl mb-3">2. Links and Contact</h1>
        <form action="" className="ml-5 mb-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Event Website" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-[450px] mb-3"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Email" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-[450px] mb-3"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Whatsapp Group Invite" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-[450px] mb-3"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="LinkedIn" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-[450px] mb-3"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Base input" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              className="w-[450px] mb-3"
            />
          </div>
        </form>
      </section>
      {/* Images  */}
      <section className="mb-5">
        <h1 className="text-2xl mb-3">3. Images</h1>
        <div id="fileUpload" className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput id="file" helperText="Pictures related to the event" />
        </div>
      </section>
      <div>
        <Link href="/events">
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Submit Details</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
