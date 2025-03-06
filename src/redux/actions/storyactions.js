import axios from "axios";
export const FETCH_STORIES_REQUEST = "FETCH_STORIES_REQUEST";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_ERROR = "FETCH_STORIES_ERROR";
export const ADD_SENTENCE = "ADD_SENTENCE";

export const fetchStories = () =>async(dispatch)=>{
    try{
        dispatch({type: FETCH_STORIES_REQUEST});
        const response = await axios.get('https://collaborative-story-crea-a0350-default-rtdb.firebaseio.com/onGoingStories.json');
        console.log(response.data,"response")
        dispatch({type: FETCH_STORIES_SUCCESS, payload:response.data})
    }
    catch(error){
        dispatch({type: FETCH_STORIES_ERROR, payload:error.message})
    }   
}
export const addStory=(sentence,id)=>async(dispatch)=>{
    try{
    await axios.patch(
      `https://collaborative-story-crea-a0350-default-rtdb.firebaseio.com/onGoingStories/${id}.json`,{story:sentence}
    );

    dispatch({type: ADD_SENTENCE,payload:{id,story:sentence}})
    fetchStories();
    }
    catch (error){
    console.error(error)
    }
}
