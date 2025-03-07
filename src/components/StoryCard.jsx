import { addStory, fetchStories } from "@/redux/actions/storyactions";
import { Box, Text, Flex, Heading, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Story from "./Story";

const StoryCard = () => {
  const stories = useSelector((state) => state.story?.stories || []);
  const [contributeId, setContributeId] = useState(null);
  const [sentence, setSentence] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  const handleContribute = (id) => {
    setContributeId(id);
  };

  const submitContribution = (id) => {
    if (sentence.trim()) {
      dispatch(addStory(sentence, id));
      setSentence("");
      setContributeId(null);
    }
  };

  return (
    <Flex direction="column">
      {stories.length > 0 &&
        stories.map((story) => (
          <Box
            key={story.id}
            shadow="md"
            m="4"
            p="2"
            display="flex"
            gap="4"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading textAlign="center">CreatedBy: {story.createdBy}</Heading>
            <Heading color="green">Title: {story.title}</Heading>

            {/* ✅ FIX: Replaced <Text> with <Box> to prevent hydration error */}
            <Box>
              <Text as="span">Story: </Text>
              <Story storyobj={story} />
            </Box>

            <Text>Status: {story.status}</Text>

            <Button
              colorPalette="blue"
              onClick={() => handleContribute(story.id)}
            >
              Contribute
            </Button>

            {contributeId === story.id && (
              <Box>
                <Input
                  type="text"
                  value={sentence}
                  placeholder="Add your sentence"
                  onChange={(e) => setSentence(e.target.value)}
                />
                <Button
                  colorPalette="green"
                  mt="2"
                  onClick={() => submitContribution(story.id)}
                >
                  Submit
                </Button>
              </Box>
            )}
          </Box>
        ))}
    </Flex>
  );
};

export default StoryCard;
