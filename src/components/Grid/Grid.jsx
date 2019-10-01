import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import StackGrid from "react-stack-grid";
import Spinner from "../Spinner";

import "./Grid.css";

const renderPictures = ({ src, alt = "" }) => (
  <div className="grid__item" key={src}>
    <img src={src} alt={alt} />
  </div>
);

const Grid = props => {
  const { columns, pictures, loading } = props;
  const [quant, setQuant] = useState(columns);
  useEffect(() => {
    setQuant(columns);
  }, [columns]);
  const width = `${Math.floor(100 / quant)}%`;

  const spin = loading ? <Spinner /> : null;
  return (
    <React.Fragment>
      {spin}
      <StackGrid columnWidth={width}>{pictures.length ? pictures.map(renderPictures) : (<div>No results found</div>)}</StackGrid>
    </React.Fragment>
  );
};

const mapStateToProps = ({ columns, search: { data, loading } }) => ({
  pictures: data,
  columns,
  loading
});

export default connect(
  mapStateToProps,
  null
)(Grid);
