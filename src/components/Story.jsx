import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Story = ({ storyobj }) => {
  const storyData = storyobj?.storyContent ?? []; // Ensure it's always an array

  console.log("Is storyData an array?", Array.isArray(storyData));
  console.log(storyData, "story");

  return (
    <Box>
      {storyData.length > 0 ? (
        <ul>
          {storyData.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      ) : (
        <Text>No story available.</Text>
      )}
    </Box>
  );
};

export default Story;
