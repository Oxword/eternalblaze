gdjs._1076_1074_1086_1088_1077_1094Code = {};
gdjs._1076_1074_1086_1088_1077_1094Code.localVariables = [];
gdjs._1076_1074_1086_1088_1077_1094Code.idToCallbackMap = new Map();
gdjs._1076_1074_1086_1088_1077_1094Code.GD_951076_951074_951086_951088_951077_951094Objects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GD_951076_951074_951086_951088_951077_951094Objects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595TimerObjects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595TimerObjects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects2= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDuibarObjects1= [];
gdjs._1076_1074_1086_1088_1077_1094Code.GDuibarObjects2= [];


gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDkursorObjects1Objects = Hashtable.newFrom({"kursor": gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects1});
gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1});
gdjs._1076_1074_1086_1088_1077_1094Code.asyncCallback15153436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1076_1074_1086_1088_1077_1094Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "внутренний двор", false);
}
gdjs._1076_1074_1086_1088_1077_1094Code.localVariables.length = 0;
}
gdjs._1076_1074_1086_1088_1077_1094Code.idToCallbackMap.set(15153436, gdjs._1076_1074_1086_1088_1077_1094Code.asyncCallback15153436);
gdjs._1076_1074_1086_1088_1077_1094Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1076_1074_1086_1088_1077_1094Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._1076_1074_1086_1088_1077_1094Code.asyncCallback15153436(runtimeScene, asyncObjectsList)), 15153436, asyncObjectsList);
}
}

}


};gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1});
gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDsborObjects1Objects = Hashtable.newFrom({"sbor": gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1});
gdjs._1076_1074_1086_1088_1077_1094Code.eventsList1 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1);
gdjs.copyArray(runtimeScene.getObjects("kursor"), gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDkursorObjects1Objects, gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDback2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15153364);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._1076_1074_1086_1088_1077_1094Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDback2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1 */
{for(var i = 0, len = gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1.length ;i < len;++i) {
    gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1[i].getBehavior("Scale").setScale(0.97);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1);
{for(var i = 0, len = gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1.length ;i < len;++i) {
    gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1[i].getBehavior("Scale").setScale(1);
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
gdjs.copyArray(runtimeScene.getObjects("Text_Gold"), gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects1);
{for(var i = 0, len = gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects1.length ;i < len;++i) {
    gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects1[i].getBehavior("Text").setText("Золото: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Gold").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.getDocument("Players", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "gold", 0, 0, 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "ok");
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "ok");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15059020);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sbor"), gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1076_1074_1086_1088_1077_1094Code.mapOfGDgdjs_9546_95951076_95951074_95951086_95951088_95951077_95951094Code_9546GDsborObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15060516);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Gold").add(100);
}
{gdjs.evtTools.firebaseTools.firestore.writeDocument("Players", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1.length ;i < len;++i) {
    gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1[i].getBehavior("Scale").setScale(0.30);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("sbor"), gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1);
{for(var i = 0, len = gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1.length ;i < len;++i) {
    gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1[i].getBehavior("Scale").setScale(0.35);
}
}
}

}


};

gdjs._1076_1074_1086_1088_1077_1094Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1076_1074_1086_1088_1077_1094Code.GD_951076_951074_951086_951088_951077_951094Objects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GD_951076_951074_951086_951088_951077_951094Objects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595TimerObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595TimerObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDuibarObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDuibarObjects2.length = 0;

gdjs._1076_1074_1086_1088_1077_1094Code.eventsList1(runtimeScene);
gdjs._1076_1074_1086_1088_1077_1094Code.GD_951076_951074_951086_951088_951077_951094Objects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GD_951076_951074_951086_951088_951077_951094Objects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDkursorObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595TimerObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595TimerObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDsborObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDText_9595GoldObjects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDback2Objects2.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDuibarObjects1.length = 0;
gdjs._1076_1074_1086_1088_1077_1094Code.GDuibarObjects2.length = 0;


return;

}

gdjs['_1076_1074_1086_1088_1077_1094Code'] = gdjs._1076_1074_1086_1088_1077_1094Code;
