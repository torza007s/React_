import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/api/memos";

function FromMemo() {
  const [memo, setMemo] = useState([]);
  // name: "",
  // document: "",
  // description: "",
  // created_by: "",

  // const handleChangeEvent = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   setMemo((values) => ({ ...values, [name]: value }));
  // };

  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [description, setDescription] = useState("");
  const [created_by, setCreated_by] = useState("userx");
  const [data, setData] = useState(false);

  const handleSubmitEvent = () => {
    const data = {
      name: name,
      document: document,
      description: description,
      created_by: created_by,
    };

    axios.post(baseURL, data).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setMemo(response.data);
    });
  }, []);

  // function memoPost() {
  //   axios
  //     .post(baseURL, {
  //       name: "test2",
  //       document: "test2",
  //       description: "test2",
  //       created_by: "test2",
  //     })
  //     .then((response) => {
  //       setMemo(response.data);
  //     });
  // }

  // if (!memo) return "No Post";

  return (
    <div key={memo.id} className="w-full content-center items-center">
      {/* <div> */}
      <p>Response Section</p>
      {memo && (
        <div>
          <pre className="text-sm">{JSON.stringify(memo, null, 1)}</pre>
        </div>
      )}
      {/* <label>
        name :
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        document :
        <input
          type="text"
          name="document"
          value={document}
          onChange={(event) => setDocument(event.target.value)}
        />
      </label>
      <label>
        description :
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        created_by :
        <input
          type="text"
          name="created_by"
          value={created_by}
          onChange={(event) => setCreated_by(event.target.value)}
        />
      </label> */}

      {/* <button onClick={handleSubmitEvent}>Post</button> */}

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        {/* name input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            // placeholder="Insert Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {/* Description box */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        {/* document input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="document"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            id="document"
            type="file"
            value={document}
            onChange={(event) => setDocument(event.target.value)}
            // onChange={(event) => setDocument(event.target.files[0])}
          />
        </div>
        {/* subbmit btn */}
        <div className="flex items-center justify-between">
          <button
            className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmitEvent}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FromMemo;
