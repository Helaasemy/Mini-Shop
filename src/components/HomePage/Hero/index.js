/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

import { Helmet } from "react-helmet"

import Products from "../../Products"

import HeroBackground from "../../../images/elements/hero_background.svg"
import HeroImage from "../../../images/elements/monitor.svg"
import HeroDecor from "../../../images/elements/hero_decor.svg"

function HomepageHero() {

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <section sx={{ paddingTop: [60, 60, 105] }}>
        <Row styles={{ justifyContent: ["center"] }}>
          <Col styles={styles.imgWrapper}>
            <img src={HeroImage} alt="Vector Monitor" sx={{ maxWidth: "1" }} />
          </Col>
          <Col styles={styles.leadWrapper}>
            <Styled.h1 sx={styles.heading}>
              Don't waste time
            <br />
            on boring things
          </Styled.h1>
            <button sx={{ variant: "button.primary", mx: ["auto", null, 0] }}>
              GO EXPLORE
          </button>
          </Col>
        </Row>
        <img src={HeroBackground} sx={styles.backgroundImg} />
      </section>
      <section sx={{ paddingTop: [60, 60, 105] }}>
        <Products />
      </section>
    </>
  )
}

export default HomepageHero

const styles = {
  heading: {
    variant: "text.heading",
    position: "relative",
    ml: [null, null, null, "30px"],
    textAlign: ["center", null, "left"],
    textShadow: "1px 2px rgba(0, 0, 0, .2)",
    "::after": {
      position: "absolute",
      content: `url("${HeroDecor}")`,
      width: "97px",
      height: "43px",
      top: -15,
      right: -55,
      display: ["none", null, null, "block"],
      zIndex: -1,
    },
  },

  imgWrapper: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
    order: [2, 2, 1],
  },

  leadWrapper: {
    width: ["1", "1", "3/5", null, 650],
    ml: ["auto", 0, 0, 0, 0, 100],
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    order: [1, 1, 2],
    mb: ["65px", "65px", 0],
  },

  backgroundImg: {
    position: "absolute",
    top: 0,
    right: 0,
    display: ["none", null, "block"],
    zIndex: -1,
  },
}
