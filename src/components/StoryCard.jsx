import { addStory, fetchStories } from '@/redux/actions/storyactions';
import { Box,Text,Flex,Heading,Button,Input } from '@chakra-ui/react';
import React, { useEffect,useState } from 'react'
import { BiBox } from 'react-icons/bi';
import { useDispatch,useSelector } from 'react-redux';
import Story from './Story';

const StoryCard = (props) => {
    const stories = useSelector((state)=>state.story?.stories);
    const [contributeId,setContributeId] = useState(false);
    const [sentence,setSentence] = useState("");
    console.log(sentence)

    console.log(stories.length,"length_001")
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStories());
    },[dispatch])

    const handleContribute = (id) => {
      setContributeId(id); 
    };

    const submitContribution = (e,id) => {
        // e.preventDefault();
      if (sentence.trim()) {
        dispatch(addStory(sentence, id)); 
        setSentence(""); 
        setContributeId(null); 
      }
    };
  return (
    <Flex direction="column">
        
        {stories.length > 0 && 
        stories.map((story,index)=>{
            return (
              <Box
                key={index}
                shadow="md"
                m="4"
                p="2"
                display="flex"
                gap="4"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Heading textAlign="center">
                  CreatedBy: {story.createdby}
                </Heading>
                <Heading color="green"> Title: {story.title}</Heading>
                <Text>
                  {" "}
                  Story:
                  <Story story={story} />
                </Text>
                <Text> Status: {story.status}</Text>
                <Button
                  colorPalette="blue"
                  onClick={()=>handleContribute(story.id)}
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
            );
        })
        }

    </Flex>
  )
}

export default StoryCard