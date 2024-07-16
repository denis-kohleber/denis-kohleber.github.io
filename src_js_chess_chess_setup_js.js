"use strict";
(self["webpackChunkportfolio_page"] = self["webpackChunkportfolio_page"] || []).push([["src_js_chess_chess_setup_js"],{

/***/ "./src/js/chess/board.js":
/*!*******************************!*\
  !*** ./src/js/chess/board.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });


const Board = {
    player01: null,
    player02: null,
    createBoard() {
        // SVG import
        const towerBlack = __webpack_require__(/*! ../../assets/chessPieces/towerBlack.svg */ "./src/assets/chessPieces/towerBlack.svg");
        const knightBlack = __webpack_require__(/*! ../../assets/chessPieces/knightBlack.svg */ "./src/assets/chessPieces/knightBlack.svg");
        const bishopBlack = __webpack_require__(/*! ../../assets/chessPieces/bishopBlack.svg */ "./src/assets/chessPieces/bishopBlack.svg");
        const queenBlack = __webpack_require__(/*! ../../assets/chessPieces/queenBlack.svg */ "./src/assets/chessPieces/queenBlack.svg");
        const kingBlack = __webpack_require__(/*! ../../assets/chessPieces/kingBlack.svg */ "./src/assets/chessPieces/kingBlack.svg");
        const pawnBlack = __webpack_require__(/*! ../../assets/chessPieces/pawnBlack.svg */ "./src/assets/chessPieces/pawnBlack.svg");
        const towerWhite = __webpack_require__(/*! ../../assets/chessPieces/towerWhite.svg */ "./src/assets/chessPieces/towerWhite.svg");
        const knightWhite = __webpack_require__(/*! ../../assets/chessPieces/knightWhite.svg */ "./src/assets/chessPieces/knightWhite.svg");
        const bishopWhite = __webpack_require__(/*! ../../assets/chessPieces/bishopWhite.svg */ "./src/assets/chessPieces/bishopWhite.svg");
        const queenWhite = __webpack_require__(/*! ../../assets/chessPieces/queenWhite.svg */ "./src/assets/chessPieces/queenWhite.svg");
        const kingWhite = __webpack_require__(/*! ../../assets/chessPieces/kingWhite.svg */ "./src/assets/chessPieces/kingWhite.svg");
        const pawnWhite = __webpack_require__(/*! ../../assets/chessPieces/pawnWhite.svg */ "./src/assets/chessPieces/pawnWhite.svg");

        // Clean the container for the board
        const chessSetup = document.getElementById('chessSetup');
        chessSetup.innerHTML = '';

        // Create the pop-up
        const popUp = document.createElement('div');
        popUp.className = 'chessPopUp';
        popUp.id = 'chessPopUp';

        // Create the board border
        const boardInnerBorder = document.createElement('div');
        boardInnerBorder.className = 'boardInnerBorder';
        boardInnerBorder.id = 'boardInnerBorder';
        
        // Create the main board
        const mainBoard = document.createElement('div');
        mainBoard.className = 'mainBoard';
        mainBoard.id = 'board';

        // Function for create a field on the board, necessary for loop.
        function createField(id, color, imgSrc, imgId) {
            const fieldCluster = document.createElement('div');
            fieldCluster.className = `fieldCluster ${color}`;
            fieldCluster.id = id;

            if (imgSrc) {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.id = imgId;
                fieldCluster.appendChild(img);
            };

            return fieldCluster;
        };

        // Necessary for the individual field creation
        const fields = [
            { id: 'field01', color: 'white', imgSrc: towerBlack, imgId: 'tower01Black' },
            { id: 'field02', color: 'black', imgSrc: knightBlack, imgId: 'knight01Black' },
            { id: 'field03', color: 'white', imgSrc: bishopBlack, imgId: 'bishop01Black' },
            { id: 'field04', color: 'black', imgSrc: queenBlack, imgId: 'queen01Black' },
            { id: 'field05', color: 'white', imgSrc: kingBlack, imgId: 'king01Black' },
            { id: 'field06', color: 'black', imgSrc: bishopBlack, imgId: 'bishop02Black' },
            { id: 'field07', color: 'white', imgSrc: knightBlack, imgId: 'knight02Black' },
            { id: 'field08', color: 'black', imgSrc: towerBlack, imgId: 'tower02Black' },
            { id: 'field09', color: 'black', imgSrc: pawnBlack, imgId: 'pawn01Black' },
            { id: 'field10', color: 'white', imgSrc: pawnBlack, imgId: 'pawn02Black' },
            { id: 'field11', color: 'black', imgSrc: pawnBlack, imgId: 'pawn03Black' },
            { id: 'field12', color: 'white', imgSrc: pawnBlack, imgId: 'pawn04Black' },
            { id: 'field13', color: 'black', imgSrc: pawnBlack, imgId: 'pawn05Black' },
            { id: 'field14', color: 'white', imgSrc: pawnBlack, imgId: 'pawn06Black' },
            { id: 'field15', color: 'black', imgSrc: pawnBlack, imgId: 'pawn07Black' },
            { id: 'field16', color: 'white', imgSrc: pawnBlack, imgId: 'pawn08Black' },
            { id: 'field49', color: 'white', imgSrc: pawnWhite, imgId: 'pawn01White' },
            { id: 'field50', color: 'black', imgSrc: pawnWhite, imgId: 'pawn02White' },
            { id: 'field51', color: 'white', imgSrc: pawnWhite, imgId: 'pawn03White' },
            { id: 'field52', color: 'black', imgSrc: pawnWhite, imgId: 'pawn04White' },
            { id: 'field53', color: 'white', imgSrc: pawnWhite, imgId: 'pawn05White' },
            { id: 'field54', color: 'black', imgSrc: pawnWhite, imgId: 'pawn06White' },
            { id: 'field55', color: 'white', imgSrc: pawnWhite, imgId: 'pawn07White' },
            { id: 'field56', color: 'black', imgSrc: pawnWhite, imgId: 'pawn08White' },
            { id: 'field57', color: 'black', imgSrc: towerWhite, imgId: 'tower01White' },
            { id: 'field58', color: 'white', imgSrc: knightWhite, imgId: 'knight01White' },
            { id: 'field59', color: 'black', imgSrc: bishopWhite, imgId: 'bishop01White' },
            { id: 'field60', color: 'white', imgSrc: queenWhite, imgId: 'queen01White' },
            { id: 'field61', color: 'black', imgSrc: kingWhite, imgId: 'king01White' },
            { id: 'field62', color: 'white', imgSrc: bishopWhite, imgId: 'bishop02White' },
            { id: 'field63', color: 'black', imgSrc: knightWhite, imgId: 'knight02White' },
            { id: 'field64', color: 'white', imgSrc: towerWhite, imgId: 'tower02White' },
        ];

        // Loop for the creations of the fields
        for (let i = 1; i <= 64; i++) {
            const field = fields.find(f => f.id === `field${i.toString().padStart(2, '0')}`);
            const color = ((i + Math.floor((i - 1) / 8)) % 2 !== 0) ? 'white' : 'black';
            if (!field) {
                mainBoard.appendChild(createField(`field${i.toString().padStart(2, '0')}`, color));
            } else {
                mainBoard.appendChild(createField(field.id, color, field.imgSrc, field.imgId));
            }
        }

        boardInnerBorder.appendChild(mainBoard);
        chessSetup.appendChild(popUp);
        chessSetup.appendChild(boardInnerBorder);

        Board.startChess();
    },
    startChess() {
        __webpack_require__.e(/*! import() */ "src_js_chess_gameStatus_js").then(__webpack_require__.bind(__webpack_require__, /*! ../chess/gameStatus */ "./src/js/chess/gameStatus.js"))
            .then(module => {
                module.coreData.White.player01 = Board.player01;
                module.coreData.Black.player02 = Board.player02;
                module.gameStatus.resetGame();
            })
            .catch(err => {
                console.error('Fehler beim Laden des Moduls:', err);
            });
    },
};



/***/ }),

/***/ "./src/js/chess/chess_setup.js":
/*!*************************************!*\
  !*** ./src/js/chess/chess_setup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChessSetup: () => (/* binding */ ChessSetup)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/js/chess/board.js");


"use strict";

const ChessSetup = {
    projectDialog: document.getElementById('projectDialog'),
    player01Input: null,
    player02Input: null,
    playerInputs: [],
    startChessGameBtn: null,
    botBtn: null,
    createChessSetup() {
        // The container for the whole setup
        const chessSetup = document.createElement('div');
        chessSetup.className = 'chessSetup';
        chessSetup.id = 'chessSetup';
    
        // The headline container - First part
        const headlineContainer = document.createElement('div');
        headlineContainer.className = 'headlineContainer';
    
        // The headline in 2 parts
        const chessHeadline = document.createElement('h5');
        chessHeadline.className = 'chessHeadline';
        chessHeadline.textContent = 'Chess';
    
        const chessHeadlineSubtext = document.createElement('h5');
        chessHeadlineSubtext.className = 'chessHeadlineSubtext';
        chessHeadlineSubtext.textContent = 'The Game';
    
        headlineContainer.appendChild(chessHeadline);
        headlineContainer.appendChild(chessHeadlineSubtext);
    
        // The selection container - Second part
        const selectionContainer = document.createElement('div');
        selectionContainer.className = 'selectionContainer';
        
        // The first input
        const player01Input = document.createElement('input');
        player01Input.type = 'text';
        player01Input.value = 'Player';
        player01Input.className = 'player01Input';
        player01Input.id = 'player01Input';
    
        // The "vs" img
        const vsImg = document.createElement('img');
        vsImg.src = __webpack_require__(/*! ../../assets/vs.svg */ "./src/assets/vs.svg");
        vsImg.alt = '';
        vsImg.className = 'vsImg';
    
        // The second input
        const player02Input = document.createElement('input');
        player02Input.type = 'text';
        player02Input.value = 'Player';
        player02Input.className = 'player02Input';
        player02Input.id = 'player02Input';
        
        // The "or" paragraph
        const chessOrParagraph = document.createElement('p');
        chessOrParagraph.className = 'chessOrParagraph';
        chessOrParagraph.textContent = 'or';
        
        // The bot button
        const botBtn = document.createElement('button');
        botBtn.className = 'botBtn';
        botBtn.textContent = 'AI-BOT';
        botBtn.id = 'botBtn';
        
        selectionContainer.appendChild(player01Input);
        selectionContainer.appendChild(vsImg);
        selectionContainer.appendChild(player02Input);
        selectionContainer.appendChild(chessOrParagraph);
        selectionContainer.appendChild(botBtn);
    
        // The starting button - Third part
        const startChessGameBtn = document.createElement('button');
        startChessGameBtn.className = 'startChessGame';
        startChessGameBtn.id = 'startChessGameBtn';
        startChessGameBtn.textContent = 'Start Game';
        
        // Append all 3 parts
        chessSetup.appendChild(headlineContainer);
        chessSetup.appendChild(selectionContainer);
        chessSetup.appendChild(startChessGameBtn);
    
        // Append to the dialog
        this.projectDialog.appendChild(chessSetup);
        this.setSelectors();
        this.addSetupEvents();
    },
    setSelectors() {
        this.player01Input = document.getElementById('player01Input');
        this.player02Input = document.getElementById('player02Input');
        this.playerInputs = [this.player01Input, this.player02Input];
        this.startChessGameBtn = document.getElementById('startChessGameBtn');
        this.botBtn = document.getElementById('botBtn');

    },
    addSetupEvents() {
        this.playerInputs.forEach((playerInput) => {
            playerInput.addEventListener('focus', this.clearInputByFocus);
            playerInput.addEventListener('keydown', this.exitFocusByEnter);
            playerInput.addEventListener('blur', this.manageInputBehavior);
        });

        this.botBtn.addEventListener('click', this.manageBotBtnBehavior);
    },
    clearInputByFocus(event) {
        const playerInput = event.currentTarget;
        playerInput.value = '';
    },
    exitFocusByEnter(event) {
        const playerInput= event.currentTarget;

        if(event.key === 'Enter') {
            playerInput.blur();
        }
    },
    manageInputBehavior(event) {
        const playerInput= event.currentTarget;

        // If no input added, than set to default
        if (playerInput.value === '') {
            playerInput.value = 'Player';
            playerInput.classList.remove('selected');

            ChessSetup.checkStartConditions();
            return;
        };

        // Deselect ai
        if(playerInput.id === 'player02Input') {
            ChessSetup.botBtn.classList.remove('selected');

            ChessSetup.checkStartConditions();
        };

        // Successful select the input
        playerInput.classList.add('selected');

        ChessSetup.checkStartConditions();
    },
    manageBotBtnBehavior() {
        ChessSetup.player02Input.classList.remove('selected');
        ChessSetup.botBtn.classList.add('selected');

        ChessSetup.checkStartConditions();
    },
    checkStartConditions() {
        if(ChessSetup.player01Input.classList.contains('selected') &&
        (ChessSetup.player02Input.classList.contains('selected') ||
        ChessSetup.botBtn.classList.contains('selected'))) {
            ChessSetup.startChessGameBtn.style.maxHeight = 'auto';
            ChessSetup.startChessGameBtn.style.padding = '8%';

            ChessSetup.changePlayer();

            ChessSetup.startChessGameBtn.removeEventListener('click', _board__WEBPACK_IMPORTED_MODULE_0__.Board.createBoard);
            ChessSetup.startChessGameBtn.addEventListener('click', _board__WEBPACK_IMPORTED_MODULE_0__.Board.createBoard);
            return;
        };
        ChessSetup.startChessGameBtn.style.maxHeight = null;
        ChessSetup.startChessGameBtn.style.padding = null;

        ChessSetup.startChessGameBtn.removeEventListener('click', _board__WEBPACK_IMPORTED_MODULE_0__.Board.createBoard);
    },
    changePlayer() {
        _board__WEBPACK_IMPORTED_MODULE_0__.Board.player01 = ChessSetup.player01Input.value;

        if (ChessSetup.player02Input.classList.contains('selected')) {
            _board__WEBPACK_IMPORTED_MODULE_0__.Board.player02 = ChessSetup.player02Input.value;
        } else {
            _board__WEBPACK_IMPORTED_MODULE_0__.Board.player02 = 'AI';
        }
    }
};



/***/ }),

/***/ "./src/assets/chessPieces/bishopBlack.svg":
/*!************************************************!*\
  !*** ./src/assets/chessPieces/bishopBlack.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bishopBlack.svg";

/***/ }),

/***/ "./src/assets/chessPieces/bishopWhite.svg":
/*!************************************************!*\
  !*** ./src/assets/chessPieces/bishopWhite.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bishopWhite.svg";

/***/ }),

/***/ "./src/assets/chessPieces/kingBlack.svg":
/*!**********************************************!*\
  !*** ./src/assets/chessPieces/kingBlack.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kingBlack.svg";

/***/ }),

/***/ "./src/assets/chessPieces/kingWhite.svg":
/*!**********************************************!*\
  !*** ./src/assets/chessPieces/kingWhite.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "kingWhite.svg";

/***/ }),

/***/ "./src/assets/chessPieces/knightBlack.svg":
/*!************************************************!*\
  !*** ./src/assets/chessPieces/knightBlack.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "knightBlack.svg";

/***/ }),

/***/ "./src/assets/chessPieces/knightWhite.svg":
/*!************************************************!*\
  !*** ./src/assets/chessPieces/knightWhite.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "knightWhite.svg";

/***/ }),

/***/ "./src/assets/chessPieces/pawnBlack.svg":
/*!**********************************************!*\
  !*** ./src/assets/chessPieces/pawnBlack.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pawnBlack.svg";

/***/ }),

/***/ "./src/assets/chessPieces/pawnWhite.svg":
/*!**********************************************!*\
  !*** ./src/assets/chessPieces/pawnWhite.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pawnWhite.svg";

/***/ }),

/***/ "./src/assets/chessPieces/queenBlack.svg":
/*!***********************************************!*\
  !*** ./src/assets/chessPieces/queenBlack.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "queenBlack.svg";

/***/ }),

/***/ "./src/assets/chessPieces/queenWhite.svg":
/*!***********************************************!*\
  !*** ./src/assets/chessPieces/queenWhite.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "queenWhite.svg";

/***/ }),

/***/ "./src/assets/chessPieces/towerBlack.svg":
/*!***********************************************!*\
  !*** ./src/assets/chessPieces/towerBlack.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "towerBlack.svg";

/***/ }),

/***/ "./src/assets/chessPieces/towerWhite.svg":
/*!***********************************************!*\
  !*** ./src/assets/chessPieces/towerWhite.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "towerWhite.svg";

/***/ }),

/***/ "./src/assets/vs.svg":
/*!***************************!*\
  !*** ./src/assets/vs.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "vs.svg";

/***/ })

}]);
//# sourceMappingURL=src_js_chess_chess_setup_js.js.map