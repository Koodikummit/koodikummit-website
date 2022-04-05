import * as React from "react";
import Accordion from "../components/Accordion";
import Grid from "@mui/material/Grid";

const list = [
  {
    title: "Bacon",
    content:
      "Bacon ipsum dolor amet beef chuck ribeye flank cupim turkey pork loin tenderloin.",
  },
  { title: "Meatloaf", content: "Meatloaf flank chuck venison chislic." },
  { title: "Meatball", content: "Meatball pork loin doner flank porchetta." },
  { title: "Beef", content: "Meatball pork loin doner flank porchetta." },
];

const Faq = () => {
  return (
    <Grid id="faq" container spacing={2}>
      <Grid item xs={8}>
        <h1> Fequently asked questions</h1>
      </Grid>
      <Grid item xs={6}>
        <Accordion list={list} />
      </Grid>
      <Grid item xs={6}>
        kuva
      </Grid>
    </Grid>
  );
};

export default Faq;
