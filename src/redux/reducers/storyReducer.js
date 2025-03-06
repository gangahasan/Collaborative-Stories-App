import { ADD_SENTENCE, FETCH_STORIES_REQUEST, FETCH_STORIES_SUCCESS } from "../actions/storyactions";

const initState = {stories:[],loading:false,error:null}
export const storyReducer =(state=initState,action)=>{
    switch(action.type){
        case FETCH_STORIES_REQUEST:
            return{...state,loading:true,error:null}
         case FETCH_STORIES_SUCCESS:
            const updatedStories = Object.entries(action.payload).map(
              ([id, storyData]) => ({
                id: id, // Convert ID to number
                ...storyData,
              })
            );
             return{
                    ...state,loading:false,
                    stories:[...state.stories,...updatedStories]
                }
        case ADD_SENTENCE:
            return{
                ...state,
               stories: state.stories.map((story) =>
                    story.id === action.payload.id
                        ? { ...state.stories, story: [...story.story, action.payload.sentence] }
                        : story
                ),
            }
        default:
            return state;
    }
}