const spices = [{ name: "Paprika", spiceId: 1 }];

const containers = [
  {
    containerId: 101,
    spiceId: 1,
    brand: "McCormick",
    amount: "quarter",
    firstReminderHandled: false,
  },
  {
    containerId: 101,
    spiceId: 2,
    brand: "McCormick",
    amount: "quarter",
    firstReminderHandled: false,
  },
  {
    containerId: 101,
    spiceId: 3,
    brand: "McCormick",
    amount: "quarter",
    firstReminderHandled: false,
  },
  {
    containerId: 101,
    spiceId: 1,
    brand: "McCormick",
    amount: "quarter",
    firstReminderHandled: false,
  },
  {
    containerId: 101,
    spiceId: 15,
    brand: "McCormick",
    amount: "quarter",
    firstReminderHandled: false,
  },
];

//Accepts a spiceId and returns all containers associated with that spice.

function getContainersBySpiceId(spiceId) {
  const containerSpiceId = containers.filter(
    (container) => container.spiceId === spiceId,
  );
  return containerSpiceId;
}

getContainersBySpiceId(1);
