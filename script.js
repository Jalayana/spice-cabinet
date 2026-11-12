const spices = [{ name: "Paprika", spiceId: 1 }];

const containers = [
  {
    containerId: 101,
    spiceId: 1,
    brand: "McCormick",
    amount: "half",
    firstReminderHandled: false,
  },
  {
    containerId: 102,
    spiceId: 2,
    brand: "Dollar Tree",
    amount: "full",
    firstReminderHandled: false,
  },
  {
    containerId: 103,
    spiceId: 3,
    brand: "McCormick",
    amount: "half",
    firstReminderHandled: false,
  },
  {
    containerId: 104,
    spiceId: 1,
    brand: "Walmart",
    amount: "three-quarters",
    firstReminderHandled: false,
  },
  {
    containerId: 105,
    spiceId: 15,
    brand: "Walmart",
    amount: "empty",
    firstReminderHandled: false,
  },
];

//Gets all containers associated with the target spice ID
function getContainersBySpiceId(spiceId) {
  const matchingContainers = containers.filter(
    (container) => container.spiceId === spiceId,
  );
  return matchingContainers;
}

getContainersBySpiceId(1);

//Generate a container list for the detailed menu

function renderContainerList(containers) {
  const containerList = document.querySelector("#container-list");

  //Clear previously rendered containers
  containerList.innerHTML = "";

  //Build details for each container
  containers.forEach((container) => {
    const containerDetails = document.createElement("article");

    containerDetails.classList.add("container-item");
    containerDetails.setAttribute("data-container-id", container.containerId);

    const topRow = document.createElement("div");
    topRow.classList.add("top-row");
    const brandName = document.createElement("h4");
    brandName.textContent = container.brand;
    topRow.append(brandName);

    //Build dropdown menu
    const amountLabel = document.createElement("label");
    amountLabel.setAttribute("for", `amount-${container.containerId}`);
    amountLabel.textContent = "Amount Remaining: ";
    topRow.append(amountLabel);

    const amountDropDownMenu = document.createElement("select");
    amountDropDownMenu.id = `amount-${container.containerId}`;
    amountDropDownMenu.classList.add("amount-drop-down");

    const fullOption = document.createElement("option");
    fullOption.setAttribute("value", "full");
    fullOption.textContent = "Full";
    fullOption.selected = container.amount === "full";

    amountDropDownMenu.append(fullOption);

    const threeQuartersOption = document.createElement("option");
    threeQuartersOption.setAttribute("value", "three-quarters");
    threeQuartersOption.textContent = "3/4";
    threeQuartersOption.selected = container.amount === "three-quarters";

    amountDropDownMenu.append(threeQuartersOption);

    const halfOption = document.createElement("option");
    halfOption.setAttribute("value", "half");
    halfOption.textContent = "Half";
    halfOption.selected = container.amount === "half";

    amountDropDownMenu.append(halfOption);

    const quarterOption = document.createElement("option");
    quarterOption.setAttribute("value", "quarter");
    quarterOption.textContent = "1/4";
    quarterOption.selected = container.amount === "quarter";

    amountDropDownMenu.append(quarterOption);

    const emptyOption = document.createElement("option");
    emptyOption.setAttribute("value", "empty");
    emptyOption.textContent = "Empty";
    emptyOption.selected = container.amount === "empty";

    amountDropDownMenu.append(emptyOption);

    topRow.append(amountDropDownMenu);

    containerDetails.append(topRow);

    const bottomRow = document.createElement("div");
    bottomRow.classList.add("bottom-row");

    const addContainerButton = document.createElement("button");
    addContainerButton.setAttribute("type", "button");
    addContainerButton.classList.add("add-container-btn");
    addContainerButton.textContent = "+1";

    const removeContainerButton = document.createElement("button");
    removeContainerButton.setAttribute("type", "button");
    removeContainerButton.classList.add("remove-container-btn");
    removeContainerButton.textContent = "Remove";

    bottomRow.append(addContainerButton);
    bottomRow.append(removeContainerButton);

    containerDetails.append(bottomRow);
    containerList.append(containerDetails);
  });

  console.log(containerList);
}

renderContainerList(containers);

//Handle drop-down menu change
containerList.addEventListener("change", function (event) {
  if (event.target.classList.contains("amount-drop-down")) {
    const containerArticle = event.target.parentElement.parentElement;
    const containerId = Number(
      containerArticle.getAttribute("data-container-id"),
    );

    const containerToUpdate = containers.find(
      (container) => container.containerId === containerId,
    );

    containerToUpdate.amount = event.target.value;
  }
});
