/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var newBoard = new Board({n: n});
  var nextSpace = function(rI, cI, n) {
    if (cI === n - 1) {
      rI += 1;
      cI = 0;
    } else {
      cI += 1;
    }
    return [rI, cI];
  }

  var recurse = function(board, rN, rI, cI) {
    if (rN !== n) {
      board.togglePiece(rI, cI);
      if (!board.hasAnyRooksConflicts()) {
        rN++
      } else {
        board.togglePiece(rI, cI);
      }
      var newIndices = nextSpace(rI, cI, n);
    } else {
      return board.rows();
    }
    return recurse(board, rN, newIndices[0], newIndices[1])
  }
  var solution = recurse(newBoard, 0, 0, 0);
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var counter = 0;
  var newBoard = new Board({n: n});
  var nextSpace = function(rI, cI, n) {
    if (cI === n - 1) {
      rI += 1;
      cI = 0;
    } else {
      cI += 1;
    }
    return [rI, cI];
  };

  var recurse = function(board, rN, rI, cI) {
    if (rN !== n) {
      board.togglePiece(rI, cI);
      if (!board.hasAnyRooksConflicts()) {
        rN++
      } else {
        board.togglePiece(rI, cI);
      }
      var newIndices = nextSpace(rI, cI, n);
    } else {
      counter++;
      // return board.rows();
    }
    return recurse(board, rN, newIndices[0], newIndices[1])
  };

  recurse(newBoard, 0, 0, 0);
  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
