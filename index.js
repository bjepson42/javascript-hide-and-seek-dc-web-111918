
function getFirstSelector(selector){
  //debugger;
  return document.querySelector(selector);
};

function nestedTarget(){
 return document.querySelector('#nested .target');

};

function deepestChild(){
  let node = document.querySelector('#grand-node');
  let nextNode = node;
  while (nextNode) {
      node = nextNode;
      nextNode = node.children[0];
  };
  return node;
};

function increaseRankBy(n){
  const rankedListsElements = document.getElementsByClassName('ranked-list');
  for (let i = 0, j = rankedListsElements.length; i < j; i++){
    let rankedListsChildren = rankedListsElements[i].children;
    for(let k = 0, l = rankedListsChildren.length; k < l; k++){
      rankedListsChildren[k].innerHTML = parseInt(rankedListsChildren[k].innerHTML) + n;
    };
  };
};
