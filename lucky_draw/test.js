const img1 = "./images/1_gold.png";
const img2 = "./images/2_silver.png";
const img3 = "./images/3_green.png";
const img4 = "./images/4_red.png";
const img5 = "./images/5_pink.png";
const img6 = "./images/6_blue.png";
const img7 = "./images/7_yellow.png";
const img8 = "./images/8_white.png";
let image = img1;
let rolling;
let luckyDrawResult;
let counter = 0;


function changeImage() {
    if (image == img1) {
        document.getElementById('pic').src = img2;
        image = img2;
    } else if (image == img2){
        document.getElementById('pic').src = img3;
        image = img3;
    } else if (image == img3) {
        document.getElementById('pic').src = img4;
        image = img4;
    } else if (image == img4) {
        document.getElementById('pic').src = img5;
        image = img5;
    } else if (image == img5) {
        document.getElementById('pic').src = img6;
        image = img6;
    } else if (image == img6) {
        document.getElementById('pic').src = img7;
        image = img7;
    } else if (image == img7) {
        document.getElementById('pic').src = img8;
        image = img8;
    } else {
        document.getElementById('pic').src = img1;
        image = img1;
    }
}

function changeImageMulti() {
    document.getElementById('start-button').disabled = true;
    const prime = [7, 11, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 97];
    const fibonacci = [1, 2, 5, 8, 13, 21, 34, 55, 89];

    let goldSilverSet = new Set();
    let greenRedPinkSet = new Set();

    while (goldSilverSet.size != 2) {
        let rand = fibonacci[Math.floor(Math.random() * fibonacci.length)];
        goldSilverSet.add(rand);
    }

    while (greenRedPinkSet.size != 15) {
        let rand = prime[Math.floor(Math.random() * prime.length)];
        greenRedPinkSet.add(rand)
    }

    let goldSilverArr = Array.from(goldSilverSet);
    let greenRedPinkArr = Array.from(greenRedPinkSet);
    let allArr = goldSilverArr.concat(greenRedPinkArr);

    if (allArr.includes(counter)) {
        if (goldSilverArr.includes(counter)) {
            let num = Math.floor(Math.random() * 1) + 1;
            document.getElementById('pic').src = eval(`img${num}`);
            image = eval(`img${num}`);            
            console.log(counter);
            counter++;
        } else {
            let num = Math.floor(Math.random() * 2) + 3;
            document.getElementById('pic').src = eval(`img${num}`);
            image = eval(`img${num}`);            
            console.log(counter);
            counter++;
        }
    } else {
        let num = Math.floor(Math.random() * 2) + 6;
        document.getElementById('pic').src = eval(`img${num}`);
        image = eval(`img${num}`);            
        console.log(counter);
        counter++;
    }

    if (counter == 100) {
        counter = 0;
    }    
}

function luckyDraw() {
    rolling = setInterval(changeImageMulti, 10);
}

function stopLuckyDraw() {
    clearInterval(rolling);
    document.getElementById('start-button').disabled = true;

    if (image == img1) {
        document.getElementById('draw-result').innerHTML = '4 Boxes of AND';
        luckyDrawResult = '4 Boxes of AND';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    } else if (image == img2) {
        document.getElementById('draw-result').innerHTML = '2 Boxes of AND';
        luckyDrawResult = '2 Boxes of AND';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    } else if (image == img3) {
        document.getElementById('draw-result').innerHTML = 'Any 1 Product (SLM/AND/IM48)';
        luckyDrawResult = 'Any 1 Product (SLM/AND/IM48)';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    } else if (image == img4) {
        document.getElementById('draw-result').innerHTML = 'Any 1 Product (SL/IM/PA/RF/GC)';
        luckyDrawResult = 'Any 1 Product (SL/IM/PA/RF/GC)';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    } else if (image == img5) {
        document.getElementById('draw-result').innerHTML = 'Any 1 Product (Aurage CP/Aurage UVMB)';
        luckyDrawResult = 'Any 1 Product (Aurage CP/Aurage UVMB';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    } else if (image == img6) {
        document.getElementById('draw-result').innerHTML = '5 Bottles of AND';
        luckyDrawResult = '5 Bottles of AND';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    } else if (image == img7) {
        document.getElementById('draw-result').innerHTML = '1 Bottle of AND';
        luckyDrawResult = '1 Bottle of AND';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    }else if (image == img8) {
        document.getElementById('draw-result').innerHTML = '3 IZUMIO pouches';
        luckyDrawResult = '3 IZUMIO pouches';
        console.log(luckyDrawResult);
        return luckyDrawResult;
    }
}