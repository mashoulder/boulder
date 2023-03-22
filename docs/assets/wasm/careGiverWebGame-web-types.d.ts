import { 	
	GlobalService,

	GUID,
	Id,
	Helper,
	StringCallback,
	Retorno,

	LogType,
	Log,
	Logger,


	Message,
	Action,
	Topic,
	Combus,


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


	ActionCallback,
	ArenaService,
	AgentService,
	ActionInArena,
	AgentStateInArena,
	ArenaState,
	Arena,


	EngineService,
	EngineState,
	Event,
	Engine 

} from "./framework-web-types";

import { WebAction, WebAgent, WebArena } from "./interface-framework-web-types";


  // CAREARENA FILE

declare class WeightsAgentStateInCareArena extends HashAgentStateInGame {
	energy: number;
	mental: number;
	physical: number;
	constructor(agentId: GUID, energy: number, mental: number, physical: number);
}

declare class AgentStateInCareGame extends AgentStateInGame {
	energy: number;
	mental: number;
	physical: number;
	constructor(agentId: GUID, energy: number, mental: number, physical: number);
}

declare class AgentStateInCareArena extends AgentStateInArena {
	energy: number;
	mental: number;
	physical: number;
	constructor(agentId: GUID, arenaId: GUID, mental?: number, physical?: number, energy?: number);
	getState(): AgentStateInCareGame;
}

declare class CareArenaState extends ArenaState {
	food: number;
	water: number;
	constructor(
		food: number,
		water: number,
		agents?: GUID[],
		agentStates?: AgentStateInCareArena[]
	)
	subscribeAgent(agentId: GUID): void;
	getAgentStatesPtr(): AgentStateInCareArena[];
}

declare class CareArena extends WebArena {
//	state: CareArenaState;
	constructor(
		HTMLelementId: number,
		state?: CareArenaState, 
		arenaActions?: Action[], 
		agentActions?: ActionInCareArena[],
		logger?: Logger
	)
	getArenaStatePtr(): CareArenaState;
}

declare class ActionInCareArena extends ActionInArena {
	constructor(
		name: string,
		enabled?: boolean,
		agentIdsEnabled?: GUID[]
	)
}


declare class EatActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class DrinkActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}

declare enum WorkType {
	laboral,
	mental,
	spiritual,
	creative,
	compulsory,
	safety,
	caregiving
}
declare class WorkActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean, workType: WorkType);
}
declare class ReadActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}

declare class StudyActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class PetActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class TravelActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class ListenRadioActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class WatchTvActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class HangoutActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class DiscussionActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class ChatActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}

declare enum PlayType {
	table,
	field,
	board
}
declare class PlayActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean, playType: PlayType);
}

declare enum ExerciseType {
	walk,
	run,
	jump,
	weightlift,
	dance
}



declare class ExerciseActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean, exerciseType: ExerciseType);
}

declare class PrayActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}

declare class PoisonActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class BurnActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class ChokeActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}
declare class FallActionInCareArena extends ActionInCareArena {
	constructor(name: string, enabled: boolean);
}





  // CARE AGENT FILE

declare class CareAgent extends WebAgent {
	constructor(HTMLelementId: number, actionsName: string[])
//	createActions(HTMLelementId: number, agentActions: string[]): Action[];
}

  // CARE PATIENT FILE

declare class CareGameKnowledge extends GameKnowledge {
	constructor(arenaId: GUID, weights: HashAgentStateInGame, logger: Logger, agentMode?: AgentActionMode, gameKnowledgeStates?: GameKnowledgeState[], lessons?: Lesson[], arenaActions?: string[]);
	getActionPlan(): string[];
}

declare class CareKnowledge extends Knowledge {
	constructor(gameKnowledges?: GameKnowledge[]);
	createKnowledge(arenaId: GUID, weights: HashAgentStateInGame, arenaActions: string[], agentMode: AgentActionMode): void;
}



declare type AgentStateInCareGameList = any;
declare type AgentStateInCareArenaList = any;
declare type ActionInCareArenaList = any;

declare class CareArenaService extends ArenaService {
	constructor();
	getArenaById(arenaId: GUID): CareArena;
	insertArena(arena: CareArena): Retorno;
	removeArena(arenaId: GUID): Retorno;
	static getInstance(): CareArenaService;
}

declare class CareAgentService extends AgentService {
	constructor();
	getAgentById(agentId: GUID): CareAgent;
	insertAgent(CareAgent: CareAgent): Retorno;
	removeAgent(agentId: GUID): Retorno;
	static getInstance(): CareAgentService;
}

  // CARE ENGINE FILE
declare class CareEngine extends Engine {
	constructor();
	subscribeAgentToAgentTopics(clientAgentId: GUID, producerAgentId: GUID, topics: StringCallback[]): void;
	createAgentTopic(agentId: GUID, topicName: string): boolean;
	agentAddToActionPlan(agentId: GUID, arenaId: GUID, actionName: string): boolean;
	getAgentNextAction(agentId: GUID, arenaId: GUID): string;
	getArenaActions(arenaId: GUID): string[];
	publishAgentCombusMessage(agentId: GUID, topicName: string, message: string, logType: LogType): Retorno;
}

export {
	WeightsAgentStateInCareArena,
	AgentStateInCareGame,
	AgentStateInCareArena,
	CareArenaState,
	CareArena,
	ActionInCareArena,
	WorkType,
	EatActionInCareArena,
	DrinkActionInCareArena,
	WorkActionInCareArena,

	ReadActionInCareArena,
	StudyActionInCareArena,
	PetActionInCareArena,
	TravelActionInCareArena,
	ListenRadioActionInCareArena,
	WatchTvActionInCareArena,
	HangoutActionInCareArena,
	DiscussionActionInCareArena,
	ChatActionInCareArena,
	PlayType,
	PlayActionInCareArena,
	ExerciseType,
	ExerciseActionInCareArena,
	PrayActionInCareArena,
	PoisonActionInCareArena,
	BurnActionInCareArena,
	ChokeActionInCareArena,
	FallActionInCareArena,

	CareAgent,
	CareGameKnowledge,
	CareKnowledge,
	AgentStateInCareGameList,
	AgentStateInCareArenaList,
	ActionInCareArenaList,
	CareArenaService,
	CareAgentService,
	CareEngine
}
