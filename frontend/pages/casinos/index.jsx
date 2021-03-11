import { useState, useEffect, useContext } from "react";
import "./casinos.scss";
import Layout from "../../components/WebLayout";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import CasinoWrapper from "../../components/CasinoWrapper";
import ContentBox from "../../components/ContentBox";
import { MainContext } from "../../components/Context";
import axios from "axios";

export default function Casinos() {
  const { contactInfo } = useContext(MainContext);
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:1337/casinos");
      const data = await response.data;
      setData(data);
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <Layout>
      <section className="casino__page">
        <div className="container">
          <div className="casino__page-inner">
            <div className="casino__page-title">
              <h1>
                <strong>
                  The greatest online casinos are on {contactInfo.name}
                </strong>
              </h1>
              <h3>
                Compare the features, bonuses, slots and game providers of the
                best casinos online thanks to reviews of our beloved players and
                staff members.
              </h3>
            </div>
            <div className="casinos__list">
              {data &&
                data.map((casino) => (
                  <CasinoWrapper
                    review={true}
                    main={true}
                    key={casino.id}
                    info={casino}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      <ContentBox />
      <ContactForm />
    </Layout>
  );
}
