"use strict";

const SideNavbar = {
    addFollowByScroll() {
        document.addEventListener('DOMContentLoaded', function () { 
            const navbarLinks = document.querySelectorAll('.navLinkMain'); 
            const sections = document.querySelectorAll('.section'); 
         
            window.addEventListener('scroll', function () { 
                const currentPos = window.scrollY; 
          
                sections.forEach(function (section) { 
                    const sectionTop = section.offsetTop + 500; 
                    const sectionHeight = section.offsetHeight; 
                    let sectionId = section.id; 
                    
                    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) { 
                        navbarLinks.forEach(function (navbarLink) { 
                            navbarLink.classList.remove('active'); 
                        }); 

                        // Prevent a break in the project section
                        if(sectionId === 'flower01') {
                            sectionId = 'project01';
                        }

                        if(sectionId === 'flower02') {
                            sectionId = 'project02';
                        }

                        if(sectionId === 'flower03') {
                            sectionId = 'project03';
                        }

                        // Activate Dropdown
                        SideNavbar.activateDropdown(sectionId);

                        document.querySelector('.' + sectionId + 'LinkMain').classList.add('active'); 
                    } 
                }); 
            }); 
        });
    },
    activateDropdown(sectionId) {
        const dropdownMenu = document.getElementById('dropdownMenu');
        const projectsSection = document.getElementById('projectsSectionNav');

        if(sectionId === 'project01' || 
        sectionId === 'project02' ||
        sectionId === 'project03' ||
        sectionId === 'project04' ||
        sectionId === 'projectsSection') {
            dropdownMenu.classList.add('active');
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            projectsSection.classList.add('active'); 
        } else {
            dropdownMenu.classList.remove('active');
            dropdownMenu.style.maxHeight = null;
        };
    },
};

const MainNavbar = {
    linkContainer: document.getElementById('linkContainer'),
    menuBtn: document.getElementById('menuBtn'),
    body: document.getElementById('body'),
    navItems: document.querySelectorAll('.navLink'),
    contactLink: document.getElementById('contactLink'),
    addNavbarEvent() {
        MainNavbar.removeClasses();

        // Handle the tabindex by resizing
        window.addEventListener('resize', MainNavbar.setTabindexBasedOnWidth);
        window.addEventListener('DOMContentLoaded', MainNavbar.setTabindexBasedOnWidth);
    },
    addClasses() {
        MainNavbar.linkContainer.classList.add('showNav');
        MainNavbar.body.classList.add('showNav');
        MainNavbar.switchEvents();
    },
    removeClasses() {
        MainNavbar.linkContainer.classList.remove('showNav');
        MainNavbar.body.classList.remove('showNav');
        MainNavbar.switchEventsReserve();
    },
    switchEvents() {
        MainNavbar.menuBtn.removeEventListener('click', MainNavbar.addClasses);
        MainNavbar.linkContainer.addEventListener('click', MainNavbar.removeClasses); 
        MainNavbar.menuBtn.addEventListener('click', MainNavbar.removeClasses);
        MainNavbar.changeImgCloseIcon();
    },
    switchEventsReserve() {
        MainNavbar.menuBtn.removeEventListener('click', MainNavbar.removeClasses);
        MainNavbar.linkContainer.removeEventListener('click', MainNavbar.removeClasses);
        MainNavbar.menuBtn.addEventListener('click', MainNavbar.addClasses);
        MainNavbar.changeImgMenuIcon();
    },
    changeImgCloseIcon() {
        const closeIcon = require('../assets/close.svg');
        MainNavbar.menuBtn.style.backgroundImage = `url(${closeIcon})`;
        MainNavbar.addTabIndex();
    },
    changeImgMenuIcon() {
        const menuIcon = require('../assets/menu.svg');
        MainNavbar.menuBtn.style.backgroundImage = `url(${menuIcon})`;
        MainNavbar.removeTabIndex();
    },
    addTabIndex() {
        MainNavbar.navItems.forEach((item) => item.setAttribute('tabindex', '0'));
        MainNavbar.menuBtn.setAttribute('tabindex', '1');

        MainNavbar.contactLink.addEventListener('keydown', MainNavbar.handleTabByContactLink);
    },
    removeTabIndex() {
        MainNavbar.navItems.forEach((item) => item.setAttribute('tabindex', '-1'));
        MainNavbar.menuBtn.setAttribute('tabindex', '0');

        MainNavbar.contactLink.removeEventListener('keydown', MainNavbar.handleTabByContactLink);
    },
    setTabindexBasedOnWidth() {
        if (window.innerWidth < 700) {
            MainNavbar.navItems.forEach((item) => item.setAttribute('tabindex', '-1'));
        } else {
            MainNavbar.navItems.forEach((item) => item.setAttribute('tabindex', '0'));
        }
    },
    // Hold the tab-navigation in the menu
    handleTabByContactLink(event) {
        if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            MainNavbar.menuBtn.focus();
        }
    },
};

const ServiceBox = {
    zoomedArticle: document.getElementById('zoomedArticle'),
    service: document.querySelectorAll('.service, .zoomedArticle'),
    addServiceEvent() {
        ServiceBox.service.forEach((service) => {
            service.addEventListener('click', ServiceBox.showArticle)
        });
        ServiceBox.service.forEach((service) => {
            service.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    ServiceBox.showArticle(event);
                }
            });
        });
    },
    showArticle(event) {
        const service = event.currentTarget;

        if(service.classList.contains('show')) {
            ServiceBox.zoomedArticle.classList.remove('show');

            // Take into account the Tabindex
            ServiceBox.service.forEach((item) => item.setAttribute('tabindex', '0'));
            ServiceBox.zoomedArticle.setAttribute('tabindex', '-1');
            return;
        }

        if(!service.classList.contains('show')) {
            ServiceBox.zoomedArticle.classList.add('show');
            ServiceBox.updateZoomedArticle(service);

            // Take into account the Tabindex
            ServiceBox.service.forEach((item) => item.setAttribute('tabindex', '-1'));
            ServiceBox.zoomedArticle.setAttribute('tabindex', '0');
            ServiceBox.zoomedArticle.focus();
        } 
    },
    updateZoomedArticle(service) {
        ServiceBox.zoomedArticle.children[0].src = service.children[0].src;
        ServiceBox.zoomedArticle.children[1].textContent = service.children[1].textContent;
        ServiceBox.zoomedArticle.children[2].textContent = service.children[2].textContent;
    },
};

const Flower = {
    flower01: document.getElementById('flower-01'),
    flower02: document.getElementById('flower-02'),
    flower03: document.getElementById('flower-03'),
    startAnimation() {
        let isScrolling;

        document.addEventListener('scroll', () => {
            Flower.flower01.style.animationPlayState = 'running';
            Flower.flower02.style.animationPlayState = 'running';
            Flower.flower03.style.animationPlayState = 'running';
            
            // Remove timeout after new scroll
            window.clearTimeout(isScrolling);

            // Set timeout to run after scrolling ends
            isScrolling = setTimeout(() => {

            // Pause the animation when scrolling stops 
            Flower.flower01.style.animationPlayState = 'paused';
            Flower.flower02.style.animationPlayState = 'paused';
            Flower.flower03.style.animationPlayState = 'paused';
            }, 100);
        });
    },
};

const DialogWindow = {
    body: document.getElementById('body'),
    dialog: document.getElementById('projectDialog'),
    startBtn: document.querySelectorAll('.projectExecutionBtn'),
    addStartingEvent() {
        DialogWindow.startBtn.forEach((startBtn) => {
            startBtn.addEventListener('click', DialogWindow.openModal);
        });
    },
    openModal(event) {
        const startBtn = event.currentTarget;

        if(startBtn.getAttribute('data-value') === 'chess') {
            import('./chess/chess_setup.js')
                .then(DialogWindow.addModalProperties())
                .then(module => {
                    module.ChessSetup.createChessSetup();
                })
                .catch(err => {
                    console.error('Fehler beim Laden des Moduls:', err);
                });
        };
    },
    addModalProperties() {
        DialogWindow.dialog.showModal();

        DialogWindow.dialog.innerHTML = ''; // Clean up the dialog
        
        setTimeout(function() {
            DialogWindow.body.classList.add('hideOverflow'); // Blocking the scrolling
        }, 500);

        DialogWindow.createCloseBtn();

        DialogWindow.createBackground();
    },
    createCloseBtn() {
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('projectCloseBtn');
        const closeIcon = require('../assets/close.svg');
        closeBtn.style.backgroundImage = `url(${closeIcon})`;
        DialogWindow.dialog.appendChild(closeBtn);

        closeBtn.addEventListener('click', DialogWindow.closeModal);
    },
    closeModal() {
        DialogWindow.body.classList.remove('hideOverflow');
        DialogWindow.dialog.innerHTML = '';
        DialogWindow.dialog.close();
    },
    createBackground() {
        const boxesDiv = document.createElement('div');
        boxesDiv.classList.add('boxes');

        for (let i = 0; i < 18; i++) {
            let boxDiv = document.createElement('div');
            boxDiv.classList.add('box');
            boxesDiv.appendChild(boxDiv);
        }

        DialogWindow.dialog.appendChild(boxesDiv);
    },
}

export { SideNavbar, MainNavbar, ServiceBox, Flower, DialogWindow };