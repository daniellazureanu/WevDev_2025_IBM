import './arrow-keys.css';
import { connect } from 'react-redux';

function ArrowKeys({increase_x,increase_y,decrease_x,decrease_y}) {
  return (
    <div className="arrow-keys">
      <button onClick={decrease_y} className="key up">↑</button>
      <div className="row">
        <button onClick={decrease_x} className="key left">←</button>
        <button onClick={increase_y} className="key down">↓</button>
        <button onClick={increase_x} className="key right">→</button>
      </div>
    </div>
  );
}
const mapStateToProps =(state)=>{
    return{
    x: state.x,
    y: state.y
    }
}
const mapDispatchToProps = (dispatch) => ({
  increase_x: () => dispatch({ type: "INCREASE_X" }),
  decrease_x: () => dispatch({ type: "DECREASE_X" }),
  increase_y: () => dispatch({ type: "INCREASE_Y" }),
  decrease_y: () => dispatch({ type: "DECREASE_Y" })
});
export default connect(mapStateToProps, mapDispatchToProps)(ArrowKeys);