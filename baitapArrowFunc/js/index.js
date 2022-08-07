const colorPallete = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const loadColorPallete = (arr) => {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += `
        <button class="color-button ${arr[i]}" onclick="toggleClass('${arr[i]}')"></button>
        `
    };
    return res;
};

const res = loadColorPallete(colorPallete);

document.querySelector('#colorContainer').innerHTML = res;

const toggleClass = (value) => {
    document.querySelector('#house').classList = "house " + value;
};