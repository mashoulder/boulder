import { 	
	GlobalService,


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

} from "./framework-web-types";

import { WebAction, WebAgent, WebArena, WebActionList  } from "./interface-framework-web-types";

import { 
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
} from "./careGiverWebGame-web-types";
	


export interface CareGiverWebGameCustomModule extends EmscriptenModule {
	cwrap: typeof cwrap;

  // FRAMEWORK
	EngineService: typeof EngineService;
	EngineState: typeof EngineState;
	Engine: typeof Engine;
	Event: typeof Event;

	Action: typeof Action;

	HashAgentStateInGameList: HashAgentStateInGameList;
	SenseList: SenseList;
	ArenaPlanList: ArenaPlanList;
	ActionPlanList: ActionPlanList;
	PhysicalStructureList: PhysicalStructureList;
	GameStateList: GameStateList;
	AgentStateInGameList: AgentStateInGameList;
	ActionInGameList: ActionInGameList;
	LessonList: LessonList;
	GameKnowledgeStateList: GameKnowledgeStateList;
	GameKnowledgeList: GameKnowledgeList;
	KnowledgeList: KnowledgeList;
	AgentStateList: AgentStateList;
	AgentList: AgentList;

	ActionList: ActionList;
	MessageList: MessageList;
	TopicList: TopicList;
	LogList: LogList;

	LogType: typeof LogType;
	Logger: typeof Logger;
	Combus: typeof Combus;

    // HELPER 
	StringList: StringList;
	IntList: IntList;
	IdList: IdList;
	RetornoList: RetornoList;
	StringCallback: typeof StringCallback;
	StringCallbackList: StringCallbackList;

  // ARENA FILE:
	ArenaService: typeof ArenaService;

    // AGENT FILE
	ActionPlan: typeof ActionPlan;
	AgentActionMode: typeof AgentActionMode;

  // INTERFACE FRAMEWORK
	WebAction: typeof WebAction;
	WebAgent: typeof WebAgent;
	WebArena: typeof WebArena;
	WebActionList: WebActionList;

  // CAREGIVER WEBGAME

	WeightsAgentStateInCareArena: typeof WeightsAgentStateInCareArena;
	AgentStateInCareGame: typeof AgentStateInCareGame;
	AgentStateInCareArena: typeof AgentStateInCareArena;
	CareArenaState: typeof CareArenaState;
	ArenaState: typeof ArenaState;
	CareArena: typeof CareArena;
	ArenaList: ArenaList;
	ActionCallbackList: ActionCallbackList;
	ActionInArenaList: ActionInArenaList;
	AgentStateInArenaList: AgentStateInArenaList;
	ArenaStateList: ArenaStateList;
	ActionInCareArena: typeof ActionInCareArena;
	WorkType: typeof WorkType;
	EatActionInCareArena: typeof EatActionInCareArena;
	DrinkActionInCareArena: typeof DrinkActionInCareArena;
	WorkActionInCareArena: typeof WorkActionInCareArena;

	ReadActionInCareArena: typeof ReadActionInCareArena;
	StudyActionInCareArena: typeof StudyActionInCareArena;
	PetActionInCareArena: typeof PetActionInCareArena;
	TravelActionInCareArena: typeof TravelActionInCareArena;
	ListenRadioActionInCareArena: typeof ListenRadioActionInCareArena;
	WatchTvActionInCareArena: typeof WatchTvActionInCareArena;
	HangoutActionInCareArena: typeof HangoutActionInCareArena;
	DiscussionActionInCareArena: typeof DiscussionActionInCareArena;
	ChatActionInCareArena: typeof ChatActionInCareArena;
	PlayType: typeof PlayType;
	PlayActionInCareArena: typeof PlayActionInCareArena;
	ExerciseType: typeof ExerciseType;
	ExerciseActionInCareArena: typeof ExerciseActionInCareArena;
	PrayActionInCareArena: typeof PrayActionInCareArena;
	PoisonActionInCareArena: typeof PoisonActionInCareArena;
	BurnActionInCareArena: typeof BurnActionInCareArena;
	ChokeActionInCareArena: typeof ChokeActionInCareArena;
	FallActionInCareArena: typeof FallActionInCareArena;

	CareAgent: typeof CareAgent;
	CareGameKnowledge: typeof CareGameKnowledge;
	CareKnowledge: typeof CareKnowledge;
	AgentStateInCareGameList: AgentStateInCareGameList;
	AgentStateInCareArenaList: AgentStateInCareArenaList;
	ActionInCareArenaList: ActionInCareArenaList;
	CareArenaService: typeof CareArenaService;
	CareAgentService: typeof CareAgentService;
	CareEngine: typeof CareEngine;
}

export default Module;
declare function Module(): CareGiverWebGameCustomModule;
