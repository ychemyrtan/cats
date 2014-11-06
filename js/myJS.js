var numbersList = [5, 8, -10, 0, -45, 815, 78, 13, -9, -3];

document.getElementById('myBtn_1').addEventListener("click", function () {
    var negativeList = [];
    for (var i = 0; i < numbersList.length; i++) {
        if (numbersList[i] < 0) {
            negativeList.push(numbersList[i]);
        }
    }
    console.log(JSON.stringify(negativeList));
});


document.getElementById('myBtn').addEventListener("click", function () {
    var childrens = document.getElementById('images').children;
    for (var i = childrens.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = childrens[i].src;
        childrens[i].src = childrens[j].src;
        childrens[j].src = temp;
    }
});

