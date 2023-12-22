const colorArrays:Array<Array<string>> = [
    ["#590d22", "#800f2f", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#ffccd5", "#fff0f3"],
    ['#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'],
    ["#555b6e","#89b0ae","#bee3db","#faf9f9","#ffd6ba"],
    ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"],
    ["#fec5bb","#fcd5ce","#fae1dd","#f8edeb","#e8e8e4","#d8e2dc","#ece4db","#ffe5d9","#ffd7ba","#fec89a"],
    ["#d8f3dc","#b7e4c7","#95d5b2","#74c69d","#52b788","#40916c","#2d6a4f","#1b4332","#081c15"],
    ["#ff7b00","#ff9500","#ffaa00","#ffb700","#ffd000","#ffea00"],
    ["#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1"],
    ["#ecf8f8","#eee4e1","#e7d8c9","#e6beae","#b2967d"],
    ["#edc4b3","#deab90","#cd9777","#b07d62","#9d6b53","#774936"],
    ["#ffffff","#ffcad4","#b0d0d3","#c08497","#f7af9d"],
    ["#ffd6ff","#e7c6ff","#c8b6ff","#b8c0ff","#bbd0ff"],
    ["#e5f9e0","#a3f7b5","#40c9a2","#2f9c95","#664147"],
    ["#edd4b2","#d0a98f","#4d243d","#cac2b5","#ecdcc9"],
]

export default function generateRandomColorArray(){
    return colorArrays[Math.floor(Math.random()*colorArrays.length)];
}