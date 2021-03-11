import React from "react";
import "./casino.scss";
import BonusTerms from "./BonusTerms";
import Rating from "./Rating";
import Link from "next/link";
import clsx from "clsx";
import InfoBtn from "../Buttons/InfoBtn";

function CasinoWrapper({ info = {}, review, post = false, main = false }) {
  return (
    <>
      {info && (
        <div
          className={clsx(
            "casino__wrapper",
            review && "review",
            main && "main"
          )}
        >
          <div className="casino_top">
            <a href={info.affiliateLink} className="casino__img casino__item  ">
              <img
                src={`http://localhost:1337${info.Overlay.url}`}
                alt="logo"
              ></img>
            </a>
            <a
              href={info.affiliateLink}
              className="casino__name casino__item  "
            >
              <span>{info.title}</span>
              <span>{info.website}</span>
            </a>
            {info.bonuses.map((bonus) => (
              <div
                className="casino__info bigger casino__item  "
                key={bonus.id}
              >
                <p>
                  <strong>
                    <span>{bonus.percentage}%</span>
                  </strong>
                </p>
                <p className="casino__info-small">
                  up to <strong>€{bonus.amount}</strong>
                </p>
              </div>
            ))}

            {!post && (
              <>
                {" "}
                {!review ? (
                  <BonusTerms info={info} />
                ) : (
                  <Rating rating={info.ratingTotal} />
                )}
              </>
            )}
          </div>

          <div className="casino__info-btns casino__item ">
            <InfoBtn review={review} info={info} />
            {review && (
              <>
                <Link href={`http://localhost:3000/casinos/${info.title}`}>
                  <a className="casino__review-link">
                    {" "}
                    Read our <strong>review</strong>{" "}
                  </a>
                </Link>
              </>
            )}
            <a href={info.affiliateLink} className="casino__info-btn ">
              Get your <strong>bonus now</strong>{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default CasinoWrapper;
