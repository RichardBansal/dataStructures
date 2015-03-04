function LinkedList(){
	this.head = undefined;
	this.tail = undefined;
}

LinkedList.prototype.addToTail = function(value){
	if((this.tail == undefined)&&(this.head === undefined)){
		this.tail = new Node(value);
		this.head = this.tail;
	}
	else{
		var old_tail  = this.tail;
		var new_tail = new Node(value);

		old_tail.next = new_tail;
		new_tail.previous = old_tail;
		new_tail.next = null;

		this.tail = new_tail;
		// debugger
	}
}

LinkedList.prototype.addToHead = function(value){
	if((this.tail == undefined)&&(this.head === undefined)){
		this.tail = new Node(value);
		this.head = this.tail;
	}
	else{
		var old_head  = this.head;
		var new_head = new Node(value);

		old_head.previous = new_head;
		new_head.next = old_head;
		new_head.previous = null;
		this.head = new_head;
	}

}

LinkedList.prototype.removeHead = function() {
	
	if(this.head === undefined){
		return undefined;
	}
	if(this.head === this.tail){
		var temp = this.head.value;
		this.head = undefined;
		this.tail = undefined;
		return temp;
	}
	else{
		var old_head = this.head;
		var new_head = old_head.next;
		new_head.previous = null;
		
		this.head = new_head;
		return old_head.value;
	}
};

LinkedList.prototype.removeTail = function(){
	if(this.tail === undefined){
		return undefined;
	}
	if(this.head === this.tail){
		var temp = this.tail.value;
		this.head = undefined;
		this.tail = undefined;
		return temp;
	}
	else{
		var old_tail = this.tail;
		var new_tail = old_tail.previous;
		new_tail.next = null;
		
		this.tail = new_tail;
		return old_tail.value;
	}
}

LinkedList.prototype.search = function() {};

function Node(value){
	this.next = null
	this.value = value
	this.previous = null
}