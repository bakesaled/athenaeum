(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6Fsg":function(e,t,n){"use strict";n.r(t),n.d(t,"TableModule",(function(){return H}));var c=n("2kYt"),a=n("PCNd"),o=n("sEIs"),i=n("EM62"),r=n("XzLU"),l=n("YtkY"),m=n("n0np");let s=(()=>{class e extends r.b{constructor(e){super(e),this.store=e,this.components$=this.select((e=>e.ui.components))}selectComponentsByName(e){return this.components$.pipe(Object(l.a)((t=>t.find((t=>t.name.toLowerCase()===e.toLowerCase())))))}}return e.\u0275fac=function(t){return new(t||e)(i.Ub(m.a))},e.\u0275prov=i.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n("3Uyd"),u=n("KZIX"),f=n("FlRo");function p(e,t){if(1&e&&(i.Qb(0,"th",3),i.vc(1),i.Pb()),2&e){const e=i.ac();i.Ab(1),i.xc(" ",e.athColumnDef.headerText||e.athColumnDef.columnDefName," ")}}function h(e,t){if(1&e&&(i.Qb(0,"td",4),i.vc(1),i.bc(2,"number"),i.Pb()),2&e){const e=t.$implicit,n=i.ac();i.Ab(1),i.xc(" ",i.dc(2,1,e[n.athColumnDef.columnDefName],"1.0-0")," ")}}let d=(()=>{class e{constructor(e){this.table=e}ngOnInit(){this.matColumnDef&&(this.matColumnDef.name=this.athColumnDef.columnDefName)}ngOnDestroy(){this.table&&this.table.removeColumnDef(this.matColumnDef)}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(f.j,8))},e.\u0275cmp=i.Eb({type:e,selectors:[["ath-numeric-column"]],viewQuery:function(e,t){var n;1&e&&i.qc(f.c,!0),2&e&&i.jc(n=i.Zb())&&(t.matColumnDef=n.first)},inputs:{athColumnDef:"athColumnDef"},decls:3,vars:0,consts:[["matColumnDef",""],["mat-header-cell","","class","ath-numeric-header",4,"matHeaderCellDef"],["mat-cell","","class","ath-numeric-cell",4,"matCellDef"],["mat-header-cell","",1,"ath-numeric-header"],["mat-cell","",1,"ath-numeric-cell"]],template:function(e,t){1&e&&(i.Ob(0,0),i.uc(1,p,2,1,"th",1),i.uc(2,h,3,4,"td",2),i.Nb())},directives:[f.c,f.e,f.b,f.d,f.a],pipes:[c.e],styles:[".ath-numeric-cell[_ngcontent-%COMP%], .ath-numeric-header[_ngcontent-%COMP%]{padding-left:5px!important;padding-right:5px!important}.ath-numeric-cell[_ngcontent-%COMP%]{text-align:right}.ath-numeric-header[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0}),e})();function g(e,t){if(1&e&&(i.Qb(0,"th",8),i.vc(1),i.Pb()),2&e){const e=i.ac(2).$implicit;i.Ab(1),i.wc(e.headerText)}}function D(e,t){if(1&e&&(i.Qb(0,"td",9),i.vc(1),i.Pb()),2&e){const e=t.$implicit,n=i.ac(2).$implicit;i.Ab(1),i.xc(" ",e[n.columnDefName]," ")}}function C(e,t){if(1&e&&(i.Ob(0),i.Ob(1,5),i.uc(2,g,2,1,"th",6),i.uc(3,D,2,1,"td",7),i.Nb(),i.Nb()),2&e){const e=i.ac().$implicit;i.Ab(1),i.gc("matColumnDef",e.columnDefName)}}function y(e,t){if(1&e&&(i.Ob(0),i.Lb(1,"ath-numeric-column",10),i.Nb()),2&e){const e=i.ac().$implicit;i.Ab(1),i.gc("athColumnDef",e)}}function w(e,t){if(1&e&&(i.Ob(0),i.uc(1,C,4,1,"ng-container",4),i.uc(2,y,2,1,"ng-container",4),i.Nb()),2&e){const e=t.$implicit;i.Ab(1),i.gc("ngIf","text"===e.columnType),i.Ab(1),i.gc("ngIf","numeric"===e.columnType)}}function v(e,t){1&e&&i.Lb(0,"tr",11)}function P(e,t){1&e&&i.Lb(0,"tr",12)}let Q=(()=>{class e{constructor(e){this.changeDetector=e}ngOnInit(){}ngAfterViewInit(){var e;this.numericColumns.forEach((e=>this.table.addColumnDef(e.matColumnDef))),this.displayedColumns=null===(e=this.athColumnDefs)||void 0===e?void 0:e.map((e=>e.columnDefName)),this.changeDetector.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(i.h))},e.\u0275cmp=i.Eb({type:e,selectors:[["ath-table"]],viewQuery:function(e,t){var n;1&e&&(i.qc(f.j,!0),i.yc(d,!0)),2&e&&(i.jc(n=i.Zb())&&(t.table=n.first),i.jc(n=i.Zb())&&(t.numericColumns=n))},hostAttrs:[1,"ath-table"],inputs:{athColumnDefs:"athColumnDefs",dataSource:"dataSource"},decls:4,vars:4,consts:[["mat-table","",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],[3,"athColumnDef"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(i.Qb(0,"table",0),i.uc(1,w,3,2,"ng-container",1),i.uc(2,v,1,0,"tr",2),i.uc(3,P,1,0,"tr",3),i.Pb()),2&e&&(i.gc("dataSource",t.dataSource),i.Ab(1),i.gc("ngForOf",t.athColumnDefs),i.Ab(1),i.gc("matHeaderRowDef",t.displayedColumns),i.Ab(1),i.gc("matRowDefColumns",t.displayedColumns))},directives:[f.j,c.k,f.g,f.i,c.l,f.c,f.e,f.b,f.d,f.a,d,f.f,f.h],styles:[".ath-table table{width:100%}"],encapsulation:2,changeDetection:0}),e})();const x=[{name:"Bitcoin",symbol:"XBT",price:15327,change:.15,cap:284.2},{name:"Ethereum",symbol:"ETH",price:452.35,change:1.73,cap:51.2},{name:"Tether USD",symbol:"USDT",price:1,change:.07,cap:17.4}];let T=(()=>{class e{constructor(){this.tableColumnDefs=[{columnDefName:"name",headerText:"name",columnType:"text"},{columnDefName:"symbol",headerText:"symbol",columnType:"text"},{columnDefName:"price",headerText:"price",columnType:"text"},{columnDefName:"change",headerText:"change",columnType:"text"},{columnDefName:"cap",headerText:"cap",columnType:"text"}],this.dataSource=new f.k(x)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["app-basic-table-example"]],decls:1,vars:2,consts:[[3,"dataSource","athColumnDefs"]],template:function(e,t){1&e&&i.Lb(0,"ath-table",0),2&e&&i.gc("dataSource",t.dataSource)("athColumnDefs",t.tableColumnDefs)},directives:[Q],styles:[""],changeDetection:0}),e})();function A(e,t){if(1&e&&(i.Qb(0,"li"),i.Qb(1,"code"),i.Qb(2,"strong"),i.vc(3),i.Pb(),i.vc(4,": "),i.Lb(5,"i",1),i.Pb(),i.Pb()),2&e){const e=t.$implicit;i.Ab(3),i.wc(e.name),i.Ab(2),i.gc("innerHTML",e.encodedType,i.mc)}}function L(e,t){if(1&e&&(i.Qb(0,"section",4),i.Qb(1,"mat-expansion-panel"),i.Qb(2,"mat-expansion-panel-header"),i.Qb(3,"mat-panel-title"),i.vc(4),i.Pb(),i.Qb(5,"mat-panel-description",5),i.vc(6," view source "),i.Pb(),i.Pb(),i.Qb(7,"mat-tab-group"),i.Qb(8,"mat-tab",6),i.Qb(9,"pre"),i.Lb(10,"code",1),i.Pb(),i.Pb(),i.Qb(11,"mat-tab",7),i.Qb(12,"pre"),i.Lb(13,"code",1),i.Pb(),i.Pb(),i.Qb(14,"mat-tab",8),i.Qb(15,"pre"),i.Lb(16,"code",1),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Lb(17,"app-basic-table-example"),i.Pb()),2&e){const e=t.$implicit;i.gc("id",e.simpleName.toLowerCase()),i.Ab(4),i.xc(" ",e.name," "),i.Ab(6),i.gc("innerHTML",e.html,i.mc),i.Ab(3),i.gc("innerHTML",e.scss,i.mc),i.Ab(3),i.gc("innerHTML",e.ts,i.mc)}}function O(e,t){if(1&e&&(i.Ob(0),i.Qb(1,"h1"),i.vc(2),i.Pb(),i.Qb(3,"p"),i.vc(4),i.Pb(),i.Qb(5,"h2"),i.vc(6,"Import"),i.Pb(),i.Qb(7,"pre"),i.Lb(8,"code",1),i.Pb(),i.Qb(9,"h2"),i.vc(10,"Usage"),i.Pb(),i.Qb(11,"pre"),i.Lb(12,"code",1),i.Pb(),i.Qb(13,"h2"),i.vc(14,"Inputs"),i.Pb(),i.Qb(15,"ul"),i.uc(16,A,6,2,"li",2),i.Pb(),i.uc(17,L,18,5,"section",3),i.Nb()),2&e){const e=t.ngIf,n=i.ac();i.Ab(2),i.wc(e.simpleName),i.Ab(2),i.wc(e.comment),i.Ab(4),i.gc("innerHTML",e.encodedImportText,i.mc),i.Ab(4),i.gc("innerHTML",e.encodedUsageText,i.mc),i.Ab(4),i.gc("ngForOf",n.getInputs(e)),i.Ab(1),i.gc("ngForOf",e.examples)}}const N=[{path:"",component:(()=>{class e{constructor(e){this.componentsUiQuery=e}ngOnInit(){}getInputs(e){return e.properties.filter((e=>"input"===e.decorator))}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(s))},e.\u0275cmp=i.Eb({type:e,selectors:[["app-table"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[2,"justify-content","flex-end"],["label","HTML"],["label","SCSS"],["label","TS"]],template:function(e,t){1&e&&(i.uc(0,O,18,6,"ng-container",0),i.bc(1,"async")),2&e&&i.gc("ngIf",i.cc(1,1,t.componentsUiQuery.selectComponentsByName("athtable")))},directives:[c.l,c.k,b.b,b.d,b.e,b.c,u.b,u.a,T],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block;margin:20px}"]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[o.d.forChild(N)],o.d]}),e})(),H=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[c.c,a.a,I]]}),e})()}}]);