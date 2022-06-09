/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprites_gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites/gameState */ \"./src/sprites/gameState.ts\");\n\r\nlet canvas = document.getElementById(\"canvas\");\r\nlet ctx = canvas.getContext(\"2d\");\r\nlet frameCount = 0;\r\nvar game = new _sprites_gameState__WEBPACK_IMPORTED_MODULE_0__.GameState();\r\nconst frame = () => {\r\n    window.requestAnimationFrame(frame);\r\n    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, 320, 480);\r\n    game.render(ctx);\r\n    frameCount++;\r\n};\r\nconst run = () => {\r\n    frame();\r\n};\r\nvar background = new Image();\r\nbackground.src = \"./bg.png\";\r\nif (ctx) {\r\n    console.log(\"hello\");\r\n    ctx.drawImage(background, 0, 0);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0Q7QUFFaEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCLENBQUM7QUFDcEUsSUFBSSxHQUFHLEdBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVuQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDbkIsSUFBSSxJQUFJLEdBQWMsSUFBSSx5REFBUyxFQUFFLENBQUM7QUFDdEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixVQUFVLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2QsS0FBSyxFQUFFLENBQUM7QUFDWCxDQUFDO0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUM3QixVQUFVLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztBQUM1QixJQUFJLEdBQUcsRUFBRTtJQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1hbmQtdHlwZXNjcmlwdC1sZXNzb24tNi8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3Nwcml0ZXMvZ2FtZVN0YXRlXCI7XHJcblxyXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjdHggPSAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbmxldCBmcmFtZUNvdW50ID0gMDtcclxudmFyIGdhbWU6IEdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcclxuY29uc3QgZnJhbWUgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcclxuICAgIGN0eD8uY2xlYXJSZWN0KDAsIDAsIDMyMCwgNDgwKTtcclxuICAgIGdhbWUucmVuZGVyKGN0eCk7XHJcbiAgICBmcmFtZUNvdW50Kys7XHJcbn1cclxuXHJcbmNvbnN0IHJ1biA9ICgpID0+IHtcclxuICAgZnJhbWUoKTtcclxufVxyXG5cclxudmFyIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuYmFja2dyb3VuZC5zcmMgPSBcIi4vYmcucG5nXCI7XHJcbmlmIChjdHgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApOyBcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/sprites/bird.ts":
/*!*****************************!*\
  !*** ./src/sprites/bird.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bird\": () => (/* binding */ Bird)\n/* harmony export */ });\nclass Bird {\r\n    constructor(radius, location, velocity, gravity) {\r\n        this.radius = radius;\r\n        this.location = location;\r\n        this.velocity = velocity;\r\n        this.gravity = gravity;\r\n        this.radius = radius;\r\n        this.location = location;\r\n        this.velocity = velocity;\r\n        this.gravity = gravity;\r\n    }\r\n    update() {\r\n    }\r\n    render(ctx) {\r\n        if (ctx) {\r\n            console.log(\"success\");\r\n            ctx.lineWidth = 2;\r\n            ctx.strokeStyle = \"#ffffff\";\r\n            ctx.save();\r\n            ctx.beginPath();\r\n            ctx.arc(this.location.X, this.location.Y, this.radius, 0, Math.PI * 2);\r\n            ctx.closePath();\r\n            ctx.stroke();\r\n            ctx.restore();\r\n        }\r\n        else\r\n            console.log(\"failed\");\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ByaXRlcy9iaXJkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDTyxNQUFNLElBQUk7SUFDYixZQUNZLE1BQWMsRUFDZCxRQUFnQixFQUNoQixRQUFnQixFQUNoQixPQUFlO1FBSGYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRXZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFDTSxNQUFNO0lBRWIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxHQUFvQztRQUM5QyxJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDNUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1gsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdEUsR0FBRyxDQUFDLFNBQVMsRUFBRTtZQUNmLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDWixHQUFHLENBQUMsT0FBTyxFQUFFO1NBQ2hCOztZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1hbmQtdHlwZXNjcmlwdC1sZXNzb24tNi8uL3NyYy9zcHJpdGVzL2JpcmQudHM/MjAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi4vdXRpbHMvdmVjdG9yXCI7XHJcbmV4cG9ydCBjbGFzcyBCaXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmFkaXVzOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogVmVjdG9yLFxyXG4gICAgICAgIHByaXZhdGUgdmVsb2NpdHk6IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIGdyYXZpdHk6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHguYXJjKHRoaXMubG9jYXRpb24uWCwgdGhpcy5sb2NhdGlvbi5ZLCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpXHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKClcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKFwiZmFpbGVkXCIpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sprites/bird.ts\n");

/***/ }),

/***/ "./src/sprites/gameState.ts":
/*!**********************************!*\
  !*** ./src/sprites/gameState.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameState\": () => (/* binding */ GameState)\n/* harmony export */ });\n/* harmony import */ var _utils_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vector */ \"./src/utils/vector.ts\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/sprites/bird.ts\");\n\r\n\r\nclass GameState {\r\n    constructor() {\r\n        this.gameOver = () => {\r\n        };\r\n        this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__.Bird(2, new _utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector(1, 2), 1, 10);\r\n        this.pipes = [];\r\n        this.score = 0;\r\n    }\r\n    update() {\r\n        this.bird.update();\r\n        this.updatePipes();\r\n    }\r\n    updatePipes() {\r\n        this.pipes.forEach((val) => {\r\n            if (val) {\r\n                val.update();\r\n            }\r\n        });\r\n    }\r\n    render(ctx) {\r\n    }\r\n}\r\nGameState.highestscore = 0;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ByaXRlcy9nYW1lU3RhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQ1g7QUFFdkIsTUFBTSxTQUFTO0lBS2xCO1FBbUJRLGFBQVEsR0FBRyxHQUFHLEVBQUU7UUFFeEIsQ0FBQztRQXBCRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksdUNBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxpREFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNNLE1BQU07UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ08sV0FBVztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNNLE1BQU0sQ0FBQyxHQUFvQztJQUVsRCxDQUFDOztBQXRCTSxzQkFBWSxHQUFXLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYW5kLXR5cGVzY3JpcHQtbGVzc29uLTYvLi9zcmMvc3ByaXRlcy9nYW1lU3RhdGUudHM/NTBlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi4vdXRpbHMvdmVjdG9yXCI7XHJcbmltcG9ydCB7IEJpcmQgfSBmcm9tIFwiLi9iaXJkXCI7XHJcbmltcG9ydCB7IFBpcGUgfSBmcm9tIFwiLi9waXBlXCI7XHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xyXG4gICAgc3RhdGljIGhpZ2hlc3RzY29yZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmlyZDogQmlyZDtcclxuICAgIHByaXZhdGUgcGlwZXM6IFBpcGVbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmlyZCA9IG5ldyBCaXJkKDIsIG5ldyBWZWN0b3IoMSwgMiksIDEsIDEwKTtcclxuICAgICAgICB0aGlzLnBpcGVzID0gW107XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmlyZC51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBpcGVzKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZGF0ZVBpcGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGlwZXMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHZhbC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnYW1lT3ZlciA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sprites/gameState.ts\n");

/***/ }),

/***/ "./src/utils/vector.ts":
/*!*****************************!*\
  !*** ./src/utils/vector.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    get X() {\r\n        return this.x;\r\n    }\r\n    get Y() {\r\n        return this.y;\r\n    }\r\n    changeX(val) {\r\n        this.x = val;\r\n    }\r\n    changeY(val) {\r\n        this.y = val;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdmVjdG9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNLE1BQU07SUFDZixZQUNZLENBQVMsRUFDVCxDQUFTO1FBRFQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFFakIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxJQUFXLENBQUM7UUFDUixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQVcsQ0FBQztRQUNSLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ00sT0FBTyxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUNNLE9BQU8sQ0FBQyxHQUFXO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYW5kLXR5cGVzY3JpcHQtbGVzc29uLTYvLi9zcmMvdXRpbHMvdmVjdG9yLnRzP2MwNjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHg6IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIHk6IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBYKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgWSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2hhbmdlWCh2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueCA9IHZhbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjaGFuZ2VZKHZhbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ID0gdmFsO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/vector.ts\n");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;