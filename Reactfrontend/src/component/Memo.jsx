import React from "react";
import axios from "axios";

export default class MemoList extends React.Component {
  state = {
    memos: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/api/memos`).then((res) => {
      const memos = res.data;
      this.setState({ memos });
    });
  }

  render() {
    return (
      <>
        {/* <div className="bg-slate-300"> */}
          {this.state.memos.map((memos) => (
            <ul
              key={memos.id}
              role="list"
              className="p-6 divide-y divide-slate-200"
            >
              <li className="flex py-4 first:pt-0 last:pb-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="{memos.document}"
                  alt=""
                />
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">
                    {memos.name}
                  </p>
                  <p className="text-sm text-slate-500 truncate">
                    {memos.desctiption}
                  </p>
                </div>
              </li>
            </ul>
          ))}
        {/* </div> */}
      </>
    );
  }
}
