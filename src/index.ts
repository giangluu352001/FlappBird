import { gameCore } from "./engine/core/GameCore/GameCore";
gameCore.start();
let lastTime = window.performance.now();
requestAnimationFrame(gameLoop);
function gameLoop(): void {
    let time = window.performance.now();
    let delta = time - lastTime;
    gameCore.progressInput();
    gameCore.update(time, delta);
    gameCore.render(); 
    lastTime = time;
    requestAnimationFrame(gameLoop);
}
