import { fetchStories } from '@/redux/actions/storyactions';
import { Box,Text,Flex,Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { BiBox } from 'react-icons/bi';
import { useDispatch,useSelector } from 'react-redux';

const StoryCard = () => {
    const stories = useSelector((state)=>state.story?.stories);
    console.log(stories.length,"length_001")
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStories());
    },[dispatch])
  return (
    <Flex direction="column">
        {stories.length > 0 && 
        stories.map((story,index)=>{
            return(
                <Box key={story.id || index } shadow="md" m="4" p="2">
                    <Heading> Title: {story.title}</Heading>
                    <Text> Story: {story.story}</Text>
                    <Text> Status: {story.status}</Text>

                </Box>
            )
        })
        }

    </Flex>
  )
}

export default StoryCard