import axios from "axios";
export const FETCH_STORIES_REQUEST = "FETCH_STORIES_REQUEST";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_ERROR = "FETCH_STORIES_ERROR";
export const ADD_SENTENCE = "ADD_SENTENCE";

export const fetchStories = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_STORIES_REQUEST });
    const response = await axios.get(
      "https://collaborative-story-crea-a0350-default-rtdb.firebaseio.com/stories.json"
    );
    console.log(response.data, "response");
    dispatch({ type: FETCH_STORIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_STORIES_ERROR, payload: error.message });
  }
};
export const addStory = (sentence, id) => async (dispatch, getState) => {
  try {
    // Get the existing story content from Redux state instead of making an API call
    const existingStory =
      getState().story.stories.find((story) => story.id === id)?.storyContent ||
      [];

    // Append the new sentence
    const updatedStory = [...existingStory, sentence];

    // Update Firebase with the new array
    await axios.put(
      `https://collaborative-story-crea-a0350-default-rtdb.firebaseio.com/stories/${id}/storyContent.json`,
      updatedStory
    );

    // Update the Redux state directly instead of fetching all stories again
    dispatch({ type: ADD_SENTENCE, payload: { id, sentence } });
    dispatch(fetchStories());
  } catch (error) {
    console.error("Error adding story:", error);
  }
};
