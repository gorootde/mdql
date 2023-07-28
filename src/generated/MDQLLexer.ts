// Generated from MDQL.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MDQLLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly COMPARE_OPERATOR = 2;
	public static readonly OP_EQUALS = 3;
	public static readonly OP_NOTEQUALS = 4;
	public static readonly OP_CONTAINS = 5;
	public static readonly NEWLINE = 6;
	public static readonly TASKS = 7;
	public static readonly DOCUMENTS = 8;
	public static readonly TASKLIST = 9;
	public static readonly LIST = 10;
	public static readonly TABLE = 11;
	public static readonly FROM = 12;
	public static readonly WHERE = 13;
	public static readonly AND = 14;
	public static readonly FIELD = 15;
	public static readonly STRING_LITERAL = 16;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            null, "'='", 
                                                            "'!='", "'=~'", 
                                                            null, "'tasks'", 
                                                            "'documents'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             "COMPARE_OPERATOR", 
                                                             "OP_EQUALS", 
                                                             "OP_NOTEQUALS", 
                                                             "OP_CONTAINS", 
                                                             "NEWLINE", 
                                                             "TASKS", "DOCUMENTS", 
                                                             "TASKLIST", 
                                                             "LIST", "TABLE", 
                                                             "FROM", "WHERE", 
                                                             "AND", "FIELD", 
                                                             "STRING_LITERAL" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "COMPARE_OPERATOR", "OP_EQUALS", "OP_NOTEQUALS", "OP_CONTAINS", 
		"NEWLINE", "TASKS", "DOCUMENTS", "TASKLIST", "LIST", "TABLE", "FROM", 
		"WHERE", "AND", "FIELD", "STRING_LITERAL",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MDQLLexer._ATN, MDQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "MDQL.g4"; }

	public get literalNames(): (string | null)[] { return MDQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MDQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return MDQLLexer.ruleNames; }

	public get serializedATN(): number[] { return MDQLLexer._serializedATN; }

	public get channelNames(): string[] { return MDQLLexer.channelNames; }

	public get modeNames(): string[] { return MDQLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,16,157,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,
	1,1,1,1,1,1,3,1,39,8,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,4,5,50,8,5,11,
	5,12,5,51,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,3,8,88,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,98,8,9,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,110,8,10,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,3,11,120,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,3,12,132,8,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,140,8,13,1,14,
	4,14,143,8,14,11,14,12,14,144,1,15,1,15,1,15,1,15,5,15,151,8,15,10,15,12,
	15,154,9,15,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
	10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,3,2,0,10,10,13,13,4,0,46,46,
	48,57,65,90,97,122,1,0,39,39,168,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
	7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
	0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,
	1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,38,1,0,0,0,5,40,1,0,0,0,7,42,1,0,0,
	0,9,45,1,0,0,0,11,49,1,0,0,0,13,55,1,0,0,0,15,61,1,0,0,0,17,87,1,0,0,0,
	19,97,1,0,0,0,21,109,1,0,0,0,23,119,1,0,0,0,25,131,1,0,0,0,27,139,1,0,0,
	0,29,142,1,0,0,0,31,146,1,0,0,0,33,34,5,44,0,0,34,2,1,0,0,0,35,39,3,5,2,
	0,36,39,3,7,3,0,37,39,3,9,4,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,
	39,4,1,0,0,0,40,41,5,61,0,0,41,6,1,0,0,0,42,43,5,33,0,0,43,44,5,61,0,0,
	44,8,1,0,0,0,45,46,5,61,0,0,46,47,5,126,0,0,47,10,1,0,0,0,48,50,7,0,0,0,
	49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,
	54,6,5,0,0,54,12,1,0,0,0,55,56,5,116,0,0,56,57,5,97,0,0,57,58,5,115,0,0,
	58,59,5,107,0,0,59,60,5,115,0,0,60,14,1,0,0,0,61,62,5,100,0,0,62,63,5,111,
	0,0,63,64,5,99,0,0,64,65,5,117,0,0,65,66,5,109,0,0,66,67,5,101,0,0,67,68,
	5,110,0,0,68,69,5,116,0,0,69,70,5,115,0,0,70,16,1,0,0,0,71,72,5,116,0,0,
	72,73,5,97,0,0,73,74,5,115,0,0,74,75,5,107,0,0,75,76,5,108,0,0,76,77,5,
	105,0,0,77,78,5,115,0,0,78,88,5,116,0,0,79,80,5,84,0,0,80,81,5,65,0,0,81,
	82,5,83,0,0,82,83,5,75,0,0,83,84,5,76,0,0,84,85,5,73,0,0,85,86,5,83,0,0,
	86,88,5,84,0,0,87,71,1,0,0,0,87,79,1,0,0,0,88,18,1,0,0,0,89,90,5,108,0,
	0,90,91,5,105,0,0,91,92,5,115,0,0,92,98,5,116,0,0,93,94,5,76,0,0,94,95,
	5,73,0,0,95,96,5,83,0,0,96,98,5,84,0,0,97,89,1,0,0,0,97,93,1,0,0,0,98,20,
	1,0,0,0,99,100,5,116,0,0,100,101,5,97,0,0,101,102,5,98,0,0,102,103,5,108,
	0,0,103,110,5,101,0,0,104,105,5,84,0,0,105,106,5,65,0,0,106,107,5,66,0,
	0,107,108,5,76,0,0,108,110,5,69,0,0,109,99,1,0,0,0,109,104,1,0,0,0,110,
	22,1,0,0,0,111,112,5,102,0,0,112,113,5,114,0,0,113,114,5,111,0,0,114,120,
	5,109,0,0,115,116,5,70,0,0,116,117,5,82,0,0,117,118,5,79,0,0,118,120,5,
	77,0,0,119,111,1,0,0,0,119,115,1,0,0,0,120,24,1,0,0,0,121,122,5,119,0,0,
	122,123,5,104,0,0,123,124,5,101,0,0,124,125,5,114,0,0,125,132,5,101,0,0,
	126,127,5,87,0,0,127,128,5,72,0,0,128,129,5,69,0,0,129,130,5,82,0,0,130,
	132,5,69,0,0,131,121,1,0,0,0,131,126,1,0,0,0,132,26,1,0,0,0,133,134,5,97,
	0,0,134,135,5,110,0,0,135,140,5,100,0,0,136,137,5,65,0,0,137,138,5,78,0,
	0,138,140,5,68,0,0,139,133,1,0,0,0,139,136,1,0,0,0,140,28,1,0,0,0,141,143,
	7,1,0,0,142,141,1,0,0,0,143,144,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,
	145,30,1,0,0,0,146,152,5,39,0,0,147,151,8,2,0,0,148,149,5,39,0,0,149,151,
	5,39,0,0,150,147,1,0,0,0,150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,
	0,152,153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,5,39,0,0,156,
	32,1,0,0,0,12,0,38,51,87,97,109,119,131,139,144,150,152,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MDQLLexer.__ATN) {
			MDQLLexer.__ATN = new ATNDeserializer().deserialize(MDQLLexer._serializedATN);
		}

		return MDQLLexer.__ATN;
	}


	static DecisionsToDFA = MDQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}