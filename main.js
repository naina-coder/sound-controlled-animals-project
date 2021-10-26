//https://teachablemachine.withgoogle.com/models/VJf9aF7On/


var dog = 0;
var cat = 0;
var bees = 0;
var cow = 0;


function StartClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VJf9aF7On/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);

    } else {
        console.log(results);
        Random_r = Math.floor(Math.random() * 255) + 1;
        Random_g = Math.floor(Math.random() * 255) + 1;
        Random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - " + dog + " Detected Cat - " + cat + " Detected Bees - " + bees + " Detected cow - " + cow;
        document.getElementById("detected").style.color = "rgb(" + Random_r + ", " + Random_g + ", " + Random_b + " )";

        document.getElementById("animal_sounds").style.color = "rgb(" + Random_r + ", " + Random_g + ", " + Random_b + " )";
        document.getElementById("animal_sounds").innerHTML = "Detected Voice is of - " + results[0].label;

        img = document.getElementById("default-img");

        if (results[0].label == "barking") {
            img.src = "WG8Q.gif"
            dog = dog + 1;
        }
         else if (results[0].label == "meowing") {
             img.src = "WG8Q.gif"
                cat = cat + 1;
            
        }

        else if (results[0].label == "buzzing") {
            img.src = "WG8Q.gif"
            bees = bees + 1;
        }

        else {
            img.src = "WG8Q.gif"
            cow = cow + 1;
        }
    }
}