import React from "react";
import { Link } from "react-router-dom";

import { Container, Box, BoxTitle, BoxText } from "../Home/HomeStyles";


export default function Home() {
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

  const data = [
    {
      id: Math.random(),
      title: "Products",
      text: lorem,
      bgColor: "#D5CAFA"
    },
    {
      id: Math.random(),
      title: "Categories",
      text: lorem,
      bgColor: "#EDA9A9"
    },
    {
      id: Math.random(),
      title: "Brands",
      text: lorem,
      bgColor: "#F2EE8D"
    },
    {
      id: Math.random(),
      title: "Users",
      text: lorem,
      bgColor: "#9FEACD"
    }
  ];


  return (
    <>
      <BoxTitle>Dashboard</BoxTitle>
      <Container>
        {data.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
            <BoxTitle><Link to={box.title.toLowerCase()}>{box.title}</Link></BoxTitle>
            <BoxText>{box.text}</BoxText>
          </Box>
        ))}
      </Container>
    </>
  );
}