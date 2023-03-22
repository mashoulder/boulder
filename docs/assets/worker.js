
//import { Agent, AgentState } from './agent.js'
//importScripts('./agent.js');
//importScripts('./out-tsc/app/agent');

var AgentState = (function () {
    function AgentState(energy) {
        this.energy = energy;
    }
    ;
    return AgentState;
}());



var Agent =  (function () {

    function Agent(state) {
        this.state = state;
    }
    ;
    return Agent;
}());


self.Agent = Agent;
self.AgentState = AgentState;

var logArray = []

console.log = function(value)
{
    logArray.push(value);
};

self.formatArrayToMessage = function(arr) {
	var msg = '';
	if (arr.length > 0) {
		msg = arr[0];
		arr.shift();
	}
	arr.map( (item) => {
		msg = msg + "\n" + item;
	})
	return msg;
}

self.onmessage = function(e) {
	logArray = [];
	console.warn('Worker: Message received from main script');
	console.warn('e.data: ', e.data);
	//if (e.data && e.data !== '') {
		try {
			var r = eval(`${e.data}`);
			if (r && r !== '')
				logArray.push(r);
		}
		catch(e) {
			logArray.push(`${e.message}`);
		}
	//}

	console.warn('Worker: Posting message back to main script');
	//console.warn(`${formatArrayToMessage(logArray)}`);
	self.postMessage(`${self.formatArrayToMessage(logArray)}`);

}

//addEventListener('message', onmessage);

