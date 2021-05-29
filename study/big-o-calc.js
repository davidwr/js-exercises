const {
  AlgorithmSpeed,
  BuiltInArgumentTypes,
  Language,
  AxiosClient,
  CBHttpCodeRunner,
  AnalysisService
} = require('big-o-calculator')

/*
To Run code runner:
Pre-requisites: Have golang installed on machine

git clone git@github.com:coderbyte-org/cb-code-runner.git
PORT=8085 go run runner.go
*/

const codeRunnerUri = 'http://localhost:8085/javascript';
const codeRunner = new CBHttpCodeRunner(codeRunnerUri, new AxiosClient())
const calculator = new AnalysisService(codeRunner);

// AnalysisService.analyze returns a promisified BigO value
calculator.analyze({
  // Language of the tested code
  language: Language.JS,
  // Most languages handle data types differenty (e.g. integers vs strings).
  // This parameter tells the calculator about type of algorithm tested.
  expectedSpeed: AlgorithmSpeed.SLOW,
  // Tested code with function call and argument placeholder
  content: `function hasDupsObj(a) {
    const obj = {};
    for (let i = 0; i < a.length; i++) {
      obj[a[i]] = (obj[a[i]] || 0) + 1;
    };
    Object.keys(obj).map(key => {
      if (obj[key] === 2) {
        return true;
      };
    });
    return false;
  };hasDupsObj({funcArgs});`,
  testedFunctionName: BuiltInArgumentTypes.RANDOM_NUMBERS,
}).then((analysisResult) => {
  console.log(analysisResult.bigO)
})

