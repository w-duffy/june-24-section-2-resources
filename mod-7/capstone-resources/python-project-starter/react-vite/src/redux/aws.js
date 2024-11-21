import { createSelector } from "reselect";

export const imageReducer = (state = {}, action) => {
    switch (action.type) {
      case "images/add":
        return {...state, [action.payload.image.id]: action.payload.image};
      case "images/get":
        return action.payload.reduce((acc, image) => {
          acc[image.id] = image;
          return acc;
        }, {});
      default:
        return state;
    }
  };

  // Thunk
   export const createImage = (post) => async (dispatch) => {
    const res = await fetch(`/api/images`, {
      method: "POST",
      body: post,
    });
    if (res.ok) {
      const resPost = await res.json();
      dispatch({ type: "images/add", payload: resPost });
      console.log("Your post has been created!", resPost);
    } else {
      console.log("There was an error making your post!");
    }
  };

  // Thunk
  export const getAllImages = () => async (dispatch) => {
    const res = await fetch("/api/images");
    if (res.ok) {
      const { images } = await res.json();
      dispatch({ type: "images/get", payload: images });
    } else {
      console.log("There was an error fetching images!");
    }
  };

  // memoized selector; you _could_ just use useSelector; showing another way.
 export  const createImageSelector = createSelector(
    (state) => state.images || [],
    (images) => Object.values(images)
  );
