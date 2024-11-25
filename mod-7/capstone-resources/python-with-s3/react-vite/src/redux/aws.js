import { createSelector } from "reselect";

export const getImageById = (id) => async (dispatch) => {
  const res = await fetch(`/api/images/${id}`);
  if (res.ok) {
    const resPost = await res.json();
    dispatch({ type: "images/add", payload: resPost });
  } else {
    dispatch({ type: "error/add", payload: "No image found" });
  }
};

export const imageLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case "images/uploading":
      return true;
    case "images/add":
      return false;
    default:
      return state;
  }
};

export const imageErrorReducer = (state = {message: null}, action) => {
  switch (action.type) {
    case "error/add":
      return {message: action.payload};
    case "error/cleanup":
        return {message: null};
    default:
      return state;
  }
};


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
    dispatch({type: "images/uploading"});
    const res = await fetch(`/api/images`, {
      method: "POST",
      body: post,
    });
    if (res.ok) {
      const resPost = await res.json();
      dispatch({ type: "images/add", payload: resPost });
    } else {
      console.log("There was an error adding the image");
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
 export const selectImages = createSelector(
    [(state) => state.images.allImages || {}],
    (images) => Object.values(images)
  );
