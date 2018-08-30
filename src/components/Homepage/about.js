import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
        <div className="container text-center my-auto">
        <div className="row">
            <div className="container text-center my-auto">
            <h2>Tähän tämän sivun tarkoitus</h2>
            <p className="lead mb-5">
              Oletko aina tarvinnut tätä ympäristöjuttuja kokoavaa sivua? Nyt se on olemassa!
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services">
              tärkeitä juttuja</a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
