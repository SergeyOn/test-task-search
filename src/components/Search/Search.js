import React, { useState } from "react";
import { connect } from "react-redux";
import { searchImages } from "../../actions/actions";
import { debounce } from "throttle-debounce";

const Search = props => {
  const { searchImages} = props;

  const [cancel, cancelToken] = useState({token:''});

  const fireRequest = debounce(300, value => {
    searchImages(value, cancel);
  });

  return (
    <input
      type="text"
      className="form-control"
      onChange={e => searchImages(e.target.value, cancel)}
      placeholder="type to find"
    />
  );
};

const mapStateToProps = ({ search: { loading } }) => ({
    loading
  });


const mapDispatchToProps = {
  searchImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
