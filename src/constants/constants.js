
export const GRID_SIZE = 100;

export const VIEWPORT_SIZE = 10;

// export const SOLIDS_MATRIX = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

export const SOLIDS_MATRIX = Array.from({ length: GRID_SIZE }, () =>
  Array.from({ length: GRID_SIZE }, () => (Math.random() < 0.1 ? 1 : 0))
);