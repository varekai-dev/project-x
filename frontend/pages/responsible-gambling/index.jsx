import React, { useContext } from "react";
import { MainContext } from "../../components/Context";
import BreadCrumps from "../../components/BreadCrumps";
import Layout from "../../components/WebLayout";
import "../terms-of-service/terms.scss";

function ResponsibleGambling() {
  const { contactInfo } = useContext(MainContext);
  return (
    <Layout>
      <div className="terms">
        <div className="container">
          <BreadCrumps name="Responsible Gambling" />
          <div className="terms__inner">
            <h1>
              <strong>Responsible Gambling</strong>
            </h1>
            <p>
              Online gambling should be a fun way to keep you busy and
              entertained. However, there are times when playing becomes more
              than just fun and the fun stops. Then it's time to take a break or
              consider quitting altogether.
            </p>
            <p>
              At {contactInfo.name}, we encourage responsible gambling. All
              casinos, poker sites and sports betting sites we partner with
              offer the possibility to set deposit limits or automatically
              exclude themselves for a set or permanent period of time.
            </p>
            <p>
              We are not medical professionals, but we have gathered information
              about responsible gambling and gambling problems below. Take a
              look, think about it and ask for help if you think you need it!
            </p>
            <h2>
              <strong>How to play safe</strong>
            </h2>
            <p>
              GambleAware is the UK's leading non-profit organisation dedicated
              to educating and fighting gambling damage. Their list consists of
              ten tips for safe gambling:
            </p>
            <ol>
              <li>Don't think of gambling as a way to make money.</li>
              <li>Play only with money you can afford to lose.</li>
              <li>Set a money limit in advance.</li>
              <li>Set a time limit in advance.</li>
              <li>Don't try to make up your losses.</li>
              <li>Don't gamble when you are depressed or upset.</li>
              <li>Balance gambling with other activities.</li>
              <li>Don't bring your credit card with you.</li>
              <li>Take breaks.</li>
              <li>Don't drink or use drugs when you gamble.</li>
            </ol>
            <p>
              While the list may be more for casino enthusiasts, it also has
              merit among online gamblers. We strongly recommend that you use
              online casino deposit limits and time limits.
            </p>
            <h2>
              <strong>Clues that you are gambling in a problematic way</strong>
            </h2>
            <p>
              The definition of problem gambling, addiction or disorder varies
              by country and source. The American Psychiatric Association (APA)
              calls it a gambling disorder and defines it as follows: "gambling
              disorder involves repeated gambling behaviour that causes
              significant problems or distress".
            </p>
            <p>
              According to the APA, a diagnosis of a gambling disorder requires
              at least four of the following in the past year:
            </p>
            <ol>
              <li>
                Need to play with increasing amounts of money to get the desired
                excitement.
              </li>
              <li>
                Agitated or irritable when trying to cut down or stop gambling.
              </li>
              <li>
                Repeated and unsuccessful efforts to control, reduce or stop
                gambling.
              </li>
              <li>
                Frequent thoughts about gambling (e.g., reliving past gambling
                experiences, planning one's next gambling moment, thinking about
                how to get money to gamble).
              </li>
              <li>Frequent gambling when in distress.</li>
              <li>
                Coming back frequently to bail out money after losing it through
                gambling (this is called "wanting to bail out").
              </li>
              <li>Lying to hide gambling activity.</li>
              <li>
                Jeopardizing or losing an important relationship, job, education
                or career opportunity because of gambling.
              </li>
              <li>Relying on others to solve problems caused by gambling.</li>
            </ol>
            <p>
              If you have ever felt or done any of the things listed above, you
              may need to take control of your game. BeGambleAware has an
              anonymous online test that may give you additional insight into
              your gambling habits.
            </p>
            <h2>
              <strong>You are not alone</strong>
            </h2>
            <p>
              A review of the literature published in the Journal of Behavioral
              Addiction (2016) suggests that the prevalence of gambling problems
              worldwide is 0.12% to 5.8%. According to a well-cited old study
              published in 1998, the prevalence was 4.7%.
            </p>
            <p>
              Whatever the current prevalence, you are not alone. Millions of
              people worldwide suffer from gambling addiction.
            </p>
            <h2>
              <strong>Where to find help</strong>
            </h2>
            <p>
              According to the Canada Safety Council, these are the confidential
              local helplines, 24\7, on addiction:
            </p>
            <p>Alberta 1-866-332-2322</p>
            <p>British Columbia 1-888-795-6111</p>
            <p>Manitoba Gambling Helpline 1-800-463-1554</p>
            <p>New Brunswick 1-800-461-1234</p>
            <p>Newfoundland and Labrador 1-888-899-4357</p>
            <p>Nova Scotia 1-888-347-8888</p>
            <p>Nunavut Kamatsiaqtut 1-800-265-3333</p>
            <p>Ontario 1-888-230-3505</p>
            <p>Prince Edward Island 1-888-299-8399</p>
            <p>Quebec 514-527-0140</p>
            <p>Montreal and surroundings 1-800-461-0140 and 1-866-767-5389</p>
            <p>Saskatchewan 1-800-306-6789</p>
            <p>
              If you need urgent help, please visit your local emergency service
              or call 911.
            </p>

            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResponsibleGambling;
