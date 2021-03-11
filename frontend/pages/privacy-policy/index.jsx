import React, { useContext } from "react";
import { MainContext } from "../../components/Context";
import BreadCrumps from "../../components/BreadCrumps";
import Layout from "../../components/WebLayout";
import "../terms-of-service/terms.scss";

function PrivacyPolicy() {
  const { contactInfo } = useContext(MainContext);
  return (
    <Layout>
      <div className="terms">
        <div className="container">
          <BreadCrumps name="Privacy Policy" />
          <div className="terms__inner">
            <h1>
              <strong>Our Privacy Promise</strong>
            </h1>
            <p>
              We will always do our best to protect your privacy and keep things
              simple. We will be transparent about the data we collect and how
              we use it.
            </p>
            <h2>
              <strong>Our privacy policy</strong>
            </h2>
            <p>
              As a company based in Malta, our business is governed by the
              European Data Protection Act, in particular the European Union's
              General Data Protection Regulations
            </p>
            <h3>
              <strong>Our Data Protection Officer</strong>
            </h3>
            <p>
              If you have any questions about how {contactInfo.name} uses your
              Personal Information, or if you wish to submit an access request
              or file a request to exercise any of your rights, you may contact
              our Data Protection Officer by sending an email to{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
            </p>
            <h2>
              <strong>The information we get from you</strong>
            </h2>
            <p>
              You can use the {contactInfo.name} Website without providing us
              with your Personal Information, although, as explained below, we
              will collect certain information from the device you use. Of
              course, if you contact us, we will retain your contact details and
              details of your query.
            </p>
            <p>&nbsp;</p>
            <h2>
              <strong>The information we get from your device</strong>
            </h2>
            <p>
              We collect information from the devices you use to access
              {contactInfo.name}, such as IP address (a number that identifies a
              specific device on the Internet and is needed by your device to
              communicate with websites), hardware model, operating system and
              version, software, user agent, device information, preferred
              language, serial number, device motion control information, mobile
              network information and location data.
            </p>
            <p>
              We collect web server log files which may include information such
              as access dates and times, the features or pages you visit,
              application or web site crashes and other system activity, the
              third party site or service you used immediately before you came
              to our web site and the URL you access immediately after leaving
              our web site. Our website may also use Hotjar. This is a
              third-party tool that helps us by recording mouse clicks and
              movements, page scrolling and any text you enter into forms on the
              site. This data helps us to improve our website, find and correct
              errors, and improve functionality. It is also used for statistical
              reports on the use and performance of our site.
            </p>
            <h2>
              <strong>Information we obtain via cookies</strong>
            </h2>
            <p>
              Cookies" are small text files stored in your web browser that
              allow us to recognize your computer when you visit our website.
              Cookies are necessary to ensure that certain parts of our website
              function smoothly and securely. We also use them to make
              everything faster, easier and more personalised and to help us
              understand how our websites are used. Cookies may also be used to
              present you with more relevant content or advertising.
            </p>
            <p>
              To do this, cookies collect some of your personal information when
              you use our websites. You can choose to accept or decline some or
              all types of cookies through your device's browser settings. If
              you continue to use our websites without adjusting your browser
              settings, we will use cookies as described in the paragraphs
              below. To help you make an informed choice, you need to understand
              why we use different types of cookies and how this will affect
              your online experience. This section provides you with a summary
              of the main points and tells you how disabling the different types
              of cookies could affect your experience on our websites.
            </p>
            <p>
              Most of the cookies we use are "computer cookies" which are
              automatically deleted at the end of a browsing session. We also
              use "persistent cookies". These remain on your hard drive and we
              use them to automatically recognize you as the same visitor when
              you return to our website or application. The cookie itself does
              not contain any personally identifiable information, but it does
              send an identifier to our server that allows us to link you to the
              cookie so that we can update the home page to notify you of any
              changes since your last visit.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>
              <strong>
                The cookies we use fall into the following categories
              </strong>
            </h2>
            <h3>
              <strong>
                Cookies Absolutely Necessary: Making Our Websites Work
              </strong>
            </h3>
            <p>
              These cookies are necessary so that you can move around our
              websites and log in to secure sections. They also allow us to
              provide you with content adapted to your device. If you refuse to
              receive them, some parts of our site will not function properly
              and may not function at all.
            </p>
            <p>
              Here are some examples of how we use cookies that are absolutely
              necessary:
            </p>
            <ul>
              <li>To allow you to navigate our site without problems</li>
              <li>
                Display content in a format that is ideal for your device and
                position it correctly for your screen
              </li>
              <li>
                Allows you to play content without having to repeatedly adjust
                volume and display settings
              </li>
            </ul>
            <h3>
              <strong>Feature Cookies: Enabling website features</strong>
            </h3>
            <p>
              These cookies allow our websites to remember the choices you have
              made, such as your region. We also use them to personalize your
              experience, for example, by presenting different content to
              regular users and first-time visitors to the site, by giving you
              access to information provided by social media such as Twitter, or
              to provide you with links to relevant articles related to the
              information you are viewing.
            </p>
            <p>
              Without these cookies, you will still be able to use the site, but
              you may have difficulty with some features. You will also find
              that the content on the site is not suitable for you.
            </p>
            <p>Some examples of how we use feature cookies:</p>
            <ul>
              <li>
                Remember if you have completed a survey so we don't have to ask
                you to complete it again.
              </li>
              <li>
                Limit the number of times a particular advertisement is
                presented to you. (Also known as "capping".)
              </li>
            </ul>
            <h3>
              <strong>
                Analytical Cookies - Monitoring the Performance of our Websites
              </strong>
            </h3>
            <p>
              These cookies collect information about how people use our
              websites and how well our websites perform, for example how many
              people visit the website, which pages are most popular, whether
              people see error messages and where.
            </p>
            <p>A few examples of how we use analytical cookies:</p>
            <ul>
              <li>To identify browsing trends on our websites</li>
              <li>To help us keep our content relevant and up to date</li>
              <li>
                To count the number of times a page or email was viewed and help
                us measure the effectiveness of our content and communications
              </li>
              <li>To improve the operation of our sites.</li>
            </ul>
            <p>
              Without these cookies, you will still be able to use and enjoy all
              the online features of our websites.
            </p>
            <p>
              <strong>Web beacons ("web beacons")</strong>
            </p>
            <p>
              Our websites and some of the emails we send also contain small,
              invisible images called "web beacons" or "web beacons". These are
              used to count the number of times the page or email has been
              viewed and help us measure the effectiveness of our marketing. Web
              beacons are anonymous and do not contain or collect any
              information that identifies you as an individual.
            </p>
            <p>
              <strong>Targeting Cookies - Marketing and Advertising</strong>
            </p>
            <p>
              These cookies are used to deliver advertisements and content more
              relevant to you, as well as to limit the number of times you see a
              particular advertisement. They also measure the effectiveness of
              advertising campaigns. We also use them to test and improve our
              products and services by, for example, testing different products
              with different customer groups to see which is the most popular.
            </p>
            <p>
              Without these cookies, you will be able to use and enjoy all the
              features of our websites, but the advertisements you see will not
              be relevant to your interests.
            </p>
            <h2>
              <strong>How and why we use your personal information</strong>
            </h2>
            <p>
              We use the information we hold about you in different ways that
              fall into these broad categories:
            </p>
            <ul>
              <li>
                What we have to do to provide you with the products or services
                you've requested;
              </li>
              <li>What we need to do to meet our legal obligations;</li>
              <li>
                The things that enable us to run our business effectively and
                efficiently; and
              </li>
            </ul>
            <p>What we do with your consent for marketing purposes.</p>
            <p>
              We are telling you this because European data protection law gives
              you rights over your personal data that vary depending on the
              category in which they are held. This section explains each of the
              categories further, the rights each gives you, how to exercise
              them and what they mean in practice.
            </p>
            <h2>
              <strong>Offering our products and services</strong>
            </h2>
            <p>
              We use your personal information to be able to offer you our
              products and services, answer your questions and provide you with
              the best possible customer service. We use technical information
              about your device, such as operating system, browser version and
              location to present you with the most appropriate version of our
              website and to make it work properly and securely.
            </p>
            <p>
              Like most organizations, we share your information with outside
              organizations working for us in order to be able to offer our
              products and services.
            </p>
            <h2>
              <strong>
                Privacy Rights: Can I refuse to have my data used in this way?
              </strong>
            </h2>
            <p>
              This category covers anything essential for us to be able to
              provide you with the service(s) you use or subscribe to. If you do
              not wish your data to be used in this way, you have the option not
              to use our website.
            </p>
            <h3>
              <strong>
                Meeting our obligations: Legal and regulatory requirements
              </strong>
            </h3>
            <p>
              {contactInfo.name} must comply with a variety of legal and
              regulatory requirements, some of which involve the use of personal
              information and may include time limits for which we must retain
              such information.
            </p>
            <p>
              We are also subject to legal and regulatory requirements relating
              to other aspects of our business, such as complaint handling or
              advertising and marketing. Some of these also involve the use of
              your personal information or the setting of time limits for
              retaining it.
            </p>
            <p>
              <strong>
                Privacy Rights: Can I refuse to have my personal information
                used in this way?
              </strong>
            </p>
            <p>
              This category covers activities that we are required to do in
              order to provide our products and services in a lawful,
              responsible manner that complies with the requirements of our
              regulators, while protecting our customers and our business. If
              you do not wish your data to be used in this way, you have the
              option not to use our website
            </p>
            <h2>
              <strong>Managing our business effectively</strong>
            </h2>
            <p>
              We do certain things to help us function as a business
              organization. We have a genuine interest in conducting these
              activities and, where they involve the use of your personal
              information, we ensure that we use it in a way that minimises any
              impact on your privacy.
            </p>
            <p>
              In Europe, data protection law gives you the "right to object" to
              such activities if your right to privacy outweighs our legitimate
              business interest in carrying them out. You can always exercise
              this right, but as we explain in more detail below, activities in
              this category are essential to our business. In short, if you wish
              to exercise this right, it generally means that you must stop
              using our website.
            </p>
            <p>
              Please read this section carefully and make sure you are satisfied
              with it before providing us with your personal information.
            </p>
            <h3>
              <strong>Business Opportunities</strong>
            </h3>
            <p>
              We conduct baseline analysis to help us understand how, when,
              where and why our clients use our services, as well as our
              company's performance. This helps us monitor and plan for
              everything from the effectiveness of our advertising to ensuring
              we have enough staff available to handle requests during peak
              hours. It also gives us a much clearer picture of our customers,
              the demographic groups they belong to (e.g. age group, gender,
              location, etc.) and the products and services they use, which
              helps us develop better features, products and services. We
              conduct this analysis in a way that does not identify customers as
              individuals, so there is no impact on an individual's privacy.
            </p>
            <h3>
              <strong>Privacy Rights: Can I object?</strong>
            </h3>
            <p>
              Like any business, we need to closely monitor the performance of
              our business and whether we are meeting the needs of our
              customers. Because we take care to do so in a way that does not
              identify you as an individual, there is no impact on your privacy.
              If you do not wish your data to be used in this way, you have the
              option not to use our website.
            </p>
            <h2>
              <strong>Providing you with a more personal experience</strong>
            </h2>
            <p>
              No matter what products or services you use, where and how you
              interact with us, we want to offer you the same quality service
              and customize it for you. We will personalize your experience by
              tailoring the layout and content of our sites based on what we
              know about you, your preferences and how you like to use our
              services. For example, we will show you features that you have
              used or think you would like to use, and customize search results
              to display content that is more relevant to you.
            </p>
            <p>
              We also observe aggregate (non-identifiable) data showing the
              products and features that our customers use, and based on this
              information, we suggest products and features that we think you
              will enjoy because they are popular with others who use the same
              products and features as you.
            </p>
            <p>
              <strong>Privacy Rights: Can I object?</strong>
            </p>
            <p>
              We believe that this personalized experience enhances our website
              and your experience and we want to provide you with the best
              possible customer experience. Using your personal data in this way
              allows us to do so and does not impact your privacy. If you do not
              want your data to be used in this way, you have the option not to
              use our website.
            </p>
            <p>
              Please note that certain aspects of your customer experience are
              provided through the use of cookies. If you have enabled cookies
              in your browser, we will personalise certain aspects of our site,
              such as remembering your location. You can control this via your
              browser settings.
            </p>
            <h2>
              <strong>Protection of our business interests</strong>
            </h2>
            <p>
              Most people use our products and services fairly, but if we become
              aware of activity or behaviour on an account that could be harmful
              to our business interests, we will investigate.
            </p>
            <p>
              <strong>Privacy Rights: Can I object?</strong>
            </p>
            <p>
              As a company, we have a legitimate interest in protecting our
              business interests from deliberate misuse, and we believe we do so
              in a manner that is proportionate to the risks we face and that
              has minimal impact on your privacy. If you do not want your data
              to be used in this way, you have the option not to use our
              website.
            </p>
            <h2>
              <strong>Market Research</strong>
            </h2>
            <p>
              We will occasionally invite you to provide feedback on the
              services you have used or to participate in customer surveys,
              questionnaires or focus groups. We will contact you directly
              online or by email. Participation in research is always voluntary,
              and when we use a third party, we will not provide any details
              (other than your contact information so that they can send you the
              request or invitation) unless and until we have your consent to do
              so.
            </p>
            <p>
              <strong>Privacy Rights: Can I object to this practice?</strong>
            </p>
            <p>
              It is very important for any business to know what its customers
              think. Because we are careful to limit the number and frequency of
              feedback/search requests we send to any one person, and you can
              always refuse to participate, there is no negative impact on your
              privacy and you cannot refuse to receive these occasional
              requests.
            </p>
            <p>&nbsp;</p>
            <h2>
              <strong>What we do with your consent: Marketing</strong>
            </h2>
            <h2>
              <strong>Direct Marketing</strong>
            </h2>
            <p>
              We will send you offers and information only if we have your
              consent. In this case, we will contact you by e-mail, post, SMS or
              online. We never share your data with third parties. From time to
              time, we may work with a third party to provide you with details
              of a product or service that we think may be of interest to you,
              but when we do, the contact will come from us - we will never pass
              on your details to a third party without your prior consent.
            </p>
            <h2>
              <strong>Maintaining Relevance</strong>
            </h2>
            <p>
              We want to improve betting and gaming for you, so we want to be
              able to tell you about products, services and features that you
              find exciting and relevant, so we tailor the offers and
              information we send you to suit you. To do this, we look at what
              we know about you so that we can refine the offers we present to
              you.
            </p>
            <h2>
              <strong>Giving you control</strong>
            </h2>
            <p>
              We strongly believe that our clients prefer offers and information
              tailored to them and their areas of interest rather than general
              advertising. We therefore adapt all our marketing to the image we
              have built of you. We believe that this makes our marketing
              better, both for you and for us. However, data protection law
              gives you the right to refuse to allow your personal data to be
              used to create that image of you and to predict what might be of
              interest to you. You can therefore refuse at any time. As we
              explain above, our marketing is designed in this way for you. To
              opt-out of this type of personalization, you will need to opt-out
              of all {contactInfo.name} email services to which you subscribe,
              but we will continue to personalize your online experience based
              on the image we have already created of you. This means that you
              will continue to enjoy a more personalized look and feel on our
              websites and you will always see the following:
            </p>
            <ul>
              <li>
                Targeted pop-ups informing you of products, services and offers
                we think you'll like
              </li>
              <li>
                Tailor-made offers that are relevant to you, communicated
                through pop-ups or other website content
              </li>
              <li>
                Targeted messages on social media platforms such as Facebook or
                Twitter (which you can easily control via your privacy settings
                on each platform) and other places on the internet that support
                targeted advertising.
              </li>
            </ul>
            <p>
              So we think this is the best balance: It allows you to opt out of
              receiving marketing via offline channels (post, email and SMS)
              while enjoying the best online experience without having to give
              up the benefits. However, if you prefer not to receive
              personalized messages or offers online, you have the option not to
              use our website. Please also note the following points:
            </p>
            <p>
              Whenever possible, we will still make recommendations on products
              you might enjoy. We will base our recommendations on how our
              customers in general use our sites and features, and not on
              information about you as an individual.
            </p>
            <p>
              Some personalized banner ads on our sites are controlled
              separately via cookies, so you will also need to adjust your
              browser's cookie settings or you may continue to see them.
            </p>
            <p>
              You will still be able to see our advertisements on other websites
              or social media that you visit, but they will not be targeted to
              you.
            </p>
            <h2>
              <strong>
                Marketing: Maintaining Relevance and Giving You Control - At a
                Glance
              </strong>
            </h2>
            <p>
              All our marketing is designed to be as relevant and interesting as
              possible for you, so if you are :
            </p>
            <p>
              Happy to receive personalized offers and information via email,
              mail, SMS and online - Make sure you choose direct marketing.
            </p>
            <p>
              Happy to see personalized offers and information when you're
              online, but don't want to receive them by email, post or SMS -
              Make sure you opt out of direct marketing.
            </p>
            <p>
              Unhappy to see personalised offers and information online or by
              email, post or SMS - Make sure you turn off personalised marketing
              and adjust your cookie settings to avoid receiving banner ads.
              Remember that you can change your mind at any time by updating
              your preferences.
            </p>
            <h2>
              <strong>Social media advertising</strong>
            </h2>
            <p>
              If you have given your consent to marketing, we may work with
              social media companies such as Facebook and Twitter to provide you
              with information about our products and services via their
              platforms. If you do not wish to see these advertisements, you can
              easily disable personalized marketing in the privacy settings of
              each platform.
            </p>
            <p>
              Even if you have withdrawn your consent to personalized marketing
              from us, you may occasionally see general advertisements for our
              products and services on social media. These will not be
              specifically directed to you and, again, you can control this via
              the privacy settings on each platform.
            </p>
            <h2>
              <strong>Online behavioural advertising</strong>
            </h2>
            <p>
              We use cookies placed by third parties to collect personal
              information about your browsing, which is then aggregated with
              data about what other people with similar interests and
              characteristics (in terms of age, gender, location, etc.) consult.
              The combined information is used to show you online advertisements
              based on those interests, either for our own products and services
              or those of a third party (this is called "online behavioral
              advertising").
            </p>
            <h2>
              <strong>Sharing Your Information</strong>
            </h2>
            <h2>
              <strong>Third-party casino and sports betting operators</strong>
            </h2>
            <p>
              We do not share your personal information with casino and sports
              betting operators. However, when you click on a link from our site
              to theirs, a cookie is stored that identifies {contactInfo.name}{" "}
              as the referring website. These third party casino and sports
              betting operators will then use any Personal Information you
              provide to them in accordance with their own privacy policies.
              Each casino and sports betting operator has its own privacy
              policy. You are therefore advised to refer to that policy and
              ensure that you are satisfied with the way your personal data will
              be used before opening your account.
            </p>
            <h2>
              <strong>Companies that provide services on our behalf</strong>
            </h2>
            <p>
              We share your personal information with outside organizations that
              provide services on our behalf for the purposes of this policy.
              The main functions that are or may be performed in whole or in
              part by third parties are listed below:
            </p>
            <ul>
              <li>Management and execution of marketing campaigns</li>
              <li>Customer Service</li>
              <li>Audits to detect unfair use of our products and services</li>
              <li>Web hosting, online content services and data storage</li>
              <li>Management of contests and offers</li>
              <li>Data analysis and data cleansing</li>
              <li>
                Market research and collection or analysis of customer feedback
              </li>
              <li>Computer Support</li>
              <li>Audit, legal and compliance services</li>
            </ul>
            <p>
              We conduct audits to ensure that the companies we work with will
              treat your information with the same level of care and protection
              as we do. We and these companies are obliged to treat your
              information in accordance with the Data Protection Act. We are
              also required to put in place contractual measures to enforce
              these obligations.
            </p>
            <h2>
              <strong>Sending personal information outside Europe</strong>
            </h2>
            <p>
              Some of the third party companies we work with are based or have
              some of their activities in countries outside the European
              Economic Area (EEA). The European Economic Area is made up of the
              states that are members of the EU and certain countries that are
              considered to offer a data protection standard equivalent to that
              of Europe.
            </p>
            <p>
              When personal information is transferred outside the EEA, we must
              put in place additional legal protections in addition to our usual
              measures and controls to ensure that it receives the same level of
              protection as in Europe. To do so, we use standard contractual
              clauses (sometimes referred to as "EU standard contractual
              clauses") approved by the European Commission and European privacy
              regulators, although there are other approved legal mechanisms
              that we may decide to use instead. Where necessary, we also
              implement any additional contractual measures required by local
              law in any of the countries in which we operate, except where they
              conflict with the EU General Data Protection Regulation.
            </p>
            <h2>
              <strong>
                Other circumstances in which we may share your personal data
              </strong>
            </h2>
            <p>
              Apart from the functions described above, we do not share your
              personal information with third parties, except where we are
              required or permitted by law. These circumstances are rare, but
              may require us to share information with the police, courts or
              other law enforcement agencies (for matters such as taxation) and
              sporting bodies (for matters of sporting integrity) in the
              countries in which we operate.
            </p>
            <p>
              When necessary to protect or defend our rights and interests,
              resolve disputes or enforce our agreements, we will share personal
              data with our regulators, outside legal counsel and debt
              collection and enforcement agencies, although these circumstances
              are also rare.
            </p>
            <p>
              If the ownership of our business, in whole or in part, undergoes a
              change, reorganization or restructuring, we will transfer your
              personal information to the new owner or successor company so that
              we or they can continue to provide the services you wish to
              receive.
            </p>
            <p>
              Whenever we share personal information, regardless of the
              circumstances, we always do so legally and with respect for your
              privacy.
            </p>
            <h2>
              <strong>How long do we keep your information?</strong>
            </h2>
            <p>
              We keep your personal information only as long as we have a legal
              reason to do so, which includes providing the services you have
              requested, complying with our legal and regulatory obligations,
              resolving disputes and honouring our agreements.
            </p>
            <p>
              The length of time we retain different types of personal
              information may vary depending on the purpose for which we
              obtained it, the purpose for which we process it, and applicable
              legal requirements. When determining our retention and deletion
              periods, we take into account a variety of factors and
              requirements, including: gaming regulations, anti-money laundering
              rules, tax rules, payment industry requirements, complaint
              handling, the need to prevent or detect crime or other misuse of
              our services, and audit requirements.
            </p>
            <p>
              In order to meet our various requirements and obligations, some of
              your personal data will need to be retained for a period of time
              after you cease to be a customer.
            </p>
            <p>
              When we no longer need your personal information to meet the above
              requirements, we securely delete it. When we wish to retain
              information for analysis purposes, we first make it anonymous in
              accordance with the standards approved by the Dutch Data
              Protection Authority (Autoriteit Persoonsgegevens, AP) so that it
              can no longer be linked to an individual. Please note that if you
              refuse to receive marketing from us, we will still need to retain
              your details to prevent future marketing activities.
            </p>
            <h2>
              <strong>
                Keeping control of your personal information: your privacy
                rights
              </strong>
            </h2>
            <p>
              We respect the fact that your personal information belongs to you,
              so we want to be clear about what these rights mean in practice
              and how you can exercise them.
            </p>
            <h2>
              <strong>
                The right to refuse to allow your information to be used for
                marketing purposes
              </strong>
            </h2>
            <p>
              You can opt out of direct marketing at any time. You also have the
              right to opt-out of having your information used to create a
              "profile" of you that we use for marketing purposes.
            </p>
            <p>
              We strongly believe that our customers prefer to receive tailored
              offers and information, so we tailor all of our marketing to make
              it more relevant and interesting to our customers. In practice,
              this means that if you wish to opt-out of having your information
              used to personalise marketing, you will have to opt-out of
              receiving any direct marketing from us.
            </p>
            <h2>
              <strong>
                The right to have any inaccuracies in your personal information
                corrected
              </strong>
            </h2>
            <p>
              You can update your personal data at any time. Help us help you by
              keeping your contact information up to date and letting us know if
              you find any errors in the information we hold about you. If this
              is something you cannot correct yourself online, you should
              contact us at{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
              We will update inaccuracies promptly, and within one month if you
              request a more complex change. If we decide not to make the change
              you requested, we will explain why and add a note to your account
              to show that you requested the change. If you do not agree with
              our decision, you have the right to complain to the privacy
              regulator.
            </p>
            <h2>
              <strong>Your right to object</strong>
            </h2>
            <p>
              The Data Protection Act gives you the right to express an
              "objection" to the activities detailed in the section "Running our
              business effectively and efficiently" if you believe that your
              privacy rights outweigh the legitimate interest we have as a
              company. Please read this section carefully before contacting us
              and note that exercising your right to object generally means that
              you will have to stop using our services. If you do not agree with
              our decision in this regard, you have the right to complain to our
              privacy regulator.
            </p>
            <h2>
              <strong>Your right to erasure</strong>
            </h2>
            <p>
              People sometimes call this the "right to forget". Under the Data
              Protection Act, you have the right to request the deletion of your
              personal data under the following circumstances:
            </p>
            <ul>
              <li>
                When the courts or our regulators have found that we are
                processing it illegally;
              </li>
              <li>
                When our original purpose for collecting the data has been
                achieved and we have no other valid legal reason for continuing
                to retain it;
              </li>
              <li>
                When you have withdrawn your consent to marketing and
                personalised marketing, and have asked us to delete information
                we have previously used for these purposes. In this case, we
                will delete the data from our marketing systems or make it
                completely anonymous. Please note, however, that we will retain
                your contact details to prevent further marketing;
              </li>
              <li>
                When you have successfully exercised your "right to object" to
                any of the activities in the section entitled "Running our
                business effectively and efficiently" and have asked us to
                delete the information used for this purpose. As we explain in
                this section, exercising your right to opt out generally means
                not using our website, and in most cases we will need to retain
                your information for a period of time after your account has
                been closed. We will not delete information while we still have
                a valid legal or regulatory reason to retain it, unless we are
                required to do so by the courts or our regulatory bodies.
              </li>
            </ul>
            <h3>
              <strong>How do I exercise this right?</strong>
            </h3>
            <p>
              Please read the sections "How long do we keep your information"
              and "Your right to delete" carefully before contacting us. If you
              still wish to exercise your right, you should contact us at{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>{" "}
              and we will respond to your request within one month. If we comply
              with your request and delete your data, we will also inform the
              third parties to whom the data has been transferred, if we are
              able to do so, and let you know who they are. If we do not accept
              your request, we will explain why. If you do not agree, you have
              the right to complain to the privacy regulator.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>
              <strong>The right to access the data we hold about you</strong>
            </h2>
            <p>
              If you would like a copy of the Personal Information that{" "}
              {contactInfo.name} holds about you, you should request it here. We
              will ask you to complete and return a form which is not mandatory,
              but which helps us to help you by providing you with the
              information you are looking for. Before responding to your
              request, we will ask you for valid identification and once we
              receive it, we will give you an answer within one month. If your
              request is complex and may take more than a month, we will let you
              know as soon as possible and let you know how long we expect it to
              take.
            </p>
            <p>
              We will respond to requests to the extent possible, but there are
              situations where local or European data protection legislation
              requires or permits us to withhold certain information (for
              example, where it relates to disclosure of information about
              another person or commercially sensitive information) or allows us
              to charge a small fee. If this applies, we will explain why.
            </p>
            <h2>
              <strong>Your right to "data portability"</strong>
            </h2>
            <p>
              The right to "data portability" is intended to allow consumers to
              re-use some of their personal information online by making it
              available in a commonly used, machine-readable format. This file
              format can be transmitted and used by other organizations. This is
              a new initiative and it is not yet possible to "transfer" data
              directly between companies in the betting and gaming industry.
              However, if you wish to exercise this right, you must submit your
              request here, and we will provide you with the following
              information in the form of a CSV file:
            </p>
            <ul>
              <li>
                The personal and contact details contained in your online
                account
              </li>
              <li>
                Any other information you provided online (note that this does
                not include any details submitted on paper)
              </li>
              <li>
                Details you have provided online in complaints or inquiries
              </li>
              <li>
                Before responding to your request, we will ask you for valid
                identification and we will give you an answer within one month
                of receipt.
              </li>
            </ul>
            <h3>
              <strong>Your right to complain to the regulator</strong>
            </h3>
            <p>
              If you believe that your privacy rights have been violated or if
              you disagree with a decision we have made regarding your privacy
              rights, you have the right to complain to the privacy regulator.
            </p>

            <h2>
              <strong>Links to Third Party Sites</strong>
            </h2>
            <p>
              Our websites provide links to those of third parties. These
              organizations and sites will have their own privacy policies which
              will be different from ours. When you visit one of these sites,
              please check that you are satisfied with their privacy policies
              before providing them with any personal information.
            </p>
            <h2>
              <strong>You have succeeded</strong>
            </h2>
            <p>
              Phew, that was a big read. As you can see, we tried to keep it as
              simple as possible (while respecting legal requirements). If you
              have any questions, please send an email to{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
