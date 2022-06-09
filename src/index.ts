import { GameState } from "./game/GameState";
import { Input } from "./input/Input";

var gameState = GameState.getInstance();
Input.start();
let lastTime = window.performance.now();
requestAnimationFrame(gameLoop);
function gameLoop(): void {
    let time = window.performance.now();
    let delta = time - lastTime;
    gameState.progressInput();
    gameState.update(time, delta);
    gameState.render();
    lastTime = time;
    requestAnimationFrame(gameLoop);
}
