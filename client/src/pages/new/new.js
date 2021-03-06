import React,{useState, useEffect} from 'react'
import './new.css'
import { useNavigate } from 'react-router-dom'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../context/AuthContextlog"


function New({inputs, title}) {

  const [file, setFile] = useState("")
  const [data,setData] = useState({})
  const [per, setPerc] = useState(null)
  const navigate = useNavigate()
  

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  
  const { login } = useAuth()

  const handleAdd = async (e) => {
    
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        ...data,
        timeStamp: serverTimestamp(),
        isOnline: false,
        password: " "
      });
      await login("admin@gmail.com", "123456")
      navigate('/userList')
    } catch (err) {
      console.log(err);
    }
    
  };

  const handleInput = (e) =>{
      const id = e.target.id
      const value = e.target.value
     
      setData({...data, [id] : value})
  }

  


  return (
    <>
    <div className="new">
      <div className="newContainer">

        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img className = "img"
              src={
                file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />  
          </div>
          <div className="right">
            <form className = "newform" onSubmit = {handleAdd}>
              <div className="formInput">
                <label className = "Imglabel"htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange ={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    maxLength= {input.maxLength} 
                    onChange={handleInput}
                  />
                </div>
              ))}
            <button className = "newbutton" disabled={per !== null && per < 100} type="submit">
                Send
            </button>
            </form>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default New