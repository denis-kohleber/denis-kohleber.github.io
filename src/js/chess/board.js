"use strict";

const Board = {
    player01: null,
    player02: null,
    createBoard() {
        // SVG import
        const towerBlack = require('../../assets/chessPieces/towerBlack.svg');
        const knightBlack = require('../../assets/chessPieces/knightBlack.svg');
        const bishopBlack = require('../../assets/chessPieces/bishopBlack.svg');
        const queenBlack = require('../../assets/chessPieces/queenBlack.svg');
        const kingBlack = require('../../assets/chessPieces/kingBlack.svg');
        const pawnBlack = require('../../assets/chessPieces/pawnBlack.svg');
        const towerWhite = require('../../assets/chessPieces/towerWhite.svg');
        const knightWhite = require('../../assets/chessPieces/knightWhite.svg');
        const bishopWhite = require('../../assets/chessPieces/bishopWhite.svg');
        const queenWhite = require('../../assets/chessPieces/queenWhite.svg');
        const kingWhite = require('../../assets/chessPieces/kingWhite.svg');
        const pawnWhite = require('../../assets/chessPieces/pawnWhite.svg');

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
            fieldCluster.setAttribute('tabindex', '0');

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
        import('../chess/gameStatus')
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

export { Board };