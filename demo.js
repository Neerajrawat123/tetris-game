document.body.onload = createTetrominoes;

function createTetrominoes(){ 
  let tetrominoes = document.getElementsByClassName("tetromino");

  for (var i = 0; i < tetrominoes.length; i++) {
    for (let j = 0; j < 4; j++){
      let newBlock = document.createElement("div");
      newBlock.className += "block";
      tetrominoes[i].appendChild(newBlock);
    }
  }
}