import React, { useState } from "react";
import { connect } from "react-redux";
import { changeColumns } from "../../actions/actions";

const ColumnsChanger = props => {
  const { changeColumns, columns } = props;
  const [quant, setQuant] = useState(columns);

  const checkActionToDispatch = value => {
    setQuant(value);
    if (value <= 0 || value >= 100 || isNaN(value)) return;
    changeColumns(value);
  };
  return (
    <input
      type="text"
      className="form-control"
      onChange={e => checkActionToDispatch(e.target.value)}
      value={quant}
    />
  );
};

const mapStateToProps = ({ columns }) => ({
  columns
});

const mapDispatchToProps = {
  changeColumns
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnsChanger);
