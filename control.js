function saveCaretPosition(context){
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  range.setStart(  context, 0 );
  var len = range.toString().length;

  return function restore(){
    var pos = getTextNodeAtPosition(context, len);
    selection.removeAllRanges();
    var range = new Range();
    range.setStart(pos.node ,pos.position);
    selection.addRange(range);
  }
}

function getTextNodeAtPosition(root, index){
  const NODE_TYPE = NodeFilter.SHOW_TEXT;
  var treeWalker = document.createTreeWalker(root, NODE_TYPE, function next(elem) {
    if(index > elem.textContent.length){
      index -= elem.textContent.length;
      return NodeFilter.FILTER_REJECT
    }
    return NodeFilter.FILTER_ACCEPT;
  });
  var c = treeWalker.nextNode();
  return {
    node: c? c: root,
    position: index
  };
}

var code = document.getElementsByTagName('code')[0]; 

function lint() {
  Prism.highlightElement(code);
  const text = $('code').contents().filter(function() {
    return this.nodeType == Node.TEXT_NODE;
  }).text();
  // getDots()
}

function getDots() {
  const punctuations = document.getElementsByClassName('punctuation')
  var temp = 0
  for (punctuation of punctuations) {
    if (punctuation.innerHTML === '.') {
      punctuation.setAttribute('id', `dot${temp}`)
      temp ++ 
    }
  }
  const raw = document.querySelector('code').innerHTML
  var list = raw.split('</span>')
  // dotKeys(list)
  // console.log(list)
  
}

function dotKeys(list) {
  var temp = 0
  for (thing of list) {
    if (thing.slice(-1) === '.') {
      if (list[temp + 1].slice(0, 1) !== '<') {
        console.log(list[temp + 1])
      }
    }
    temp ++
    // console.log(thing.slice(-1))
  }
}

lint()