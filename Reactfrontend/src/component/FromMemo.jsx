import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/api/memos";

function FromMemo() {
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setMemo(response.data);
    });
  }, []);

  function memoPost() {
    axios
      .post(baseURL, {
        name: "test",
        document: "test",
        description: "test",
        created_by: "test",
      })
      .then((response) => {
        setMemo(response.data);
      });
  }

  if (!memo) return "No Post";

  return (
    <div key={memo.id}>
      <p></p>
      <input type="text" value={'name'} />
      <button onClick={memoPost}>Click me</button>
    </div>
  );
}

export default FromMemo;
