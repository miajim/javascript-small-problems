<script>
/*
generation: a set of elements that are on the same level of indentation
breadth first search?

N = 1
all the child nodes of body

N = 2 
all the grandhchildren of body


- call childNodes N times
  - call childNodes on each node in the new list
  - these node become the list on the next iteration
- on the Nth iteration change the class of the childNodes to .generation-color
*/

function colorGeneration(nGen) {
  let currentGen = (nGen > 0) ? [document.body] : [];

  for (let i = 0; i < nGen; i += 1) {
    currentGen = currentGen.flatMap(node => [].slice.call(node.children));
  }
  console.log(currentGen);
  currentGen.forEach(node => node.classList.add('generation-color'));
}


colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);

</script>