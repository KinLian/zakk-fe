import { Container, Text } from "@nextui-org/react";
import { FC } from "react";

export const EmptyPost: FC = () => {
  return (
    <Container
      css={{
        h: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text b css={{fontSize:  "$lg"}}>No posts to show :(</Text>
    </Container>
  );
};
