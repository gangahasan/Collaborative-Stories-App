import { Box } from "@chakra-ui/react";
import React from "react";

const Story = (props) => {
  const storydata = props.story.story;
  console.log(storydata,"story")
  return (
    <Box>
      {storydata && (
        <ul>
          {storydata?.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Story;
