const url = "https://www.thecolorapi.com/scheme"

document.getElementById('get-btn').addEventListener('click', getColor)

function getColor() {
    const clean = document.getElementById('color-input').value.replace('#', '')
    const mode = document.getElementById('mode').value

    fetch(`${url}?hex=${clean}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('grid').innerHTML = getColorStripsHtml(data.colors)
        })
}

function getColorStripsHtml(colors) {
    return colors.map(color => {
        const { value } = color.hex
        return `
            <div>
                <div
                    class="color-strip"
                    style="background-color: ${value};">
                </div>
                <p class="color-name">${value}</p>
            </div>`
    }).join('')
}
