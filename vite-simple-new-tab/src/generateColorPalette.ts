const colorArrays:Array<Array<string>> = [
    ["#590d22", "#800f2f", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#ffccd5", "#fff0f3"],
    ['#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'],
    ["#555b6e","#89b0ae","#bee3db","#faf9f9","#ffd6ba"],
    ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"],
    ["#fec5bb","#fcd5ce","#fae1dd","#f8edeb","#e8e8e4","#d8e2dc","#ece4db","#ffe5d9","#ffd7ba","#fec89a"],
    ["#d8f3dc","#b7e4c7","#95d5b2","#74c69d","#52b788","#40916c","#2d6a4f","#1b4332","#081c15"],
    ["#006466","#065a60","#0b525b","#144552","#1b3a4b","#212f45","#272640","#312244","#3e1f47","#4d194d"],
]

export default function generateRandomColorArray(){
    return colorArrays[Math.floor(Math.random()*colorArrays.length)];
}