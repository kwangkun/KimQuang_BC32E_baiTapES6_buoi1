const khoiLop1 = [];
const khoiLop2 = [];

const averageCal = (...scores) => {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]
    };
    return total / scores.length;
};

document.querySelector('#btnKhoi1').onclick = () => {
    let diemToan = Number(document.querySelector('#inpToan').value);
    let diemLy = Number(document.querySelector('#inpLy').value);
    let diemHoa = Number(document.querySelector('#inpHoa').value);

    let ketQua = averageCal(diemToan, diemLy, diemHoa);

    document.querySelector('#tbKhoi1').innerHTML = ketQua;
};

document.querySelector('#btnKhoi2').onclick = () => {
    let diemVan = Number(document.querySelector('#inpVan').value);
    let diemSu = Number(document.querySelector('#inpSu').value);
    let diemDia = Number(document.querySelector('#inpDia').value);
    let diemEng = Number(document.querySelector('#inpEnglish').value);

    let ketQua = averageCal(diemVan, diemSu, diemDia, diemEng);

    document.querySelector('#tbKhoi2').innerHTML = ketQua;
};