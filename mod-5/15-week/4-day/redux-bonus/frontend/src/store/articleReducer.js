// import articles from "../data/data.json";
import { createSelector } from "reselect";
export const loadArticlesThunk = () => async (dispatch) => {
  const res = await fetch("/api/articles");

  //   console.log("getState():", getState());

  if (res.status === 200 || res.status === 201) {
    const articles = await res.json();


    dispatch(loadArticles(normalizer(articles)));
 

    return null;
  } else {
    const errors = await res.json();
    return errors;
  }
};
//! --------------------------------------------------------------------
//*                            Action Types
//! --------------------------------------------------------------------
export const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

//! --------------------------------------------------------------------
//*                           Action Creators
//! --------------------------------------------------------------------

export const loadArticles = (payload) => {
  return {
    type: LOAD_ARTICLES,
    payload,
  };
};

export const addArticle = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload,
  };
};

//! --------------------------------------------------------------------
//*                        Normalizing Function
//! --------------------------------------------------------------------

const normalizer = (array) => {
  const payload = {};

  array.forEach((el) => {
    payload[el.id] = el;
  });

  return payload;
};

//! --------------------------------------------------------------------
//*                             Selectors
//! --------------------------------------------------------------------

// const allArticles= useSelector((state) => state.articleState.entries);
// const articles = Object.values(allArticles);


export const articleSelector = createSelector(
  (state) => state.articleState.entries,
  (allArticles) => Object.values(allArticles)
);

//! --------------------------------------------------------------------
//?                              Thunks
//! --------------------------------------------------------------------

// export const loadArticlesThunk = () => async (dispatch) => {
//   const res = await fetch("/api/articles");

//   //   console.log("getState():", getState());

//   if (res.status === 200 || res.status === 201) {
//     const articles = await res.json();


//     dispatch(loadArticles(normalizer(articles)));
//     return null;
//   } else {
//     const errors = await res.json();
//     return errors;
//   }
// };

export const addArticleThunk = (articleFormData) => async (dispatch) => {
  const res = await fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleFormData),
  });

  // const data = await res.json() //? Write once outside the if else

  if (res.ok) {
    const newArticle = await res.json();
    dispatch(addArticle(newArticle));
    return null;
  } else {
    const errors = await res.json();
    console.log("ERR", errors)
    return errors;
  }
};

//! --------------------------------------------------------------------
//*                              Reducer
//! --------------------------------------------------------------------

// {
//     1: {
//         id: 1,
//         data: "here"
//     },
//     2: {
//         id: 2,
//         data: "here"
//     },
// }

const initialState = { entries: {}, isLoading: true };

// const articleReducer = (state = initialState, { type, payload }) => {
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      console.log("In articles reducer")
      // iterate in here over payload to add to entries
      // or handle this in the Thunk Action
    // console.log(state.entries !== newState.entries )

      return { ...state, entries: { ...action.payload } };
    case ADD_ARTICLE:
      return { ...state, entries: { ...state.entries, ...action.payload } };
    // case DELETE_ARTICLE: {
      // let newState = {...state, entries: {...state.entries}}
      // let newState = {...state} 

    //   delete newState.entries[action.payload]
    //   return newState

    // }

      default:
      return state;
  }
};

export default articleReducer;


