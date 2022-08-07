let htmlStr = "Hover Me!";

let chars = [...htmlStr];

const loadSpan = (arr) => {
    let value = '';
    for (let i = 0; i < arr.length; i++) {
        value += `
            <span>${arr[i]}</span>
        `
    };
    document.querySelector('.heading').innerHTML = value;
};

let ketQua = loadSpan(chars);