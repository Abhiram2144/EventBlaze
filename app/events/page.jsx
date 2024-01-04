
'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import React from "react";
import "./eve.css";
import Link from "next/link";

const Events = () => {

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Enter The Below Details</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Event Name" />
              </div>
              <TextInput
                id="email"
                placeholder="Name of the event"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Type of the Event"/>
              </div>
              <TextInput id="password" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Date"/>
              </div>
              <TextInput id="password" type="date" required />
            </div>
            
            <div className="w-full">
              <Link href="/events/addEvents"><Button>Next</Button></Link>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
      <div className="container">
        <header className="header_container">
          <h1 className="header_title "> New Events</h1>
          <p className="header_desc">
            Be the part of our Community for not missing any event!!
          </p>
        </header>

        <div>
          <div className="form-control outline-none mb-4 w-96 text-center md:ml-[500px]">
            <input
              className="input input-alt text-center"
              placeholder="Search For Events, Tech Talks..."
              required=""
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>
          <div className="text-center mb-6">
            <Link href="/events/offline">
              <button role="button" className="button-name mr-3">
                Offline
              </button>
            </Link>

            <button role="button" className="button-name mr-3">
              University
            </button>
            <button class="btn-23" onClick={() => setOpenModal(true)}>
              <span class="text">CREATE</span>
              <span aria-hidden="" class="marquee">
                CREATE
              </span>
            </button>
          </div>
        </div>

        <main className="main_container">
          {/* <!-- card 1 start --> */}
          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>
          {/* <!-- card 1 ends here --> */}

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>

          <div className="card_container">
            <a href="#" className="card_image_container">
              <img
                src="https://source.unsplash.com/random/600×400?technology"
                alt="card 1 image"
                className="card_image"
                loading="lazy"
              />
            </a>

            <div className="card_title_container">
              <a href="#" className="card_title_anchor">
                <h2 className="card_title">Tech Event </h2>
              </a>
              <p className="card_desc">Check out the event</p>
            </div>

            <div className="card_footer_container">
              <div className="author_container">
                <div className="author_avatar_container">
                  <img
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                    loading="lazy"
                    className="author_avatar"
                    alt="avatar 1"
                  />
                </div>
                <div className="author_info_container">
                  <span className="author_name">GDSC</span>
                  <span className="author_date">Dec 31, 2023</span>
                </div>
              </div>

              <div>
                <span className="card_tag_container">Technology</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;




