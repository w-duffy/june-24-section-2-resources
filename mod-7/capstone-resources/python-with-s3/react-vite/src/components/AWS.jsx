import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image } from "@unpic/react";
import { selectImages, createImage, getAllImages } from "../redux/aws";

const AllImagesLandingPage = () => {
  const dispatch = useDispatch();
  // const images = useSelector((state) => state.images);
  const images = useSelector(selectImages);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  if (!images.length) return <p>No images yet, add one below!</p>;

  return (
    <section>
      <h2>Image Gallery</h2>
      {images.map((image) => (
        <picture key={image.id}>
          <Image
            width={500}
            height={300}
            background="auto"
            src={image.image}
            alt={`Image ${image.id}`}
            loading="lazy"
          />
        </picture>
      ))}
      ;
    </section>
  );
};

const UploadPicture = () => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    setImageLoading(true);
    await dispatch(createImage(formData));
    setImageLoading(false);
  };

  if (!user) return <p>Please log in to upload images</p>;

  return (
    <section>
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Upload Image</button>
        {imageLoading && <p>Loading...</p>}
      </form>
    </section>
  );
};

export default function AWS() {
  return (
    <main>
        <AllImagesLandingPage />
        <UploadPicture />
    </main>
  );
}

// This is just showing how to use useLoaderData from react router
export function Images() {
  const { images } = useLoaderData();

  if (!images.length) return <p>No images yet, click Home to add one...</p>;

  return images.map((image) => (
    <picture key={image.id}>
      <Image
        width={500}
        height={300}
        background="auto"
        src={image.image}
        alt={`Image ${image.id}`}
        loading="lazy"
      />
    </picture>
  ));
}
