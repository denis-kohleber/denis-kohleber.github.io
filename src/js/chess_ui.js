"use strict";

const ChessSetup = {
    modal: document.getElementById('chessModal'),
    startBtn: document.getElementById('chessStartBtn'),
    addStartingEvent() {
        ChessSetup.startBtn.addEventListener('click', ChessSetup.openModal);

        // Remove later
        ChessSetup.modal.addEventListener('click', () => ChessSetup.modal.close())
    },
    openModal() {
        ChessSetup.modal.showModal();
    },
}

export { ChessSetup };