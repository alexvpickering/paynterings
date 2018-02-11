import React from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import AddForm from "./AddForm";

const AddPage = ({ navHeight, getNavHeight }) => {
  console.log("rendering");
  return (
    <div>
      <Navbar getNavHeight={getNavHeight} />
      <AddForm />
    </div>
  );
};

AddPage.propTypes = {};

export default AddPage;
