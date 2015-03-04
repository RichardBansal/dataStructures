function Queue(){
	this.head = 0;
	this.tail = 0;
	this.queue = [];
}


Queue.prototype.enqueue = function(obj){
	this.queue[this.tail] = obj;
	this.tail = this.tail + 1;
};

Queue.prototype.dequeue = function(){

	if (this.tail == this.head){return undefined;}

	var temp = this.head;
	this.head = this.head + 1;
	return this.queue[temp];
}

Queue.prototype.size = function(){
	return this.tail-this.head;
}