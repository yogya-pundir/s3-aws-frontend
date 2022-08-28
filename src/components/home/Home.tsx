import { ChangeEvent, useState } from "react";
import './Home.css';
const Home = () => {
    const [img, setImg] = useState<File>();
    const [s3Img, sets3Img] = useState<string>();
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;

        if (!fileList) return;
        console.log(fileList[0]);
        setImg(fileList[0]);


    }

    const submitHandler = async () => {
        console.log(img);
        if (img) {
            const formData = new FormData();
            formData.append("image", img, img.name);
            const apiResp = await fetch("http://localhost:8000/uploadimg",{
                method:'POST',
                body:formData
            })
            if(apiResp){

                sets3Img("")

            }
            const result = await apiResp.json()
            console.log(result);
            sets3Img(result.imgUrl)
        }

    }

    return (
        <div>
            <input type="file" onChange={changeHandler}></input>
            <button onClick={submitHandler}>submit</button>

            {s3Img && (
                <img className="image-s3" src={s3Img}></img>
            )
            }
            
        </div>
    )
}

export default Home