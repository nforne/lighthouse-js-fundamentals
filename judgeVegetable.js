function judgeVegetable(vegetables, metric) {
  // array = array of objects
  // xtic = characteristic redness or plumpness
  let submitter = "?";
  let rCheck = []; // for redness
  let pCheck = []; // for plumpness
  for (let i = 0; i < vegetables.length; i++) {
    rCheck.push(vegetables[i].redness);
    pCheck.push(vegetables[i].plumpness);  
  }
  let theBestR = (rCheck.sort( function(a, b) { return a - b } ))[rCheck.length - 1]; // to pick out the highest redness value
  let theBestP = (pCheck.sort( function(a, b) { return a - b } ))[pCheck.length - 1]; // to pick out the highest plumpness value  
  // to sort out who's behind the best value
  for (let i = 0; i < vegetables.length; i++) {
    if (metric === Object.keys(vegetables[i])[1] && vegetables[i].redness === theBestR){
      submitter = vegetables[i].submitter;
    } else if (metric === Object.keys(vegetables[i])[2] && vegetables[i].plumpness === theBestP){
      submitter = vegetables[i].submitter;
    } else {
      continue;
    }
  }
  return submitter;
}

// example1

let vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]

let metric = 'd'
console.log(judgeVegetable(vegetables, metric));

// expect(result).to.equal('C')



// example2

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));

// expect(result).to.equal('Old Man Franklin')
