import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const ServicesOffered = [
  {
    title: "Johanna", description: "Oma esittely"
  },
  {
    title: "Annina", description: "Oma esittely"
  },
  {
    title: "Kaarina", description: "Oma esittely"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
        <div className="container text-center my-auto">
          <div className="container text-center my-auto">
          <h3 className="text-secondary mb-0">Tekijät</h3>
          <h2 className="mb-5">Keitä me olemme</h2>
        </div>
            <div className="container text-center my-auto">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-4 col-md-5 mb-5 mb-lg-0"
              key={`service_${index}`}>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
