import { useState, useEffect, useContext } from "react";
import "./index.scss";
import Layout from "../components/WebLayout";
import ContactForm from "../components/ContactForm";
import CasinoWrapper from "../components/CasinoWrapper";
import InfoBtn from "../components/Buttons/InfoBtn";
import axios from "axios";
import { MainContext } from "../components/Context";

export default function Home() {
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
      <section className="head">
        <div className="container">
          <div className="head__inner">
            <h1 className="head__title">
              Compare the Best Online Casinos & Deposit Bonuses
            </h1>
            <h3 className="head__subtitle">
              Benefits from exclusive bonus offers for your favorite casinos and
              slots
            </h3>
            <div className="head__top">
              <div className="head__top-2">
                <div className="head__box">
                  <div className="head__box-logo"></div>
                  <div
                    className="head__box-img"
                    style={{
                      backgroundImage:
                        "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
                    }}
                  ></div>
                  <div className="head__box-logo">logo</div>
                  <div className="head__box-number">1</div>
                  <div className="head__box-bonuses">
                    <div className="head__box-bonus">
                      <div> +110%</div>
                      <div>up to 110$</div>
                    </div>
                  </div>
                  <div className="head__box-btns">
                    <div className="head__box-info">
                      <InfoBtn />
                    </div>
                    <a href="/" className="head__box-btn">
                      <div> Get your</div>
                      <div>
                        {" "}
                        <strong>bonus now</strong>
                      </div>
                      <svg>
                        <use xlinkHref="/icons.svg#chevrons"></use>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="head__box">
                  <div className="head__box-logo"></div>
                  <div
                    className="head__box-img"
                    style={{
                      backgroundImage:
                        "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
                    }}
                  ></div>
                  <div className="head__box-logo">logo</div>
                  <div className="head__box-number">1</div>
                  <div className="head__box-bonuses">
                    <div className="head__box-bonus">
                      <div> +110%</div>
                      <div>up to 110$</div>
                    </div>
                  </div>
                  <div className="head__box-btns">
                    <div className="head__box-info">
                      <InfoBtn />
                    </div>
                    <a href="/" className="head__box-btn">
                      <div> Get your</div>
                      <div>
                        {" "}
                        <strong>bonus now</strong>
                      </div>
                      <svg>
                        <use xlinkHref="/icons.svg#chevrons"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="head__top-4">
                <div className="head__box">
                  <div className="head__box-logo"></div>
                  <div
                    className="head__box-img"
                    style={{
                      backgroundImage:
                        "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
                    }}
                  ></div>
                  <div className="head__box-logo">logo</div>
                  <div className="head__box-number">1</div>
                  <div className="head__box-bonuses">
                    <div className="head__box-bonus">
                      <div> +110%</div>
                      <div>up to 110$</div>
                    </div>
                  </div>
                  <div className="head__box-btns">
                    <div className="head__box-info">
                      <InfoBtn />
                    </div>
                    <a href="/" className="head__box-btn">
                      <div> Get your</div>
                      <div>
                        {" "}
                        <strong>bonus now</strong>
                      </div>
                      <svg>
                        <use xlinkHref="/icons.svg#chevrons"></use>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="head__box">
                  <div className="head__box-logo"></div>
                  <div
                    className="head__box-img"
                    style={{
                      backgroundImage:
                        "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
                    }}
                  ></div>
                  <div className="head__box-logo">logo</div>
                  <div className="head__box-number">1</div>
                  <div className="head__box-bonuses">
                    <div className="head__box-bonus">
                      <div> +110%</div>
                      <div>up to 110$</div>
                    </div>
                  </div>
                  <div className="head__box-btns">
                    <div className="head__box-info">
                      <svg>
                        <title>Infos</title>
                        <use xlinkHref="/icons.svg#info"></use>
                      </svg>
                    </div>
                    <a href="/" className="head__box-btn">
                      <div> Get your</div>
                      <div>
                        {" "}
                        <strong>bonus now</strong>
                      </div>
                      <svg>
                        <use xlinkHref="/icons.svg#chevrons"></use>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="head__box">
                  <div className="head__box-logo"></div>
                  <div
                    className="head__box-img"
                    style={{
                      backgroundImage:
                        "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
                    }}
                  ></div>
                  <div className="head__box-logo">logo</div>
                  <div className="head__box-number">1</div>
                  <div className="head__box-bonuses">
                    <div className="head__box-bonus">
                      <div> +110%</div>
                      <div>up to 110$</div>
                    </div>
                  </div>
                  <div className="head__box-btns">
                    <div className="head__box-info">
                      <svg>
                        <title>Infos</title>
                        <use xlinkHref="/icons.svg#info"></use>
                      </svg>
                    </div>
                    <a href="/" className="head__box-btn">
                      <div> Get your</div>
                      <div>
                        {" "}
                        <strong>bonus now</strong>
                      </div>
                      <svg>
                        <use xlinkHref="/icons.svg#chevrons"></use>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="head__box">
                  <div className="head__box-logo"></div>
                  <div
                    className="head__box-img"
                    style={{
                      backgroundImage:
                        "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)",
                    }}
                  ></div>
                  <div className="head__box-logo">logo</div>
                  <div className="head__box-number">1</div>
                  <div className="head__box-bonuses">
                    <div className="head__box-bonus">
                      <div> +110%</div>
                      <div>up to 110$</div>
                    </div>
                  </div>
                  <div className="head__box-btns">
                    <div className="head__box-info">
                      <svg>
                        <title>Infos</title>
                        <use xlinkHref="/icons.svg#info"></use>
                      </svg>
                    </div>
                    <a href="/" className="head__box-btn">
                      <div> Get your</div>
                      <div>
                        {" "}
                        <strong>bonus now</strong>
                      </div>
                      <svg>
                        <use xlinkHref="/icons.svg#chevrons"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="casinos">
        <div className="container">
          <div className="casinos__inner">
            <div className="casino__title">
              <h2>{contactInfo.name} Online Casinos selection</h2>
              <h3>
                Curated list of the best Free Spins &amp; Free Deposit Bonuses
                available
              </h3>
            </div>
            <div className="casino__list">
              {data &&
                data.map((casino) => (
                  <CasinoWrapper
                    review={false}
                    main={true}
                    key={casino.id}
                    info={casino}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
}
