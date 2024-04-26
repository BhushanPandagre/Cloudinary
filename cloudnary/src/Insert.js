import axios from "axios";
import React, { useState } from "react";

const Insert = () => {
  const [input, setInput] = useState({});
  const [seletFile, setSeletFile] = useState("");

  const onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const onChangeFilehandler = (e) => {
    setSeletFile(e.target.files[0]);
    console.log(e.target.files);
  };
  const handelSubmit = async () => {
    let formData = new FormData();
    formData.append("file", seletFile);

    formData.append("upload_preset", "vo6cnlyx");
    formData.append("cloud_name", "dklelniis");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dklelniis/image/upload",
      formData
    );
    console.log(response);
    let url = "http://localhost:8000/product/datasave";
    axios
      .post(url, {
        name: input.name,
        brand: input.brand,
        price: input.price,
        image: response.data.url,
      })
      .then((res) => {
        // console.log(res.data)
        alert("data inserted");
      });
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Insert Page</h1>
      <div className="insert">
        <input type="text" name="name" value={input.name} placeholder="Enter name" onChange={onChangehandler}
        />
        <br />
        <br />
        <input type="text" name="brand" value={input.brand} placeholder="Enter brand" onChange={onChangehandler}/>
        <br />
        <br />
        <input type="text" name="price" value={input.price} placeholder="Enter price" onChange={onChangehandler} />
        <br />
        <br />
        <input type="file" placeholder="Enter image" onChange={onChangeFilehandler}  />
        <br />
        <br />
        <button onClick={handelSubmit}>submit</button>
        <br />
      </div>
    </>
  );
};

export default Insert;
