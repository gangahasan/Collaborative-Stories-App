import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Story = ({ storyobj,user }) => {

  const storyData = storyobj?.storyContent ?? []; // Ensure it's always an array

  // console.log("Is storyData an array?", Array.isArray(storyData));
  // console.log(storyData, "story");

  return (
    <Box>
      {storyData.length > 0 ? (
        <Box as="ul" listStyleType="disc" pl={5}>
          {storyData.map((sentence, index) => (
            <Box as="li" key={index}>{user?.email} : {sentence}</Box>
          ))}
        </Box>
      ) : (
        <Text>No story available.</Text>
      )}
    </Box>
  );
};

export default Story;
