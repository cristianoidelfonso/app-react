import React from "react";

import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";


export default function Home() {
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

  const data = [
    {
      id: Math.random(),
      title: "Box Titulo 1",
      text: lorem,
      bgColor: "#D5CAFA"
    },
    {
      id: Math.random(),
      title: "Box Titulo 2",
      text: lorem,
      bgColor: "#EDA9A9"
    },
    {
      id: Math.random(),
      title: "Box Titulo 3",
      text: lorem,
      bgColor: "#F2EE8D"
    },
    {
      id: Math.random(),
      title: "Box Titulo 4",
      text: lorem,
      bgColor: "#9FEACD"
    }
  ];


  return (
    <>
      <BoxTitle>Home</BoxTitle>
      <Container>
        {data.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
            <BoxTitle>{box.title}</BoxTitle>
            <BoxText>{box.text}</BoxText>
          </Box>
        ))}
      </Container>
    </>
  );
}