import React from "react";
import { Helmet } from "react-helmet";
import TemplateBuilder from "../../components/Builder";
function Content() {
  return (
    <>
      <h1 style={{ margin: "1rem" }}>Content page</h1>
      <Helmet>
        <title>Content</title>
        <meta name="description" content="This is a content page" />
      </Helmet>
      <TemplateBuilder id="content-creation"></TemplateBuilder>
    </>
  );
}

export default Content;
