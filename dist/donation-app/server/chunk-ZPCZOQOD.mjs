import './polyfills.server.mjs';
import{D as M,G as _,a,b as p,c as m,d as n,e as i,f as u,g as s,h as c,i as f,j as d,k as g,r as h,t as C,u as v,v as k,w as x,z as b}from"./chunk-7ZSEGYCY.mjs";var T=(t,e)=>({buttonNotClicked:t,buttonClicked:e}),y=(()=>{let e=class e{constructor(){this.clicked=!1,this.donations=31}onClickButton(){this.donations++,this.clicked=!0}onClickImage(){window.open("https://supporting.afsp.org/?_gl=1*7t7xa1*_ga*MTgzNDI2ODE1OS4xNzE1MTA0NjUw*_ga_44VZZG2H84*MTcxNTEwNDY1MC4xLjAuMTcxNTEwNDY1MC42MC4wLjA.","_blank")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-home"]],standalone:!0,features:[d],decls:18,vars:6,consts:[[1,"container"],[1,"header"],["src","../../assets/afsp_logo.png",3,"click"],[1,"count"],[3,"click","ngClass","disabled"]],template:function(o,r){o&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),c(3,"May is mental health awareness month."),i()(),n(4,"div")(5,"h3"),c(6,"Click the image to donate to the American Foundation for Suicide Prevention!"),i(),n(7,"img",2),s("click",function(){return r.onClickImage()}),i()(),n(8,"div",3)(9,"h2"),c(10),i(),n(11,"p"),c(12,"people have donated!"),i()(),n(13,"div")(14,"p"),c(15,"Did you donate?"),i(),n(16,"button",4),s("click",function(){return r.onClickButton()}),c(17,"YES!"),i()()()),o&2&&(p(10),f(r.donations),p(6),m("ngClass",g(3,T,!r.clicked,r.clicked))("disabled",r.clicked))},dependencies:[v,C],styles:[".container[_ngcontent-%COMP%]{min-height:100vh;height:auto;justify-content:space-evenly}.header[_ngcontent-%COMP%]{width:100%;background-color:#00f;text-align:center;color:#fff}.count[_ngcontent-%COMP%]{border:solid;border-radius:8px;border-color:#00f;padding:8px}.buttonNotClicked[_ngcontent-%COMP%]{width:100px;height:25px;background-color:#00f;color:#fff;border-radius:16px;border:none}.buttonNotClicked[_ngcontent-%COMP%]:hover{cursor:pointer}.buttonClicked[_ngcontent-%COMP%]{width:100px;height:25px;background-color:gray;color:#000;border-radius:16px;border:none}.buttonClicked[_ngcontent-%COMP%]:hover{cursor:not-allowed}img[_ngcontent-%COMP%]{height:100px}img[_ngcontent-%COMP%]:hover{cursor:pointer}div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]});let t=e;return t})();var O=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:2,vars:0,template:function(o,r){o&1&&u(0,"app-home")(1,"router-outlet")},dependencies:[M,y],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{min-height:100vh;height:auto;margin:0;padding:0;background-color:#7fffd4}"]});let t=e;return t})();var w=[];var P={providers:[_(w),x()]};var D={providers:[b()]},S=h(P,D);var A=()=>k(O,S),X=A;export{X as a};
