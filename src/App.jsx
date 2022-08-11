import "./App.css";
import Facebook from "../src/assets/Facebook.svg";
import FirstPartImg from "../src/assets/FirstPartImg.svg";
import Insta from "../src/assets/Insta.svg";
import Logo from "../src/assets/Logo.svg";
import Twitter from "../src/assets/Twitter.svg";
import desktopFeature1 from "../src/assets/desktopFeature1.svg";
import screen from "../src/assets/screen.svg";
import Ellipse from "../src/assets/Ellipse.svg";
import triangle from "../src/assets/triangle.svg";
import SCREENMASK from "../src/assets/SCREENMASK.svg";
import Base from "../src/assets/Base.svg";
import BaseBottom from "../src/assets/BaseBottom.svg";
import partner1 from "../src/assets/partner1.svg";
import partner2 from "../src/assets/partner2.svg";
import partner3 from "../src/assets/partner3.svg";
import partner4 from "../src/assets/partner4.svg";
import partner5 from "../src/assets/partner5.svg";
import partner6 from "../src/assets/partner6.svg";
import partner7 from "../src/assets/partner7.svg";
import partner8 from "../src/assets/partner8.svg";
import IBM from "../src/assets/IBM.svg";
import ProfilPic from "../src/assets/ProfilPic.svg";
import Location from "../src/assets/Location.svg";
import Phone from "../src/assets/Phone.svg";
import Email from "../src/assets/Email.svg";
import TwitterBlu from "../src/assets/TwitterBlu.svg";
import FacebookBlu from "../src/assets/FacebookBlu.svg";
import InstaBlu from "../src/assets/InstaBlu.svg";
import Map1 from "../src/assets/Map1.svg";

function App() {
  return (
    <div className="container">
      <div
        className="first-part back-img"
        style={{
          backgroundImage: `url(${FirstPartImg})`,
          width: "100%",
          height: "930px",
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "initial",
        }}
      >
        <div>
          <header>
            <nav>
              <a className="link" href="#">
                Home
              </a>
              <a className="link" href="#">
                Product
              </a>
              <a className="link" href="#">
                Pricing
              </a>
              <a className="link" href="#">
                About
              </a>
              <a className="link" href="#">
                Contact
              </a>
            </nav>

            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="social-media">
              <img src={Twitter} alt="Twitter" />
              <img src={Facebook} alt="Facebook" />
              <img src={Insta} alt="Insta" />
            </div>
          </header>
        </div>
        <div className="features">
          <h1 className="h1-first-part">The best products start with Figma</h1>
          <h4 className="h4-first-part">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
          <div>
            <div className="button-first-part">
              <button className="button1">Try For Free</button>
            </div>
          </div>
        </div>
      </div>
      <div className="second-part">
        <div className="description-features">
          <h2 className="features-title">Features</h2>
          <h4 className="features-descript">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </div>
        <div className="all-descrip-feature">
          <div className="first-feature">
            <img src={desktopFeature1} alt="desktopFeature1" />
            <h3 className="h3-feature">OpenType features Variable fonts</h3>
            <div className="descrip-feature">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </div>
          </div>
          <div className="second-feature">
            <img src={desktopFeature1} alt="desktopFeature1" />
            <h3 className="h3-feature">Design with real data</h3>
            <div className="descrip-feature">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </div>
          </div>
          <div className="third-feature">
            <img src={desktopFeature1} alt="desktopFeature1" />
            <h3 className="h3-feature">Fastest way to take action</h3>
            <div className="descrip-feature">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </div>
          </div>
        </div>
        <div>
          <div
            className="screen"
            // style={{
            //   backgroundImage: `url(${screen})`,
            //   width: "1177.34px",
            //   height: "658.3px",
            //   borderRadius: "44.81px",
            //   backgroundColor: "white",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   backgroundSize: "cover",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          >
            <img src={screen} alt="screen" />
            {/* <div
              style={{
                backgroundImage: `url(${Ellipse})`,
                width: "187.4px",
                height: "187.4px",
                borderRadius: "100%",
                backgroundColor: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={triangle} alt="triangle" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="third-part">
        <div className="third-part-firstchild">
          <div className="third-part-title">Fastest way to organize</div>
          <div className="third-part-description">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </div>
          <div>
            <div className="button-first-part">
              <button className="button1">Try For Free</button>
            </div>
          </div>
        </div>
        <div className="third-part-secondchild">
          <img
            src={SCREENMASK}
            alt="SCREENMASK"
            style={{
              border: "solid",
              borderColor: "black",
              borderRadius: "10px",
            }}
          />
          <img src={Base} alt="Base" />
          <img src={BaseBottom} alt="BaseBottom" />
        </div>
      </div>

      <div className="forth-part">
        <h2 className="forth-part-title">Partners</h2>
        <h4 className="forth-part-description">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </h4>

        <div className="partners">
          <img src={partner1} />
          <img src={partner2} />
          <img src={partner3} />
          <img src={partner4} />
          <img src={partner5} />
          <img src={partner6} />
          <img src={partner7} />
          <img src={partner8} />
        </div>
        <div className="button-first-part">
          <button className="button1">Try For Free</button>
        </div>
      </div>

      <div className="fifth-part">
        <h2 className="fifth-part-title">Testimonials</h2>
        <img className="IBM" src={IBM} alt="IBM" />
        <h4 className="fifth-part-description">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </h4>
        <div className="profil">
          <img src={ProfilPic} alt="IBM" />
          <div className="data">
            <div>
              <div className="data-name">Organize across</div>
              <div className="data-description">Ui designer</div>
            </div>
          </div>
        </div>
        <div className="button-first-part">
          <button className="button1">Try For Free</button>
        </div>
      </div>
      <div
        className="six-part-background"
        style={{ backgroundColor: "#252B42", marginTop: "40px" }}
      >
        <div className="six-part">
          <div className="six-part-title">Pricing</div>
          <div className="six-part-description">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </div>
          <div className="all-form">
            <div>
              <div className="form1">
                <div className="form-name">
                  <h3>FREE</h3>
                </div>
                <div className="form-description">
                  <h5>Organize across all apps by hand</h5>
                </div>
                <div className="profil6">
                  <h1>0</h1>
                  <div className="data6">
                    <div>
                      <div className="data-name-logo">$</div>
                      <div className="data-description-month">Per Month</div>
                    </div>
                  </div>
                </div>
                <div>
                  <ul>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                  </ul>
                </div>
                <div className="button-six-part">
                  <button className="button1">Try For Free</button>
                </div>
              </div>
            </div>
            <div className="form2">
              <div className="form-name2">
                <h3>FREE</h3>
              </div>
              <div className="form-description2">
                <h5>Organize across all apps by hand</h5>
              </div>
              <div className="profil6-2">
                <h1>10</h1>
                <div className="data6-2">
                  <div>
                    <div className="data-name-logo-2">$</div>
                    <div className="data-description-month-2">Per Month</div>
                  </div>
                </div>
              </div>
              <div>
                <ul>
                  <li className="li">Pricing Feature</li>
                  <li className="li">Pricing Feature</li>
                  <li className="li">Pricing Feature</li>
                  <li className="li">Pricing Feature</li>
                  <li className="li">Pricing Feature</li>
                </ul>
              </div>
              <div className="button-six-part">
                <button className="button6">Try For Free</button>
              </div>
            </div>
            <div>
              <div className="form3">
                <div className="form-name">
                  <h3>FREE</h3>
                </div>
                <div className="form-description">
                  <h5>Organize across all apps by hand</h5>
                </div>
                <div className="profil6">
                  <h1>99</h1>
                  <div className="data6">
                    <div>
                      <div className="data-name-logo">$</div>
                      <div className="data-description-month">Per Month</div>
                    </div>
                  </div>
                </div>
                <div>
                  <ul>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                    <li className="li">Pricing Feature</li>
                  </ul>
                </div>
                <div className="button-six-part">
                  <button className="button1">Try For Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seventh-part">
        <div className="third-part-title">
          <h3>Contact Us</h3>
        </div>
        <div className="third-part-description">
          <h5>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h5>
        </div>
        <div className="before-footer">
          <div className="seventh-part-first-child">
            <h3 className="first-child-title">Contact Us</h3>

            <textarea className="form-input" type="text" name="textValue">
              Your Name
            </textarea>

            <textarea className="form-input" type="text" name="textValue">
              Your Email
            </textarea>

            <textarea className="message-form " type="text" name="textValue">
              Your Message
            </textarea>
            <div className="button-first-part">
              <button className="button1">Try For Free</button>
            </div>
          </div>

          <div className="seventh-part-second-child">
            <div className="map-social">
              <div className="address">
                <div className="location">
                  <img src={Location} alt="Location" />
                  <h5 className="location-description">
                    6386 Spring St undefined Anchorage, Georgia 12473 United
                    States
                  </h5>
                </div>
                <div className="phone">
                  <img src={Phone} alt="Phone" />
                  <h5 className="location-description">(843) 555-0130</h5>
                </div>
                <div className="email">
                  <img src={Email} alt="Email" />
                  <h5 className="location-description">
                    willie.jennings@example.com
                  </h5>
                </div>
              </div>
              <div className="photo-location">
                <img src={Map1} alt="Map" />
              </div>
              <div className="seventh-social-media">
                <img src={TwitterBlu} alt="TwitterBlu" />
                <img src={FacebookBlu} alt="FacebookBlu" />
                <img src={InstaBlu} alt="InstaBlu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="row1">
          <div className="row-title">
            <h3>Pages</h3>
          </div>
          <div className="row-list">
            <a className="link-footer" href="#">
              Home
            </a>
            <a className="link-footer" href="#">
              Product
            </a>
            <a className="link-footer" href="#">
              Pricing
            </a>
            <a className="link-footer" href="#">
              About
            </a>
            <a className="link-footer" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="row2">
          <div className="row-title2">Tomothy </div>
          <div className="author">
            <ul>
              <li className="li2">Eleanor Edwards</li>
              <li className="li2">Ted Robertson</li>
              <li className="li2">Annette Russell</li>
              <li className="li2">Jennie Mckinney</li>
              <li className="li2">Gloria Richards</li>
            </ul>
          </div>
        </div>
        <div className="row3">
          <div className="footer-location">
            <img src={Location} alt="Location" />
            <h5>
              6386 Spring St undefined Anchorage, Georgia 12473 United States
            </h5>
          </div>
          <div className="footer-location">
            <img src={Phone} alt="Phone" />
            <h5>(843) 555-0130</h5>
          </div>

          <div className="footer-icons">
            <img src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Insta} alt="Insta" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
