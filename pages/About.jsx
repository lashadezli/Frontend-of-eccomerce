import girls from "../img/girls.jpeg";
import classes from "../modules/About.module.scss";
import dollar from "../img/dollarwhite.png";
import moneybag from "../img/money-bagwhite.png";
import bag from "../img/shopping-bagwhite.png";
import shop from "../img/shopwhite.png";
import tomi from "../img/tomi.png";
import willsm from "../img/willsm.png";
import emmaw from "../img/emmaw.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import linkedin from "../img/linkedin.png";
import delivery from "../img/delivery.png";
import secrity from "../img/security.png";
import headphones from "../img/headphones.png";


function About() {
  return (
    <>
      <div className={classes["About"]}>
        <div className={classes["our-story"]}>
          <div className={classes["left-side"]}>
            <h1>Our Story</h1>
            <div className={classes["description"]}>
              <p className={classes["launched"]}>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping <br />
                makterplace with an active presense in Bangladesh. Supported{" "}
                <br />
                by wide range of tailored marketing, data and service solutions,{" "}
                <br />
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                millioons customers across the region.
              </p>

              <p className={classes["Offers"]}>
                Exclusive has more than 1 Million products to offer, growing at
                a <br />
                very fast. Exclusive offers a diverse assotment in categories{" "}
                <br />
                ranging from consumer. <br />
              </p>
            </div>
          </div>
          <div className={classes["right-side"]}>
            <img src={girls} alt="" />
          </div>
        </div>

        <div className={classes["testimonials"]}>
          <div className={classes["box"]}>
            <div className={classes["border"]}>
              <div className={classes["image"]}>
                <img src={shop} alt="" />
              </div>
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
          <div className={classes["box"]}>
            <div className={classes["border"]}>
              <div className={classes["image"]}>
                <img src={dollar} alt="" />
              </div>
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
          <div className={classes["box"]}>
            <div className={classes["border"]}>
              <div className={classes["image"]}>
                <img src={bag} alt="" />
              </div>
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
          <div className={classes["box"]}>
            <div className={classes["border"]}>
              <div className={classes["image"]}>
                <img src={moneybag} alt="" />
              </div>
            </div>
            <h1>10.5K</h1>
            <p>Sallers active our site</p>
          </div>
        </div>

        <div className={classes["workers"]}>
          <div className={classes["worker-box"]}>
            <div className={classes["worker-image"]}>
              <img src={tomi} alt="" />
            </div>
            <div className={classes["descriptions"]}>
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>

              <div className={classes["icons"]}>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className={classes["worker-box"]}>
            <div className={classes["worker-image"]}>
              <img src={emmaw} alt="" />
            </div>
            <div className={classes["descriptions"]}>
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>

              <div className={classes["icons"]}>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className={classes["worker-box"]}>
            <div className={classes["worker-image"]}>
              <img src={willsm} alt="" />
            </div>
            <div className={classes["descriptions"]}>
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>

              <div className={classes["icons"]}>
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className={classes["services"]}>
          <div className={classes["services-container"]}>
             <div className={classes["services-box"]}>
                <div className={classes["services-border"]}>
                    <div className={classes["services-image"]}>
                      <img src={delivery} alt="" />
                    </div>
                </div>
                <h1>FREE AND FAST DELIVERY</h1>
                <p>Free delivery for all orders over $140</p>
             </div>
             <div className={classes["services-box"]}>
              <div className={classes["services-border"]}>
                      <div className={classes["services-image"]}>
                        <img src={headphones} alt="" />
                      </div>
                  </div>
                  <h1>24/7 CUSTOMER SERVICE</h1>
                  <p>Friendly 24/7 customer support</p>
             </div>
             <div className={classes["services-box"]}>
              <div className={classes["services-border"]}>
                      <div className={classes["services-image"]}>
                        <img src={secrity} alt="" />
                      </div>
                  </div>
                  <h1>MONEY BACK GUARANTEE</h1>
                  <p>We reurn money within 30 days</p>
              </div>
          </div>
        </div>





      </div>
    </>
  );
}

export default About;
