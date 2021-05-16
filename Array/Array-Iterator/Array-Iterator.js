var arr = ['a', 'b', 'c'];
var iterator = arr[Symbol.iterator]();
var letterResult = document.getElementById('letterResult');


for (var letter of iterator) {
  var li = document.createElement('LI');
  li.textContent = letter;
  letterResult.appendChild(li);
}