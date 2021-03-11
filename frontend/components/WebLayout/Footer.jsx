import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainContext } from "../../components/Context";
function Footer() {
  const { contactInfo } = useContext(MainContext);
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__left">
              <div className="footer__logo">
                <Link href="/">Logo</Link>
              </div>
              <div className="footer__social">
                <div> Contact us on</div>
                <div className="footer__social-links">
                  <a href="#">
                    <Image
                      src="/img/icons/telegram.png"
                      width="24"
                      height="24"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/img/icons/instagram.png"
                      width="24"
                      height="24"
                    />
                  </a>
                  <a href={contactInfo.email}>
                    <Image src="/img/icons/email.png" width="24" height="24" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__links">
              <ul>
                <li>Legals</li>
                <li>
                  <Link href="/terms-of-service">Terms of service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/responsible-gambling">Responsible gambling</Link>
                </li>
              </ul>
              <ul>
                <li>Casino reviews</li>
                <li>
                  <Link href="/">Casinos by ratings</Link>
                </li>
                <li>
                  <Link href="/">Casinos by payment methods</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p>
              <strong> RESPONSIBLE GAMING: </strong>
              We are not responsible for any losses from gambling in casinos or
              bet in betting sites linked to any of our bonus offers. The player
              is responsible for how much the person is willing and able to play
              for. Do not bet or wager with money you cannot afford to lose. Do
              not chase your losses. Players are responsible for checking the
              gaming laws in their country or jurisdiction, and must do so
              before playing for money on any online gambling site.
            </p>
            <p>
              <strong> ATTENTION: </strong>
              Offers on our site are able to evolve or getting canceled. We
              always recommend that the player examines the conditions and
              double-check the bonus directly on the casino/bet companies
              website.
            </p>
            <p>
              18+, New Customer Only, T&C Apply, Gamble Responsibly{" "}
              <a href="www.begambleaware.org">www.begambleaware.org</a>
            </p>
            <p>
              {new Date().getFullYear()} {contactInfo.name} Copyrights © All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
