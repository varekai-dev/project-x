import React, { useContext } from "react";
import { MainContext } from "../../components/Context";
import BreadCrumps from "../../components/BreadCrumps";
import Layout from "../../components/WebLayout";
import "./terms.scss";

function index() {
  const { contactInfo } = useContext(MainContext);
  return (
    <Layout>
      <div className="terms">
        <div className="container">
          <BreadCrumps name="Terms of Service" />
          <div className="terms__inner">
            <h1>
              <strong>Terms and conditions of use of the site</strong>
            </h1>
            <p>
              {contactInfo.name} is an independent guide to online casinos that
              aims to inform players and help them have the best possible gaming
              experience. By visiting the site, hosted at{" "}
              <a href={contactInfo.href}>{contactInfo.name}</a>, you agree to
              the terms and conditions presented on this page. Please read them
              carefully.
            </p>
            <p>
              {contactInfo.name} is regularly updated to provide objective and
              quality content on the world of online casinos. However, under no
              circumstances can we be held liable for any errors or omissions,
              loss or damage arising from the use of the content published on
              the site. In addition, it is your responsibility to determine
              whether online gambling is legal in your jurisdiction.
            </p>
            <p></p>
            <h2>
              <strong>
                Compliance with and modification of the conditions of use
              </strong>
            </h2>
            <ul>
              <li>
                If you disagree with one or more terms of our terms of use, it
                is your duty to cease all activity on our site, as well as all
                manipulation of our services.
              </li>
              <li>
                The terms of use presented below are subject to change at any
                time without notice. It is therefore your responsibility to
                regularly consult our terms of use and to keep yourself informed
                of any updates.
              </li>
              <li>
                In addition, we reserve the right to suspend your access to our
                site and our services if we deem such action to be appropriate.
                In this case, you will not receive any prior notification or
                financial compensation.
              </li>
            </ul>
            <h2>
              <strong>Our services</strong>
            </h2>
            <ul>
              <li>
                Our site covers information about the global gambling industry,
                including land and online casino games, gambling operators and
                services for gamblers.
              </li>
              <li>
                All the content and services offered to players have the sole
                purpose of providing you with information. All the services and
                content processed on our site is made available to the reader in
                free and open access. Our site also provides the reader with
                free services upon registration - itself free - such as the
                Newsletter.
              </li>
              <li>
                As our site aims to provide objective information to guide the
                reader, we are not dependent on any third party content, nor on
                any other gambling site (Casino, Bookmaker and Poker). Our site
                does not make any payments to players or gambling operators, nor
                does it receive any payments from users.
              </li>
              <li>
                In addition, our site and services are available 24 hours a day,
                7 days a week. However, we may or may not schedule an
                interruption of our services and your access to the site in the
                event of a force majeure event or maintenance to improve your
                comfort and the quality of our services. Our company cannot be
                held responsible for any damage caused by the interruption of
                our site or your access to the site. Also, we are not
                responsible for any damage caused by the presence of a virus on
                our site or one of our services
              </li>
            </ul>
            <h2>
              <strong>Commitments</strong>
            </h2>
            <p>
              By using our services or browsing our site, you confirm that :
            </p>
            <ul>
              <li>
                You have reached the legal age in your country of residence.
              </li>
              <li>
                You will use our services by strictly following our terms of
                use.
              </li>
              <li>
                You will not use our services to engage in activities that are
                illegal in your country of residence.
              </li>
            </ul>
            <h2>
              <strong>Limited liability</strong>
            </h2>
            <ul>
              <li>
                Our company is in no way liable for negligence or damage caused
                by a third party directly or indirectly (loss of profit, gain,
                bonus, etc.). Our services are offered to you for information
                purposes only, which makes you responsible for your use of
                "third party content". Furthermore, we cannot be held liable for
                the actions of a partner or operator of "third party content".
              </li>
              <li>
                Furthermore, our company is not responsible for your activities
                on our site. Therefore, you will not be able to hold us
                responsible for our actions if we suspend or limit your access
                to our site and services.
              </li>
            </ul>
            <h2>
              <strong>Warning about games</strong>
            </h2>
            <ul>
              <li>
                Our site provides you with a gaming service - completely free -
                as well as a redirection to gaming sites (Casino, Bookmaker,
                Poker). These services are for information purposes only, and
                only for your personal entertainment. Under no circumstances
                does our company wish to encourage you to play, bet or wager. As
                a result, a user will be held solely responsible for his
                participation, or not, in the games that our services and our
                site offer. You must, moreover, admit that it is possible to
                lose money by playing on the entertainment offered by our site
                and our services. As we are not responsible for your possible
                loss of money, you will not be able to make any claim against
                our site or our partners for compensation, reimbursement, or
                indemnity.
              </li>
              <li>
                In addition, this gaming service is only available to users who
                have reached the legal age in their country of residence. Our
                company is not responsible for your activities on the games
                presented on our site and it is your duty to respect the laws
                dictated by your country of residence. However, we reserve the
                right to suspend your access to our site and services if we have
                evidence that you are under the legal age to play.
              </li>
              <li>
                Our gaming services are not intended to induce an underage
                player to bet, wager, or lose money. You will always be held
                responsible for your actions on our gaming services. Users will,
                however, be able to find links, advertisements, and outside
                references to "third party content" from our partners. You are
                free to choose whether or not to follow our information, which
                is intended solely to keep you informed of activities related to
                gambling and the online casino industry.
              </li>
            </ul>
            <h2>
              <strong>Rights and intellectual property</strong>
            </h2>
            <ul>
              <li>
                Our company and our partners own all the tools made available on
                our site (software, written documents, data, images,
                illustrations, photographs, videos, music, and graphics) under
                copyright and intellectual property law. Our visual and graphic
                content is made available to users for information purposes. The
                trademarks present and displayed on our site are also protected
                by copyright and intellectual property rights. Consequently, no
                user of our site may appropriate these contents and use them for
                personal or private purposes.
              </li>
              <li>
                In addition, no user may delete, modify, or download any visual
                or graphic content (listed above) since the copyright and
                intellectual property rights belong legally to our company.
              </li>
            </ul>
            <h3>
              <strong>Protection of minors</strong>
            </h3>
            <p>
              Access to the Site is restricted to persons who are 18 years of
              age or older, or who are of legal age to access online gambling in
              their jurisdiction.
            </p>
            <h3>
              <strong>Browsing statistics and cookies</strong>
            </h3>
            <p>
              Information such as your IP address and navigational data may be
              collected when you visit the site. We use this information
              exclusively to administer the server and improve our service. In
              addition, {contactInfo.name} uses cookies to manage your browsing
              session on the Site. These cookies are dedicated to our site and
              cannot be used by an external site.
            </p>
            <h2>
              <strong>Contact us</strong>
            </h2>
            <p>
              If you have any questions about our terms and conditions and
              privacy policy, please contact us via{" "}
              <a href={`mailto:${contactInfo.email}`}> {contactInfo.email}</a>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
