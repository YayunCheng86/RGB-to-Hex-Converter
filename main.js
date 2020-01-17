const body = document.querySelector('body')
const panel = document.querySelector('.panel')
const redSlider = document.querySelector('.R-slider')
const greenSlider = document.querySelector('.G-slider')
const blueSlider = document.querySelector('.B-slider')
const RColorValue = document.querySelector('.R-color-value')
const GColorValue = document.querySelector('.G-color-value')
const BColorValue = document.querySelector('.B-color-value')
const hexCode = document.querySelector('#Hex-color-code')

// 監聽RGB slider 
panel.addEventListener('change', e => {
    const rgbSlider = [redSlider, greenSlider, blueSlider]
    rgbSlider.forEach(item => item.nextElementSibling.innerHTML = item.value)
    let rgbCode = '#' + RGBContainer().join('')
    body.style.backgroundColor = rgbCode
    hexCode.innerHTML = rgbCode

})


function RGBContainer() {    // (controller)把輸入內容整合到array後，再轉換成hexadecimal 
    const rgbSlider = [redSlider, greenSlider, blueSlider]
    let RGB = []
    rgbSlider.forEach(item => {
        RGB.push(item.value)    // 把user的input value 塞進RGB array
    })
    RGB = hexConverter(RGB)
    return RGB
}

function hexConverter(arr) {    // (view) 把input value 轉換成 hex number
    let newArr = arr.map(item => {
        if (Number(item).toString(16).length < 2) return '0' + Number(item).toString(16)
        else return Number(item).toString(16)
    })
    return newArr
}