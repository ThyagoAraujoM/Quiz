(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{169:function(e,n,t){},309:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(44),s=t.n(a),o=(t(169),t(360)),i=t(43),l=t(19),u=t(99),d=t.n(u),j=t(143),b=t(7),p=t(1),h=Object(c.createContext)({});function f(e){var n=t(172),r=Object(c.useState)([]),a=Object(b.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)([]),l=Object(b.a)(i,2),u=l[0],f=l[1];function x(){return(x=Object(j.a)(d.a.mark((function e(t){var c,r,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("https://opentdb.com/api.php?amount=".concat(t));case 2:for(a in c=e.sent,r=[],c.data.results)s={question:c.data.results[a].question,answer:c.data.results[a].correct_answer},r.push(s);f(r),o(c.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)(h.Provider,{value:{questions:s,correctQuestionAndAnswer:u,getQuestions:function(e){return x.apply(this,arguments)}},children:e.children})}var x,O,m,g,v,y,w,k,S,q,N,z,C,_,Q,I,L,D,F,J,A=t(353),E=t(356),T=t(82),B=t(105),M=t(12),R=t(361),H=t(344),V=Object(H.a)("div")(x||(x=Object(M.a)(["\n  min-height: 100vh;\n  background: #ccf1ec;\n"]))),G=Object(H.a)("div")(O||(O=Object(M.a)(["\n  display: flex;\n  align-items: center;\n\n  padding: 20px;\n  h1 {\n    margin: 0 auto;\n    transform: translate(-25%, 0);\n  }\n"]))),P=Object(H.a)(R.a)(m||(m=Object(M.a)(["\n  background: ",";\n  border: 1px solid ",";\n  .c-link {\n    color: #fff;\n    text-decoration: none;\n  }\n  &:hover {\n    .c-link {\n      color: ",";\n    }\n    background: #fff;\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main})),W=Object(H.a)("div")(g||(g=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  gap: 100px;\n\n  .c-score {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 0.25em;\n    gap: 10px;\n    padding: 10px;\n    min-width: 60px;\n    h3 {\n      margin: 0;\n      color: #13ca41;\n    }\n    h4 {\n      margin: 0;\n    }\n  }\n\n  .c-score.c-correct {\n    background: #13ca413b;\n    h3 {\n      color: #13ca41;\n    }\n  }\n\n  .c-score.c-wrong {\n    background: #ca13224e;\n    h3 {\n      color: #ca1322;\n    }\n  }\n"]))),Y=Object(H.a)("div")(v||(v=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 100px;\n  margin: 0 0 20px 0;\n\n  Button {\n    background: ",";\n    border: 1px solid ",";\n    &:hover {\n      color: ",";\n      background: #fff;\n    }\n  }\n"])),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main})),K=Object(H.a)("div")(y||(y=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  width: 900px;\n  margin: 0 auto 0 auto;\n  padding: 0 0 40px 0;\n"]))),U=Object(H.a)("div")(w||(w=Object(M.a)(["\n  width: 100%;\n  padding: 20px;\n  background: ",";\n  color: #fff;\n\n  &.c-wrong-answer {\n    border: solid 5px #ca13224e;\n  }\n\n  &.c-correct-answer {\n    border: solid 5px #13ca414e;\n  }\n"])),(function(e){return e.theme.palette.primary.main})),X=Object(H.a)("div")(k||(k=Object(M.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: #fff;\n"]))),Z=Object(H.a)("p")(S||(S=Object(M.a)(["\n  text-align: center;\n  padding: 10px;\n  border-radius: 0.5em;\n"]))),$=Object(H.a)(Z)(q||(q=Object(M.a)(["\n  background: #13ca41a6;\n"]))),ee=Object(H.a)(Z)(N||(N=Object(M.a)(["\n  background: #ca1322b5;\n"]))),ne=t(357),te=t(354),ce=Object(H.a)("header")(z||(z=Object(M.a)(["\n  padding: 0 20px;\n  height: 60px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  .c-header-select {\n    background: ",";\n    width: 220px;\n    padding: 0px;\n  }\n"])),(function(e){return e.theme.palette.primary.main})),re=Object(H.a)(ne.a)(C||(C=Object(M.a)(["\n  height: 30px;\n  p {\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.primary.main})),ae=Object(H.a)("main")(_||(_=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  h2 {\n    margin: 100px 0 50px 0;\n    font-size: 28px;\n    text-align: center;\n  }\n  .c-form {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    position: relative;\n\n    .c-text-Input {\n      background: #544e61;\n      width: 150px;\n      height: 36px;\n      border: none;\n      border-radius: 0.5em;\n    }\n\n    .c-error {\n      position: absolute;\n      bottom: -25px;\n      left: 5px;\n    }\n  }\n"]))),se=Object(H.a)(R.a)(Q||(Q=Object(M.a)(["\n  background: ",";\n  color: #fff;\n  border: 1px "," solid;\n  &:hover {\n    background: #fff;\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main})),oe=Object(H.a)("div")(I||(I=Object(M.a)(["\n  margin-top: 0px;\n  background: ",";\n"])),(function(e){return e.theme.palette.primary.main})),ie=Object(H.a)("div")(L||(L=Object(M.a)(["\n  padding: 20px;\n  border: solid 1px #fff;\n  color: #fff;\n"]))),le=Object(H.a)(te.a)(D||(D=Object(M.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  background-color: ",";\n  border: 2px solid #0808085e;\n  padding: 15px;\n  color: #fff;\n\n  .c-buttons-modal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n  }\n"])),(function(e){return e.theme.palette.primary.main})),ue=Object(H.a)(se)(F||(F=Object(M.a)(["\n  background: #fff;\n  color: ",";\n  border: 1px "," solid;\n\n  &:hover {\n    background: ",";\n    color: #fff;\n    border: 1px #fff solid;\n  }\n\n  .c-link {\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      color: #fff;\n    }\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main})),de=Object(H.a)(R.a)(J||(J=Object(M.a)(["\n  margin-top: 40px;\n  background: ",";\n  color: #fff;\n  border: 1px solid ",";\n  &:hover {\n    color: ",";\n    background: #fff;\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}));function je(){var e=r.a.useState(!1),n=Object(b.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)(!1),o=Object(b.a)(s,2),l=o[0],u=o[1],d=Object(c.useState)(""),j=Object(b.a)(d,2),h=j[0],f=j[1],x=Object(c.useState)([]),O=Object(b.a)(x,2),m=O[0],g=O[1],v=Object(c.useState)({correct:0,wrong:0}),y=Object(b.a)(v,2),w=y[0],k=y[1],S=Object(c.useState)(!1),q=Object(b.a)(S,2),N=q[0],z=q[1],C=null!=localStorage.getItem("listOfDatesOfQuizzes")?localStorage.getItem("listOfDatesOfQuizzes"):[];null!=C[0]&&(C=JSON.parse(C));var _=B.b().shape({perguntas:B.a().min(1,"Too Short").max(50,"Too Long!").required("Required")}),Q=function(){a(!1)};return Object(p.jsxs)(V,{children:[Object(p.jsx)(ce,{children:void 0!==C[0]?Object(p.jsx)(A.a,{displayEmpty:!0,renderValue:function(){return Object(p.jsxs)("em",{children:["Completed quizzes: ",C.length]})},className:"c-header-select",children:function(){var e=[],n=function(n){e.push(Object(p.jsx)(re,{onClick:function(){!function(e){var n=localStorage.getItem(e);n=JSON.parse(n);var t=[],c=0,r=0;for(var a in n)n[a].correct_answer===n[a].user_answer?(r++,t.push(Object(p.jsxs)(ie,{children:[Object(p.jsx)("p",{children:n[a].question}),Object(p.jsx)(X,{children:Object(p.jsx)($,{sx:{border:"1px solid #00000075"},children:n[a].correct_answer})})]},a))):(c++,t.push(Object(p.jsxs)(ie,{children:[Object(p.jsx)("p",{children:n[a].question}),Object(p.jsxs)(X,{children:[Object(p.jsx)($,{children:n[a].correct_answer}),Object(p.jsx)(ee,{sx:{border:"1px solid #00000075"},children:n[a].user_answer})]})]},a)));k({correct:r,wrong:c}),g(t),z(!0)}(C[n])},children:Object(p.jsx)("p",{children:C[n]})},n))};for(var t in C)n(t);return e}()}):null}),Object(p.jsxs)(ae,{children:[Object(p.jsxs)("h2",{children:["How about testing your knowledge? ",Object(p.jsx)("br",{})," Get started now,",Object(p.jsx)("br",{})," choose how many questions you want to ask"," "]}),Object(p.jsx)(T.c,{initialValues:{perguntas:""},validationSchema:_,onSubmit:function(e){f("".concat(e.perguntas)),a(!0)},children:function(e){var n=e.errors,t=e.touched;return Object(p.jsxs)(T.b,{className:"c-form",children:[Object(p.jsx)(T.a,{className:"c-text-Input",name:"perguntas",type:"number"}),n.perguntas&&t.perguntas?Object(p.jsx)("div",{className:"c-error",children:n.perguntas}):null,Object(p.jsx)(se,{type:"submit",children:"Start"})]})}}),N?Object(p.jsx)(de,{onClick:function(){u(!l)},children:"Show Quiz"}):null,l?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(W,{children:[Object(p.jsxs)("div",{className:"c-score c-correct",children:[Object(p.jsx)("h3",{children:w.correct}),Object(p.jsx)("h4",{children:"Acertos"})]}),Object(p.jsxs)("div",{className:"c-score c-wrong",children:[Object(p.jsx)("h3",{children:w.wrong}),Object(p.jsx)("h4",{children:"Erros"})]})]}),Object(p.jsxs)(oe,{children:[" ",m," "]})]}):null]}),Object(p.jsx)(E.a,{hideBackdrop:!0,open:t,onClose:Q,children:Object(p.jsxs)(le,{children:[Object(p.jsx)("h2",{id:"child-modal-title",children:"Do you want to start ?"}),Object(p.jsx)("p",{id:"child-modal-description",children:"Confirm to start questions, cancel to return."}),Object(p.jsxs)("div",{className:"c-buttons-modal",children:[Object(p.jsx)(ue,{onClick:Q,children:"Close"}),Object(p.jsx)(ue,{children:Object(p.jsx)(i.b,{className:"c-link",to:"/perguntas/".concat(h),children:"Start"})})]})]})})]})}var be,pe,he,fe,xe,Oe=t(104),me=t(359),ge=Object(H.a)("div")(be||(be=Object(M.a)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  position: relative;\n"]))),ve=Object(H.a)(me.a)(pe||(pe=Object(M.a)(["\n  background: ",";\n  padding: 10px 25px;\n  border-radius: 2em;\n  color: #fff;\n\n  .c-question-header {\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n  }\n  .c-answer-box {\n    text-align: center;\n    h4 {\n      margin: 10px 0 5px 0;\n    }\n    div {\n      display: grid;\n      grid-auto-flow: column;\n\n      justify-content: space-evenly;\n    }\n  }\n"])),(function(e){return e.theme.palette.primary.main})),ye=Object(H.a)("p")(he||(he=Object(M.a)(["\n  border: 1px solid ",";\n  padding: 5px 10px;\n  background: #fff;\n  color: ",";\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n\n  &.selected {\n    background: ",";\n    color: #fff;\n  }\n"])),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main})),we=Object(H.a)(R.a)(fe||(fe=Object(M.a)(["\n  width: 100px;\n  margin: 0 auto 50px auto;\n  background: ",";\n  border: solid 1px ",";\n  color: #fff;\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.secondary.main})),ke=Object(H.a)("p")(xe||(xe=Object(M.a)(["\n  width: 200px;\n  background: #bd3e3eca;\n  padding: 10px;\n  text-align: center;\n  color: #fff;\n  margin: 0 auto;\n"])));function Se(){var e=Object(c.useContext)(h),n=e.questions,t=e.correctQuestionAndAnswer,r=e.getQuestions,a=[],s=Object(c.useState)(!1),o=Object(b.a)(s,2),u=o[0],d=o[1],j=Object(c.useState)(!1),f=Object(b.a)(j,2),x=f[0],O=f[1],m=Object(l.f)();function g(e,n){var t=[];return t.push(Object(p.jsx)(ye,{onClick:function(){var t,c,r,s;a[n]={answer:e.correct_answer},null===(t=document.querySelector(".c-answer-0-".concat(n)))||void 0===t||t.classList.add("selected"),null===(c=document.querySelector(".c-answer-1-".concat(n)))||void 0===c||c.classList.remove("selected"),null===(r=document.querySelector(".c-answer-2-".concat(n)))||void 0===r||r.classList.remove("selected"),null===(s=document.querySelector(".c-answer-3-".concat(n)))||void 0===s||s.classList.remove("selected")},className:"c-answer-0-".concat(n),children:Object(Oe.a)(e.correct_answer)},"correct")),e.incorrect_answers.map((function(e,c){t.push(Object(p.jsx)(ye,{onClick:function(){var t;a[n]={answer:e};for(var r=0;r<=3;r++){var s;null===(s=document.querySelector(".c-answer-".concat(r,"-").concat(n)))||void 0===s||s.classList.remove("selected")}null===(t=document.querySelector(".c-answer-".concat(c+1,"-").concat(n)))||void 0===t||t.classList.add("selected")},className:"c-answer-".concat(c+1,"-").concat(n),children:e},c))})),t.sort((function(e,n){return.5-Math.random()})),t}function v(e,n){var t=[];return t.push(Object(p.jsx)(ye,{onClick:function(){var e,t;a[n]={answer:"True"},null===(e=document.querySelector(".c-answer-true-".concat(n)))||void 0===e||e.classList.add("selected"),null===(t=document.querySelector(".c-answer-false-".concat(n)))||void 0===t||t.classList.remove("selected")},className:"c-answer-true-".concat(n),children:"True"})),t.push(Object(p.jsx)(ye,{onClick:function(){var e,t;a[n]={answer:"False"},null===(e=document.querySelector(".c-answer-true-".concat(n)))||void 0===e||e.classList.remove("selected"),null===(t=document.querySelector(".c-answer-false-".concat(n)))||void 0===t||t.classList.add("selected")},className:"c-answer-false-".concat(n),children:"False"})),t}return Object(c.useEffect)((function(){r(m.quantity)}),[]),Object(p.jsxs)(V,{children:[Object(p.jsxs)(G,{children:[Object(p.jsx)(P,{children:Object(p.jsx)(i.b,{className:"c-link",to:"/",children:"Return"})}),Object(p.jsx)("h1",{children:"Questions"})]}),Object(p.jsxs)(ge,{children:[n?function(){var e=[];return e.push(n.map((function(e,n){return Object(p.jsxs)(ve,{children:[Object(p.jsxs)("div",{className:"c-question-header",children:[Object(p.jsxs)("p",{children:["Category: ",e.category]}),Object(p.jsxs)("p",{children:["Difficulty: ",e.difficulty]})]}),Object(p.jsxs)("p",{children:["Question: ",Object(p.jsx)("br",{}),Object(Oe.a)("".concat(e.question))]}),Object(p.jsxs)("div",{className:"c-answer-box",children:[Object(p.jsx)("h4",{children:"Answers"}),Object(p.jsx)("div",{children:"boolean"===e.type?v(e,n):g(e,n)})]})]},n)}))),e}():null,x?Object(p.jsx)(ke,{children:"Fill in all data "}):null,Object(p.jsx)(we,{onClick:function(){t.length===a.length?function(){var e=[];try{for(var n in t)e.push({question:t[n].question,correct_answer:t[n].answer,user_answer:a[n].answer});localStorage.setItem("currentQuiz",JSON.stringify(e))}catch(x){console.log(x)}d(!0),O(!1)}():O(!0)},children:"Finish"})]}),u?Object(p.jsx)(l.a,{push:!0,to:"/resultado"}):null]})}function qe(){var e=Object(c.useState)(!1),n=Object(b.a)(e,2),t=n[0],r=n[1],a=[],s=Object(c.useState)([]),o=Object(b.a)(s,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("currentQuiz");u(JSON.parse(e))}),[]),Object(p.jsxs)(V,{children:[Object(p.jsxs)(G,{children:[Object(p.jsx)(P,{children:Object(p.jsx)(i.b,{className:"c-link",to:"/",children:"Home"})}),Object(p.jsx)("h1",{children:"Result"})]}),Object(p.jsxs)("div",{children:[function(){var e=0,n=0;for(var t in l)l[t].correct_answer===l[t].user_answer?e++:n++;return Object(p.jsxs)(W,{children:[Object(p.jsxs)("div",{className:"c-score c-correct",children:[Object(p.jsx)("h3",{children:e}),Object(p.jsx)("h4",{children:"Correct"})]}),Object(p.jsxs)("div",{className:"c-score c-wrong",children:[Object(p.jsx)("h3",{children:n}),Object(p.jsx)("h4",{children:"Wrong"})]})]})}(),Object(p.jsxs)(Y,{children:[Object(p.jsx)(R.a,{variant:"contained",onClick:function(){r(!t)},children:"Show Questions"}),Object(p.jsx)(R.a,{variant:"contained",onClick:function(){!function(){var e=l,n=null!=localStorage.getItem("listOfDatesOfQuizzes")?localStorage.getItem("listOfDatesOfQuizzes"):[];null!=n[0]&&(n=JSON.parse(n));var t=new Date,c="".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear());void 0===n.find((function(e){return e===c}))&&n.push(c),localStorage.setItem("listOfDatesOfQuizzes",JSON.stringify(n)),localStorage.setItem(c,JSON.stringify(e))}()},children:"Save Quiz"})]}),Object(p.jsx)(K,{children:t?function(){for(var e in l)l[e].correct_answer===l[e].user_answer?a.push(Object(p.jsxs)(U,{className:"c-correct-answer",children:[Object(p.jsx)("p",{children:l[e].question}),Object(p.jsx)(X,{children:Object(p.jsx)($,{sx:{border:"2px solid #000000b5"},children:l[e].correct_answer})})]},e)):a.push(Object(p.jsxs)(U,{className:"c-wrong-answer",children:[Object(p.jsx)("p",{children:l[e].question}),Object(p.jsxs)(X,{children:[Object(p.jsx)($,{children:l[e].correct_answer}),Object(p.jsx)(ee,{sx:{border:"2px solid #000000b5"},children:l[e].user_answer})]})]},e));return a}():null})]})]})}var Ne=t(154);var ze=function(){var e={theme:Object(Ne.a)({palette:{primary:{main:"#544e61"},secondary:{main:"#7F96FF"},text:{primary:"#fff"}}})}.theme;return Object(p.jsx)(o.a,{theme:e,children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(f,{children:[Object(p.jsx)(l.b,{path:"/",component:je,exact:!0}),Object(p.jsx)(l.b,{path:"/perguntas/:quantity",component:Se}),Object(p.jsx)(l.b,{path:"/resultado",component:qe})]})})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(ze,{})}),document.getElementById("root"))}},[[309,1,2]]]);
//# sourceMappingURL=main.9a046f5c.chunk.js.map