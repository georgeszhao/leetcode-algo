/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
    
    mark die -> live: -1
    mark live -> die: 2
    func: count(board, i, j)
    func: update(); -1 => 1, 2 => 0     as explanation
    
    direction 就是九宫格，中间为中心的上下左右，总共8个不同的区间
    
 */
let directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1]
];
var gameOfLife = function(board) {
    if (board === null || board.length === 0) return;

    let rows = board.length,
        cols = board[0].length,
        lives;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 0) {
                lives = count(board, i, j);
                // Any live cell with two or three live neighbors lives on to the next generation.
                if (lives === 3) {
                    board[i][j] = -1;
                }
            }
            if (board[i][j] === 1) {
                lives = count(board, i, j);
                if (lives < 2 || lives > 3) {
                    board[i][j] = 2;
                }
            }
        }
    }
    update(board);
};

const update = board => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 1;
            } else if (board[i][j] === 2) {
                board[i][j] = 0;
            }
        }
    }
}

const count = (board, row, col) => {
    let res = 0;

    for (let dir of directions) {
        let newRow = row + dir[0];
        let newCol = col + dir[1];
        if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length && (board[newRow][newCol] === 1 || board[newRow][newCol] === 2)) {
            res++;
        }
    }
    return res;
}

/*


According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

*/