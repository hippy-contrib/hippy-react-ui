const shell = require('shelljs');
const util = require('util');
const path = require('path');

const PROJECTPATH = path.resolve(__dirname, '../ios/');
const PROJECTENTRY = `${PROJECTPATH}/hippyDemo.xcworkspace`;
const ARTIFACTPATH = `${PROJECTPATH}/products`;
const APPPATH = `${ARTIFACTPATH}/Debug-iphonesimulator/hippyDemo.app`;
const BUNDLEIDENTIFIER = `com.tencent.hippyDemo.hippyDemo`;

function exec (command) {
	return shell.exec(util.format(command), { silent: true });
}

function checkExecResult (result, errorMessage) {
	if (result.code !== 0) {
		console.log(errorMessage);
		process.exit(1);
	}
}
/**
 * @description 系统环境校验
 */
function checkPrerequisites () {
	const obj = exec('xcrun simctl help');

	if (obj.code !== 0) {
		obj.output = 'simctl was not found.\n';
		obj.output += 'Check that you have Xcode 8.x installed:\n';
		obj.output += '\txcodebuild --version\n';
		obj.output += 'Check that you have Xcode 8.x selected:\n';
		obj.output += '\txcode-select --print-path\n';
	}

	return obj;
}

/**
 * @description 构建app，首先执行clean操作，然后进行构建
 */
function buildApp () {
	exec(`xcodebuild clean -workspace  ${PROJECTENTRY} -scheme hippyDemo`);
	const obj = exec(`xcodebuild build -workspace ${PROJECTENTRY} -scheme hippyDemo -sdk iphonesimulator SYMROOT="${ARTIFACTPATH}"`);
	return obj;
}

/**
 * @description 等待模拟器被唤起
 */
async function waitForSimulator () {
	while (true) {
		const result = exec(`xcrun simctl list | grep Booted | wc -l | sed -e 's/ //g'`);
		const matchRes = result.stdout.match(/\d+/);
		if (matchRes && parseInt(matchRes[0]) > 0) return; 
		await new Promise(resolve => setTimeout(resolve, 5000));
	}
}

/**
 * @description 打开模拟器
 */
async function openSimulator () {
	const result = exec(`open -a Simulator`);
	checkExecResult(result);
	await waitForSimulator()
	return result;
}

/**
 * @description 安装app
 */
function installApp () {
	const result = exec(`xcrun simctl install booted ${APPPATH}`)
	checkExecResult(result);
	return result;
}

function getSimulatorID () {
	const result = exec(`xcrun simctl list | grep Booted`);
	const list = result.stdout.split(/\n/).map(str => {
		const r = str.match(/\s\(([^)]+)\)/);
		return r ? r[1] : undefined;
	}).filter(item => !!item);
	return list.length > 0 ? list[0] : '';
}


function launchApp () {
	const simulatorID = getSimulatorID();
	if (!simulatorID) {
		console.log('Get simulator error');
		process.exit(1);
	}
	const result = exec(`xcrun simctl launch ${simulatorID} ${BUNDLEIDENTIFIER}`);
	checkExecResult(result);
	return result;
}

async function main () {
	const checkResult = checkPrerequisites();
	if (checkResult.code !== 0) {
		console.log(checkResult);
		return;
	}
	buildApp();
	await openSimulator();
	installApp();
	launchApp();
}

main();