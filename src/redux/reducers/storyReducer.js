import {
  ADD_SENTENCE,
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
} from "../actions/storyactions";

const initState = { stories: [], loading: false, error: null };
export const storyReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_STORIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_STORIES_SUCCESS:
      const updatedStories = Object.entries(action.payload).map(
        ([id, storyData]) => ({
          id,
          ...storyData,
        })
      );

      return {
        ...state,
        loading: false,
        stories: updatedStories, // REPLACE instead of appending
      };

    case ADD_SENTENCE:
      return {
        ...state,
        stories: state.stories.map((story) =>
          story.id === action.payload.id
            ? {
                ...story,
                story: [...story.storyContent, action.payload.sentence],
              } // Correct way to update the array
            : story
        ),
      };

    default:
      return state;
  }
};
