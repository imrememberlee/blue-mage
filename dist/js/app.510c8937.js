(function(e){function l(l){for(var t,r,i=l[0],s=l[1],p=l[2],m=0,h=[];m<i.length;m++)r=i[m],o[r]&&h.push(o[r][0]),o[r]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);c&&c(l);while(h.length)h.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,l=0;l<a.length;l++){for(var n=a[l],t=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(t=!1)}t&&(a.splice(l--,1),e=r(r.s=n[0]))}return e}var t={},o={app:0},a=[];function r(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,l,n){r.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,l){if(1&l&&(e=r(e)),8&l)return e;if(4&l&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var t in e)r.d(n,t,function(l){return e[l]}.bind(null,t));return n},r.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(l,"a",l),l},r.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=l,i=i.slice();for(var p=0;p<i.length;p++)l(i[p]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,l,n){e.exports=n("56d7")},"034f":function(e,l,n){"use strict";var t=n("64a9"),o=n.n(t);o.a},"09d9":function(e,l,n){"use strict";var t=n("75da"),o=n.n(t);o.a},"56d7":function(e,l,n){"use strict";n.r(l);var t=n("2b0e"),o=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{attrs:{id:"app"}},[n("aside",[n("SpellFilter",{attrs:{filterTypes:e.filterTypes,filterLevel:e.filterLevel,orderByLevel:e.orderByLevel},on:{typeChange:e.handleTypeChange,levelChange:e.handleLevelChange,orderChange:e.handleOrderChange}}),n("SpellList",{attrs:{spells:e.spells},on:{change:e.handleStatusChange}})],1),n("SpellInst",{attrs:{filterTypes:e.filterTypes,filterLevel:e.filterLevel,spells:e.spells,orderByLevel:e.orderByLevel}})],1)},a=[],r=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticClass:"spell-list"},[n("h3",[e._v("青魔法书")]),n("div",{staticClass:"spell-list-pager"},e._l(e.pages,function(l){return n("span",{key:l,class:{active:e.page===l},on:{click:function(n){e.page=l}}},[e._v(e._s(l))])}),0),e._l(e.showSpells,function(l,t){return n("div",{key:l.no,staticClass:"spell",class:{lighter:t%2===Math.floor(t/4)%2,learned:!!l.learned},attrs:{title:l.spell},on:{click:function(n){return e.handleClick(l,l.no-1)}}},[n("img",{attrs:{src:"icons/spells/"+l.icon}}),n("span",[e._v(e._s(l.no))])])}),n("p",{staticClass:"spell-list-note"},[e._v("选中（已学习）的技能不会出现在获取方式中")])],2)},i=[],s={props:{spells:Array},data(){return{page:1}},computed:{pages(){return Math.ceil(this.spells.length/16)},showSpells(){return this.spells.slice(16*(this.page-1),16*this.page)}},methods:{handleClick(e,l){e.learned=!e.learned,this.$emit("change",l,e.learned)}}},p=s,c=(n("a8fd"),n("2877")),m=Object(c["a"])(p,r,i,!1,null,null,null),h=m.exports,d=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("main",{staticClass:"spell-inst"},[n("h3",[e._v("可学习技能列表")]),0===e.showSpells.length?n("p",[e._v("当前条件下暂无可学习的技能")]):e._e(),e._l(e.showSpells,function(l){return n("div",{key:l.no,staticClass:"inst"},[n("img",{staticClass:"inst-spell-icon",attrs:{src:"icons/spells/"+l.icon}}),n("div",{staticClass:"inst-content"},[n("h4",[n("span",[e._v("["+e._s(l.no)+"]")]),e._v(" "+e._s(l.spell)+" "),n("small",[e._v("(Lv."+e._s(l.level)+")")])]),e._l(l.method,function(l,t){return n("p",{key:t},[n("img",{staticClass:"inst-method-type",attrs:{src:"icons/type_"+l.type+".png"}}),e._v("\n        "+e._s(e._f("renderMethod")(l))+" "),n("sup",[e._v("Lv."+e._s(l.level))])])})],2)])})],2)},u=[],v={props:{spells:Array,filterTypes:Object,filterLevel:Number,orderByLevel:Boolean},computed:{showSpells(){let e=this.spells.filter(e=>!e.learned&&e.level<=this.filterLevel&&e.method.some(e=>this.filterTypes[e.type]));return this.orderByLevel&&e.sort((e,l)=>e.level-l.level),e}},filters:{renderMethod(e){switch(e.type){case"map":let l=e.position;return`${e.map} ${e.rank?`[${e.rank}]`:""}${l.length?`(x:${l[0]}, y:${l[1]}${l[2]?`, z:${l[2]}`:""})`:""} - ${e.mob}`;case"raid":case"dungeon":case"trail":return`${e.name} - ${e.mob}`;case"fate":return`${e.map} - ${e.name} - ${e.mob}`;case"special":return e.text}}},methods:{handleClick(e,l){e.learned=!e.learned,this.$emit("change",l,e.learned)}}},y=v,g=(n("09d9"),Object(c["a"])(y,d,u,!1,null,null,null)),f=g.exports,b=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticClass:"spell-filter"},[n("h3",[e._v("角色等级")]),n("div",{staticClass:"spell-level"},[n("input",{attrs:{type:"number",max:"50",min:"1"},domProps:{value:e.filterLevel},on:{input:e.handleInput}}),n("div",{staticClass:"spell-level-order",class:{checked:e.orderByLevel},on:{click:function(l){return e.handleOrder(e.orderByLevel)}}},[e._v("按等级排序")])]),n("h3",[e._v("学习途径过滤")]),n("ul",e._l(e.filterTypes,function(l,t,o){return n("li",{key:t,staticClass:"type",class:{lighter:o%2===Math.floor(o/4)%2,checked:l},on:{click:function(n){return e.handleClick(t,l)}}},[n("img",{attrs:{src:"icons/type_"+t+".png"}})])}),0)])},T=[],_={props:{filterTypes:Object,filterLevel:Number,orderByLevel:Boolean},methods:{handleInput(e){let l=+e.target.value;isNaN(l)&&(l=50),this.$emit("levelChange",l)},handleClick(e,l){this.$emit("typeChange",e,!l)},handleOrder(e){this.$emit("orderChange",!e)}}},k=_,S=(n("de2b"),Object(c["a"])(k,b,T,!1,null,null,null)),C=S.exports,x=n("fccc");const L=function(e){let l;if(localStorage)l=localStorage.getItem(e);else{let n=document.cookie,t=n.indexOf(e+"=");if(t>=0){t+=e.length+1;let o=n.indexOf(";",t);l=n.substr(t,-1===o?void 0:o-t)}}if(l)try{return JSON.parse(l)}catch(n){return}},B=function(e,l){if(l=JSON.stringify(l),localStorage)localStorage.setItem(e,l);else{let n=new Date;n.setFullYear(n.getFullYear()+10),document.cookie=`${e}=${l};expires=${n.toUTCString()};path=/`}},w=function(){let e=L("spell-status")||[];Array.isArray(e)&&e.length&&x.forEach((l,n)=>{l.learned=!!e[n]})};w();var M={name:"app",data(){return{spells:x,filterTypes:Object.assign({special:!0,map:!0,fate:!0,dungeon:!0,trail:!0,raid:!0},L("filter-types")||{}),filterLevel:L("filter-level")||50,orderByLevel:L("order-by-level")||!1}},components:{SpellList:h,SpellInst:f,SpellFilter:C},methods:{handleStatusChange(e,l){x[e].learned=l;let n=x.map(({learned:e})=>e?1:0);B("spell-status",n)},handleTypeChange(e,l){this.$set(this.filterTypes,e,l),B("filter-types",this.filterTypes)},handleLevelChange(e){this.filterLevel=e,B("filter-level",e)},handleOrderChange(e){this.orderByLevel=e,B("order-by-level",e)}}},$=M,W=(n("034f"),Object(c["a"])($,o,a,!1,null,null,null)),O=W.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(O)}}).$mount("#app")},"64a9":function(e,l,n){},"75da":function(e,l,n){},a8fd:function(e,l,n){"use strict";var t=n("fe53"),o=n.n(t);o.a},b529:function(e,l,n){},de2b:function(e,l,n){"use strict";var t=n("b529"),o=n.n(t);o.a},fccc:function(e){e.exports=[{no:"1",spell:"水炮",location:"Default",level:1,icon:"Water_Cannon.png",method:[{type:"special",text:"自动习得",level:1}]},{no:"2",spell:"火炎放射",location:"Brayflox's Longstop (Hard) — Gobmachine G-VI",level:50,icon:"Flame_Thrower.png",method:[{type:"dungeon",name:"纷争要地布雷福洛克斯野营地",mob:"6号哥布林坦克",level:50}]},{no:"3",spell:"水流吐息",location:"The Dragon's Neck — Ultros\nThe Whorleater (Hard) — Leviathan",level:50,icon:"Aqua_Breath.png",method:[{type:"trail",name:"艾玛吉娜杯斗技大会决赛",mob:"奥尔特罗斯",level:50},{type:"trail",name:"利维亚桑歼灭战",mob:"利维亚桑",level:50}]},{no:"4",spell:"狂乱",location:"Pharos Sirius — Zu",level:50,icon:"Flying_Frenzy.png",method:[{type:"dungeon",name:"领航明灯天狼星灯塔",mob:"祖",level:50}]},{no:"5",spell:"钻头炮",location:"Northern Thanalan (Reverse Engineering FATE) — Abandoned Vanguard\nNorthern Thanalan (x16,y15) — Magitek Vanguard H-2",level:46,icon:"Drill_Cannons.png",method:[{type:"fate",map:"北萨纳兰",name:"逆向工程",mob:"废弃的魔导先锋",level:46},{type:"map",map:"北萨纳兰",rank:null,position:[16,15,0],mob:"魔导先锋强化型",level:46}]},{no:"6",spell:"高压电流",location:"The Binding Coil of Bahamut - Turn 1 — ADS\nThe Binding Coil of Bahamut - Turn 2 — ADS",level:50,icon:"High_Voltage.png",method:[{type:"raid",name:"巴哈姆特大迷宫 邂逅之章1",mob:"自卫系统",level:50},{type:"raid",name:"巴哈姆特大迷宫 邂逅之章2",mob:"自卫系统",level:50}]},{no:"7",spell:"若隐若现",location:"Northern Thanalan (Rank B Elite Mark) — Flame Sergeant Dalvag",level:50,icon:"Loom.png",method:[{type:"map",map:"北萨纳兰",rank:"B",position:[],mob:"永恒不灭的菲兰德副耀士",level:50}]},{no:"8",spell:"终极针",location:"Middle La Noscea (x15,y15) — Killer Wespe",level:13,icon:"Final_Sting.png",method:[{type:"map",map:"中拉诺西亚",rank:null,position:[15,15,0],mob:"杀手胡蜂",level:13}]},{no:"9",spell:"苦闷之歌",location:"Pharos Sirius — Siren",level:50,icon:"Song_of_Torment.png",method:[{type:"dungeon",name:"领航明灯天狼星灯塔",mob:"塞壬",level:50}]},{no:"10",spell:"怒视",location:"The Aurum Vale — Coincounter",level:47,icon:"Glower.png",method:[{type:"dungeon",name:"毒雾洞窟黄金谷",mob:"数币巨人",level:47}]},{no:"11",spell:"平原震裂",location:"North Shroud (19x,28y) — Clay Golem\nCopperbell Mines (Hard) — Gogmagolem",level:28,icon:"Plaincracker.png",method:[{type:"map",map:"黑衣森林北部林区",rank:null,position:[19,28,0],mob:"泥土巨像",level:28},{type:"dungeon",name:"骚乱坑道铜铃铜山",mob:"哥革巨像",level:50}]},{no:"12",spell:"怒发冲冠",location:"East Shroud (x18,y24) — Wild Boar",level:20,icon:"Bristle.png",method:[{type:"map",map:"黑衣森林东部林区",rank:null,position:[18,24,0],mob:"狂野疣猪",level:20}]},{no:"13",spell:"白风",location:"Learn 10 spells and obtain a Whalaqee Totem from Wayward Gaheel Ja, in Ul'dah — Steps of Thal  (x12.5,y12.9).",level:1,icon:"White_Wind.png",method:[{type:"special",text:"学习 10 个技能后可从[乌尔达哈来生回廊]的[异男子嘎希迦]处获得[天青图腾]",level:1}]},{no:"14",spell:"5级石化",location:"Haukke Manor — Manor Sentry\nHaukke Manor (Hard) — Manor Sentry",level:28,icon:"Level_5_Petrify.png",method:[{type:"dungeon",name:"名门府邸静语庄园",mob:"庄园的守卫",level:28},{type:"dungeon",name:"恶灵府邸静语庄园",mob:"庄园的守卫",level:50}]},{no:"15",spell:"锋利菜刀",location:"The Wanderer's Palace — Tonberry King",level:50,icon:"Sharpened_Knife.png",method:[{type:"dungeon",name:"神灵圣域放浪神古神殿",mob:"冬贝利王",level:50}]},{no:"16",spell:"冰棘屏障",location:"Central Shroud (x27,y24) — Trickster Imp",level:9,icon:"Ice_Spikes.png",method:[{type:"map",map:"黑衣森林中央林区",rank:null,position:[27,24,0],mob:"捣蛋小鬼",level:9}]},{no:"17",spell:"吸血",location:"Lower La Noscea (x27,y16) — Cave Bat",level:7,icon:"Blood_Drain.png",method:[{type:"map",map:"拉诺西亚低地",rank:null,position:[27,16,0],mob:"洞穴蝙蝠",level:7}]},{no:"18",spell:"橡果炸弹",location:"North Shroud (x27,y28) — Treant Sapling",level:12,icon:"Acorn_Bomb.png",method:[{type:"map",map:"黑衣森林北部林区",rank:null,position:[27,28,0],mob:"幼体树精",level:12}]},{no:"19",spell:"投弹",location:"Middle La Noscea (x23,y21) — Goblin Fisher\nMiddle La Noscea (x23,y21) — Goblin Gambler",level:5,icon:"Bomb_Toss.png",method:[{type:"map",map:"中拉诺西亚",rank:null,position:[23,21,0],mob:"哥布林鱼师",level:5},{type:"map",map:"中拉诺西亚",rank:null,position:[23,21,0],mob:"哥布林赌徒",level:5}]},{no:"20",spell:"破防",location:"Learn 5 spells and obtain a Whalaqee Totem from Wayward Gaheel Ja, in Ul'dah — Steps of Thal  (x12.5,y12.9).",level:1,icon:"Off-guard.png",method:[{type:"special",text:"学习 5 个技能后可从[乌尔达哈来生回廊]的[异男子嘎希迦]处获得[天青图腾]",level:1}]},{no:"21",spell:"自爆",location:"Western Thanalan (x27,y16) — Glide Bomb",level:12,icon:"Self-destruct.png",method:[{type:"map",map:"西萨纳兰",rank:null,position:[27,16,0],mob:"滑行爆弹怪",level:12}]},{no:"22",spell:"融合",location:"Learn 20 spells and obtain a Whalaqee Totem from Wayward Gaheel Ja, in Ul'dah — Steps of Thal  (x12.5,y12.9).",level:1,icon:"Transfusion.png",method:[{type:"special",text:"学习 20 个技能后可从[乌尔达哈来生回廊]的[异男子嘎希迦]处获得[天青图腾]",level:1}]},{no:"23",spell:"拍掌",location:"Central Thanalan (x16,y19) — Qiqirn Shellsweeper\nEastern La Noscea (x26,y32) — Qiqirn Gullroaster",level:6,icon:"Faze.png",method:[{type:"map",map:"中萨纳兰",rank:null,position:[16,19,0],mob:"卢恩人护甲手",level:6},{type:"map",map:"东拉诺西亚",rank:null,position:[26,32,0],mob:"卢恩人烘鸥手",level:6}]},{no:"24",spell:"投掷沙丁鱼",location:"Eastern La Noscea (x27,y35) — Apkallu",level:30,icon:"Flying_Sardine.png",method:[{type:"map",map:"东拉诺西亚",rank:null,position:[27,35,0],mob:"碧企鹅",level:30}]},{no:"25",spell:"鼻息",location:"The Dragon's Neck — Typhon",level:50,icon:"Snort.png",method:[{type:"trail",name:"艾玛吉娜杯斗技大会决赛",mob:"提丰",level:50}]},{no:"26",spell:"4星吨",location:"The Dragon's Neck — Ultros",level:50,icon:"4-tonze_Weight.png",method:[{type:"trail",name:"艾玛吉娜杯斗技大会决赛",mob:"奥尔特罗斯",level:50}]},{no:"27",spell:"诡异视线",location:"Amdapor Keep — Anantaboga ",level:50,icon:"The_Look.png",method:[{type:"dungeon",name:"邪教驻地无限城古堡",mob:"阿难塔波嘉",level:50}]},{no:"28",spell:"臭气",location:"Central Shroud (x18,y21) — Stroper\nCentral Shroud (x15,y21) — Halitostroper",level:31,icon:"Bad_Breath.png",method:[{type:"map",map:"黑衣森林中央林区",rank:null,position:[18,21,0],mob:"套索花",level:31},{type:"map",map:"黑衣森林中央林区",rank:null,position:[15,21,0],mob:"臭套索花",level:31}]},{no:"29",spell:"超硬化",location:"The Stone Vigil (Hard) — Cuca Fera",level:50,icon:"Diamondback.png",method:[{type:"dungeon",name:"激战城塞石卫塔",mob:"库卡龙龟",level:50}]},{no:"30",spell:"强力守护",location:"Learn 10 spells and obtain a Whalaqee Totem from Wayward Gaheel Ja, in Ul'dah — Steps of Thal  (x12.5,y12.9).",level:1,icon:"Mighty_Guard.png",method:[{type:"special",text:"学习 10 个技能后可从[乌尔达哈来生回廊]的[异男子嘎希迦]处获得[天青图腾]",level:1}]},{no:"31",spell:"滑舌",location:"Central Thanalan (x27,y19) — Toxic Toad\nWestern Thanalan (x15,y7) — Giggling Gigantoad",level:14,icon:"Sticky_Tongue.png",method:[{type:"map",map:"中萨纳兰",rank:null,position:[27,19,0],mob:"毒蟾蜍",level:14},{type:"map",map:"西萨纳兰",rank:null,position:[15,7,0],mob:"痴笑巨蟾蜍",level:14}]},{no:"32",spell:"油性分泌物",location:"Western Thanalan (x15,y7) — Giggling Gigantoad",level:24,icon:"Toad_Oil.png",method:[{type:"map",map:"西萨纳兰",rank:null,position:[15,7,0],mob:"痴笑巨蟾蜍",level:24}]},{no:"33",spell:"寒冰咆哮",location:"Cutter's Cry — Chimera",level:38,icon:"The_Ram's_Voice.png",method:[{type:"dungeon",name:"流沙迷宫樵鸣洞",mob:"奇美拉",level:38}]},{no:"34",spell:"雷电咆哮",location:"Cutter's Cry — Chimera",level:38,icon:"The_Dragon's_Voice.png",method:[{type:"dungeon",name:"流沙迷宫樵鸣洞",mob:"奇美拉",level:38}]},{no:"35",spell:"导弹",location:"Battle in the Big Keep — Enkidu",level:50,icon:"Missile.png",method:[{type:"trail",name:"无限城的死斗",mob:"恩奇都",level:50}]},{no:"36",spell:"千针刺",location:"Southern Thanalan (x16,y15) — Sabotender Bailaor\nCutter's Cry — Sabotender Desertor",level:24,icon:"1000_Needles.png",method:[{type:"map",map:"南萨纳兰",rank:null,position:[16,15,0],mob:"仙人刺舞蹈家",level:24},{type:"dungeon",name:"流沙迷宫樵鸣洞",mob:"仙人刺逃兵",level:24}]},{no:"37",spell:"喷墨",location:"Sastasha (Hard) — Kraken",level:50,icon:"Ink_Jet.png",method:[{type:"dungeon",name:"逆转要害沙斯塔夏溶洞",mob:"克拉肯",level:50}]},{no:"38",spell:"火投枪",location:"The Wanderer's Palace (Hard) — Frumious Koheel Ja",level:50,icon:"Fire_Angon.png",method:[{type:"dungeon",name:"武装圣域放浪神古神殿",mob:"折角骑士 寇黑加",level:50}]},{no:"39",spell:"月之笛",location:"Clear 10 Stages in The Masked Carnivale and obtain a Whalaqee Totem from Wayward Gaheel Ja, in Ul'dah — Steps of Thal  (x12.5,y12.9).",level:1,icon:"Moon_Flute.png",method:[{type:"special",text:"完成 10 种假面狂欢关卡后可从[乌尔达哈来生回廊]的[异男子嘎希迦]处获得[天青图腾]",level:1}]},{no:"40",spell:"螺旋尾",location:"Sastasha (Hard) — Karlabos",level:50,icon:"Tail_Screw.png",method:[{type:"dungeon",name:"逆转要害沙斯塔夏溶洞",mob:"真红龙虾",level:50}]},{no:"41",spell:"精神冲击",location:"The Tam-Tara Deepcroft — Galvanth the Dominator",level:16,icon:"Mind_Blast.png",method:[{type:"dungeon",name:"地下灵殿塔姆·塔拉墓园",mob:"主宰者 加尔梵斯",level:16}]},{no:"42",spell:"死亡宣告",location:"Clear 20 Stages in The Masked Carnivale and obtain a Whalaqee Totem from Wayward Gaheel Ja, in Ul'dah — Steps of Thal  (x12.5,y12.9).",level:1,icon:"Doom.png",method:[{type:"special",text:"完成 20 种假面狂欢关卡后可从[乌尔达哈来生回廊]的[异男子嘎希迦]处获得[天青图腾]",level:1}]},{no:"43",spell:"惊奇光",location:"Mor Dhona (x13,y10) — Lentic Mudpuppy",level:45,icon:"Peculiar_Light.png",method:[{type:"map",map:"摩杜纳",rank:null,position:[13,10,0],mob:"静水泥沼蝾螈",level:45}]},{no:"44",spell:"飞翎雨",location:"The Howling Eye (Hard) — Garuda\nThe Howling Eye (Extreme) — Garuda",level:50,icon:"Feather_Rain.png",method:[{type:"trail",name:"迦楼罗歼灭战",mob:"迦楼罗",level:50},{type:"trail",name:"迦楼罗歼殛战",mob:"迦楼罗",level:50}]},{no:"45",spell:"地火喷发",location:"The Bowl of Embers (Hard) — Ifrit\nThe Bowl of Embers (Extreme) — Ifrit",level:50,icon:"Eruption.png",method:[{type:"trail",name:"伊弗利特歼灭战",mob:"伊弗利特",level:50},{type:"trail",name:"伊弗利特歼殛战",mob:"伊弗利特",level:50}]},{no:"46",spell:"山崩",location:"The Navel (Hard) — Titan\nThe Navel (Extreme) — Titan",level:50,icon:"Mountain_Buster.png",method:[{type:"trail",name:"泰坦歼灭战",mob:"泰坦",level:50},{type:"trail",name:"泰坦歼殛战",mob:"泰坦",level:50}]},{no:"47",spell:"轰雷",location:"The Striking Tree (Hard) — Ramuh\nThe Striking Tree (Extreme) — Ramuh",level:50,icon:"Shock_Strike.png",method:[{type:"trail",name:"拉姆歼灭战",mob:"拉姆",level:50},{type:"trail",name:"拉姆歼殛战",mob:"拉姆",level:50}]},{no:"48",spell:"冰雪乱舞",location:"Akh Afah Amphitheatre (Hard) — Shiva\nAkh Afah Amphitheatre (Extreme) — Shiva",level:50,icon:"Glass_Dance.png",method:[{type:"trail",name:"希瓦歼灭战",mob:"希瓦",level:50},{type:"trail",name:"希瓦歼殛战",mob:"希瓦",level:50}]},{no:"49",spell:"水神的面纱",location:"The Whorleater (Hard) — Leviathan\nThe Whorleater (Extreme) — Leviathan",level:50,icon:"Veil_of_the_Whorl.png",method:[{type:"trail",name:"利维亚桑歼灭战",mob:"利维亚桑",level:50},{type:"trail",name:"利维亚桑歼殛战",mob:"利维亚桑",level:50}]}]},fe53:function(e,l,n){}});
//# sourceMappingURL=app.510c8937.js.map