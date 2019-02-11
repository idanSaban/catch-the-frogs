const Renderer = () => {
    const renderFrogs = (frogs) => {
        $("#game").empty();
        if (frogs)
        {
            for (frog of frogs)
            {
                let output = `<i data-id="${frog.id}" class="fas fa-frog" style="position:absolute;left:${frog.position.x}%;top:${frog.position.y}%;color:${frog.color};font-size:${frog.size}px" ></i>`;
                $("#game").append(output);
            }
        }

        $("#level").text(`LEVEL ${game.getLevel()}`);
        $("#frogsLeft").text(`${game.getFrogsLeft()} FROGS LEFT!`);
        $("#start").text("START");
    }

    const gameOver = () => {
        $("#game").empty();
        $("#header").empty();
        $("#start").text("TRY AGAIN!");
    }

    return {
        renderFrogs,
        gameOver
    }
}

