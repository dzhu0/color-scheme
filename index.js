const url = "https://www.thecolorapi.com/scheme"

document.getElementById('get-btn').addEventListener('click', getColor)

function getColor() {
    const clean = document.getElementById('hex-color').value.replace('#', '')
    const mode = document.getElementById('mode').value

    fetch(`${url}?hex=${clean}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const html = getColorStripsHtml(data.colors)
            render(html)
        })
}

function getColorStripsHtml(colors) {
    return colors.map((color) => {
        return `
            <div>
                <div
                    class="color-strip"
                    style="background-color: ${color.hex.value};">
                </div>
                <p class="color-name">${color.hex.value}</p>
            </div>`
    }).join('')
}

function render(html) {
    document.getElementById('grid').innerHTML = html
}
