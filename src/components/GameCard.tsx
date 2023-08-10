import { HStack, Image, Text, Card, CardBody, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Game } from "../hooks/useGames";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
