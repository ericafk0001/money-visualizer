document.addEventListener("DOMContentLoaded", () => {
  const visualizeButton = document.getElementById("visualizeButton");

  visualizeButton.addEventListener("click", () => {
    const amount = document.getElementById("amount").value;
    const object = document.getElementById("object").value;
    const visualizationDiv = document.getElementById("visualization");
    visualizationDiv.innerHTML = "";

    let objectPrice;

    if (object === "penny") {
      objectPrice = 0.01;
    }

    const numberOfObjects = Math.floor(amount / objectPrice);

    for (let i = 0; i < numberOfObjects; i++) {
      const div = document.createElement("div");
      div.classList.add("object", object);
      visualizationDiv.appendChild(div);
    }
  });
});
