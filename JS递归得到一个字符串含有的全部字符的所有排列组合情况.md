## JS递归得到一个字符串含有的全部字符的所有排列组合情况
### Description:
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
example：
permutations('a'); // 'a'
permutations('ab'); // 'ab', 'ba'
permutations('aabb'); // 'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'
### 将采用递归的方法算出排列组合的可能
	function permutations(string) {
	  var arr = string.split(''), 
	  tmp = arr.slice(),  
	  heads = [], 
	  out  = [];
	  if(string.length == 1) return [string];
	  arr.forEach(function(v, i, arr) {
		if(heads.indexOf(v) == -1) {
		  heads.push(v);
		  tmp.splice(tmp.indexOf(v), 1);
		  permutations(tmp.join('')).forEach(function(w) {
			out.push(v + w);
	      }); //递归调用
		  tmp.push(v);
		}
	  });
	  return out;
	}


