// stations = [[name, capacity, venue]]

function chooseStations(stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations.push(stations[i][0]);
    }
  };
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

/*const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations.push(stations[i][0])
    }
  }
  return goodStations;
}*/