let bg = document.getElementById("bgColorInput");
let fc = document.getElementById("fontColorInput");
let fs = document.getElementById("fontSizeInput");
let fw = document.getElementById("fontWeightInput");
let pd = document.getElementById("paddingInput");
let br = document.getElementById("borderRadiusInput");
let cBtn = document.getElementById("customButton");

function apply() {
    let bgv = bg.value;
    let fcv = fc.value;
    let fsv = fs.value;
    let fwv = fw.value;
    let pdv = pd.value;
    let brv = br.value;

    cBtn.style.backgroundColor = bgv;
    cBtn.style.color = fcv;
    cBtn.style.fontSize = fsv;
    cBtn.style.fontWeight = fwv;
    cBtn.style.padding = pdv;
    cBtn.style.borderRadius = brv;

}