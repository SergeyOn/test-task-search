import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import StackGrid from "react-stack-grid";

const Grid = props => {
  const { columns } = props;
  const [quant, setQuant] = useState(columns);
  useEffect(() => {
    setQuant(columns);
  }, [columns]);
  const width = (100 / quant).toFixed(2) + '%';
  console.log(width);
  return (
    <div className='container'>
      { columns }
      <StackGrid
        columnWidth={width}
      >
        <div key="key1"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key2"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key3"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key4"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key5"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key6"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key7"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key8"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
        <div key="key9"><img src="https://i.ytimg.com/vi/V_E0P_6l1rs/hqdefault.jpg" alt=""/></div>
      </StackGrid>
    </div>
  )
};

const mapStateToProps = ({ columns }) => ({
  // products: selectProductsByIds(products, ids),
  // products: selectProductsWithFilter(products, ids, filters),
  columns,
});

export default connect(
  mapStateToProps,
  null
)(Grid);

