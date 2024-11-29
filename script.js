document.addEventListener("DOMContentLoaded", () => {
  const visualizeButton = document.getElementById("visualizeBtn");

  visualizeButton.addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.querySelector("input[type='number']").value;
    const object = document.getElementById("object").value;
    const visualizationDiv = document.getElementById("amount-div");
    visualizationDiv.innerHTML = "";

    let objectPrice;

    if (object === "penny") {
      objectPrice = 0.01;
    } else if (object === "nickel") {
      objectPrice = 0.05;
    } else if (object === "dime") {
      objectPrice = 0.1;
    } else if (object === "quarter") {
      objectPrice = 0.25;
    } else if (object === "porsche911gt3rs") {
      objectPrice = 241300;
    } else if (object === "apple") {
      objectPrice = 2.4;
    } else if (object === "boba") {
      objectPrice = 5.25;
    } else if (object === "wiessmann") {
      objectPrice = 1000000;
    } else if (object === "minecraft") {
      objectPrice = 30;
    }

    const numberOfObjects = Math.floor(amount / objectPrice);

    for (let i = 0; i < numberOfObjects; i++) {
      const div = document.createElement("div");
      div.classList.add("object", object);
      visualizationDiv.appendChild(div);
    }
  });
});
