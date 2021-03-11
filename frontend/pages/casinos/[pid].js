import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "./post.scss";
import Layout from "../../components/WebLayout";
import ContactForm from "../../components/ContactForm";
import CasinoWrapper from "../../components/CasinoWrapper";
import { AiTwotoneStar } from "react-icons/Ai";
import { BsCalendar } from "react-icons/Bs";
import { RiMoneyEuroCircleLine } from "react-icons/Ri";
import { GiLaurelCrown } from "react-icons/Gi";
import clsx from "clsx";
import BreadCrumps from "../../components/BreadCrumps";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Post() {
  const [data, setData] = useState(null);
  const [show, handleShow] = useState(false);
  const router = useRouter();
  const name = router.query.pid;
  const transitionNavBar = () => {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:1337/casinos/${name}`);
      const data = await response.data;
      setData(data);
    } catch (e) {
      console.error(e);
    }
  }, [name]);
  console.log(data);
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <Layout>
      {data && (
        <div className="post">
          <div className="container">
            <div className="post__inner">
              {/* <BreadCrumps name={data.title} /> */}
              <div
                className="post__title"
                style={{
                  backgroundImage: `url(http://localhost:1337${data.Overlay.url})`,
                }}
              >
                <div className="post__title-overlay"></div>
                <div className="post__title-text"> {data.title}</div>
              </div>

              <div className="post__content">
                <div className="post__left">
                  {/* <CasinoWrapper post={true} review={false} /> */}
                  <div className="post__text">
                    <h1>
                      <strong>Opinions on {data.title}</strong>
                    </h1>
                    <ReactMarkdown
                      source={data.mainContent}
                      transformImageUri={(uri) =>
                        uri.startsWith("http")
                          ? uri
                          : `http://localhost:1337${uri}`
                      }
                    />
                  </div>
                </div>
                <div className="post__right">
                  <div className="post__company-info">
                    <h3>Quickfacts </h3>
                    <div className="company__line">
                      <div className="company__line-left">
                        <GiLaurelCrown /> Owner
                      </div>
                      <div className="company__line-right">Somebody</div>
                    </div>
                    <div className="company__line">
                      <div className="company__line-left">
                        <BsCalendar />
                        Founded
                      </div>
                      <div className="company__line-right">2020-01-01</div>
                    </div>
                    <div className="company__line">
                      <div className="company__line-left">
                        <RiMoneyEuroCircleLine />
                        Min. deposit
                      </div>
                      <div className="company__line-right">€30</div>
                    </div>
                  </div>
                  <div className="post__rating">
                    <h3>What we think about {data.title}</h3>
                    <div className="post__rating-line">
                      <div className="rating-line-left">Bonuses</div>
                      <div className="rating-line-right">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                    </div>
                    <div className="post__rating-line">
                      <div className="rating-line-left">Website</div>
                      <div className="rating-line-right">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                    </div>
                    <div className="post__rating-line">
                      <div className="rating-line-left">Game providers</div>
                      <div className="rating-line-right">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                    </div>
                    <div className="post__rating-line">
                      <div className="rating-line-left">Payment providers</div>
                      <div className="rating-line-right">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                    </div>
                    <div className="post__rating-line">
                      <div className="rating-line-left">Support</div>
                      <div className="rating-line-right">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                    </div>
                    <div className="post__rating-global">
                      <div>Note global</div>
                      <div>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                      </div>
                      <div>8.20 / 10</div>
                    </div>
                  </div>

                  <div className="post__contactform">
                    <ContactForm />
                  </div>
                </div>
              </div>
              <div className={clsx("post__fixed", show && "active")}>
                {/* <CasinoWrapper post={true} review={false} /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Post;
