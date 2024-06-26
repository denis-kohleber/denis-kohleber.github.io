import { SideNavbar, MainNavbar, ServiceBox, Flower, DialogWindow } from "./js/main_ui";
import "./style/style.css";

"use strict";


MainNavbar.addNavbarEvent();
SideNavbar.addFollowByScroll();
ServiceBox.addServiceEvent();
Flower.startAnimation();
DialogWindow.addStartingEvent();

// const startChessGameBtn = document.getElementById('startChessGameBtn');
// const botBtn = document.querySelector('.botBtn').addEventListener('click', () => {
//     if(startChessGameBtn.style.maxHeight) {
//         startChessGameBtn.style.maxHeight = null;
//         startChessGameBtn.style.padding = '0';
//     } else {

//         console.log(startChessGameBtn.style.padding);
//     }
// })



    
    