import buyCake from "../redux/cake/action";
import { connect } from "react-redux";
import { useState } from "react";
const CustomcakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Cake Container {props.numOfCakes}</h2>
      <input onChange={(e) => setNumber(e.target.value)} value={number} />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomcakeContainer);
