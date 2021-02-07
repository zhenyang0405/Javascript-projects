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
let select;

// Algorithm to weight the prizes differently, to increase the difficulty to get 1st prize
function changeImageMulti() {
    document.getElementById('start-button').disabled = true;

    let generalSet = new Set();

    while (generalSet.size != 17) {
        let rand = Math.floor(Math.random() * 101);
        generalSet.add(rand);
    }

    let generalArr = Array.from(generalSet);
    let goldSilverArr = [generalArr.pop(), generalArr.pop()];
    let greenRedPinkArr = generalArr;
    let allArr = goldSilverArr.concat(greenRedPinkArr);

    if (allArr.includes(counter)) {
        if (goldSilverArr.includes(counter)) {
            let num = Math.floor(Math.random() * 2) + 1;
            document.getElementById('pic').src = eval(`img${num}`);
            image = eval(`img${num}`);            
            console.log(counter);
            counter++;
        } else {
            let num = Math.floor(Math.random() * 3) + 3;
            document.getElementById('pic').src = eval(`img${num}`);
            image = eval(`img${num}`);            
            console.log(counter);
            counter++;
        }
    } else {
        let num = Math.floor(Math.random() * 3) + 6;
        document.getElementById('pic').src = eval(`img${num}`);
        image = eval(`img${num}`);            
        console.log(counter);
        counter++;
    }

    if (counter == 100) {
        counter = 0;
    }    
}


// lucky draw is rolling
function luckyDraw() {
    rolling = setInterval(changeImageMulti, 10);
}


// Stop the lucky draw rolling.
function stopLuckyDraw() {
    clearInterval(rolling);

    if (image == img1) {
        document.getElementById('draw-result').innerHTML = '4 Boxes of AND';
        luckyDrawResult = '4 Boxes of AND';
        return luckyDrawResult;
    } else if (image == img2) {
        document.getElementById('draw-result').innerHTML = '2 Boxes of AND';
        luckyDrawResult = '2 Boxes of AND';
        return luckyDrawResult;
    } else if (image == img3) {
        document.getElementById('draw-result').innerHTML = 'Any 1 Product (SLM/AND/IM48)';
        select = selectedLucky();
        luckyDrawResult = 'Any 1 Product (SLM/AND/IM48)';
        return luckyDrawResult;
    } else if (image == img4) {
        document.getElementById('draw-result').innerHTML = 'Any 1 Product (SL/IM/PA/RF/GC)';
        select = selectedLucky();
        luckyDrawResult = 'Any 1 Product (SL/IM/PA/RF/GC)';
        return luckyDrawResult;
    } else if (image == img5) {
        document.getElementById('draw-result').innerHTML = 'Any 1 Product (Aurage CP/Aurage UVMB)';
        select = selectedLucky();
        luckyDrawResult = 'Any 1 Product (Aurage CP/Aurage UVMB)';
        return luckyDrawResult;
    } else if (image == img6) {
        document.getElementById('draw-result').innerHTML = '5 Bottles of AND';
        luckyDrawResult = '5 Bottles of AND';
        return luckyDrawResult;
    } else if (image == img7) {
        document.getElementById('draw-result').innerHTML = '1 Bottle of AND';
        luckyDrawResult = '1 Bottle of AND';
        return luckyDrawResult;
    } else {
        document.getElementById('draw-result').innerHTML = '3 IZUMIO pouches';
        luckyDrawResult = '3 IZUMIO pouches';
        return luckyDrawResult;
    }
}


// Selected prizes that need option
function selectedLucky() {
    document.getElementById('luckyChoice').style.display = 'inline-block';
    document.getElementById('luckySelect').style.display = 'inline-block';

    let select = document.getElementById('luckySelect');
    // let text = select.options[select.selectedIndex].text;

    if (image == img3) {
        let options = ['SLM', 'AND', 'IM48'];

        options.forEach(function(element, key) {
            select[key] = new Option(element, key);
        })
    } else if (image == img4) {
        let options = ['SL', 'IM', 'PA', 'RF', 'GC'];

        options.forEach(function(element, key) {
            select[key] = new Option(element, key);
        })
    } else if (image == img5) {
        let options = ['Aurage CP', 'Aurage UVMB'];

        options.forEach(function(element, key) {
            select[key] = new Option(element, key);
        })
    }
    
    return select;
}