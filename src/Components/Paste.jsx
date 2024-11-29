import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../Features/PasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) => {
    return paste.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="d-flex flex-column justify-content-center" id="pastes">
      <div className="w-75 ">
      <input
        placeholder="Search Pastes"
        className="rounded-2 p-2 w-25 mt-2 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="d-flex flex-column gap-4">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            const dateObj = new Date(paste.createdAt);

              // Format into readable string
              const readableDate = dateObj.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              });

            return (
              <div
                className="border border-secondary my-1 rounded-2 p-2"
                key={paste?._id}
              >
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="d-flex gap-2 p-2">
                  <button className="btn bg-dark text-light">
                    <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                  </button>
                  <button className="btn bg-dark text-light">
                    <Link to={`/pastes/${paste?._id}`}>View</Link>
                    {/* <Link to={`/viewpaste?id=${paste._id}`}>View</Link> */}
                    </button>
                  <button
                    className="btn bg-dark text-light"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn bg-dark text-light"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard!");
                    }}
                  >
                    Copy
                  </button>
                </div>
                <div className="d-flex justify-content-end">
                  {readableDate}
                </div>
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
};

export default Paste;
