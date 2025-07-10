import { GRID_SIZE } from "../constants/constants";
import { SOLIDS_MATRIX } from '../constants/constants';

const initialState = {
  x: 4,
  y: 5
};

const isWalkable = (x, y) => {
  const inBounds = x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE;
  return inBounds && SOLIDS_MATRIX[y][x] === 0;
};

const playerReducer = (state = initialState, action) => {

  switch (action.type) {
    case "INCREASE_X": {
      const newX = state.x + 1;
      if (isWalkable(newX, state.y)) {
        return { ...state, x: newX };
      }
      return state;
    }

    case "DECREASE_X": {
      const newX = state.x - 1;
      if (isWalkable(newX, state.y)) {
        return { ...state, x: newX };
      }
      return state;
    }

    case "INCREASE_Y": {
      const newY = state.y + 1;
      if (isWalkable(state.x, newY)) {
        return { ...state, y: newY };
      }
      return state;
    }

    case "DECREASE_Y": {
      const newY = state.y - 1;
      if (isWalkable(state.x, newY)) {
        return { ...state, y: newY };
      }
      return state;
    }

    default:
      return state;
  }
};

export default playerReducer;
