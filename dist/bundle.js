/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/main_ui.js":
/*!***************************!*\
  !*** ./src/js/main_ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogWindow: () => (/* binding */ DialogWindow),
/* harmony export */   Flower: () => (/* binding */ Flower),
/* harmony export */   MainNavbar: () => (/* binding */ MainNavbar),
/* harmony export */   ServiceBox: () => (/* binding */ ServiceBox),
/* harmony export */   SideNavbar: () => (/* binding */ SideNavbar)
/* harmony export */ });


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
        const projectsSection = document.getElementById('projectsSectionNav');

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
        const closeIcon = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
        MainNavbar.menuBtn.style.backgroundImage = `url(${closeIcon})`;
    },
    changeImgMenuIcon() {
        const menuIcon = __webpack_require__(/*! ../assets/menu.svg */ "./src/assets/menu.svg");
        MainNavbar.menuBtn.style.backgroundImage = `url(${menuIcon})`;
    },
};

const ServiceBox = {
    zoomedArticle: document.getElementById('zoomedArticle'),
    service: document.querySelectorAll('.service, .zoomedArticle'),
    addServiceEvent() {
        ServiceBox.service.forEach((service) => {
            service.addEventListener('click', ServiceBox.showArticle)
        });
    },
    showArticle(event) {
        const service = event.currentTarget;

        if(service.classList.contains('show')) {
            return ServiceBox.zoomedArticle.classList.remove('show');
        }

        if(!service.classList.contains('show')) {
            ServiceBox.zoomedArticle.classList.add('show');
            ServiceBox.updateZoomedArticle(service);
        } 
    },
    updateZoomedArticle(service) {
        ServiceBox.zoomedArticle.children[0].src = service.children[0].src;
        ServiceBox.zoomedArticle.children[1].textContent = service.children[1].textContent;
        ServiceBox.zoomedArticle.children[2].textContent = service.children[2].textContent;
    },
};

const Flower = {
    flower: document.getElementById('flower'),
    startAnimation() {
        let isScrolling;

        document.addEventListener('scroll', () => {
            Flower.flower.style.animationPlayState = 'running';
          
            // Remove timeout after new scroll
            window.clearTimeout(isScrolling);

            // Set timeout to run after scrolling ends
            isScrolling = setTimeout(() => {

            // Pause the animation when scrolling stops 
            Flower.flower.style.animationPlayState = 'paused';
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
            __webpack_require__.e(/*! import() */ "src_js_chess_chess_setup_js").then(__webpack_require__.bind(__webpack_require__, /*! ./chess/chess_setup.js */ "./src/js/chess/chess_setup.js"))
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
        const closeIcon = __webpack_require__(/*! ../assets/close.svg */ "./src/assets/close.svg");
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



/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "close.svg";

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "portfolio-page:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio_page"] = self["webpackChunkportfolio_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main_ui */ "./src/js/main_ui.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");



"use strict";


_js_main_ui__WEBPACK_IMPORTED_MODULE_0__.MainNavbar.addNavbarEvent();
_js_main_ui__WEBPACK_IMPORTED_MODULE_0__.SideNavbar.addFollowByScroll();
_js_main_ui__WEBPACK_IMPORTED_MODULE_0__.ServiceBox.addServiceEvent();
_js_main_ui__WEBPACK_IMPORTED_MODULE_0__.Flower.startAnimation();
_js_main_ui__WEBPACK_IMPORTED_MODULE_0__.DialogWindow.addStartingEvent();


    
    
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map