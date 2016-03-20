# javascript promise promise
## api知识点
*在nodeJs中, 规定回调函数中的参数第一个默认为err，如asyncfunc(callback(**err**, arguments)});* 
*不要对异步回调函数进行同步调用:
> ·	绝对不能对异步回调函数(即使在数据已经就绪)进行同步调用。 
> ·	如果对异步回调函数进行同步调用的话,处理顺序可能会与预期不 符,可能带来意料之外的后果。 
> ·	对异步回调函数进行同步调用,还可能导致栈溢出或异常处理错乱等 问题。 
> ·	如果想在将来某时刻调用异步回调函数的话,可以使用 **setTimeout** 等异步API。 
> .	— David Herman Effective JavaScript   

*promise chain的调用，会沿着链式不断传递，可以通过**return**传递参数，数不仅可以为复杂对象，包括promise；因为return会用**Promise.resolve()**包装，所以then返回的都是一个**Promise**对象

*Promise.catch 只是 promise.then(undefined, onRejected); 方 法的一个别名而已。
*使用Onreject和**catch**两种错误处理的方法的差异：前者无法捕获onfullfill里的错误，所以catch进行错误处理的方式更加的全面；然而当只想把promise变为reject状态的时候，应该调用Promise.reject方法，而不是throw一个错误；
* ECMA3 中, 保留字不能作为变量名或者属性名来使用; 而ECMA5可以作为属性名使用然而可以通过中括号标记法[‘属性名’]](#)来解决*
*then的错误用法: ([常见的promise反模式](http://taoofcode.net/promise-anti-patterns/ "常见promise反模式"))
	function badAsyncCall() {
		var promise = Promise.resolve(); promise.then(function(){
		// 任意处理
		return newVar;
		 });
		return promise; 
	}
	//正确
	function anAsyncCall() {
	var promise = Promise.resolve(); 
	return promise.then(function() {
	// 任意处理
	return newVar; });
	}
*偏函数: 使用bind,可以在调用函数的时候在原有的参数前添加参数
	function list() {
	  return Array.prototype.slice.call(arguments);
	}
	
	var list1 = list(1, 2, 3); // [1, 2, 3]
	
	// Create a function with a preset leading argument
	var leadingThirtysevenList = list.bind(undefined, 37);
	
	var list2 = leadingThirtysevenList(); // [37]
	var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
*Promise\#all: 用于多个异步操作都需要完成的情况, 参数传递的顺序决定返回的value的数组中的参数; 数组中的是同时执行的;
*primise\#race: 用于多个异步操作的场景, 当有任何一个resolve的时候, 就执行race的resolve, 其他的也不会受到影响, 会继续执行到完毕;

## promise的测试
*使用[mocha](http://mochajs.org/ "Mocha官网")测试框架, Mocha支持promise的测试*
*使用异步的测试的时候,使用的异步的方式,当测试失败的时候抛出的异常会被promsie捕获,所以框架一无所知,则测试会挂起,无法结束,所以应该在最后使用`then.(done, done)`的方法来结束测试*
*使用Mocha的框架则可以不调用done, 而是在it的函数中返回一个promise对象来解决上面的问题;*
*测试的时候采用`then(onfullfill, onreject)`比用`then(fulfill).catch(onrejec)`好, 原因是如果在fulfill的函数里出现的异常可以被框架捕获, 而不是进行on reject;*
*[promise-test-helper](https://github.com/azu/promise-test-helper) 用来使得测试代码更健全,而且测试代码更加直观的类库*
## Advanced 
### Promise的实现类库(Library) 
*

