const Renderer = () => {
    const renderFrogs = (frogs) => {
        for (frog of frogs) {
            let output = `<i class="fas fa-frog" style="position:relative;left:${frog.position.x}px;top:${frog.position.y}px;color:${frog.color};font-size:${frog.size}px" ></i>`
            console.log(output)
            $("#game").append(output)
        }
    }
    return {
        renderFrogs: renderFrogs
    }
}