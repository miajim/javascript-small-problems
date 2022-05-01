/* 
Understand the Problem
  Inputs: two integers representing the ids of the elements
  Outputs: (none)
  Return values: `true` for valid swaps, `undefined` for invalid swaps

  Explicit Rules
    - function must take two element ids
    - nodes will have a value for the `id` attribute
    - two arguments will always be provided, however one or both arguments may not correspond to valid `id`s 
  Implicit Rules
    - cannot swap nodes if one is a child of the other
     - i.e., nodes must be siblings
    - arugments can be received in any order and still be swapped as long as they don't violate any of the rules

Examples/Test Cases
// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined

// one swap
> nodeSwap(1, 2);

// multiple swaps
> nodeSwap(3, 1);
> nodeSwap(7, 9);


Data Structures
- Input: integers, may be able to represent nodes as an array
- Rules: (none)

Algorithm
- obtain the nodes by their `id`
- if either node is invalid/does not exist, then return undefined right away
- otherwise (both nodes exist in the DOM)
  - check to see that the nodes are not descendants of one another
    - `Node.contains`
  - if they are, return `undefined`
  - if they aren't, then they must be siblings => perform the swap 
    - determine where the nodes are relative to one another in the list of siblings
      - e.g., for nodeSwap(3, 1)
        - node w/ id of 3 is the 3rd sibling, node w/ id of 1 is the second sibling in a list of 3 siblings
      - find the parent node of the nodes of interest
      - get the children of the parent nodes, convert list to an Array object
      - use array destructuring to swap the nodes of interest
        - determine the indicies of the nodes of interest in the list of child nodes
        - swap the nodes at the corresponding indicies
      - reassign the inner HTML of the parent node to the concatenated HTML of the child nodes
        - iterate over the array of child nodes concatenating their innerHTML to the innerHTML of the parent node
    - return true
Code
*/

function nodeSwap(node1, node2) {
  node1 = document.getElementById(node1);
  node2 = document.getElementById(node2);

  if ((!node1 || !node2) || (node1.contains(node2) || node2.contains(node1))) {
    return undefined;
  }
  
  let parent = node1.parentElement;
  let siblings = [...parent.children]
  let idx1 = siblings.indexOf(node1);
  let idx2 = siblings.indexOf(node2);
  
  [siblings[idx1], siblings[idx2]] = [siblings[idx2], siblings[idx1]];
  
  parent.innerHTML = '';

  siblings.forEach(sibling => parent.append(sibling));

  return true;
}

// invalid inputs, return `undefined`
// console.log(nodeSwap(1, 20)); 
// console.log(nodeSwap(1, 4));
// console.log(nodeSwap(9, 3));


// valid inputs, return `true`
console.log(nodeSwap(1, 2));
console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));