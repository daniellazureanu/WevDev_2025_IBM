import React from 'react';
import { connect } from 'react-redux';
import './map-base.css';
import { GRID_SIZE, VIEWPORT_SIZE, SOLIDS_MATRIX } from '../../constants/constants';

const MapBase = ({ x, y }) => {
  const half = Math.floor(VIEWPORT_SIZE / 2);

  // Calculează colțul stânga‑sus al viewport‑ului,
  // dar nu ieși niciodată din hartă
  const startRow = Math.max(0, Math.min(GRID_SIZE - VIEWPORT_SIZE, y - half));
  const startCol = Math.max(0, Math.min(GRID_SIZE - VIEWPORT_SIZE, x - half));

  return (
    <div className="map-container">
      <table className="map-table">
        <tbody>
          {Array.from({ length: VIEWPORT_SIZE }).map((_, localRow) => {
            const rowIndex = startRow + localRow;
            return (
              <tr key={rowIndex}>
                {Array.from({ length: VIEWPORT_SIZE }).map((_, localCol) => {
                  const colIndex = startCol + localCol;

                  const isPlayer = rowIndex === y && colIndex === x;
                  const isSolid  = SOLIDS_MATRIX[rowIndex][colIndex] === 1;

                  return (
                    <td
                      key={colIndex}
                      className={
                        `map-cell ` +
                        (isSolid ? 'tree-cell' : 'dirt-cell') +
                        (isPlayer ? ' player-cell' : '')
                      }
                    />
                  );
                })}
              </tr>
            );
          })}
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
