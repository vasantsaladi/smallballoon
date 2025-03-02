import { STLoader } from "../../main/ts/STLoader";
import { LOG, LogLevel } from "../../main/ts/utils/Logger";
import { strSplitWithTail } from "../../main/ts/utils/StringUtils";
import { STMessage } from "../../main/ts/STMessage";
import { STString } from "../../main/ts/STString";

LOG.level = LogLevel.Info;

// Define a global context object instead of using 'this' directly
const globalContext: any = {};
globalContext.square = function (value: number): number {
  return value * value;
};

let interpreter = new STLoader();
interpreter.setJSContext(globalContext);
interpreter.runFile("src/test/smalltalk/TestApp.st");
