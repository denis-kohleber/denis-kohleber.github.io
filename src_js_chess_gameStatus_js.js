"use strict";
(self["webpackChunkportfolio_page"] = self["webpackChunkportfolio_page"] || []).push([["src_js_chess_gameStatus_js"],{

/***/ "./src/js/chess/ai.js":
/*!****************************!*\
  !*** ./src/js/chess/ai.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aiTurn: () => (/* binding */ aiTurn)
/* harmony export */ });
/* harmony import */ var _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic/pieceMove */ "./src/js/chess/gameLogic/pieceMove.js");
/* harmony import */ var _gameStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameStatus */ "./src/js/chess/gameStatus.js");


;


const aiTurn = {
    playerColor: 'Black',
    aiAvailableMoves: {
        pawn01: [['pawn01Black'], []],
        pawn02: [['pawn02Black'], []],
        pawn03: [['pawn03Black'], []],
        pawn04: [['pawn04Black'], []],
        pawn05: [['pawn05Black'], []],
        pawn06: [['pawn06Black'], []],
        pawn07: [['pawn07Black'], []],
        pawn08: [['pawn08Black'], []],
        tower01: [['tower01Black'], []],
        tower02: [['tower02Black'], []],
        knight01: [['knight01Black'], []],
        knight02: [['knight02Black'], []],
        bishop01: [['bishop01Black'], []],
        bishop02: [['bishop02Black'], []],
        queen01: [['queen01Black'], []],
        queen02: [['queen02Black'], []],
        king01: [['king01Black'], []],
    },
    executeAiTurn() {

        this.resetAiAvailableMoves();
        
        this.checkValidMoves();

        let [ choosenPiece, choosenMove ] = this.evaluateMoves();

        // console.log(choosenPiece, choosenMove);

        this.placeTurn(choosenPiece, choosenMove);
    },
    checkValidMoves() {
        // Detect all own pieces
        for (let i = 0; i < _gameStatus__WEBPACK_IMPORTED_MODULE_1__.coreData.board.length; i++) {
            for (let j = 0; j < _gameStatus__WEBPACK_IMPORTED_MODULE_1__.coreData.board[i].length; j++) {
                if (_gameStatus__WEBPACK_IMPORTED_MODULE_1__.coreData.board[i][j].includes(this.playerColor)) {
                    // console.log(coreData.board[i][j])
                    // Check if they have a available move
                    _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.pieceId = _gameStatus__WEBPACK_IMPORTED_MODULE_1__.coreData.board[i][j];
                    if(_gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectPieceFunctions.calculateValidMoves(_gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.pieceName)) {
                        this.aiAvailableMoves[_gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.pieceId.slice(0, -5)][1] = [..._gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.availableMoves];
                    };
                };
            };
        };  
    },
    evaluateMoves() {
        let bestMove = null;
        let bestScore = 0;

        for (const piece in this.aiAvailableMoves) {
            const pieceData = this.aiAvailableMoves[piece];
            const pieceName = pieceData[0][0];
            const moves = pieceData[1];

            for (const move of moves) {
                // Evaluate the move
                if(move.length === 0) continue;
                const score = this.evaluateMove(move);
    
                // Save the best move
                if (score > bestScore) {
                    bestScore = score;
                    // console.log(bestScore, 'Piece:', pieceName);
                    bestMove = [ pieceName, move ];
                };
            };
        };

        return bestMove;
    },
    evaluateMove(move) {
        const [ row, col ] = move;

        const enemyPiece = _gameStatus__WEBPACK_IMPORTED_MODULE_1__.coreData.board[row][col];

        if(enemyPiece === '') return this.getFieldValue(row, col);

        let value = this.getPieceValue(enemyPiece) + this.getFieldValue(row, col);

        return value;
    },
    getPieceValue(enemyPiece) {
        if(enemyPiece === 'king01Black') return 20;

        enemyPiece = enemyPiece.slice(0, -7);
        const value = {
            pawn: 10,
            knight: 30,
            bishop: 30,
            tower: 50,
            queen: 100,
            king: 1000,
        };

        return value[enemyPiece];
    },
    getFieldValue(row, col) {
        const boardValue = [
            [1, 2, 2, 2, 2, 2, 2, 1],
            [2, 3, 4, 4, 4, 3, 3, 2],
            [2, 4, 6, 7, 7, 6, 4, 2],
            [2, 4, 7, 8, 8, 7, 4, 2],
            [2, 4, 7, 8, 8, 7, 4, 2],
            [2, 4, 6, 7, 7, 6, 4, 2],
            [2, 3, 4, 4, 4, 4, 3, 2],
            [1, 2, 2, 2, 2, 2, 2, 1]
        ];

        return boardValue[row][col];
    },
    placeTurn(piece, move) {
        _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.pieceId = piece;

        const fieldId = this.getFieldId(move);

        // Visual sign for the user
        const field = document.getElementById(fieldId);
        field.classList.add('highlightedAi');

        setTimeout(function() {
            _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.turnExecution.executeTurn('ai', fieldId);
            field.classList.remove('highlightedAi');
        }, 600);
        
    },
    getFieldId(move) {
        const [row, col] = move;
        let fieldNumber = row * 8 + col + 1;
        if (fieldNumber < 10) fieldNumber = `0` + fieldNumber;
        return `field${fieldNumber}`;
    },
    resetAiAvailableMoves() {
        this.aiAvailableMoves = {
            pawn01: [['pawn01Black'], []],
            pawn02: [['pawn02Black'], []],
            pawn03: [['pawn03Black'], []],
            pawn04: [['pawn04Black'], []],
            pawn05: [['pawn05Black'], []],
            pawn06: [['pawn06Black'], []],
            pawn07: [['pawn07Black'], []],
            pawn08: [['pawn08Black'], []],
            tower01: [['tower01Black'], []],
            tower02: [['tower02Black'], []],
            knight01: [['knight01Black'], []],
            knight02: [['knight02Black'], []],
            bishop01: [['bishop01Black'], []],
            bishop02: [['bishop02Black'], []],
            queen01: [['queen01Black'], []],
            queen02: [['queen02Black'], []],
            king01: [['king01Black'], []],
        };
    },
};

/***/ }),

/***/ "./src/js/chess/gameLogic/pieceMove.js":
/*!*********************************************!*\
  !*** ./src/js/chess/gameLogic/pieceMove.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectPieceFunctions: () => (/* binding */ selectPieceFunctions),
/* harmony export */   selectingData: () => (/* binding */ selectingData),
/* harmony export */   selectors: () => (/* binding */ selectors),
/* harmony export */   turnExecution: () => (/* binding */ turnExecution)
/* harmony export */ });
/* harmony import */ var _gameStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameStatus */ "./src/js/chess/gameStatus.js");
/* harmony import */ var _pieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces */ "./src/js/chess/gameLogic/pieces.js");
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popUp.js */ "./src/js/chess/popUp.js");




"use strict";

// Handle the Events
const selectors = {
    get htmlBoard() {
        return document.querySelectorAll('.fieldCluster');
    },
    addEventsToBoard() {
        selectors.htmlBoard.forEach((cluster) => {
            cluster.addEventListener('click', selectPieceFunctions.selectPiece);
            cluster.addEventListener('keydown', KeyDown.handleKeyDownSelectPiece);
        })
    },
    removeEventsFromBoard() {
        selectors.htmlBoard.forEach((cluster) => {
            cluster.removeEventListener('click', selectPieceFunctions.selectPiece);
            cluster.removeEventListener('click', turnExecution.executeTurn);
            cluster.removeEventListener('click', selectors.deselect);

            cluster.removeEventListener('keydown', KeyDown.handleKeyDownSelectPiece);
            cluster.removeEventListener('keydown', KeyDown.handleKeyDownExecuteTurn);
            cluster.removeEventListener('keydown', KeyDown.handleKeyDownDeselect);

            cluster.classList.remove('highlighted');
        })
    },
    addExecuteEventsToBoard() {
        selectors.htmlBoard.forEach((cluster) => {
            // Control first, if the Cluster match the possible Moves
            const clusterNumber = +cluster.id.slice(-2);
            if(selectors.checkCluster(clusterNumber)) {
                cluster.addEventListener('click', turnExecution.executeTurn);
                cluster.addEventListener('keydown', KeyDown.handleKeyDownExecuteTurn);
                // Add a visual Mark to the Cluster
                cluster.classList.add('highlighted');
            } else {
                cluster.addEventListener('click', selectors.deselect);
                cluster.addEventListener('keydown', KeyDown.handleKeyDownDeselect);
            };
        });
    },
    checkCluster(clusterNumber) {
        for(const move of selectingData.availableMoves) {
            const [row, col] = move;
            const field = row * 8 + col + 1;
            if(field === clusterNumber) {
                return true;
            }
        };

        return false;
    },
    displayValidMoves() {
        selectors.removeEventsFromBoard();
        selectors.addExecuteEventsToBoard();
    },
    deselect() {
        selectors.removeEventsFromBoard();
        selectors.addEventsToBoard();
    },
};

const selectingData = {
    pieceId: '',
    availableMoves: [],
    get pieceName() {
        return this.getPieceName(this.pieceId);
    },
    get piecePosition() {
        return this.getPiecePosition(this.pieceId, _gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData.board);
    },
    get pieceColor() {
        return this.pieceId.includes('White') ? 'White' : 'Black';
    },
    get enemyColor() {
        return this.pieceColor === 'White' ? 'Black' : 'White';
    },
    getPieceName(pieceId) {
        const zeroIndex = pieceId.indexOf('0');
        return pieceId.slice(0, zeroIndex);
    },
    getPiecePosition(pieceId, board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === pieceId) {
                    return [i, j];
                }
            }
        };
        throw new Error("Piece not found on the board! - F:getPiecePosition");
    },
};

const selectPieceFunctions = {
    selectPiece(event) {
        const cluster = event.currentTarget;
        selectingData.pieceId = cluster.children[0]?.id ?? 'No Piece in Cluster';
        // console.log(selectingData.pieceId);
        
        // First: Check if the Field is valid to be selected from the Player
        if(!selectPieceFunctions.checkValidTurn(selectingData.pieceId)) return _popUp_js__WEBPACK_IMPORTED_MODULE_2__.PopUp.changeMsg('Choose your piece'); 
        // console.log('Valid Turn Success');

        // Second: Calculate the possible moves & store them
        if(!selectPieceFunctions.calculateValidMoves(selectingData.pieceName)) return _popUp_js__WEBPACK_IMPORTED_MODULE_2__.PopUp.changeMsg('No available turns');

        // console.log('Avaiable Moves', ...selectingData.availableMoves);

        // Third: Show the User the available Moves
        selectors.displayValidMoves();
    },
    checkValidTurn(pieceId) {
        if(_gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData.round % 2 !== 0) {
            if(pieceId.includes('White')) return true;
        };
    
        if(_gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData.round % 2 === 0) {
            if(pieceId.includes('Black')) return true;
        };
    
        return false;
    },
    calculateValidMoves(pieceName) {
        const { possibleMoves } = _pieces__WEBPACK_IMPORTED_MODULE_1__.showPieceMovements[pieceName](selectingData.enemyColor, selectingData.piecePosition, 
            _gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData.board, selectingData.pieceColor, selectingData.pieceId);
        
        // Filter the possibleMoves, if they get in conflict with a danger for the own king
        selectingData.availableMoves = selectPieceFunctions.filterInvalidMoves(possibleMoves);

        if (selectingData.availableMoves.length === 0) {
            return false;
        }

        // console.log('Possible Moves: ', selectingData.availableMoves);

        return true;
    },
    filterInvalidMoves(possibleMoves) {
        const filteredMoves = [];

        // Control by each possible move, if a Check is given 
        for(const move of possibleMoves) {
            let newBoard = selectPieceFunctions.simulateMove
            (move, selectingData.pieceId, selectingData.piecePosition, selectingData.pieceColor);

            if(!_gameStatus__WEBPACK_IMPORTED_MODULE_0__.gameStatus.isKingInCheck(`king01${selectingData.pieceColor}`, newBoard)) {
                filteredMoves.push(move);
            } // else console.log('Zug entfernt! ->' + move);
        };

        return filteredMoves;
    },
    // Simulate a board with the to executing Move
    simulateMove(move, pieceId, piecePosition, pieceColor) {
        const [targedRow, targedCol] = move;
        const [currentRow, currentCol] = piecePosition;
        let createdBoard = JSON.parse(JSON.stringify(_gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData.board));

        // If Rochade ist true, then apply it correctly
        if(createdBoard[targedRow][targedCol].includes('king01' + pieceColor)) {
           createdBoard = selectPieceFunctions.correctBoardForRochade(createdBoard, pieceId);
           createdBoard[currentRow][currentCol] = '';
        //    console.log("SimulatedBoard->", createdBoard)
           return createdBoard;
        };

        createdBoard[targedRow][targedCol] = pieceId;
        createdBoard[currentRow][currentCol] = '';

        // console.log("SimulatedBoard->", createdBoard)
        return createdBoard;
    },
    // Only necessary for the Board-Simulation
    correctBoardForRochade(createdBoard, towerId) {
        switch (towerId) {
            case "tower01Black":
                createdBoard[0][2] = 'king01Black';
                createdBoard[0][4] = '';
                createdBoard[0][3] = towerId;
                return createdBoard;
            case "tower02Black":
                createdBoard[0][6] = 'king01Black';
                createdBoard[0][4] = '';
                createdBoard[0][5] = towerId;
                return createdBoard;
            case "tower01White":
                createdBoard[7][2] = 'king01White';
                createdBoard[7][4] = '';
                createdBoard[7][3] = towerId;
                return createdBoard;
            case "tower02White":
                createdBoard[7][6] = 'king01White';
                createdBoard[7][4] = '';
                createdBoard[7][5] = towerId;
                return createdBoard;
            default:
                return console.log("Invalid towerId");
        };
    },
};
                    
const turnExecution = {
    queenBlack: document.getElementById('queen01Black').cloneNode(true),
    queenWhite: document.getElementById('queen01White').cloneNode(true),
    executeTurn(event, target) {
        // Get the involved Elements
        let targetCluster = 0;
        if(event === 'ai') {
            targetCluster = document.getElementById(target)
        } else {
            targetCluster = event.currentTarget;
        };
        const pieceElement = document.getElementById(selectingData.pieceId);
        const sourceCluster = pieceElement.parentElement;

        // If the Turn contains not a rochade
        if(!turnExecution.executeRochadeTurn(targetCluster, pieceElement, sourceCluster)) {

            // Set the piece to the target position
            turnExecution.executeNormalTurn(targetCluster, pieceElement, sourceCluster);
        };

        // If the Turn contains a promotion
        turnExecution.executePromotion(targetCluster, pieceElement);

        // Set the board back & update it
        selectors.removeEventsFromBoard();
        _gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData.updateBoard();
    },

    executeNormalTurn(targetCluster, pieceElement, sourceCluster) {
        sourceCluster.removeChild(pieceElement);
        targetCluster.children[0]?.remove();
        targetCluster.appendChild(pieceElement);
    },
    executeRochadeTurn(targetCluster, pieceElement, sourceCluster) {
        // console.log(selectingData.pieceColor);
        // console.log(targetCluster.children[0]?.id);
        if(!targetCluster.children[0]?.id.includes('king01' + selectingData.pieceColor)) return false;

        switch (pieceElement.id) {
            case "tower01Black":
                const kingElement01 = document.getElementById('king01Black');
                kingElement01.remove();
                document.getElementById('field03').appendChild(kingElement01);
                sourceCluster.removeChild(pieceElement);
                document.getElementById('field04').appendChild(pieceElement);
                return true;
            case "tower02Black":
                const kingElement02 = document.getElementById('king01Black');
                kingElement02.remove();
                document.getElementById('field07').appendChild(kingElement02);
                sourceCluster.removeChild(pieceElement);
                document.getElementById('field06').appendChild(pieceElement);
                return true;
            case "tower01White":
                const kingElement03 = document.getElementById('king01White');
                kingElement03.remove();
                document.getElementById('field59').appendChild(kingElement03);
                sourceCluster.removeChild(pieceElement);
                document.getElementById('field60').appendChild(pieceElement);
                return true;
            case "tower02White":
                const kingElement04 = document.getElementById('king01White');
                kingElement04.remove();
                document.getElementById('field63').appendChild(kingElement04);
                sourceCluster.removeChild(pieceElement);
                document.getElementById('field62').appendChild(pieceElement);
                return true;
            default:
                return false;
        };
    },
    executePromotion(targetCluster, pieceElement) {
        if(!pieceElement.id.includes('pawn')) return;

        if(targetCluster.id.includes('01') || targetCluster.id.includes('02') ||
        targetCluster.id.includes('03') || targetCluster.id.includes('04') ||
        targetCluster.id.includes('05') || targetCluster.id.includes('06') ||
        targetCluster.id.includes('07') || targetCluster.id.includes('08')) {
            pieceElement.remove();
            turnExecution.queenWhite.id = 'queen02White';
            targetCluster.appendChild(turnExecution.queenWhite);
        };

        if(targetCluster.id.includes('64') || targetCluster.id.includes('63') ||
        targetCluster.id.includes('62') || targetCluster.id.includes('61') ||
        targetCluster.id.includes('60') || targetCluster.id.includes('59') ||
        targetCluster.id.includes('58') || targetCluster.id.includes('57')) {
            pieceElement.remove();
            turnExecution.queenBlack.id = 'queen02Black';
            targetCluster.appendChild(turnExecution.queenBlack);
        };
    },
};

const KeyDown = {
    handleKeyDownSelectPiece(event) {
        if (event.key === 'Enter') {
            selectPieceFunctions.selectPiece(event);
        };
    },
    handleKeyDownExecuteTurn(event) {
        if (event.key === 'Enter') {
            turnExecution.executeTurn(event);
        };
    },
    handleKeyDownDeselect(event) {
        if (event.key === 'Enter') {
            selectors.deselect();
        };
    },

}

/***/ }),

/***/ "./src/js/chess/gameLogic/pieces.js":
/*!******************************************!*\
  !*** ./src/js/chess/gameLogic/pieces.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showPieceMovements: () => (/* binding */ showPieceMovements)
/* harmony export */ });
/* harmony import */ var _gameStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameStatus */ "./src/js/chess/gameStatus.js");


;


// Obj. that serve as a Output for each Piece
const showPieceMovements =  {
    pawn(enemyColor, piecePosition, board, pieceColor) {
        let possibleMoves = [];
        possibleMoves.push(...moves.getPawnMoves(enemyColor, piecePosition, board, pieceColor));
        return { possibleMoves };
    },
    tower(enemyColor, piecePosition, board, pieceColor, pieceId, check) {
        let possibleMoves = [];
        possibleMoves.push(...moves.getTowerMoves(enemyColor, piecePosition, board, pieceColor));
        possibleMoves.push(...moves.getRochadMoves(enemyColor, piecePosition, board, pieceColor, pieceId));
        return { possibleMoves };
    },
    knight(enemyColor, piecePosition, board, pieceColor) {
        let possibleMoves = [];
        possibleMoves.push(...moves.getKnightMoves(enemyColor, piecePosition, board, pieceColor));
        return { possibleMoves };
    },
    bishop(enemyColor, piecePosition, board, pieceColor) {
        let possibleMoves = [];
        possibleMoves.push(...moves.getBishopMoves(enemyColor, piecePosition, board, pieceColor));
        return { possibleMoves };
    },
    queen(enemyColor, piecePosition, board, pieceColor) {
        let possibleMoves = [];
        possibleMoves.push(...moves.getTowerMoves(enemyColor, piecePosition, board, pieceColor));
        possibleMoves.push(...moves.getBishopMoves(enemyColor, piecePosition, board, pieceColor));
        return { possibleMoves };
    },
    king(enemyColor, piecePosition, board, pieceColor) {
        let possibleMoves = [];
        possibleMoves.push(...moves.getKingMoves(enemyColor, piecePosition, board, pieceColor));
        return { possibleMoves };
    },
};

const moves = {
    getPawnMoves(enemyColor, piecePosition, board, pieceColor) {
        const direction = (pieceColor === 'White') ? -1 : 1;
        const [row, col] = piecePosition;
        let movePoints = [];
    
        function getMoves() {
            // Single-Step
            if (row + direction < 0 || row + direction > 7 || col < 0 || col > 7) return; // Control first the board border
            if(board[row + direction][col] === '') {
                movePoints.push([row + direction, col]);
            } else return;
    
            // Double-Step
            if (row + (direction * 2) < 0 || row + (direction * 2) > 7 || col < 0 || col > 7) return;
            if(board[row + (direction * 2)][ col] !== '') return;
            if ((pieceColor === 'White' && row === 6) || (pieceColor === 'Black' && row === 1)) {
                    movePoints.push([row + (direction * 2), col]);
                };
        };
    
        function getAttacks() {
            // Left-Attack
            if (row + direction >= 0 && row + direction <= 7 && col - 1 >= 0 && (col - 1) <= 7) {
                if(board[row + direction][col - 1] !== '') {
                    if(board[row + direction][col - 1].includes(enemyColor)) {
                        movePoints.push([row + direction, col - 1]);
                    };
                };
            };
    
            // Right-Attack
            if (row + direction >= 0 && row + direction <= 7 && (col + 1) >= 0 && (col + 1) <= 7){
                if(board[row + direction][col + 1] !== '') {
                    if(board[row + direction][col + 1].includes(enemyColor)) {
                        movePoints.push([row + direction, col + 1]);
                    };
                };
            };
        };
    
        getMoves();
        getAttacks();
    
        return movePoints;
    },

    getTowerMoves(enemyColor, piecePosition, board) {
        const [row, col] = piecePosition;
        let movePoints = [];
    
        // Movement-Forward
        for(let i = row + 1; i < 8; i++) {
            if(board[i][col] !== '') {
                if(board[i][col].includes(enemyColor)) {
                    movePoints.push([i, col]);
                };
                break;
            };
            movePoints.push([i, col]);
        };
    
        // Movement-Backwards
        for(let i = row - 1; i >= 0; i--) {
            if(board[i][col] !== '') {
                if(board[i][col].includes(enemyColor)) {
                    movePoints.push([i, col]);
                };
                break;
            };
            movePoints.push([i, col]);
        };
    
        // Movement-Right
        for(let i = col + 1; i < 8; i++) {
            if(board[row][i] !== '') {
                if(board[row][i].includes(enemyColor)) {
                    movePoints.push([row, i]);
                };
                break;
            };
            movePoints.push([row, i]);
        };
    
        // Movement-Left
        for(let i = col - 1; i >= 0; i--) {
            if(board[row][i] !== '') {
                if(board[row][i].includes(enemyColor)) {
                    movePoints.push([row, i]);
                };
                break;
            };
            movePoints.push([row, i]);
        };
    
        return movePoints;
    },
    
    getRochadMoves(enemyColor, piecePosition, board, pieceColor, pieceId) {
        let [row, col] = piecePosition;
        let movePoints = [];
    
        function checkTowerConditions() {
            if(pieceId === 'tower01Black' && piecePosition.toString() === '0,0') return true;
            if(pieceId === 'tower02Black' && piecePosition.toString() === '0,7') return true;
            if(pieceId === 'tower01White' && piecePosition.toString() === '7,0') return true;
            if(pieceId === 'tower02White' && piecePosition.toString() === '7,7') return true;
            return false;
        };
    
        function checkKingConditions() {
            if(pieceColor === 'White' && board[7][4] === 'king01White') return true;
            if(pieceColor === 'Black' && board[0][4] === 'king01Black') return true;
            return false;
        };
    
        if (!checkTowerConditions() || !checkKingConditions() || _gameStatus__WEBPACK_IMPORTED_MODULE_0__.coreData[pieceColor].check) return movePoints;
    
        row = (pieceColor === 'White') ? 7 : 0;

        // Rochade to the Right
        if(pieceId.includes('01')) {
            for(let i = col + 1; i <= 4; i++) {
                if(board[row][i] !== '') {
                    if(board[row][i].includes('king') && board[row][i].includes(pieceColor)) {
                        // console.log('Rochade accepted');
                        movePoints.push([row, i]);
                    } else break;
                };
            };
        };

        // Rochade to the Left
        if(pieceId.includes('02')) {
            for(let i = col - 1; i >= 4; i--) {
                if(board[row][i] !== '') {
                    if(board[row][i].includes('king') && board[row][i].includes(pieceColor)) {
                        // console.log('Rochade accepted');
                        movePoints.push([row, i]);
                    } else break;
                };
            };
        };

        return movePoints;
    },
    
    getKnightMoves(enemyColor, piecePosition, board) {
        const [row, col] = piecePosition;
        let movePoints = [];
    
        const directions =  [[2, 1], [2, -1], [1, 2], [-1, 2],
                            [-2, 1], [-2, -1], [1, -2], [-1, -2],
        ];
    
        directions.forEach(([rowIncrement, colIncrement]) => {
            const newRow = rowIncrement + row;
            const newCol = colIncrement + col;
    
            if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) return;
    
            if(board[newRow][newCol] === '') 
                return movePoints.push([newRow, newCol]);
            if(board[newRow][newCol].includes(enemyColor)) 
                return movePoints.push([newRow, newCol]);
        });
    
        return movePoints;
    },
    
    getBishopMoves(enemyColor, piecePosition, board) {
        const [row, col] = piecePosition;
        let movePoints = [];
    
        // Movement-TopRight
        for(let i = row + 1, j = col + 1; i < 8 && j < 8; i++, j++) {
            if(board[i][j] !== '') {
                if(board[i][j].includes(enemyColor)) {
                    movePoints.push([i, j]);
                };
                break;
            };
            movePoints.push([i, j]);
        };
    
        // Movement-TopLeft
        for(let i = row + 1, j = col - 1; i < 8 && j >= 0; i++, j--) {
            if(board[i][j] !== '') {
                if(board[i][j].includes(enemyColor)) {
                    movePoints.push([i, j]);
                };
                break;
            };
            movePoints.push([i, j]);
        };
    
        // Movement-DownLeft
        for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(board[i][j] !== '') {
                if(board[i][j].includes(enemyColor)) {
                    movePoints.push([i, j]);
                };
                break;
            };
            movePoints.push([i, j]);
        };
    
        // Movement-DownRight
        for(let i = row - 1, j = col + 1; i >= 0 && j < 8; i--, j++) {
            if(board[i][j] !== '') {
                if(board[i][j].includes(enemyColor)) {
                    movePoints.push([i, j]);
                };
                break;
            };
            movePoints.push([i, j]);
        };
    
        return movePoints;
    },
    
    getKingMoves(enemyColor, piecePosition, board,) {
        const [row, col] = piecePosition;
        let movePoints = [];
        const directions = [[1, 0], [1, 1], [0, 1],
                            [-1, 1], /* King */ [-1, 0], 
                            [-1, -1], [0, -1], [1, -1],
        ];
    
        directions.forEach(([rowIncrement, colIncrement]) => {
            const newRow = rowIncrement + row;
            const newCol = colIncrement + col;
            
            if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7) return;
    
            if(board[newRow][newCol] === '') 
                return movePoints.push([newRow, newCol]);
            if(board[newRow][newCol].includes(enemyColor)) 
                return movePoints.push([newRow, newCol]);
        });
    
        return movePoints;
    },
};

/***/ }),

/***/ "./src/js/chess/gameStatus.js":
/*!************************************!*\
  !*** ./src/js/chess/gameStatus.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coreData: () => (/* binding */ coreData),
/* harmony export */   gameStatus: () => (/* binding */ gameStatus)
/* harmony export */ });
/* harmony import */ var _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic/pieceMove */ "./src/js/chess/gameLogic/pieceMove.js");
/* harmony import */ var _gameLogic_pieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic/pieces */ "./src/js/chess/gameLogic/pieces.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai */ "./src/js/chess/ai.js");
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popUp.js */ "./src/js/chess/popUp.js");







const coreData = {
    round: 0,
    White: {
        check: false,
        player01: 'Player01',
    },
    Black: {
        check: false,
        player02: 'AI',
    },
    board: [],
    getPlayerName() {
        this.White.player01 = document.getElementById('player01').value;
        this.Black.player02 = document.getElementById('player02').value || 'AI';
    },
    // Update the Board Array depending on the board in the DOM
    updateBoard() {
        const htmlBoard = document.querySelectorAll('.fieldCluster');
        this.board = [[], [], [], [], [], [], [], []];
        let i = 0;
        
        // The Board Update
        htmlBoard.forEach((boardCluster) => {
    
            // When a row is full, jump to the next
            if (this.board[0 + i].length === 8) {
                i++;
            };
    
            this.board[0 + i].push(boardCluster.children[0]?.id ?? "");
        });

        coreData.countRounds();

        // console.log(coreData);

        if(gameStatus.checkGameStatus()) return gameStatus.runGameOver();

        if(this.checkAiTurn()) return _ai__WEBPACK_IMPORTED_MODULE_2__.aiTurn.executeAiTurn();

        _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectors.addEventsToBoard();
    },
    countRounds() {
        this.round += 1;
    },
    checkAiTurn() {
        if ((this.Black.player02 === 'AI') && (this.round % 2 === 0)) return true;
        return false;
    },
};

const gameStatus = {
    originalHtmlBoard: document.getElementById('board').cloneNode(true),
    checkGameStatus() {
        const playerKing = (coreData.round % 2 === 0) ? 'king01Black' : 'king01White';
        const player = (coreData.round % 2 === 0) ? coreData.Black.player02 : coreData.White.player01;
        const playerColor = (coreData.round % 2 === 0) ? 'Black' : 'White';
        const enemyColor = (coreData.round % 2 === 0) ? 'White' : 'Black';
        
        if(this.isKingInCheck(playerKing, coreData.board)) {
            coreData[playerColor].check = true;

            _popUp_js__WEBPACK_IMPORTED_MODULE_3__.PopUp.changeMsg(player + ' is in Check!')
        } else {
            coreData[enemyColor].check = false;
            coreData[playerColor].check = false;
        };
        
        if(this.checkMate(playerColor)) return true;

        return false;
    },
    // Arguments 'king' & 'board' are always necessary
    isKingInCheck(king, board) {
        const dangerColor = king.includes('Black') ? 'White' : 'Black';   // Enemy Color
        const pieceColor = (dangerColor === 'Black') ? 'White' : 'Black'; // Own Color
        
        // If one Move of the Enemy get the own King in danger
        if(this.detectAllEnemies(king, board, dangerColor, pieceColor)) return true;

        return false;
    },
    // Detect all Enemies in the Board
    detectAllEnemies(king, board, dangerColor, pieceColor) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j].includes(dangerColor)) {
                    if(this.collectAllMoves(king, board, dangerColor, pieceColor, i, j)) return true;
                };
            };
        };
        return false;
    },
    // Collect all possible Moves from the Enemy
    collectAllMoves(king, board, dangerColor, pieceColor, i, j) {
        let dangerId = board[i][j];
        let dangerName =  _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.getPieceName(dangerId);
        let dangerPosition = [i, j];
        let kingPosition = _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.getPiecePosition(king, board);

        const { possibleMoves } = _gameLogic_pieces__WEBPACK_IMPORTED_MODULE_1__.showPieceMovements[dangerName]
        (pieceColor, dangerPosition, board, dangerColor, dangerId);
        
        if(this.controlMoveMatch(possibleMoves, kingPosition)) return true;
        return false;
    },
    // Control if one Move match to the Position of the King
    controlMoveMatch(possibleMoves, kingPosition) {
        for (const move of possibleMoves) {
            if (move[0] === kingPosition[0] && move[1] === kingPosition[1]) {
                // console.log("Zug entfernt");
                return true;
            };
        };
        return false;
    },
    checkMate(playerColor) {
        // Detect all own pieces
        for (let i = 0; i < coreData.board.length; i++) {
            for (let j = 0; j < coreData.board[i].length; j++) {
                if (coreData.board[i][j].includes(playerColor)) {
                    // Check if they have a available Move
                    _gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.pieceId = coreData.board[i][j];
                    if(_gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectPieceFunctions.calculateValidMoves(_gameLogic_pieceMove__WEBPACK_IMPORTED_MODULE_0__.selectingData.pieceName)) {
                        return false;
                    };
                };
            };
        };  
        return true;
    },
    runGameOver() {
        const winner = (coreData.round % 2 === 0) ? 
        coreData.White.player01 : coreData.Black.player02;

        _popUp_js__WEBPACK_IMPORTED_MODULE_3__.PopUp.changeMsg(winner + ' won the game! Congratulation!')

        setTimeout(function() {
            gameStatus.resetGame();
        }, 5050);
        
    },
    resetGame() {
        coreData.round = 0;
        // Reset the Board
        document.getElementById('board').remove();

        const newBoard = gameStatus.originalHtmlBoard.cloneNode(true); 
        newBoard.id = 'board'; 
        document.getElementById('boardInnerBorder').appendChild(newBoard);

        coreData.updateBoard();
    },
};

/***/ }),

/***/ "./src/js/chess/popUp.js":
/*!*******************************!*\
  !*** ./src/js/chess/popUp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopUp: () => (/* binding */ PopUp)
/* harmony export */ });


const PopUp = {
    get popUp() {
        return document.getElementById('chessPopUp');
    },
    changeMsg(msg) {
        this.popUp.innerText = msg;
        this.showAndHide();
    },
    showAndHide() {
        if  (this.popUp.classList.contains('show') &&
            !this.popUp.innerText.includes('Congratulation')) return;

        if (this.popUp.innerText.includes('Congratulation')) {
            this.popUp.classList.add('showWin');
            setTimeout(function() {
                PopUp.popUp?.classList?.remove('showWin');
            }, 5050);
        } else {
            this.popUp.classList.add('show');
            setTimeout(function() {
                PopUp.popUp?.classList?.remove('show');
            }, 1250);
        }
    }
};



/***/ })

}]);
//# sourceMappingURL=src_js_chess_gameStatus_js.js.map