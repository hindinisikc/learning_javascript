const container = document.querySelector("#container");

const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redparagraph = document.createElement("p");

redparagraph.classList.add("redparagraph");
redparagraph.textContent = "RED"
redparagraph.setAttribute("style", "color: red;");
container.appendChild(redparagraph);

const blueheader = document.createElement("h3");

blueheader.classList.add("blueheader");
blueheader.textContent = "BLUE"
blueheader.setAttribute("style", "color: blue;");
container.appendChild(blueheader);








document.addEventListener("DOMContentLoaded", function() {
    const containerTwo = document.createElement("div");

    containerTwo.id = "container-two";

    const headerOne = document.createElement("h1");

    headerOne.classList.add("header-one");
    headerOne.textContent = "I'm in a div"

    
    const para = document.createElement("p");

    para.classList.add("para-one");
    para.textContent = "ME TOO!";


    containerTwo.appendChild(headerOne);
    containerTwo.appendChild(para);
    document.body.appendChild(containerTwo);

    containerTwo.setAttribute("style", "border: 2px solid black; background: pink;")
});



