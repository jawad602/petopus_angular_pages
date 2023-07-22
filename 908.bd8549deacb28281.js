"use strict";(self.webpackChunkpetopus_angular=self.webpackChunkpetopus_angular||[]).push([[908],{5908:(U,m,o)=>{o.r(m),o.d(m,{HomeModule:()=>Q});var r=o(6895),l=o(820),e=o(8274),u=o(1381),Z=o(7556),c=o(7934),d=o(577);const v=["langDropdown"],T=["accountDropdown"],a=function(){return{fill:"white"}},f=function(n){return{show:n}},A=function(){return{fill:"black"}};let M=(()=>{class n{constructor(t){this.router=t,this.language_dropdown=!1,this.account_dropdown=!1,this.langDropdown={},this.accountDropdown={}}onGlobalClick(t){this.langDropdown.nativeElement.contains(t.target)||(this.language_dropdown=!1),this.accountDropdown.nativeElement.contains(t.target)||(this.account_dropdown=!1)}ngOnInit(){this.name=localStorage.getItem("name"),this.email=localStorage.getItem("email")}logout(){localStorage.clear(),this.router.navigate(["/login"])}nameReducer(t){const i=t.split(" ");return i[0][0]+i[1][0]}toggleLanguageDropdown(){this.language_dropdown=!this.language_dropdown}toggleAccountDropdown(){this.account_dropdown=!this.account_dropdown}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-header"]],viewQuery:function(t,i){if(1&t&&(e.Gf(v,5),e.Gf(T,5)),2&t){let g;e.iGM(g=e.CRH())&&(i.langDropdown=g.first),e.iGM(g=e.CRH())&&(i.accountDropdown=g.first)}},hostBindings:function(t,i){1&t&&e.NdJ("mousedown",function(h){return i.onGlobalClick(h)},!1,e.evT)},decls:148,vars:50,consts:[[1,"inner-container","header-content"],[1,"mobile-menu-button"],[1,"fa","fa-bars"],[1,"logo"],[1,"search-section"],["type","text","placeholder","Search here..."],[1,"pos-absolute"],["src","assets/images/search.svg","alt",""],[1,"right-section"],[1,"icons-section"],[1,"single-item","bell-icon"],["src","assets/images/notifications-icon.svg",3,"svgStyle"],[1,"pos-abslute"],[1,"single-item","mail-icon"],["src","assets/images/header-mail-icon.svg",3,"svgStyle"],[1,"account-dropdown","dropdown-list-parent",3,"click"],["accountDropdown",""],["src","assets/images/user-icon.png","alt",""],[1,"user-data"],["src","assets/images/arrow-drop-down-icon.svg",3,"svgStyle"],[1,"dropdown-list",3,"ngClass"],[3,"click"],[1,"language-dropdown","dropdown-list-parent",3,"click"],["langDropdown",""],["src","assets/images/arrow-dwon-icon.svg",3,"svgStyle"],[1,"mobile-menu"],[1,"menu-header"],[1,"menu-close-img"],["src","assets/images/close-icon.png","alt","",1,"close-icon"],[1,"menu-profile"],["src","assets/images/mob-user.png","alt",""],[1,"menu-profile-bio"],[1,"star-icon"],[1,"fa","fa-star"],[1,"mobile-main-menu"],["src","assets/images/photo-icon.svg",3,"svgStyle"],["src","assets/images/friends-icon.svg",3,"svgStyle"],["src","assets/images/message-icon.svg",3,"svgStyle"],["src","assets/images/group-people-icon.svg",3,"svgStyle"],["src","assets/images/event-calender-icon.svg",3,"svgStyle"],["src","assets/images/announces-icon.svg",3,"svgStyle"],["src","assets/images/parks-icon.svg",3,"svgStyle"],["src","assets/images/appointment-icon.svg",3,"svgStyle"],["src","assets/images/article-icon.svg",3,"svgStyle"],[1,"active"],["src","assets/images/breeder-icon.svg",3,"svgStyle"],["src","assets/images/advertisement-icon.svg",3,"svgStyle"],["src","assets/images/feedback-icon.svg",3,"svgStyle"],["src","assets/images/settings-icon.svg",3,"svgStyle"],["src","assets/images/settings-applications-icon.svg",3,"svgStyle"],["src","assets/images/assignment-icon.svg",3,"svgStyle"],["src","assets/images/image-icon.svg",3,"svgStyle"],["src","assets/images/delete-icon.svg",3,"svgStyle"],["src","assets/images/logout-icon.svg",3,"svgStyle"],[1,"mobile-section"],[1,"card-section","search"],[1,"search-field"],["type","text","placeholder","Search Here"],["src","assets/images/mobile-search.svg","alt",""],[1,"search-icon","fa","fa-search"]],template:function(t,i){1&t&&(e.TgZ(0,"header")(1,"div",0)(2,"div",1),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"h1",3)(5,"a"),e._uU(6,"petopus"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"input",5),e.TgZ(9,"span",6),e._UZ(10,"img",7),e.qZA()(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"a"),e._UZ(15,"svg-icon",11),e.qZA(),e.TgZ(16,"span",12),e._uU(17,"16"),e.qZA()(),e.TgZ(18,"div",13)(19,"a"),e._UZ(20,"svg-icon",14),e.qZA(),e.TgZ(21,"span",6),e._uU(22,"27"),e.qZA()()(),e.TgZ(23,"div",15,16),e.NdJ("click",function(){return i.toggleAccountDropdown()}),e._UZ(25,"img",17),e.TgZ(26,"div",18)(27,"h2"),e._uU(28,"Franklin Jr. "),e._UZ(29,"svg-icon",19),e.qZA(),e.TgZ(30,"p"),e._uU(31,"franklinjr@mail.com"),e.qZA()(),e.TgZ(32,"ul",20)(33,"li",21),e.NdJ("click",function(){return i.logout()}),e._uU(34,"Logout"),e.qZA()()(),e.TgZ(35,"div",22,23),e.NdJ("click",function(){return i.toggleLanguageDropdown()}),e.TgZ(37,"h2"),e._uU(38,"EN"),e.qZA(),e._UZ(39,"svg-icon",24),e.TgZ(40,"ul",20)(41,"li"),e._uU(42,"Ar"),e.qZA(),e.TgZ(43,"li"),e._uU(44,"Fr"),e.qZA(),e.TgZ(45,"li"),e._uU(46,"Ur"),e.qZA()()()()(),e.TgZ(47,"div",25)(48,"div",26)(49,"div",27),e._UZ(50,"img",28),e.qZA(),e.TgZ(51,"div",29),e._UZ(52,"img",30),e.TgZ(53,"div",31)(54,"h4"),e._uU(55,"Franklin Jr."),e.qZA(),e.TgZ(56,"p"),e._uU(57,"Pet Trainer"),e.qZA(),e.TgZ(58,"span",32),e._UZ(59,"i",33)(60,"i",33)(61,"i",33)(62,"i",33)(63,"i",33),e.TgZ(64,"p"),e._uU(65,"(250)"),e.qZA()()()()(),e.TgZ(66,"div",34)(67,"ul")(68,"li")(69,"a"),e._UZ(70,"svg-icon",35),e._uU(71," Photo "),e.qZA()(),e.TgZ(72,"li")(73,"a"),e._UZ(74,"svg-icon",36),e._uU(75," Friends "),e.qZA()(),e.TgZ(76,"li")(77,"a"),e._UZ(78,"svg-icon",37),e._uU(79," Message "),e.qZA()(),e.TgZ(80,"li")(81,"a"),e._UZ(82,"svg-icon",38),e._uU(83," Group "),e.qZA()(),e.TgZ(84,"li")(85,"a"),e._UZ(86,"svg-icon",39),e._uU(87," Events "),e.qZA()(),e.TgZ(88,"li")(89,"a"),e._UZ(90,"svg-icon",40),e._uU(91," Announces "),e.qZA()(),e.TgZ(92,"li")(93,"a"),e._UZ(94,"svg-icon",41),e._uU(95," Parks "),e.qZA()(),e.TgZ(96,"li")(97,"a"),e._UZ(98,"svg-icon",42),e._uU(99," Appointment "),e.qZA()(),e.TgZ(100,"li")(101,"a"),e._UZ(102,"svg-icon",43),e._uU(103," Article "),e.qZA()(),e.TgZ(104,"li",44)(105,"a"),e._UZ(106,"svg-icon",45),e._uU(107," Breeder "),e.qZA()(),e.TgZ(108,"li")(109,"a"),e._UZ(110,"svg-icon",46),e._uU(111," Advertisement "),e.qZA()(),e.TgZ(112,"li")(113,"a"),e._UZ(114,"svg-icon",47),e._uU(115," Feedback "),e.qZA()()(),e.TgZ(116,"ul")(117,"li")(118,"a"),e._UZ(119,"svg-icon",48),e._uU(120," Account settings"),e.qZA()(),e.TgZ(121,"li")(122,"a"),e._UZ(123,"svg-icon",49),e._uU(124," Profile settings "),e.qZA()(),e.TgZ(125,"li")(126,"a"),e._UZ(127,"svg-icon",50),e._uU(128," Update Profile Photo "),e.qZA()(),e.TgZ(129,"li")(130,"a"),e._UZ(131,"svg-icon",51),e._uU(132," Update Header Photo "),e.qZA()(),e.TgZ(133,"li")(134,"a"),e._UZ(135,"svg-icon",52),e._uU(136," Delete Profile "),e.qZA()(),e.TgZ(137,"li")(138,"a"),e._UZ(139,"svg-icon",53),e._uU(140," Logout "),e.qZA()()()()()(),e.TgZ(141,"div",54)(142,"div",55)(143,"div",56),e._UZ(144,"input",57),e.TgZ(145,"span"),e._UZ(146,"img",58),e.qZA(),e._UZ(147,"i",59),e.qZA()()()),2&t&&(e.xp6(15),e.Q6J("svgStyle",e.DdM(24,a)),e.xp6(5),e.Q6J("svgStyle",e.DdM(25,a)),e.xp6(9),e.Q6J("svgStyle",e.DdM(26,a)),e.xp6(3),e.Q6J("ngClass",e.VKq(27,f,i.account_dropdown)),e.xp6(7),e.Q6J("svgStyle",e.DdM(29,A)),e.xp6(1),e.Q6J("ngClass",e.VKq(30,f,i.language_dropdown)),e.xp6(30),e.Q6J("svgStyle",e.DdM(32,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(33,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(34,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(35,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(36,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(37,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(38,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(39,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(40,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(41,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(42,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(43,a)),e.xp6(5),e.Q6J("svgStyle",e.DdM(44,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(45,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(46,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(47,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(48,a)),e.xp6(4),e.Q6J("svgStyle",e.DdM(49,a)))},dependencies:[r.mk,d.bk],styles:[".header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px}.header[_ngcontent-%COMP%]   .logo.logo-white[_ngcontent-%COMP%]{display:none}.dots-overflow[_ngcontent-%COMP%]{font-size:12px;overflow:hidden;white-space:nowrap;width:21ch;text-overflow:ellipsis}span.username-circle[_ngcontent-%COMP%]{width:45px;height:45px;display:grid;align-items:center;justify-content:center;border-radius:50%;background-color:#efefef;font-size:16px;font-weight:500}.settings-dropdown[_ngcontent-%COMP%]{top:20px;width:260px}"]}),n})(),y=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-banner"]],decls:37,vars:0,consts:[[1,"mobile-user-profile"],["src","/assets/images/mob-banner.png","alt","",1,"mob-banner"],[1,"mob-user-bio"],["src","/assets/images/mob-user.png","alt",""],[1,"user-bio"],[1,"heading"],[1,"fa","fa-star"],[1,"primary","user-follow-btn"],[1,"text"],[1,"user-status"],[1,"single-item"],[1,"banner"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7,"Franklin Jr."),e.qZA(),e.TgZ(8,"span"),e._UZ(9,"i",6)(10,"i",6)(11,"i",6)(12,"i",6)(13,"i",6),e.TgZ(14,"p"),e._uU(15,"(250)"),e.qZA()()(),e.TgZ(16,"a",7),e._uU(17,"Follow"),e.qZA(),e.TgZ(18,"p",8),e._uU(19,"Pet Trainer"),e.qZA(),e.TgZ(20,"div",9)(21,"div",10)(22,"p"),e._uU(23,"250"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"Likes"),e.qZA()(),e.TgZ(26,"div",10)(27,"p"),e._uU(28,"100"),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Posts"),e.qZA()(),e.TgZ(31,"div",10)(32,"p"),e._uU(33,"100"),e.qZA(),e.TgZ(34,"span"),e._uU(35,"Followers"),e.qZA()()()()()(),e._UZ(36,"div",11))}}),n})();const _=function(){return{fill:"#B3AEAE"}};let C=(()=>{class n{constructor(){this.colored_icon=!1}ngOnInit(){}changeImage(){this.colored_icon=!this.colored_icon}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-footer"]],decls:34,vars:6,consts:[[1,"inner-container","footer-content"],[1,"fa","fa-facebook"],[1,"fa","fa-twitter"],[1,"fa","fa-google-plus"],[1,"fa","fa-linkedin"],[1,"mobile-footer"],[1,"single-item"],[1,"icons",3,"src","svgStyle"],["src","/assets/images/footer-icon-2.png","alt",""],["src","/assets/images/footer-icon-3.png","alt",""]],template:function(t,i){1&t&&(e.TgZ(0,"footer")(1,"div",0)(2,"p"),e._uU(3,"Copyrights \xa9 2021 All Rights Reserved by Petopus"),e.qZA(),e.TgZ(4,"ul")(5,"li")(6,"a"),e._UZ(7,"i",1),e.qZA()(),e.TgZ(8,"li")(9,"a"),e._UZ(10,"i",2),e.qZA()(),e.TgZ(11,"li")(12,"a"),e._UZ(13,"i",3),e.qZA()(),e.TgZ(14,"li")(15,"a"),e._UZ(16,"i",4),e.qZA()()()(),e.TgZ(17,"div",5)(18,"div",6),e._UZ(19,"svg-icon",7),e.TgZ(20,"p"),e._uU(21,"About"),e.qZA()(),e.TgZ(22,"div",6),e._UZ(23,"img",8),e.TgZ(24,"p"),e._uU(25,"Feed"),e.qZA()(),e.TgZ(26,"div",6),e._UZ(27,"img",9),e.TgZ(28,"p"),e._uU(29,"Services"),e.qZA()(),e.TgZ(30,"div",6),e._UZ(31,"svg-icon",7),e.TgZ(32,"p"),e._uU(33,"Nearby"),e.qZA()()()()),2&t&&(e.xp6(19),e.Q6J("src","/assets/images/user-solid.svg")("svgStyle",e.DdM(4,_)),e.xp6(12),e.Q6J("src","/assets/images/location-icon.svg")("svgStyle",e.DdM(5,_)))},dependencies:[d.bk],styles:[".mobile-footer[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%]{display:inline-block;height:24px;width:24px}.mobile-footer[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:inherit;height:inherit}.mobile-footer[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:24px;width:24px}.mobile-footer[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]:hover{color:#ff5e3a}.mobile-footer[_ngcontent-%COMP%]   .single-item[_ngcontent-%COMP%]:hover   svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ff5e3a!important}"]}),n})(),x=(()=>{class n{constructor(){this.displayValue="hide"}ngOnInit(){}classToggle(){this.displayValue="hide"!=this.displayValue?"hide":"show"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mail-box"]],decls:30,vars:1,consts:[[1,"mail-section"],[1,"mail-box",3,"ngClass"],[1,"box-user"],["data",e.$Z9`/assets/images/arrow-left-icon.svg`],[1,"box-user-data"],["src","/assets/images/follower-img-1.png","alt","",1,"mail-img"],[1,"data"],[1,"box-message"],[1,"mail-1"],[1,"mail-2"],["href","#",1,"box-btn"],[1,"box-input-field"],["type","text","placeholder","Write something"],[1,"box-input-field-icon"],[1,"fa","fa-paperclip"],["data",e.$Z9`/assets/images/smile-icon.svg`],[1,"fa","fa-send-o"],[1,"box-shape"],[1,"mail-icon",3,"click"],["src","/assets/images/header-mail-icon.svg","alt",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"object",3),e.TgZ(4,"div",4),e._UZ(5,"img",5),e.TgZ(6,"div",6)(7,"h4"),e._uU(8,"Jenny Martins"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Senior Customer Service Assistant"),e.qZA()()()(),e.TgZ(11,"div",7)(12,"p",8),e._uU(13,"Hello there."),e.qZA(),e.TgZ(14,"div",9)(15,"h5"),e._uU(16,"Lost My Cat Joeda "),e.qZA(),e.TgZ(17,"p"),e._uU(18," At vero eos et accusamus et iusto odio At vero eos et accusamus et iusto "),e.qZA(),e.TgZ(19,"a",10),e._uU(20,"View Detials"),e.qZA()()(),e.TgZ(21,"div",11),e._UZ(22,"input",12),e.TgZ(23,"div",13),e._UZ(24,"i",14)(25,"object",15)(26,"i",16),e.qZA()(),e._UZ(27,"div",17),e.qZA(),e.TgZ(28,"div",18),e.NdJ("click",function(){return i.classToggle()}),e._UZ(29,"img",19),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngClass",i.displayValue))},dependencies:[r.mk],styles:[".show[_ngcontent-%COMP%]{display:block}.hide[_ngcontent-%COMP%]{display:none}"]}),n})();function S(n,s){1&n&&e._UZ(0,"app-banner")}function P(n,s){if(1&n&&(e.ynx(0),e.YNc(1,S,1,0,"app-banner",4),e._UZ(2,"app-mail-box"),e.TgZ(3,"div",5)(4,"div",6),e._UZ(5,"router-outlet"),e.qZA()(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.data.banner)}}function w(n,s){1&n&&e._UZ(0,"router-outlet")}const D=function(){return{fill:"black"}};let b=(()=>{class n{constructor(t,i,g,h,B,F){this.router=t,this.route=i,this.showMessagePage=g,this.location=h,this.auth=B,this.component_communication=F,this.showTrendingPost=!0,this.showFriendSuggestion=!0,this.showGroupSuggestion=!0,this.showProfileMenu=!0,this.showPagination=!0,this.showUserProfile=!0,this.showLeftAds=!0,this.showRightAds=!0,this.showSidebarMenu=!0,this.data=this.component_communication.Data,this.localData={banner:Boolean(localStorage.getItem("banner")),righrSidebar:Boolean(localStorage.getItem("rightsidebar")),profileMenu:Boolean(localStorage.getItem("profilemenu"))}}ngOnInit(){console.log("Home Component"),this.component_communication.Data.subscribe(t=>{this.data=t})}goBack(){this.location.back()}changeMessagePageValue(t){console.log("value is change in home"),this.showMessagePage.showMessagePageValue=Boolean(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(u.T),e.Y36(r.Ye),e.Y36(Z.e),e.Y36(c.K))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:7,vars:4,consts:[[1,"mail-icon",2,"position","fixed","top","20px","left","30px","z-index","10000","height","24px","width","24px",3,"click"],["src","/assets/images/arrow-left-solid.svg",1,"icons",2,"height","24px","z-index","100000",3,"svgStyle"],[4,"ngIf","ngIfElse"],["messagePage",""],[4,"ngIf"],[1,"middle-section"],[1,"inner-container","middle-content"]],template:function(t,i){if(1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0),e.NdJ("click",function(){return i.goBack()}),e._UZ(2,"svg-icon",1),e.qZA(),e.YNc(3,P,6,1,"ng-container",2),e.YNc(4,w,1,0,"ng-template",null,3,e.W1O),e._UZ(6,"app-footer")),2&t){const g=e.MAs(5);e.xp6(2),e.Q6J("svgStyle",e.DdM(3,D)),e.xp6(1),e.Q6J("ngIf",!i.showMessagePage.showMessagePageValue)("ngIfElse",g)}},dependencies:[r.O5,M,y,C,x,l.lC,d.bk]}),n})();var p=o(8968),J=o(3078);const O=[{path:"",component:b,children:[{path:"",pathMatch:"full",redirectTo:"login"},{path:"professional",loadChildren:()=>Promise.all([o.e(799),o.e(38)]).then(o.bind(o,3038)).then(n=>n.ProfessionalModule),canActivate:[p.PP,p.zC]},{path:"owner",loadChildren:()=>Promise.all([o.e(799),o.e(333),o.e(47)]).then(o.bind(o,3047)).then(n=>n.OwnerModule),canActivate:[p.PP,p.t]},{path:"guest",loadChildren:()=>Promise.all([o.e(799),o.e(333),o.e(530)]).then(o.bind(o,6530)).then(n=>n.GuestModule),canActivate:[p.PP,p.Ak]},{path:"login",component:J.G}]}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(O),l.Bz]}),n})();var H=o(4466);let Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,H.m,q,d._J.forRoot()]}),n})()},4466:(U,m,o)=>{o.d(m,{m:()=>Z});var r=o(6895),l=o(529),e=o(577),u=o(8274);let Z=(()=>{class c{}return c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[r.ez,l.JF,e._J.forRoot()]}),c})()}}]);