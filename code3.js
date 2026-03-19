gdjs._1075_1072_1088_1077_1084Code = {};
gdjs._1075_1072_1088_1077_1084Code.localVariables = [];
gdjs._1075_1072_1088_1077_1084Code.idToCallbackMap = new Map();
gdjs._1075_1072_1088_1077_1084Code.GDINgaremObjects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDINgaremObjects2= [];
gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects2= [];
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects2= [];
gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects2= [];
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects2= [];
gdjs._1075_1072_1088_1077_1084Code.GDuibarObjects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDuibarObjects2= [];
gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects1= [];
gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects2= [];


gdjs._1075_1072_1088_1077_1084Code.mapOfGDgdjs_9546_95951075_95951072_95951088_95951077_95951084Code_9546GDkursorObjects1Objects = Hashtable.newFrom({"kursor": gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects1});
gdjs._1075_1072_1088_1077_1084Code.mapOfGDgdjs_9546_95951075_95951072_95951088_95951077_95951084Code_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1});
gdjs._1075_1072_1088_1077_1084Code.asyncCallback11998628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1075_1072_1088_1077_1084Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "внутренний двор", false);
}
gdjs._1075_1072_1088_1077_1084Code.localVariables.length = 0;
}
gdjs._1075_1072_1088_1077_1084Code.idToCallbackMap.set(11998628, gdjs._1075_1072_1088_1077_1084Code.asyncCallback11998628);
gdjs._1075_1072_1088_1077_1084Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1075_1072_1088_1077_1084Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._1075_1072_1088_1077_1084Code.asyncCallback11998628(runtimeScene, asyncObjectsList)), 11998628, asyncObjectsList);
}
}

}


};gdjs._1075_1072_1088_1077_1084Code.mapOfGDgdjs_9546_95951075_95951072_95951088_95951077_95951084Code_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1});
gdjs._1075_1072_1088_1077_1084Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "back", 0, 0, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1);
gdjs.copyArray(runtimeScene.getObjects("kursor"), gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1075_1072_1088_1077_1084Code.mapOfGDgdjs_9546_95951075_95951072_95951088_95951077_95951084Code_9546GDkursorObjects1Objects, gdjs._1075_1072_1088_1077_1084Code.mapOfGDgdjs_9546_95951075_95951072_95951088_95951077_95951084Code_9546GDback2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17562900);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._1075_1072_1088_1077_1084Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1075_1072_1088_1077_1084Code.mapOfGDgdjs_9546_95951075_95951072_95951088_95951077_95951084Code_9546GDback2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1 */
{for(var i = 0, len = gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1.length ;i < len;++i) {
    gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1[i].getBehavior("Scale").setScale(0.73);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1);
{for(var i = 0, len = gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1.length ;i < len;++i) {
    gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1[i].getBehavior("Scale").setScale(0.78);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GlobalGold"), gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects1);
{for(var i = 0, len = gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects1.length ;i < len;++i) {
    gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Text_Gold"), gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects1);
{for(var i = 0, len = gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects1.length ;i < len;++i) {
    gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects1[i].getBehavior("Text").setText("Золото: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Gold").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
{gdjs.evtTools.firebaseTools.firestore.getDocument("Players", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "gold", 0, 0, 0);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "ok");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Gold")));
}
}

}


};

gdjs._1075_1072_1088_1077_1084Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1075_1072_1088_1077_1084Code.GDINgaremObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDINgaremObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDuibarObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDuibarObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects2.length = 0;

gdjs._1075_1072_1088_1077_1084Code.eventsList1(runtimeScene);
gdjs._1075_1072_1088_1077_1084Code.GDINgaremObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDINgaremObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDkursorObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDText_9595GoldObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDback2Objects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDuibarObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDuibarObjects2.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects1.length = 0;
gdjs._1075_1072_1088_1077_1084Code.GDGlobalGoldObjects2.length = 0;


return;

}

gdjs['_1075_1072_1088_1077_1084Code'] = gdjs._1075_1072_1088_1077_1084Code;
