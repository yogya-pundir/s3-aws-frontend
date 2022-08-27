import { ChangeEvent, useState } from "react";

const Home = () => {
    const [img, setImg] = useState<File>();

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
            const temp = await fetch("http://localhost:8000/uploadimg",{
                method:'POST',
                body:formData
            })
        }

    }

    return (
        <div>
            <input type="file" onChange={changeHandler}></input>
            <button onClick={submitHandler}>submit</button>
        </div>
    )
}

export default Home