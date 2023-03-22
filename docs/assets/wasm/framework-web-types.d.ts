

  // GLOBAL FILE
declare class GlobalService {
	instance: GlobalService;
	loggerRecordsLimit: number;
	knowledgeRecordsLimit: number;
	arenaRecordsLimit: number;
	agentRecordsLimit: number;
	constructor(loggerRecordsLimit?: number, knowledgeRecordsLimit?: number, arenaRecordsLimit?: number, agentRecordsLimit?: number);
	static getInstance(): GlobalService;
	getLoggerRecordsLimit(): number;
	setLoggerRecordsLimit(value: number): void;
	getKnowledgeRecordsLimit(): number;
	setKnowledgeRecordsLimit(value: number): void;
	getArenaRecordsLimit(): number;
	setArenaRecordsLimit(value: number): void;
	getAgentRecordsLimit(): number;
	setAgentRecordsLimit(value: number): void;
}



  // HELPER FILE
declare type GUID = string;

//TODO: tipo GUID que aponta para string nao eh aceito pelo browser.
declare class Id {
  id: GUID;
  constructor(id: GUID);
}

declare class Helper {
  static genGuid(): string;
}

declare class StringCallback {
  name: string;
  callback: string;
  constructor(name: string, callback: string);
}

declare type StringCallbackList = any;

declare class Retorno {
  error: boolean;
  message: string;
  constructor(error?: boolean, message?: string);
}

declare type StringList = any;
declare type IntList = any;
declare type IdList = any;
declare type RetornoList = any;


  // LOGGER FILE

declare enum LogType {
	success,
	error,
	log,
	order
}

declare class Log {
	timestamp: Date;
	seqNumber: number;
	type: LogType;
	value: string;
	constructor(seqNumber?: number, value?: string, type?: LogType)

}

declare class Logger {
	logs: Log[];
	seqNumber: number;
	constructor(logs?: Log[]);
	insert(message: string, type: LogType): void;
	addLog(message: string): void;
	addError(message: string): void;
	addSuccess(message: string): void;
	destroyLogger(): void;
}

declare type LogList = any;



  // COMBUS FILE

declare class Message {
	id: GUID;
	type: LogType;
	dateTime: Date;
	message: string;
	author: string;
	constructor(message: string, author: string, type?: LogType);
	getStringPropValue(propName: string): string;
	MessagesToIds(arr: Message[]): GUID[];
	IndexOfById(arr: Message[], id: GUID): number;
}



declare class Action {
	name: string;
	constructor(name: string);
	getStringPropValue(propName: string): string;
	ActionsToNames(arr: Action[]): string[];
	IndexOfByName(arr: Action[], name: string): number;
	exec(message?: Message): void;

}

declare class Topic {
	name: string;
	author: string;
	subscribers: GUID[];
	messages: Message[];
	callbacks: Action[];
	constructor(name: string, author: string, subscribers?: GUID[], messages?: Message[], callbacks?: Action[]);
	addSubscriber(subscriberId: GUID, callback: Action): void;
	removeSubscriber(subscriberId: GUID): void;
	getOwnPropertyNames(): string[];
	getStringPropValue(propName: string): string;
	publishMessage(message: string, type?: LogType): void;
	publishSuccessMessage(message: string): void;
	publishErrorMessage(message: string): void;
	publishLogMessage(message: string): void;
	notifySubscribers(messageIdx: number): void
	notifySubscriber(messageIdx: number, subscriberIdx: number): void;
	readMessage(messageId: GUID): Message;
	readMessages(lastMsgReadId: GUID): Message[];
	destroyTopic(): void;
	TopicsToNames(arr: Topic[]): string[];
	IndexOfByName(arr: Topic[], name: string): number;		
}


declare class Combus {
	author: string;
	topics: Topic[];
	logger: Logger;
	constructor(author?: string, logger?: Logger, topics?: Topic[]);
	createTopic(name: string, subscribers?: GUID[], messages?: Message[], callbacks?: Action[]): boolean;
	createTopics(names: string[]): boolean;
	removeTopic(name: string): boolean;
	publishMessage(topic: string, message: string, type?: LogType): Retorno;
	publishErrorMessage(message: string): void;
	publishSuccessMessage(message: string): void;
	publishLogMessage(message: string): void;
	publishStateMessage(message: string): void;
	destroyCombus(): void;		
}

declare type ActionList = any;
declare type MessageList = any;
declare type TopicList = any;


  // AGENT FILE
declare class HashAgentStateInGame {
	agentId: GUID;
	constructor(agentId?: GUID);
	getOwnPropertyNames(): string[];
	getNumberPropValue(propName: string): number;
	setNumberPropValue(propName: string, value: number): void;
}

declare function getArrOrdered(arr: string[]): string[];
declare function genArrHash(arr: string[]): string;
declare function genStateHash(state: HashAgentStateInGame): string;
declare function joinHashes(arr: string[]): string;
declare function genHash(arr: string[], state: HashAgentStateInGame): string;

declare class Sense {
	constructor();
}

declare class ArenaPlan {
	arenaId: GUID;
	actionsSequence: string[];
	constructor(arenaId: GUID, actionsSequence?: string[]);
	getStringPropValue(propName: string): string;
	add(actionName: string): void;
	destroy(): void;
	ArenaPlanToArenaIds(arr: ArenaPlan[]): GUID[];
	IndexOfByArenaId(arr: ArenaPlan, id: GUID): number;
}

declare class ActionPlan {
	agentId: GUID;
	arenasPlan: ArenaPlan[];
	actions: Action[];
	combus: Combus;
	logger: Logger;
	constructor(actions?: Action[], arenasPlan?: ArenaPlan[]);
	build(agentId: GUID, combus: Combus, logger: Logger, actions?: Action[]): void;
	createActionPlan(arenaId: GUID, actionsSequence?: string[]): void;
	removeActionPlan(arenaId: GUID): void;
	addActionToActionPlan(arenaId: GUID, action: string): void;
	getActionPlanByArenaId(arenaId: GUID): ArenaPlan;
	getNextAction(arenaId: GUID): string;
	removeNextAction(arenaId: GUID): boolean;
	validateActionPlan(): boolean;
	validateActions(actionsName: string[]): boolean;
	validateAction(actionName: string): boolean;
	destroy(): void;
}

declare class PhysicalStructure {
	constructor();
	destroy(): void;
}

declare class GameState {
	constructor();
	destroy(): void;
}

declare class AgentStateInGame {
	agentId: GUID;
	constructor(agentId: GUID);
	getOwnPropertyNames(): string[];
	getStringPropValue(propName: string): string;
	getNumberPropValue(propName: string): number;
	AgentStateInGamesToAgentIds(arr: AgentStateInGame): GUID[];
	IndexOfByAGentId(arr: AgentStateInGame, id: GUID): number;
	destroy(): void;
}

declare class ActionInGame {
	agentId: GUID;
	actionName: string;
	constructor(agentId: GUID, actionName: string);
}

declare class Lesson {
	score: number;
	hash: string;
	actionSequence: string[];
	gameStateSequence: GameState[];
	agentStateSequence: AgentStateInGame[];
	constructor(hash: string, actionSequence?: string[], gameStateSequence?: GameState[], agentStateSequence?: AgentStateInGame[], score?: number);
	destroy(): void;
}

declare class GameKnowledgeState {
	idx: number;
	gameState: GameState;
	action: ActionInGame;
	agentsStates: AgentStateInGame[];
	constructor(gameState: GameState, agentsStates: AgentStateInGame[], action: ActionInGame, idx: number);
	destroy(): void;
}

declare enum AgentActionMode {
	observer,
	explorer,
	greedy
}

declare class GameKnowledge {
	arenaId: GUID;
	logger: Logger;
	gameKnowledgeStates: GameKnowledgeState[];
	lessons: Lesson[];
	weights: HashAgentStateInGame;
	arenaActions: string[];
	agentMode: AgentActionMode;
	constructor(
		arenaId: GUID,
		weights: HashAgentStateInGame,
		logger: Logger,
		agentMode?: AgentActionMode,
		gameKnowledgeStates?: GameKnowledgeState[],
		lessons?: Lesson[],
		arenaActions?: string[]
	);
	getStringPropValue(propName: string): string;
	GameKnowledgesToArenaIds(arr: GameKnowledge[]): GUID[];
	IndexOfByArenaId(arr: GameKnowledge[], id: GUID): number;
	getActionPlan(): string[]
	getBestActionFromLessons(): string[]
	updateWeights(weights: HashAgentStateInGame): void
	insertNewState(action: ActionInGame, gameState: GameState, agentsStates: AgentStateInGame[]): void;
	learnLessons7Degrees(agentId: GUID): void;
	learnLesson(actionSequence: string[], gameStateSequence: GameState[], agentStateSequence: AgentStateInGame[]): void;
	calculateScore(actionSequence: string[], gameStateSequence: GameState[], agentStateSequence: AgentStateInGame[]): number;
	cleanGameKnowledgeStatesSize(): void;
	destroy(): void;

}

declare class Knowledge {
	gameKnowledges: GameKnowledge[];
	logger: Logger;
	constructor(gameKnowledges?: GameKnowledge[]);
	build(logger: Logger): void;
	createKnowledge(arenaId: GUID, weights: HashAgentStateInGame, arenaActions: string[], agentMode: AgentActionMode): void;
	insertNewState(arenaId: GUID, action: ActionInGame, gameState: GameState, agentsStates: AgentStateInGame[]): void;
	getKnowledgeByArenaId(arenaId: GUID): GameKnowledge;
	destroy(): void;

}

declare class AgentState {
	energy: number;
	constructor(energy: number);
	destroyState(): void;
}


declare class Agent extends Id {
	state: AgentState;
	senses: Sense;
//	actionPlan: ActionPlan;
	physicalStructure: PhysicalStructure;
	knowledge: Knowledge;
	logger: Logger;
	combus: Combus;
	constructor(
	    actions?: Action[], 
	    knowledge?: Knowledge, 
	    state?: AgentState, 
	    senses?: Sense[], 
	    physicalStructure?: PhysicalStructure, 
	    actionPlan?: ActionPlan, 
	    logger?: Logger
	)
	build(): void; 
	getStringPropValue(propName: string): string;
	addLogErrorAndPublish(message: string): void ;
	addManyToActionPlan(arenaId: GUID, actionNames: string[]): void;
	addToActionPlan(arenaId: GUID, actionName: string): boolean; 
	insertNewStateOnKnowledge(arenaId: GUID, action: ActionInGame, gameState: GameState, agentsStates: AgentStateInGame[]): void;
	destroyAgent(): void;
	AgentsToIds(arr: Agent[]): GUID[];
	IndexOfById(arr: Agent[], id: GUID): number;
	getActionPlan(): ActionPlan;

}

declare type HashAgentStateInGameList = any;
declare type SenseList = any;
declare type ArenaPlanList = any;
declare type ActionPlanList = any;
declare type PhysicalStructureList = any;
declare type GameStateList = any;
declare type AgentStateInGameList = any;
declare type ActionInGameList = any;
declare type LessonList = any;
declare type GameKnowledgeStateList = any;
declare type GameKnowledgeList = any;
declare type KnowledgeList = any;
declare type AgentStateList = any;
declare type AgentList = any;


  // ARENA FILE
declare class ActionCallback {
	name: string;
	callback: Action;
	constructor(name: string, callback: Action);
} 
declare class ArenaService {
	constructor(arenas?: Arena[]);
	getInstance(): ArenaService;
	getArenaById(arenaId: GUID): Arena;
	getArenaStateById(arenaId: GUID): ArenaState;
	getAgentStateById(arenaId: GUID, agentId: GUID): AgentStateInArena;
	insertArena(arena: Arena): Retorno;
	removeArena(arenaId: GUID): Retorno;
}

declare class AgentService {
	constructor();
	getAgentById(agentId: GUID): Agent;
	insertAgent(Agent: Agent): Retorno;
	removeAgent(agentId: GUID): Retorno;
	static getInstance(): AgentService;
}

declare class ActionInArena {
	enabled: boolean;
	name: string;
	agentIdsEnabled: GUID[];
	arenaService: ArenaService;
	arenaId?: GUID;	
	logger: Logger;
	combus: Combus;
	constructor(name: string, enabled?: boolean, agentIdsEnabled?: GUID[]);
	build(arenaId: GUID, combus: Combus, logger: Logger): void;
	getStringPropValue(propName: string): string;
	ActionInArenasToNames(arr: ActionInArena[]): string[];
	IndexOfByName(arr: ActionInArena[], name: string): number;
	addAgent(agentId: GUID): void;
	isAgentSubscribed(agentId: GUID): boolean;
	removeAgent(agentId: GUID): boolean;
	canBeExec(agentId: GUID): boolean;
	execPipe(agentId: GUID): boolean;
	exec(agentId: GUID, agentState: AgentStateInArena, arenaState: ArenaState): boolean;
	publishTargetCombusMessage(type: LogType, targetId: GUID, message: string): void;
	destroyActionInArena(): void;
}


declare class AgentStateInArena {
	agentId: GUID;
	arenaId: GUID;
	constructor(agentId: GUID, arenaId: GUID);
	getState(): AgentStateInGame;
	getStringPropValue(propName: string): string;
	AgentStateInArenasToAgentIds(arr: AgentStateInArena[]): GUID[];
	IndexOfByAgentId(arr: AgentStateInArena[], id: GUID): number;
}


declare class ArenaState {
	arenaId: GUID;
	agents: GUID[];	
	agentStates: AgentStateInArena[];
	logger: Logger;
	combus: Combus;
	constructor(agents?: GUID[], agentStates?: AgentStateInArena[]);
	build(arenaId: GUID, logger: Logger, combus: Combus): void;
	getAgents(): GUID[];
	getState(): GameState;
	getAgentState(agentId: GUID): AgentStateInGame;
	getAllAgentsStates(): AgentStateInGame[];
	subscribeAgent(agentId: GUID): void;
	removeAgent(agentId: GUID): void;
	destroyArenaState(): void;
}


declare class Arena extends Id {
	state: ArenaState;
	logger: Logger;
	combus: Combus;
	agentActions: ActionInArena[];
	arenaActions: Action[];
	constructor(
		state?: ArenaState , 
		arenaActions?: Action[], 
		agentActions?: ActionInArena[],
		logger?: Logger
	);
	build(): void
	getStringPropValue(propName: string): string;
	ArenasToIds(arr: Arena[]): GUID[];
	IndexOfById(arr: Arena[], id: GUID): number;
	publishTargetCombusMessage(type: LogType, targetId: GUID, message: string): void;
	addLogErrorAndPublish(message: string): void;
	subscribeAgent(agentId: GUID, agentActions?: string[], topics?: ActionCallback[]): void;
	removeAgent(agentId: GUID): void;
	removeAllAgents(): void;
	subscribeAgentToTopics( agentId: GUID, topics?: ActionCallback[]): void;
	removeAgentFromTopics(agentId: GUID, topics?: string[]): void;
	removeAgentFromAllTopics(agentId: GUID): void;
	addAgentActions(agentId: GUID, agentActions?: string[]): void;
	removeAgentActions(agentId: GUID, agentActions?: string[]): void;
	removeAllAgentActions(agentId: GUID): void;
	getActions(): ActionInArena[];
	getStringActions(): string[];
	getTopics(): Topic[];
	getAgents(): GUID[];
	getState(): GameState;
	getAgentState(agentId: GUID): AgentStateInGame;
	getAllAgentsStates(): AgentStateInGame[];
	executeAgentAction(agentId: GUID, actionName: string): boolean;
	destroyArena(): void;
}


declare type ArenaList = any;
declare type ActionCallbackList = any;
declare type ActionInArenaList = any;
declare type AgentStateInArenaList = any;
declare type ArenaStateList = any;



  // ENGINE FILE

declare class EngineService {
	constructor();
	getInstance(): EngineService;
}

declare class EngineState {
	constructor();
	destroyState(): void;
}


declare class Event {
	constructor();
}


declare class Engine {
	state: EngineState;
	agents: Agent[];
	arenas: Arena[];
	logger: Logger;
	combus: Combus;
	arenaService: ArenaService;
	constructor();
	getAgents(): Agent[];
	getArenas(): Arena[];
	getAgent(agentId: GUID): Agent;
	getArena(arenaId: GUID): Arena;
	getTopics(): Topic[];
	publishCombusMessage(type: LogType, target: Id, message: string): void;
	addLogErrorAndPublish(message: string): void;
	subscribeAgent(agent: Agent, topics?: StringCallback[]): void;
	removeAgent(agentId: GUID): void;
	subscribeAgentToTopics(agent: Agent, topics?: StringCallback[]): void;
	unsubscribeTargetFromTopics(targetId: GUID, topics?: string[]): void;
	unsubscribeTargetFromAllTopics(targetId: GUID): void;
	subscribeArena(arena: Arena, topics?: StringCallback[]): void;
	removeArena(arenaId: GUID): void;
	subscribeArenaToTopics(arena: Arena, topics?: StringCallback[]): void;
	subscribeAgentIntoArena(agentId: GUID, arenaId: GUID, weights: HashAgentStateInGame, actions?: string[], topics?: StringCallback[], agentMode?: AgentActionMode): boolean;
	removeAgentFromArena(agentId: GUID, arenaId: GUID): void;
	subscribeAgentToAgentTopics(clientAgentId: GUID, producerAgentId: GUID, topics?: StringCallback[]): void;
	unsubscribeAgentFromAgentTopics(clientAgentId: GUID, producerAgentId: GUID, topics?: string[]): void;
	executeActionsInArena(arena: Arena): void;
	sendStateToAllAgents(arena: Arena, action: ActionInGame): void;
	sendStateToAgents(arena: Arena, action: ActionInGame, agentsId: GUID[]): void;
	executeAgentAction(agentId: GUID, arena: Arena): string;
	destroyEngine(): void;
}



export {

	GlobalService,

	GUID,
	Id,
	Helper,
	StringCallback,
	StringCallbackList,
	Retorno,
	StringList,
	IntList,
	IdList,
	RetornoList,

	LogType,
	Log,
	Logger,
	LogList,

	Message,
	Action,
	Topic,
	Combus,
	ActionList,
	MessageList,
	TopicList,

	HashAgentStateInGame,
	getArrOrdered,
	genArrHash,
	genStateHash,
	joinHashes,
	genHash,
	Sense,
	ArenaPlan,
	ActionPlan,
	PhysicalStructure,
	GameState,
	AgentStateInGame,
	ActionInGame,
	Lesson,
	GameKnowledgeState,
	AgentActionMode,
	GameKnowledge,
	Knowledge,
	AgentState,
	Agent,
	HashAgentStateInGameList,
	SenseList,
	ArenaPlanList,
	ActionPlanList,
	PhysicalStructureList,
	GameStateList,
	AgentStateInGameList,
	ActionInGameList,
	LessonList,
	GameKnowledgeStateList,
	GameKnowledgeList,
	KnowledgeList,
	AgentStateList,
	AgentList,


	ActionCallback,
	ArenaService,
	AgentService,
	ActionInArena,
	AgentStateInArena,
	ArenaState,
	Arena,
	ArenaList,
	ActionCallbackList,
	ActionInArenaList,
	AgentStateInArenaList,
	ArenaStateList,

	EngineService,
	EngineState,
	Event,
	Engine
}

//default FrameworkTypesNamespace;



