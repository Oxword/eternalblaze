
if (typeof gdjs.evtsExt__ExtendedVariables__CopyVariable !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__CopyVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__CopyVariable = {};
gdjs.evtsExt__ExtendedVariables__CopyVariable.idToCallbackMap = new Map();


gdjs.evtsExt__ExtendedVariables__CopyVariable.userFunc0x10d23d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const sourceVariable = eventsFunctionContext.getArgument("SourceVariable");
/** @type {gdjs.Variable} */
const destinationVariable = eventsFunctionContext.getArgument("DestinationVariable");
const isExactCopy = eventsFunctionContext.getArgument("isExactCopy");

if (sourceVariable.isPrimitive() === destinationVariable.isPrimitive()) {
    gdjs.Variable.copy(sourceVariable, destinationVariable, isExactCopy);
}

};
gdjs.evtsExt__ExtendedVariables__CopyVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__CopyVariable.userFunc0x10d23d8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__ExtendedVariables__CopyVariable.func = function(runtimeScene, SourceVariable, DestinationVariable, isExactCopy, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ExtendedVariables"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ExtendedVariables"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SourceVariable") return SourceVariable;
if (argName === "DestinationVariable") return DestinationVariable;
if (argName === "isExactCopy") return isExactCopy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ExtendedVariables__CopyVariable.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__ExtendedVariables__CopyVariable.registeredGdjsCallbacks = [];