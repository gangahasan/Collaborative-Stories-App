import { FETCH_STORIES_REQUEST, FETCH_STORIES_SUCCESS } from "../actions/storyactions";

const initState = {stories:[],loading:false,error:null}
export const storyReducer =(state=initState,action)=>{
    switch(action.type){
        case FETCH_STORIES_REQUEST:
            return{...state,loading:true,error:null}
         case FETCH_STORIES_SUCCESS:
            const updatedStories = Object.entries(action.payload).map(
              ([id, storyData]) => ({
                id: Number(id), // Convert ID to number
                ...storyData,
              })
            );

                return{
                    ...state,loading:false,
                    stories:[...state.stories,...updatedStories]
                }
        default:
            return state;
    }
}