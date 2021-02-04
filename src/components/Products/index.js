/** @jsx jsx */
import React from "react"

import { jsx, Styled } from "theme-ui"

import Slider from "react-slick";

import { useProducts } from "../../data/products"
import { useHeader } from "../../data/header"

import ProductCard from "./ProductCard/ProductCard"


const Products = () => {
  const products = useProducts()
  const content = useHeader()
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div sx={styles.title}>
        <Styled.h2 >
          {content[0].frontmatter.title}
        </Styled.h2>
        <Styled.p >
          {content[0].frontmatter.lead}
        </Styled.p>
      </div>

      <Slider {...settings} sx={styles.slider}>
        {products.map((product, index) => (
          <div index={index} key={index}>
            <ProductCard
              key={index}
              title={product.frontmatter.name}
              description={product.frontmatter.description}
              link={product.frontmatter.slug}
              data={product}
            />
          </div>
        ))}
      </Slider>
    </>

  )
}

export default Products
const styles = {
  title: {
    paddingBottom: "30px",
  },
  slider: {
    textAlign: "-webkit-center"
  }
}