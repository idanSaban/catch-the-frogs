const game = Game();
const render = Renderer();

$("body").on("click", ".fa-frog", function () {
    const frogID = $(this).data().id;
    game.removeFrog(frogID);
    render.renderFrogs(game.getFrogs());
})

const start = function () {
    game.newLevel();
    let timeout = game.getTimeOut();
    let seconds = timeout;
    render.renderFrogs(game.getFrogs());
    $("#header").text(`${seconds} Seconds left`);
    const timeDown = () => {
        seconds--;
        $("#header").text(`${seconds} Seconds left`);
        if (game.getFrogsLeft() == 0) {
            clearInterval(Countdown);
            alert("GET READY FOR NEXT LEVEL!");
            return start();
        } else if (seconds <= 0) {
            clearInterval(Countdown);

            return gameOver();
        }
    }

    const Countdown = setInterval(timeDown, 1000);

    const gameOver = () => {
        alert("Game Over");
        game.reset();
        render.renderFrogs();
        render.gameOver();
    }
}

$("#start").on("click", start);
