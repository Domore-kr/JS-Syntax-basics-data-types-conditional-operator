a = "random txt"

while (a != "q") {
    let n = Math.floor(Math.random() * 1000);
    console.log(n);
    a = prompt("Введите число")
    
    if (isNaN(a) == true) {
        alert("Вы ввели не целое число")
    } else if (a > n) {
        alert("Ваше число больше")
    } else if (a < n) {
        alert ("Ваше число меньше")
    }
}
