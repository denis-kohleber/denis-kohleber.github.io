import { Board } from './board';

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
        vsImg.src = require('../../assets/vs.svg');
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

            ChessSetup.startChessGameBtn.removeEventListener('click', Board.createBoard);
            ChessSetup.startChessGameBtn.addEventListener('click', Board.createBoard);
            return;
        };
        ChessSetup.startChessGameBtn.style.maxHeight = null;
        ChessSetup.startChessGameBtn.style.padding = null;

        ChessSetup.startChessGameBtn.removeEventListener('click', Board.createBoard);
    },
    changePlayer() {
        Board.player01 = ChessSetup.player01Input.value;

        if (ChessSetup.player02Input.classList.contains('selected')) {
            Board.player02 = ChessSetup.player02Input.value;
        } else {
            Board.player02 = 'AI';
        }
    }
};

export { ChessSetup };