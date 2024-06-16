"use strict";
const SideNavbar = {
    addFollowByScroll() {
        document.addEventListener('DOMContentLoaded', function () { 
            const navbarLinks = document.querySelectorAll('.navLinkMain'); 
            const sections = document.querySelectorAll('.section'); 


          
            window.addEventListener('scroll', function () { 
                const currentPos = window.scrollY; 
          
                sections.forEach(function (section) { 
                    const sectionTop = section.offsetTop - 300; 
                    const sectionHeight = section.offsetHeight; 
                    const sectionId = section.id; 
                    
                    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) { 
                        navbarLinks.forEach(function (navbarLink) { 
                            navbarLink.classList.remove('active'); 
                        }); 

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
        const projectsSection = document.getElementById('projectsSection');

        if(sectionId === 'chessArticle' || 
        sectionId === 'weatherAppArticle' ||
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
    addNavbarEvent() {
        MainNavbar.removeClasses();
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
        MainNavbar.menuBtn.style.backgroundImage = "url('close.svg')";
    },
    changeImgMenuIcon() {
        MainNavbar.menuBtn.style.backgroundImage = "url('menu.svg')";
    },
};

export { SideNavbar, MainNavbar };