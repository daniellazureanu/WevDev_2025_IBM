import React from 'react';
import { connect } from 'react-redux';
import './map-base.css';
import { SOLIDS_MATRIX } from '../../constants/constants'; // adjust path if needed

const MapBase = ({ x, y }) => {
  const size = 10;

  return (
    <div className="map-container">
      <table className="map-table">
        <tbody>
          {Array.from({ length: size }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: size }).map((_, colIndex) => {
                const isPlayer = rowIndex === y && colIndex === x;
                const isSolid = SOLIDS_MATRIX[rowIndex][colIndex] === 1;

                return (
                  <td
                    key={colIndex}
                    className={`map-cell ${isSolid ? 'solid-cell' : ''} ${isPlayer ? 'player-cell' : ''}`}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  x: state.x,
  y: state.y
});

export default connect(mapStateToProps)(MapBase);
