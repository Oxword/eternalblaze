gdjs._1072_1083_1100_1103_1085_1089Code = {};
gdjs._1072_1083_1100_1103_1085_1089Code.localVariables = [];
gdjs._1072_1083_1100_1103_1085_1089Code.idToCallbackMap = new Map();
gdjs._1072_1083_1100_1103_1085_1089Code.GDNewTiledSpriteObjects1= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDNewTiledSpriteObjects2= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects1= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects2= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects1= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects2= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1= [];
gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects2= [];


gdjs._1072_1083_1100_1103_1085_1089Code.mapOfGDgdjs_9546_95951072_95951083_95951100_95951103_95951085_95951089Code_9546GDkursorObjects1Objects = Hashtable.newFrom({"kursor": gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects1});
gdjs._1072_1083_1100_1103_1085_1089Code.mapOfGDgdjs_9546_95951072_95951083_95951100_95951103_95951085_95951089Code_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1});
gdjs._1072_1083_1100_1103_1085_1089Code.asyncCallback15136884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1072_1083_1100_1103_1085_1089Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "внутренний двор", false);
}
gdjs._1072_1083_1100_1103_1085_1089Code.localVariables.length = 0;
}
gdjs._1072_1083_1100_1103_1085_1089Code.idToCallbackMap.set(15136884, gdjs._1072_1083_1100_1103_1085_1089Code.asyncCallback15136884);
gdjs._1072_1083_1100_1103_1085_1089Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1072_1083_1100_1103_1085_1089Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._1072_1083_1100_1103_1085_1089Code.asyncCallback15136884(runtimeScene, asyncObjectsList)), 15136884, asyncObjectsList);
}
}

}


};gdjs._1072_1083_1100_1103_1085_1089Code.mapOfGDgdjs_9546_95951072_95951083_95951100_95951103_95951085_95951089Code_9546GDback2Objects1Objects = Hashtable.newFrom({"back2": gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1});
gdjs._1072_1083_1100_1103_1085_1089Code.eventsList1 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1);
gdjs.copyArray(runtimeScene.getObjects("kursor"), gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1072_1083_1100_1103_1085_1089Code.mapOfGDgdjs_9546_95951072_95951083_95951100_95951103_95951085_95951089Code_9546GDkursorObjects1Objects, gdjs._1072_1083_1100_1103_1085_1089Code.mapOfGDgdjs_9546_95951072_95951083_95951100_95951103_95951085_95951089Code_9546GDback2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15136812);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._1072_1083_1100_1103_1085_1089Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1072_1083_1100_1103_1085_1089Code.mapOfGDgdjs_9546_95951072_95951083_95951100_95951103_95951085_95951089Code_9546GDback2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1 */
{for(var i = 0, len = gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1.length ;i < len;++i) {
    gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1[i].getBehavior("Scale").setScale(0.97);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back2"), gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1);
{for(var i = 0, len = gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1.length ;i < len;++i) {
    gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1[i].getBehavior("Scale").setScale(1);
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
gdjs.copyArray(runtimeScene.getObjects("Text_Gold"), gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects1);
{for(var i = 0, len = gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects1.length ;i < len;++i) {
    gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects1[i].getBehavior("Text").setText("Золото: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Gold").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.getDocument("Players", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
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


};

gdjs._1072_1083_1100_1103_1085_1089Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1072_1083_1100_1103_1085_1089Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects2.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects2.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects2.length = 0;

gdjs._1072_1083_1100_1103_1085_1089Code.eventsList1(runtimeScene);
gdjs._1072_1083_1100_1103_1085_1089Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDkursorObjects2.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDText_9595GoldObjects2.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects1.length = 0;
gdjs._1072_1083_1100_1103_1085_1089Code.GDback2Objects2.length = 0;


return;

}

gdjs['_1072_1083_1100_1103_1085_1089Code'] = gdjs._1072_1083_1100_1103_1085_1089Code;
