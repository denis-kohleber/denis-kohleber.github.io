"use strict";

const ChessSetup = {
    projectDialog: document.getElementById('projectDialog'),
    player01Input: null,
    player02Input: null,
    playerInputs: [],
    startChessGameBtn: null,
    botBtn: null,
    createChessSetup() {
        // The Container for the whole Setup
        const chessSetup = document.createElement('div');
        chessSetup.className = 'chessSetup';
    
        // The Headline Container - First Part
        const headlineContainer = document.createElement('div');
        headlineContainer.className = 'headlineContainer';
    
        // The Headline in 2 Parts
        const chessHeadline = document.createElement('h5');
        chessHeadline.className = 'chessHeadline';
        chessHeadline.textContent = 'Chess';
    
        const chessHeadlineSubtext = document.createElement('h5');
        chessHeadlineSubtext.className = 'chessHeadlineSubtext';
        chessHeadlineSubtext.textContent = 'The Game';
    
        headlineContainer.appendChild(chessHeadline);
        headlineContainer.appendChild(chessHeadlineSubtext);
    
        // The selection Container - Second Part
        const selectionContainer = document.createElement('div');
        selectionContainer.className = 'selectionContainer';
        
        // The first Input
        const player01Input = document.createElement('input');
        player01Input.type = 'text';
        player01Input.value = 'Player';
        player01Input.className = 'player01Input';
        player01Input.id = 'player01Input';
    
        // The "vs" Img
        const vsImg = document.createElement('img');
        vsImg.src = require('../assets/vs.svg'); // Annahme: Webpack wird verwendet
        vsImg.alt = '';
        vsImg.className = 'vsImg';
    
        // The second Input
        const player02Input = document.createElement('input');
        player02Input.type = 'text';
        player02Input.value = 'Player';
        player02Input.className = 'player02Input';
        player02Input.id = 'player02Input';
        
        // The "or" Paragraph
        const chessOrParagraph = document.createElement('p');
        chessOrParagraph.className = 'chessOrParagraph';
        chessOrParagraph.textContent = 'or';
        
        // The Bot Button
        const botBtn = document.createElement('button');
        botBtn.className = 'botBtn';
        botBtn.textContent = 'AI-BOT';
        botBtn.id = 'botBtn';
        
        selectionContainer.appendChild(player01Input);
        selectionContainer.appendChild(vsImg);
        selectionContainer.appendChild(player02Input);
        selectionContainer.appendChild(chessOrParagraph);
        selectionContainer.appendChild(botBtn);
    
        // The starting Button - Third Part
        const startChessGameBtn = document.createElement('button');
        startChessGameBtn.className = 'startChessGame';
        startChessGameBtn.id = 'startChessGameBtn';
        startChessGameBtn.textContent = 'Start Game';
        
        // Append all 3 Parts
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

        // If no Input added, than set to default
        if (playerInput.value === '') {
            playerInput.value = 'Player';
            playerInput.classList.remove('selected');

            ChessSetup.checkStartConditions();
            return;
        };

        // Deselect Ai
        if(playerInput.id === 'player02Input') {
            ChessSetup.botBtn.classList.remove('selected');

            ChessSetup.checkStartConditions();
        };

        // Successful select the Input
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

            // ChessSetup.startChessGameBtn.removeEventListener('click', startChess);
            // ChessSetup.startChessGameBtn.addEventListener('click', startChess);
            return;
        };
        ChessSetup.startChessGameBtn.style.maxHeight = null;
        ChessSetup.startChessGameBtn.style.padding = null;

        // ChessSetup.startChessGameBtn.removeEventListener('click', startChess);
    }
};

export { ChessSetup };