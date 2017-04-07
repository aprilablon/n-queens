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
    if (rN === n) {
      counter++;
      return;
    }
    if (rI > n - 1) {
      return;
    } else {
      board.togglePiece(rI, cI);
      if (!board.hasAnyRooksConflicts()) {
        rN++;
        var newIndices = nextSpace(rI, cI, n);
        recurse(board, rN, newIndices[0], newIndices[1]);
        board.togglePiece(rI, cI);
        rN--;
        recurse(board, rN, newIndices[0], newIndices[1]);
      } else {
        board.togglePiece(rI, cI);
        var newIndices = nextSpace(rI, cI, n);
        recurse(board, rN, newIndices[0], newIndices[1]);
      }
    }

  //   if (rI > n - 1) {
  //     return;
  //   }

  //   if (rN < n  && rI < n - 1 && cI < n - 1) {
  //     board.togglePiece(rI, cI);
  //     if (!board.hasAnyRooksConflicts()) {
  //       rN++;
  //       var newIndices = nextSpace(rI, cI, n);
  //       recurse(board, rN, newIndices[0], newIndices[1]);
  //       board.togglePiece(rI, cI);
  //       rN--;
  //       recurse(board, rN, newIndices[0], newIndices[1]);
  //     } else {
  //       board.togglePiece(rI, cI);
  //       var newIndices = nextSpace(rI, cI, n);
  //       recurse(board, rN, newIndices[0], newIndices[1]);
  //     }
      
  //   } else if (rN === n) {
  //     counter++;
  //     return;
  //   }
  };
  recurse(newBoard, 0, 0, 0);
  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  console.log('Size: ' + n);
  var newBoard = new Board({n: n});
  var nextSpace = function(rI, cI, n) {
    if (cI === n - 1) {
      if (rI === n - 1) {
        return [rI, cI];
      } else {
        rI += 1;
        cI = 0;
      }
    } else {
      cI += 1;
    }
    return [rI, cI];
  }

  var recurse = function(board, rN, rI, cI) {
    console.log('Rook Num:' + rN);
    // console.log('tuple:', rI, cI);
  //   if (rN !== n) {
  //     console.log('IF LOOP');
  //     console.log('tuple inside:', rI, cI);
  //     board.togglePiece(rI, cI);
  //     console.log('BAILOOUT: ', rI === n-1 && cI === n-1);
  //     if (rI === n-1 && cI === n-1) {
  //       return board.rows();
  //     }
  //     console.log('CONFLICTS:', !board.hasAnyQueensConflicts(rI, cI));
  //     if (!board.hasAnyQueensConflicts()) {
  //       console.log('NO CONFLICTS');
  //       rN++
  //     } else {
  //       board.togglePiece(rI, cI);
  //     }
  //     var newIndices = nextSpace(rI, cI, n);
  //   } else {
  //     console.log('I FINISHED');
  //     return board.rows();
  //   }
  //   return recurse(board, rN, newIndices[0], newIndices[1])
  // }
  // if (n === 0) {
  //   var solution = recurse(newBoard, 0, 0, 0);
  // }
  // for (var i = 0; i < n; i++) {
  //   var newBoard = new Board({n: n});
  //   var solution = recurse(newBoard, 0, 0, i);
  //   // if (solution.hasAnyQueensConflicts()) {
  //   //   return;
  //   // }
  // //   }
  }
  console.log(solution);
  return solution;
};

// CONFLICTS 1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
