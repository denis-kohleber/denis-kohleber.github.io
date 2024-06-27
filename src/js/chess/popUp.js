"use strict"

const PopUp = {
    get popUp() {
        return document.getElementById('chessPopUp');
    },
    changeMsg(msg) {
        this.popUp.innerText = msg;
        this.showAndHide();
    },
    showAndHide() {
        if (this.popUp.classList.contains('show') ||
        this.popUp.classList.contains('showWin')) return;

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

export { PopUp }