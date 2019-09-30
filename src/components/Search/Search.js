import React from "react";
import { connect } from "react-redux";
import { searchImages } from "../../actions/actions";
import { debounce } from "throttle-debounce";

const Search = props => {
  const { searchImages, loading } = props;

  const test = debounce(500, value => {
    if (loading) return;
    searchImages(value);
  });

  return (
    <input
      type="text"
      className="form-control"
      onChange={e => test(e.target.value)}
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
