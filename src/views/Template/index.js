import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TemplateBuilder from "../../components/Builder";
function Template() {
  useEffect(() => {});
  return (
    <>
      <h1 style={{ margin: "1rem" }}>Create Template</h1>
      <Helmet>
        <title>Template</title>
        <meta name="description" content="This is a Template page" />
      </Helmet>
      <TemplateBuilder id="template-creation" isTemplate></TemplateBuilder>
    </>
  );
}

export default Template;
