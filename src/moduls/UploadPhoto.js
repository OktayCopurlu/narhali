import React, { useState, useContext } from "react";
import { storage } from "../firebase/firebase";
//import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuidv4 } from "uuid";
import Context from "../context/context";
export default function UploadPhoto() {
  //const { user } = useAuth0();
  const user = { name: "Oktay" };
  const photosContext = useContext(Context);
  const [images] = useState([]);
  const [pictureUploaded, setPictureUploaded] = useState(true);
  const [photoCounter, setPhotoCounter] = useState("-0-");
const photos = photosContext.photos
  const handleImageChange = (event) => {
    if (event.target.files) {
      Object.values(event.target.files).forEach((element) => {
        images.push(element);
      });
    }
    setPhotoCounter(images.length);
  };

  const upload = () => {
    images.forEach((image) => {
      const uniqueId = uuidv4();
      const uniqueName = `${image.name}-${uniqueId}`;
      const uploadTask = storage
        .ref(`images/${user.name}/${uniqueName}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(`images/${user.name}`)
            .child(uniqueName)
            .getDownloadURL()
            .then((url) => {
              photos.push(url);
            })
            .then(setPictureUploaded(false));
        }
      );
    });
  };

  return (
    <div className="form-group my-5">
      <div className="d-flex justify-content-between">
        <input
          className="mb-3 d-block"
          name="image"
          type="file"
          accept="image/*,.heic"
          multiple
          onChange={handleImageChange}
        />
        <button className="btn btn-success" type="button" onClick={upload}>
          Yükle
        </button>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <h6> Seçilen resimler toplam : {photoCounter} adet.</h6>
        {pictureUploaded ? (
          <h6 className="form-group text-danger">
            Kaydete butonuna basmadan önce Yükle butonuna Basmak Zorundasın
          </h6>
        ) : (
          <div className="form-group">
            <input
              disabled={pictureUploaded}
              type="submit"
              value="Kaydet"
              className="btn btn-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
}
