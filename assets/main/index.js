window.__require=function e(t,n,o){function c(a,s){if(!n[a]){if(!t[a]){var r=a.split("/");if(r=r[r.length-1],!t[r]){var d="function"==typeof __require&&__require;if(!s&&d)return d(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+a+"'")}a=r}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(e){return c(t[a][1][e]||e)},p,p.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<o.length;a++)c(o[a]);return c}({AutoResizeCanvas:[function(e,t){"use strict";cc._RF.push(t,"2d3784t4T9IZKw4bcexrDLA","AutoResizeCanvas"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var e=this.node.getComponent(cc.Canvas);if(e){var t=e.designResolution.width/e.designResolution.height,n=cc.winSize;n.width/n.height>t?(e.fitWidth=!1,e.fitHeight=!0):(e.fitWidth=!0,e.fitHeight=!1)}}}),cc._RF.pop()},{}],ComponentItem:[function(e,t){"use strict";cc._RF.push(t,"f99afcW8m5KO4OOtF7BqJC4","ComponentItem");var n=[{Symbol:"V",Name:"Vocabulary"},{Symbol:"L",Name:"Lecture"},{Symbol:"Pr",Name:"Practices - Game"},{Symbol:"R",Name:"Reading"},{Symbol:"Vi",Name:"Video"},{Symbol:"T",Name:"Quiz - Test"},{Symbol:"CB",Name:"Language skill"}];cc.Class({extends:cc.Component,properties:{componentSymbol:cc.Label,componentName:cc.Label},init:function(e){this._data=e;var t=e.Type;this.componentName.string=n[t].Name,this.componentSymbol.string=n[t].Symbol},onClick:function(){var e=new cc.Event.EventCustom("onClickComponent",!0);e.setUserData(this._data),cc.director.getScene().getChildByName("Canvas").dispatchEvent(e)}}),cc._RF.pop()},{}],ComponentScene:[function(e,t){"use strict";cc._RF.push(t,"8e233MrSbNLibJtraMK3omy","ComponentScene"),cc.Class({extends:cc.Component,properties:{homeScene:"TopicScene",loading:cc.Node},start:function(){},HomeClick:function(){this.loadScene(this.homeScene)},loadScene:function(e){this.loading.active=!0,cc.director.preloadScene(e,function(){},function(t){null==t&&cc.director.loadScene(e)})}}),cc._RF.pop()},{}],EventCode:[function(e,t){"use strict";cc._RF.push(t,"68c01v4f2ZFuZZYHzsIaDqG","EventCode"),t.exports={PLAYER_JUMP:"PLAYER_JUMP",PLAYER_MOVE_LEFT:"PLAYER_MOVE_LEFT",PLAYER_MOVE_RIGHT:"PLAYER_MOVE_RIGHT",PLAYER_END_MOVE:"PLAYER_END_MOVE",FIRE:"FIRE",UFO_CRASH:"UFO_CRASH",UFO_ATTACK:"UFO_ATTACK",Sound:{PLAYFX:"SOUND_PLAYFX",PLAYBG:"SOUND_PLAYBG"},GO_MAP:"GO_MAP",GO_GAME:"GO_GAME",GAME_BEGIN:"GAME_BEGIN",GAME_END:"GAME_END",GAME_LOSE:"GAME_LOSE"},cc._RF.pop()},{}],GameConst:[function(e,t){"use strict";cc._RF.push(t,"c0673+M8VtOZLfoqFBQNs4z","GameConst"),t.exports={SUBJECT_TYPE:{ENGLISH:0,MATH:1,SCIENCE:2},COMPONENT_TYPE:{Vocabulary:0,Lecture:1,Practices:2,Reading:3,Video:4,Quiz:5,Language:6}},cc._RF.pop()},{}],GameInfo:[function(e,t){"use strict";cc._RF.push(t,"123d6QzzDlIzrjgbLiiF9gt","GameInfo");var n=function(){function e(){this.Mode=0,this.Subject=0,this.TopicData=[[{TopicId:0,Name:"English 1",Active:1,ImageId:0,Component:[{Type:0,Data:[{sound:"sound1",ans:["text 1","text 2","text 3","text 4"],correct:"text 3"},{sound:"sound2",ans:["Answer 1","Answer 2","Answer 3","Answer 4"],correct:"Answer 1"},{sound:"sound3",ans:["True 1","True 2","True 3","True 4"],correct:"True 4"}]},{Type:2,Data:[{question:"What does the fox say?",ans:["woof","meow","Gering","tweet"],correct:"Gering"},{question:"Who let the dogs out?",ans:["You","Ronaldo","The Cat","Me"],correct:"You"}]},{Type:4,Data:{}},{Type:3,Data:"The quick brown fox jumps over the lazy dog is an English-language pangram\u2014a sentence that contains all of the letters of the English alphabet. Owing to its brevity and coherence, it has become widely known. The phrase is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired. End!"}]},{TopicId:1,Name:"English 2",Active:1,ImageId:1,Component:[]},{TopicId:2,Name:"English 3",Active:1,ImageId:2,Component:[]},{TopicId:3,Name:"English 4",Active:1,ImageId:3,Component:[]},{TopicId:4,Name:"English 5",Active:1,ImageId:4,Component:[]},{TopicId:5,Name:"English 6",Active:1,ImageId:5,Component:[]},{TopicId:6,Name:"English 7",Active:1,ImageId:6,Component:[]},{TopicId:7,Name:"English 8",Active:1,ImageId:7,Component:[]},{TopicId:8,Name:"English 9",Active:0,ImageId:0,Component:[]}],[{TopicId:0,Name:"Math 1",Active:1,ImageId:0,Component:[]},{TopicId:1,Name:"Math 2",Active:1,ImageId:1,Component:[]},{TopicId:2,Name:"Math 3",Active:1,ImageId:2,Component:[]},{TopicId:3,Name:"Math 4",Active:1,ImageId:3,Component:[]},{TopicId:4,Name:"Math 5",Active:1,ImageId:4,Component:[]},{TopicId:5,Name:"Math 6",Active:1,ImageId:5,Component:[]},{TopicId:6,Name:"Math 7",Active:1,ImageId:6,Component:[]},{TopicId:7,Name:"Math 8",Active:1,ImageId:7,Component:[]},{TopicId:8,Name:"Math 9",Active:0,ImageId:4,Component:[]}],[{TopicId:0,Name:"Science 1",Active:1,ImageId:0,Component:[]},{TopicId:1,Name:"Science 2",Active:1,ImageId:1,Component:[]},{TopicId:2,Name:"Science 3",Active:1,ImageId:2,Component:[]},{TopicId:3,Name:"Science 4",Active:1,ImageId:3,Component:[]},{TopicId:4,Name:"Science 5",Active:1,ImageId:4,Component:[]},{TopicId:5,Name:"Science 6",Active:1,ImageId:5,Component:[]},{TopicId:6,Name:"Science 7",Active:1,ImageId:6,Component:[]},{TopicId:7,Name:"Science 8",Active:1,ImageId:7,Component:[]},{TopicId:8,Name:"Science 9",Active:0,ImageId:0,Component:[]},{TopicId:9,Name:"Science 10",Active:0,ImageId:1,Component:[]},{TopicId:10,Name:"Science 11",Active:0,ImageId:2,Component:[]},{TopicId:11,Name:"Science 12",Active:0,ImageId:3,Component:[]}]],this.SettingInfo={MusicEnable:!0,SoundEnable:!0}}return e.getInstance=function(){return e._instance||(e._instance=new e),e._instance},e}();t.exports=n,cc._RF.pop()},{}],Loading:[function(e,t){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","Loading"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},loadingBar:cc.ProgressBar,slider:cc.Slider},onLoad:function(){var e=this;this.label.string=this.text;var t=this;cc.director.preloadScene("LoginScene",function(e,n){var o=Math.floor(e/n*100);cc.log("---"+o),t.label.string="Loading "+o+"%",t.loadingBar.progress=o/100,t.slider.progress=o/100},function(t){null==t&&e.scheduleOnce(function(){cc.director.loadScene("LoginScene")},1)})},loadScene:function(e){var t=this;this.label.string=this.text;var n=this;cc.director.preloadScene(e,function(e,t){var o=Math.floor(e/t*100);cc.log("---"+o),n.label.string="Loading "+o+"%",n.loadingBar.progress=o/100,n.slider.progress=o/100},function(n){null==n&&t.scheduleOnce(function(){cc.director.loadScene(e)},2)})}}),cc._RF.pop()},{}],Login:[function(e,t){"use strict";cc._RF.push(t,"10d4dmnE+BK2q6uNiPEl08X","Login"),cc.Class({extends:cc.Component,properties:{loading:cc.Node},onLoad:function(){this.loading.active=!1},start:function(){},onLogin:function(){this.loading.active=!0,this.scheduleOnce(this.loginComplete,1)},loginComplete:function(){cc.director.loadScene("ProgramScene")}}),cc._RF.pop()},{}],PanelSettingComponent:[function(e,t){"use strict";cc._RF.push(t,"91393d9NtFMzYcBEtkEXHce","PanelSettingComponent");var n=e("GameInfo").getInstance(),o=["English","Math","Science"];cc.Class({extends:cc.Component,properties:{overlay:cc.Node,pnlSubject:cc.Node,otherMode:cc.Node,subjectName:cc.Label,imgCurrentMode:cc.Sprite,imgOtherMode:cc.Sprite,currentModeFrame:[cc.SpriteFrame],otherModeFrame:[cc.SpriteFrame],btnMode:cc.Button,btnSubject:cc.Button},onLoad:function(){var e=cc.director.getScene().name;"ProgramScene"==e&&(this.btnMode.interactable=!1,this.btnSubject.interactable=!1),"SubjectScene"==e&&(this.btnSubject.interactable=!1),this.otherMode.active=!1,this.overlay.active=!1,this.pnlSubject.active=!1,this._isModeActive=!1,this._isSubjectActive=!1,this.otherModeState=1,this.updateSetting()},updateSetting:function(){n&&(this.subjectName.string=o[n.Subject],0==n.Mode?(this.otherModeState=1,this.imgCurrentMode.spriteFrame=this.currentModeFrame[0],this.imgOtherMode.spriteFrame=this.otherModeFrame[1]):(this.otherModeState=0,this.imgCurrentMode.spriteFrame=this.currentModeFrame[1],this.imgOtherMode.spriteFrame=this.otherModeFrame[0]))},clickMode:function(){this._isModeActive?(this._isModeActive=!1,this.otherMode.active=!1,this.overlay.active=!1):(this._isModeActive=!0,this.otherMode.active=!0,this.overlay.active=!0),this._isSubjectActive&&(this._isSubjectActive=!1,this.pnlSubject.active=!1,this.overlay.active=!1)},clickOtherMode:function(){this._isModeActive=!1,this.otherMode.active=!1,this.overlay.active=!1,n&&(n.Mode=this.otherModeState),this.updateSetting()},clickSubject:function(){this._isSubjectActive?(this._isSubjectActive=!1,this.pnlSubject.active=!1,this.overlay.active=!1):(this._isSubjectActive=!0,this.pnlSubject.active=!0,this.overlay.active=!0),this._isModeActive&&(this._isModeActive=!1,this.otherMode.active=!1,this.overlay.active=!1)},choseSubject:function(e,t){if(this._isSubjectActive=!1,this.pnlSubject.active=!1,this.overlay.active=!1,t){if(n){n.Subject=parseInt(t);var o=new cc.Event.EventCustom("onChangeSubject",!0);cc.director.getScene().getChildByName("Canvas").dispatchEvent(o)}this.updateSetting()}},clickOverlay:function(){this.otherMode.active=!1,this.overlay.active=!1,this.pnlSubject.active=!1,this._isModeActive=!1,this._isSubjectActive=!1}}),cc._RF.pop()},{GameInfo:"GameInfo"}],PracticesItem:[function(e,t){"use strict";cc._RF.push(t,"08a1bX0CWtB7KC2OlhzoUJL","PracticesItem"),cc.Class({extends:cc.Component,properties:{popup:cc.Node,question:cc.Label,character:cc.Node,ans:[cc.Label],checkPoint:[cc.Sprite],true:cc.SpriteFrame,false:cc.SpriteFrame,btnPlay:cc.Node,close:cc.Node},onLoad:function(){var e=this;this.close.on(cc.Node.EventType.TOUCH_END,function(){e.node.removeFromParent(!0)}),this.btnPlay.on(cc.Node.EventType.TOUCH_END,function(){e.btnPlay.active=!1,e.moveToPoint(0)})},moveToPoint:function(e){var t=this;e>=this.checkPoint.length||this.character.runAction(cc.sequence(cc.moveTo(2,this.checkPoint[e].node.position),cc.delayTime(.2),cc.callFunc(function(){e<t.checkPoint.length-1&&t.loadQuestion(e)})))},init:function(e){this._data=e,e&&e.length},loadQuestion:function(e){var t=this,n=this;n.index=e,this.question.string=n._data[e].question;for(var o=function(e){t.ans[e].node.parent.color=cc.Color.WHITE,t.ans[e].string=n._data[n.index].ans[e],t.ans[e].node.parent.on(cc.Node.EventType.TOUCH_END,function(){t.ans[e].node.parent.off(cc.Node.EventType.TOUCH_END),t.ans[e].string==n._data[n.index].correct?(t.ans[e].node.parent.color=cc.Color.GREEN,t.checkPoint[n.index].spriteFrame=t.true):(t.checkPoint[n.index].spriteFrame=t.false,t.ans[e].node.parent.color=cc.Color.RED),n.popup.active=!1,t.scheduleOnce(function(){n.moveToPoint(n.index+1)},1)})},c=0;c<4;c++)o(c);n.popup.active=!0}}),cc._RF.pop()},{}],ProgramScene:[function(e,t){"use strict";cc._RF.push(t,"d3f1e+C5W5P7Y+3u+o2oBOs","ProgramScene");var n=e("GameInfo").getInstance();cc.Class({extends:cc.Component,properties:{},start:function(){},onChooseMode:function(e,t){var o=parseInt(t);t&&n&&(n.Mode=o),cc.director.loadScene("SubjectScene")}}),cc._RF.pop()},{GameInfo:"GameInfo"}],ReadingItem:[function(e,t){"use strict";cc._RF.push(t,"0a63dmnPPtPx5ywEEBswq4e","ReadingItem"),cc.Class({extends:cc.Component,properties:{close:cc.Node,content:cc.Label},onLoad:function(){var e=this;this.close.on(cc.Node.EventType.TOUCH_END,function(){e.node.removeFromParent(!0)})},init:function(e){this._data=e,this.word=this._data.split("");for(var t=this,n=function(e){t.scheduleOnce(function(){t.content.string+=t.word[e]},.1*e)},o=0;o<this.word.length;o++)n(o)},onDestroy:function(){this.unscheduleAllCallbacks()}}),cc._RF.pop()},{}],SubjectScene:[function(e,t){"use strict";cc._RF.push(t,"a521akettNAJoLscI3gwV+3","SubjectScene");var n=e("GameInfo").getInstance();cc.Class({extends:cc.Component,properties:{homeScene:"ProgramScene",loading:cc.Node,levels:[cc.Node]},onLoad:function(){this.lvPos=[this.levels[0].position,this.levels[1].position,this.levels[2].position,this.levels[3].position,this.levels[4].position]},start:function(){},goTopic:function(e,t){t&&n&&(n.Subject=parseInt(t)),this.loading.active=!0,cc.director.preloadScene("TopicScene",function(){},function(e){null==e&&cc.director.loadScene("TopicScene")})},HomeClick:function(){cc.director.loadScene(this.homeScene)},onSubjectClick:function(e){var t=e.target;this.levels.forEach(function(e){e.stopAllActions(),e.active=!1,e.position=t.position});for(var n=0;n<5;n++)this.levels[n].active=!0,this.levels[n].runAction(cc.sequence(cc.delayTime(.2*n),cc.moveTo(.2,this.lvPos[n])))}}),cc._RF.pop()},{GameInfo:"GameInfo"}],TopicItem:[function(e,t){"use strict";cc._RF.push(t,"04274e8citB0p1lqKRtY+Cd","TopicItem");var n=e("GameInfo").getInstance();cc.Class({extends:cc.Component,properties:{imageListEnglish:[cc.SpriteFrame],imageListMath:[cc.SpriteFrame],imageListScience:[cc.SpriteFrame],image:cc.Sprite,totalComponent:cc.Label,topicName:cc.Label,star:cc.Node},onLoad:function(){},start:function(){},init:function(e){this.imgList=[this.imageListEnglish,this.imageListMath,this.imageListScience],this._data=e,this.image.spriteFrame=this.imgList[n.Subject][e.ImageId],this.totalComponent.string=this._data.Component.length,this.topicName.string=this._data.Name,this.node.getComponent(cc.Button).interactable=this._data.Active,this.star.active=e.Active},onClickTopic:function(){var e=new cc.Event.EventCustom("onClickTopic",!0);e.setUserData(this._data),cc.director.getScene().getChildByName("Canvas").dispatchEvent(e)}}),cc._RF.pop()},{GameInfo:"GameInfo"}],TopicListItem:[function(e,t){"use strict";cc._RF.push(t,"1884c+M4kFExZJawp/F1D6K","TopicListItem"),cc.Class({extends:cc.Component,properties:{itemNode:[cc.Node],itemPrefab:cc.Prefab},init:function(e){for(var t=0;t<e.length;t++){var n=cc.instantiate(this.itemPrefab);n.getComponent("TopicItem").init(e[t]),this.itemNode[t].addChild(n)}}}),cc._RF.pop()},{}],TopicScene:[function(e,t){"use strict";cc._RF.push(t,"30ce4qBfBpLJpMgisjEpDii","TopicScene");var n=e("GameInfo").getInstance(),o=e("GameConst");cc.Class({extends:cc.Component,properties:{firstItem:cc.Prefab,midleItem:cc.Prefab,lastItem:cc.Prefab,content:cc.Node,componentItem:cc.Prefab,panelComponent:cc.Node,topicName:cc.Label,componentContainer:cc.Node,homeScene:"SubjectScene",bg:cc.Sprite,bgSprite:[cc.SpriteFrame],componentPopup:[cc.Prefab],componentLayer:cc.Node,loading:cc.Node},onLoad:function(){var e=this;e.listComponent=[],this.node.on("onClickTopic",function(t){var n=t.getUserData();t.stopPropagation(),e.onClickTopic(n)}),this.node.on("onClickComponent",function(t){var n=t.getUserData();t.stopPropagation(),e.onClickComponent(n)}),this.node.on("onChangeSubject",function(t){t.stopPropagation(),e.init(n.TopicData[n.Subject],n.Subject)}),this.node.on("onVideoLoaded",function(t){t.stopPropagation(),e.loading.active=!1}),this.init(n.TopicData[n.Subject],n.Subject)},start:function(){},init:function(e,t){if(this.loading.active=!1,e&&0!=e.length){this.bg.spriteFrame=this.bgSprite[t],this.content.removeAllChildren();var n=cc.instantiate(this.firstItem);n.getComponent("TopicListItem").init([e[0]]),this.content.addChild(n);for(var o=1;o<e.length-2;o+=3){var c=cc.instantiate(this.midleItem);c.getComponent("TopicListItem").init([e[o],e[o+1],e[o+2]]),this.content.addChild(c)}if(e.length>=2){var i=cc.instantiate(this.lastItem);i.getComponent("TopicListItem").init([e[e.length-1]]),this.content.addChild(i)}}},onClickTopic:function(e){this.componentContainer.removeAllChildren(!0),this.topicName.string=e.Name;for(var t=0;t<e.Component.length;t++){var n=cc.instantiate(this.componentItem),o=e.Component[t];n.getComponent("ComponentItem").init(o),this.componentContainer.addChild(n)}this.onShow()},movePointAtAngle:function(e,t){var n=e*Math.PI/180;return cc.v2(Math.sin(n)*t,-Math.cos(n)*t)},onShow:function(){this.panelComponent.active=!0},onHide:function(){this.panelComponent.active=!1},onPanelClick:function(){this.onHide()},HomeClick:function(){cc.director.loadScene(this.homeScene)},onClickComponent:function(e){switch(e.Type){case o.COMPONENT_TYPE.Vocabulary:var t=cc.instantiate(this.componentPopup[o.COMPONENT_TYPE.Vocabulary]);t.getComponent("VocabularyItem").init(e.Data),this.componentLayer.addChild(t);break;case o.COMPONENT_TYPE.Reading:var n=cc.instantiate(this.componentPopup[o.COMPONENT_TYPE.Reading]);n.getComponent("ReadingItem").init(e.Data),this.componentLayer.addChild(n);break;case o.COMPONENT_TYPE.Practices:var c=cc.instantiate(this.componentPopup[o.COMPONENT_TYPE.Practices]);c.getComponent("PracticesItem").init(e.Data),this.componentLayer.addChild(c);break;case o.COMPONENT_TYPE.Video:var i=cc.instantiate(this.componentPopup[o.COMPONENT_TYPE.Video]);i.getComponent("VideoItem").init(e.Data),this.componentLayer.addChild(i),this.loading.active=!0}}}),cc._RF.pop()},{GameConst:"GameConst",GameInfo:"GameInfo"}],VideoItem:[function(e,t){"use strict";cc._RF.push(t,"0ac08SWEPtMYJ//78ldtdbC","VideoItem"),cc.Class({extends:cc.Component,properties:{close:cc.Node,videoplayer:cc.VideoPlayer},onLoad:function(){var e=this;this.close.on(cc.Node.EventType.TOUCH_END,function(){e.node.removeFromParent(!0),e.videoplayer.stayOnBottom=!0}),this.videoplayer.node.on("ready-to-play",function(){var t=new cc.Event.EventCustom("onVideoLoaded",!0);cc.director.getScene().getChildByName("Canvas").dispatchEvent(t),e.videoplayer.stayOnBottom=!1,e.videoplayer.play()},this)},init:function(e){this._data=e}}),cc._RF.pop()},{}],VocabularyItem:[function(e,t){"use strict";cc._RF.push(t,"520161MsCtDcoluP2Hwtbt8","VocabularyItem"),cc.Class({extends:cc.Component,properties:{ans:[cc.Label],btnPlay:cc.Node,total:cc.Label,close:cc.Node},onLoad:function(){var e=this;this.close.on(cc.Node.EventType.TOUCH_END,function(){e.node.removeFromParent(!0)})},start:function(){},init:function(e){this._data=e,e&&0!=e.length&&(this.index=null,this.loadContent(),this.total.string="1/"+this._data.length)},loadContent:function(){var e=this;if(null==this.index?this.index=0:this.index+=1,!(this.index>=this._data.length)){var t=this,n=(t.index,t._data[t.index]),o=t.index+1;this.total.string=o+"/"+this._data.length;for(var c=function(n){e.ans[n].node.parent.color=cc.Color.WHITE,e.ans[n].string=t._data[t.index].ans[n],e.ans[n].node.parent.on(cc.Node.EventType.TOUCH_END,function(){e.ans[n].node.parent.off(cc.Node.EventType.TOUCH_END),e.ans[n].string==t._data[t.index].correct?(e.ans[n].node.parent.color=cc.Color.GREEN,e.scheduleOnce(t.loadContent,1)):e.ans[n].node.parent.color=cc.Color.RED})},i=0;i<4;i++)c(i);cc.resources.load("audio/"+n.sound,function(e,n){t.audio=n}),t.btnPlay.on(cc.Node.EventType.TOUCH_END,function(){t.audio&&(t.audioID?(cc.audioEngine.stop(t.audioID),t.audioID=cc.audioEngine.playEffect(t.audio,!1,1)):t.audioID=cc.audioEngine.playEffect(t.audio,!1,1))})}}}),cc._RF.pop()},{}]},{},["AutoResizeCanvas","EventCode","GameConst","GameInfo","PanelSettingComponent","ComponentItem","ComponentScene","PracticesItem","ReadingItem","VideoItem","VocabularyItem","Loading","Login","ProgramScene","SubjectScene","TopicItem","TopicListItem","TopicScene"]);