import React from "react";
import Navbar from "../Navbar/Navbar";
import AddForm from "./AddForm";

const AddPage = () => {
  return (
    <div>
      <Navbar sticky={true} />
      <AddForm />
    </div>
  );
};

export default AddPage;
