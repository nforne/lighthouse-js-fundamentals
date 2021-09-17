// there are only four types ["north y+1", "south y-1", "east x+1", "west x-1" ] of moves and each is 1 step
// finalPosition = [x,y]
const finalPosition = function(moves) {
  const finalPosition = [0,0]; // starting point
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      finalPosition[1] += 1;
    } else if (moves[i] === "south") {
      finalPosition[1] -= 1;
    } else if (moves[i] === "east") {
      finalPosition[0] += 1;
    } else {
      finalPosition[0] -= 1;
    } 
  }
  return finalPosition
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);