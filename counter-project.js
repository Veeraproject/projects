let counter = 0;
        document.getElementById("value").innerHTML = counter;
        let increased = document.getElementById("increase");
        let decreased = document.getElementById("decrease");
        let reseted = document.getElementById("rese");
        increased.addEventListener("click", () => {
            counter = counter + 1;
            document.getElementById("value").innerHTML=counter;
            if (counter == 0) {
                document.getElementById("value").style.color = "black"
            }
            if (counter < 0) {
                document.getElementById("value").style.color = "red"
            }
            if (counter > 0) {
                document.getElementById("value").style.color = "green"
            }
        })
        decreased.addEventListener("click", () => {
            counter = counter - 1
            document.getElementById("value").innerHTML=counter;
            if (counter == 0) {
                document.getElementById("value").style.color = "black"
            }
            if (counter < 0) {
                document.getElementById("value").style.color = "red"
            }
            if (counter > 0) {
                document.getElementById("value").style.color = "green"
            }
            reseted.addEventListener("click",() =>{
                counter =0;
                document.getElementById("value").innerHTML=counter;
                document.getElementById("value").style.color="black"
            })
        })