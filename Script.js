
function zadacha1() {
    var str = 'hdfgv';
    console.log(str[0]); //  h
    console.log(str[1]); //  d
    console.log(str[4]); //  v
  }
  

  function zadacha2() {
    var secondsInHour = 60 * 60;
    console.log(secondsInHour); 
  }
  

  function zadacha3() {
    var num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num++;
    num--;

    console.log(num); // 1 
  }
  

  function zadacha4() {
    var num = 3;
  
    console.log(num)//3
  }
  

  function zadacha5() {
    var a = 10;
    var b = 2;
    console.log(a + b); //  12
    console.log(a - b); //  8
    console.log(a * b); //  20
    console.log(a / b); //  5
  }
  

  function zadacha6() {
    var c = 15;
    var d = 2;
    var result = c + d;
    console.log(result); //  17
  }
  
 
  function zadacha7() {
    var a = 10;
    var b = 2;
    var c = 5;
    console.log(a + b + c); //17
  }
  

  function zadacha8() {
    var a = 17;
    var b = 10;
    var c = a - b;
    var d = 7;
    var result = c + d;
    console.log(result); // 14
  }
  
 
  function zadacha9() {
    var secondsInHour = 60 * 60;
    var secondsInDay = secondsInHour * 24;
    var secondsInMonth = secondsInDay * 30;
    console.log('в часу ' + secondsInHour);
    console.log('в сутках: ' + secondsInDay);
    console.log('в месяце: ' + secondsInMonth);
  }
  
 
  function zadacha10() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    console.log('сейчас: ' + hour + ':' + minute + ':' + second);
  }
  
  function zadacha11() {
    var num = 5;
    var squared = num * num;
    console.log('квадрат ' + num + ' равен ' + squared);
  }
  
 
  function zadacha12() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var summakvadratkornei = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + Math.sqrt(num), 0);
    console.log(summakvadratkornei);
  }
  
  
  function zadacha13() {
    var apple = 1.15;
    var orange = 2.30;
    var summa = applePrice + orangePrice;
    console.log(summa);
  }
  
  
  function zadacha14() {
    let x = 5;
    console.log(x++) 
  }
  
 
  function zadacha15() {
    console.log([] + false - null + true); //  NaN (не число)
  }
  
  
  function zadacha16() {
    let y = 1;
    let x = y = 2;
    console.log(x);
  }
  
 
  function zadacha17() {
    console.log([] + 1 + 2); // конкатенация 
  }
  
  
  function zadacha18() {
    var a6 = 5 % 3; 
    var a7 = 3 % 5; 
    var a8 = 5 + '3'; 
    var a9 = '5' - 3; // 2
    var a10 = 75 + 'кг'; // "75кг"
    console.log('a6:', a6);// 2
    console.log('a7:', a7);// 3
    console.log('a8:', a8);// "53"
    console.log('a9:', a9);//2
    console.log('a10:', a10);// "75 кг"
  }
  
 
  function zadacha19() {
    var height = 23; 
    var width = 10; 
    var s = height * width; 
    console.log('площадь: ' + s);
  }
  
 
  function zadacha20() {
    var heightC = 10; //  метры
    var dC = 4; //  метры
    var r = dC / 2;
    var v = Math.PI * r * r * heightC;
    console.log('обьем: ' + v );
  }
  

  function zadacha21() {
    var S = 2000000; 
    var p = 0.10; // процент (10%)
    var years = 5; 
    var pereplata= S * p * years; // сумма 
    console.log(pereplata);
  }
  
  
  function zadacha22() {
    var str = "Привет";
    var num = 123;
    var flag = true;
    var txt = "true";
  
    console.log('str: ' + typeof str);
    console.log('num: ' + typeof num);
    console.log('flag: ' + typeof flag);
    console.log('txt: ' + typeof txt);
  }
  
  
  function zadacha23(number=5) {
    console.log(-number);
  }
  

  