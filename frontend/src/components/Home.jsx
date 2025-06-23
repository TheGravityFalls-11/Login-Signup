import React from "react";
import './Home.css'

const Home = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-02%20at%2021.49.50_fd69cb31.jpg-KDXCFrgTbeKC3kwkwiIFw5waG7LXjR.jpeg"
              alt="Solution Logo"
              style={{ display: "none" }}
            />
            <h1>
              <span className="green">Solution</span>
            </h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h2>SOLUTION COMPANY</h2>
          <h3>WE DESIGN & CODE WEBSITES</h3>
          <button className="btn-primary">GET STARTED</button>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="container">
          <div className="services-grid">
            <div className="service-box">
              <i className="fas fa-desktop"></i>
              <h3>Web Development</h3>
              <p>
                We create professional websites with modern technologies to help
                your business grow online.
              </p>
            </div>
            <div className="service-box">
              <i className="fas fa-mobile-alt"></i>
              <h3>Responsive Design</h3>
              <p>
                Our websites work perfectly on all devices including desktops,
                tablets, and mobile phones.
              </p>
            </div>
            <div className="service-box">
              <i className="fas fa-rocket"></i>
              <h3>SEO Services</h3>
              <p>
                We optimize your website to rank higher in search engines and
                attract more visitors.
              </p>
            </div>
            <div className="service-box">
              <i className="fas fa-cogs"></i>
              <h3>CMS Integration</h3>
              <p>
                We integrate content management systems so you can easily update
                your website.
              </p>
            </div>
            <div className="service-box">
              <i className="fas fa-headset"></i>
              <h3>Tech Support</h3>
              <p>
                Our team provides ongoing technical support to ensure your
                website runs smoothly.
              </p>
            </div>
            <div className="service-box">
              <i className="fas fa-clock"></i>
              <h3>Up To Date</h3>
              <p>
                We stay current with the latest web technologies and trends to
                keep your site modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section-padding dark-bg">
        <div className="container">
          <div className="solutions-content">
            <h2>
              We provide <span className="green">solutions</span>
            </h2>
            <div className="solution-tags">
              <span className="tag">Website</span> Management &
              <span className="tag">Software</span> Development
            </div>
            <div className="skills">
              <div className="skill">
                <span>HTML/CSS</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "95%" }}></div>
                </div>
                <span className="percentage">95%</span>
              </div>
              <div className="skill">
                <span>JavaScript</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "85%" }}></div>
                </div>
                <span className="percentage">85%</span>
              </div>
              <div className="skill">
                <span>PHP</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
                <span className="percentage">75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Home;
