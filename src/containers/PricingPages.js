//1. componentes como clases
//2. componentes como funciones
//3. Stateless -> sin estado
//4. Statefull -> Componentes con estado
import React from "react";
import Header from "../components/Header";
import MainPricing from "../components/MainPricing";

class PricingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          companyName="Geek Pricing App"
          navBarContent={[
            {
              elementName: "Facebook",
              url: "https://facebook.com",
            },
            {
              elementName: "Twitter",
              url: "https://twitter.com",
            },
            {
              elementName: "Linkedin",
              url: "https://linkedin.com",
            },
            {
              elementName: "Instagram",
              url: "https://instagram.com",
            },
          ]}
        />
        <MainPricing />
      </React.Fragment>
    );
  }
}

export default PricingPage;
