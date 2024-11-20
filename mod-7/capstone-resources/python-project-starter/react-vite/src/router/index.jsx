import {
  createBrowserRouter,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Image, Source } from "@unpic/react";
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

const createImage = (post) => async (dispatch) => {
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

const fetchImages = () => async (dispatch) => {
  const res = await fetch("/api/images");
  if (res.ok) {
    const { images } = await res.json();
    dispatch({ type: "images/get", payload: images });
  } else {
    console.log("There was an error fetching images!");
  }
};

const createImageSelector = createSelector(
  (state) => state.images || [], // Ensure images is always an array
  (images) => Object.values(images)
);
const AllImagesLandingPage = () => {
  const dispatch = useDispatch();
  // const images = useSelector((state) => state.images);
  const images = useSelector(createImageSelector);
  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  if (!images.length) return <p>No images yet, add one below!</p>

  return images.map((image) => (
    <div key={image.id}>
      <picture>
        <Source src={image.image} type="image/avif" width={400} height={300} />
        <Source src={image.image} type="image/webp" width={400} height={300} />
        <Image
          width={500}
          height={300}
          background="auto"
          src={image.image}
          alt={`Image ${image.id}`}
          loading="lazy"
        />
      </picture>
    </div>
  ));
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <AllImagesLandingPage />
      <UploadPicture />
    </div>
  );
};
const UploadPicture = () => {
  // const history = useHistory(); // depreciated API; use useNavigate instead
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);
    await dispatch(createImage(formData));
    setImageLoading(false);
    // navigate("/images");
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Submit</button>
      {imageLoading && <p>Loading...</p>}
    </form>
  );
};

function Images() {
  const { images } = useLoaderData();
  if (!images.length) return <p>No images yet, click Home to add one...</p>;

  return images.map((image) => (
    <div key={image.id}>
      <picture>
        <Source src={image.image} type="image/avif" width={400} height={300} />
        <Source src={image.image} type="image/webp" width={400} height={300} />
        <Image
          width={500}
          height={300}
          background="auto"
          src={image.image}
          alt={`Image ${image.id}`}
          loading="lazy"
        />
      </picture>
    </div>
  ));
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "images",
        loader: async () => fetch("/api/images"),
        element: <Images />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
