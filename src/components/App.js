import React, { Fragment, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";
import LandingPage from "./LandingPage";
import Footer from "./footer";
import Header from "./header";
import Team from "./team";
import OurProcess from "./process";
import PageNotFound from "./notFound";
import AdminPage from "./admin";
import AddTeamMember from "./admin/AddTeamMember";

const App = () => {
  const [url, setUrl] = useState("");

  const [ref, inView, entry] = useInView({
    rootMargin: "10px 0px",
    triggerOnce: true,
  });

  const pathname = (name) => {
    setUrl(name);
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Digitol</title>
        <meta
          name="description"
          content="Digitol is a startup aiming to support campanies, institutions, and individuals with amazing and quality products and services but with less visibility and accessibility."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header url={url} />
      <Router>
        <LandingPage
          pathname={pathname}
          path="/"
          referance={ref}
          inView={inView}
          entry={entry}
        />
        <Team pathname={pathname} path="team/:department" />
        <OurProcess pathname={pathname} path="process/:processId" />
        <PageNotFound default />
        <AdminPage path="admin" />
        <AddTeamMember path="member" />
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
