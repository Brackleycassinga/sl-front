import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import KeyFeature from "sections/key-feature";
import ServiceSection from "sections/service-section";
import Feature from "sections/feature";
import CoreFeature from "sections/core-feature";
import WorkFlow from "sections/workflow";
import Package from "sections/package";
import TeamSection from "sections/team-section";
import TestimonialCard from "sections/testimonial";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";

export default function IndexPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://143.244.190.128/api/offres?page=1&limit=3`)
      .then((res) => {
        const persons = res.data.results;
        setData(persons);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Suluhisho HR" />
        <Banner />
        <KeyFeature />
        <Box sx={{ mb: 10, mt: 10 }}>
          <Package />
        </Box>
        <Box sx={{ mb: 20 }}>
          <TestimonialCard data={data} />
        </Box>

        {/* <ServiceSection /> */}
        {/* <Feature /> */}
        {/* <CoreFeature /> */}
        {/* <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard /> */}
        {/* <TestimonialCard data={data} /> */}
      </Layout>
    </ThemeProvider>
  );
}
