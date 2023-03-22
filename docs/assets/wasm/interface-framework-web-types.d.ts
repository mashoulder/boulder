import { 	
	GlobalService,


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
	ActionInArena,
	AgentStateInArena,
	ArenaState,
	Arena,


	EngineService,
	EngineState,
	Event,
	Engine 

} from "./framework-web-types";

declare class WebAction extends Action {
  constructor(name?: string, HTMLelementId?: number);
  exec(): void;
}

declare class WebAgent extends Agent {
  constructor(HTMLelementId: number, actionPlan: ActionPlan, state?: AgentState, senses?: Array<Sense>, actions?: Array<Action>, physicalStructure?: PhysicalStructure, logger?: Logger)
}

declare class WebArena extends Arena {
  constructor(HTMLelementId: number, state?: ArenaState, arenaActions?: Action[], agentActions?: ActionInArena[], logger?: Logger)
}

declare type WebActionList = any;

export {

	WebAction,
	WebAgent,
	WebArena,
	WebActionList
}
