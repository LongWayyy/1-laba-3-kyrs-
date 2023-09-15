# lab--1
<p></p>

<h2 align="center">ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ <br> «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ» <br> КАФЕДРА ИНФОРМАТИКИ </h2>
<p align="center">Лабораторная работа 1 <br>
по предмету «Web-технологии, языки и средства создания web-приложений» 

<p align="center"><b>"Java Script"</b><p>
<p align="right"><b>Выполнил: </b> студент 331 группы Хорошко Илья Алексеевич</p>
<p  align="right"><b>Проверил: </b> Соболев Е. И., старший преподователь</p>
<br>
<br>
<br>
<p align="center">Южно-Сахалинск <br> СахГУ <br> 2023</p>
<h2> Введение </h2>
<p>Лабораторные работы по дисциплине «Web-технологии, языки и средства создания web-приложений» предназначены для освоения полученных теоретических знаний на практике. <br>
<h2 align="center">Цели и задачи</h2>
1.	Создайте переменную str и присвойте ей значение 'hdfgv'. Обращаясь к отдельным символам этой строки выведите на экран символ 'h', символ 'd', символ 'v'.
2.	Напишите скрипт, который считает количество секунд в часе.
3.	Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);

4.	Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
5.	Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
6.	Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
7.	Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
8.	Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
9.	Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
10.	Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
11.	Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
12.	Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
13.	Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
14.	Какое будет выведено значение: let x = 5; alert(x++); ?
15.	Чему равно такое выражение: [ ] + false - null + true ?
16.	Что выведет этот код: let y = 1; let x = y = 2; console.log(x); ?
17.	Чему равна сумма [ ] + 1 + 2?
18.	Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
5 % 3,
3 % 5,
5 + '3',
'5' - 3,
75 + 'кг'
19.	Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.
20.	Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.
21.	Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.
22.	Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true». При помощи оператора определения типа убедитесь, что переменных принадлежат типам: string, number, boolean.
23.	Дано число, необходимо вернуть противоположное чиcло
    <h2 align="center">Решение задач</h2>
    
```javascript
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
    var summakvadratkornei = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + Math.sqrt(num), 0);  //filter - фильтрует чётны а reduce - суммирует результаты фильтрации
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
```
  <h2 align="center">Вывод</h2>
В ходе лабораторной работы были изучены элементы языка Java script и  рассмотрены способы решения разного вида задач.
