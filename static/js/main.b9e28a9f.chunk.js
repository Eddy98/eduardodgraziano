(this["webpackJsonpeduardodgraziano.github.io"]=this["webpackJsonpeduardodgraziano.github.io"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"a":{"url":"https://api.openweathermap.org/data/2.5/weather?q=New%20york&appid=36ad57b7cf3a59fc2de69a11d40e90a7&units=imperial"}}')},36:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var i,a,r,c,o,s,l,d,m,p,j,b,h,u,f,g,O,x,y,w,v,k=t(1),S=t.n(k),z=t(22),C=t.n(z),I=(t(36),t(2)),N=t(3),E=N.a.div(i||(i=Object(I.a)(["\n  background-color: #cdf3fa;\n"]))),A=t(6),D=t(8),F=t(26),L=t.n(F),T=Object(N.a)(D.a)(a||(a=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]))),J=N.a.p(r||(r=Object(I.a)(["\n  font-size: 3.5rem;\n  font-family: 'Nunito';\n  margin: 0 0 1rem;\n  text-align: center;\n"]))),P=N.a.img(c||(c=Object(I.a)(["\n  border-radius: 50%;\n  width: 100%;\n"]))),W=N.a.div(o||(o=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 2rem;\n"]))),B=Object(N.a)(L.a)(s||(s=Object(I.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  margin: 0 0 2rem;\n  text-align: center;\n"]))),M=t.p+"static/media/profile.d3efa617.jpg",R=t(7),_=t(0),q=function(){return Object(_.jsx)(T,{children:Object(_.jsxs)(A.a,{sm:12,md:7,children:[Object(_.jsx)(J,{children:R.c}),Object(_.jsx)(B,{startDelay:1e3,children:R.b}),Object(_.jsx)(W,{children:Object(_.jsx)(A.a,{lg:7,children:Object(_.jsx)(P,{src:M})})})]})})},G=t(20),H=t.n(G),U=t(27),Q=t(16),Y=t(17),K=t(28),V=N.a.div(l||(l=Object(I.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 2rem;\n  justify-content: center;\n"]))),X=N.a.div(d||(d=Object(I.a)(["\n  display: flex;\n  justify-content: right;\n"]))),Z=N.a.p(m||(m=Object(I.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n  margin: 0 0 1rem;\n  text-align: right;\n"]))),$=t(31),ee=function(){var e=Object(k.useState)({}),n=Object(Q.a)(e,2),t=n[0],i=n[1];return Object(k.useEffect)((function(){function e(){return(e=Object(U.a)(H.a.mark((function e(){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(K.a.url);case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,i({city:n.name,temp:n.main.temp,description:n.weather[0].description.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(_.jsxs)(V,{children:[Object(_.jsxs)(A.a,{sm:8,children:[Object(_.jsx)(Y.SocialIcon,{url:"https://www.linkedin.com/in/eduardo-graziano-7795ab166/",target:"_blank",bgColor:"#157FFB",style:{height:60,width:60,marginRight:"1rem"}}),Object(_.jsx)(Y.SocialIcon,{url:"https://github.com/Eddy98",target:"_blank",bgColor:"#000000",style:{height:60,width:60,marginRight:"1rem"}}),Object(_.jsx)(Y.SocialIcon,{url:"mailto:eduardodgraziano@gmail.com",target:"_blank",bgColor:"#cf2525",style:{height:60,width:60}})]}),Object(_.jsx)(A.a,{sm:4,children:Object(_.jsx)($.a,{queries:{small:{maxWidth:575}},children:function(e){return e.small?Object(_.jsx)(_.Fragment,{}):Object(_.jsx)(_.Fragment,{children:t&&Object(_.jsxs)(X,{children:[Object(_.jsxs)(Z,{children:["What's the weather like in ".concat(t.city,"?"),Object(_.jsx)("br",{}),Object(_.jsx)("b",{children:"".concat(t.description,", ").concat(Math.round(t.temp)," ")}),Object(_.jsx)("span",{children:"\u2109"})]}),Object(_.jsx)("br",{})]})})}})})]})},ne=Object(N.a)(D.a)(p||(p=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem 1rem 1rem;\n"]))),te=N.a.p(j||(j=Object(I.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n"]))),ie=N.a.p(b||(b=Object(I.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n"]))),ae=function(){return Object(_.jsx)(ne,{children:Object(_.jsxs)(A.a,{md:8,xs:12,children:[Object(_.jsx)(te,{children:R.a.header}),R.a.body.map((function(e){return Object(_.jsxs)(ie,{children:[e.college,Object(_.jsx)("br",{}),e.degree,Object(_.jsx)("br",{}),e.year]})}))]})})},re=Object(N.a)(D.a)(h||(h=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem 1rem 1rem;\n"]))),ce=N.a.p(u||(u=Object(I.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n"]))),oe=N.a.div(f||(f=Object(I.a)(["\n  display: flex;\n  justify-content: left;\n  flex-direction: column;\n"]))),se=N.a.a(g||(g=Object(I.a)(["\n  font-size: 1.2rem;\n  font-weight: bold;\n  font-family: 'Nunito';\n"]))),le=N.a.p(O||(O=Object(I.a)(["\n  font-size: 1.1rem;\n  font-family: 'Nunito';\n  margin: 0;\n"]))),de=N.a.li(x||(x=Object(I.a)(["\n  font-size: 1rem;\n  font-family: 'Nunito';\n"]))),me=function(){return Object(_.jsx)(re,{children:Object(_.jsxs)(A.a,{md:8,xs:12,children:[Object(_.jsx)(ce,{children:R.e.header}),R.e.body.map((function(e){return Object(_.jsxs)(oe,{children:[Object(_.jsx)(se,{href:e.link,target:"_blank",children:e.company}),Object(_.jsx)(le,{children:e.title}),Object(_.jsx)("ul",{children:e.description.map((function(e){return Object(_.jsx)(de,{children:e})}))})]})}))]})})},pe=t(30),je=Object(N.a)(D.a)(y||(y=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 1rem 1rem 1rem;\n"]))),be=N.a.p(w||(w=Object(I.a)(["\n  font-size: 2rem;\n  font-family: 'Nunito';\n  font-weight: bold;\n  margin: 0;\n"]))),he=Object(N.a)(pe.a)(v||(v=Object(I.a)(["\n  margin-right: 0.75rem;\n"]))),ue=function(){return Object(_.jsx)(je,{children:Object(_.jsxs)(A.a,{md:8,xs:12,children:[Object(_.jsx)(be,{children:R.d.header}),R.d.list.map((function(e){return Object(_.jsx)(he,{pill:!0,variant:"primary",children:e})}))]})})};var fe=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(E,{children:[Object(_.jsx)(ee,{}),Object(_.jsx)(q,{}),Object(_.jsx)(ae,{}),Object(_.jsx)(me,{}),Object(_.jsx)(ue,{})]})})},ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),a(e),r(e),c(e)}))};t(49);C.a.render(Object(_.jsx)(S.a.StrictMode,{children:Object(_.jsx)(fe,{})}),document.getElementById("root")),ge()},7:function(e){e.exports=JSON.parse('{"c":"Eduardo D. Graziano","b":"Hi! I\'m a full-stack software developer based in NYC","a":{"header":"Education","body":[{"college":"University of Florida, College of Liberal Arts and Sciences","degree":"Bachelor of Science - Computer Science","year":"Class of 2020 - Gainesville, Florida"}]},"e":{"header":"Work Experience","body":[{"company":"American Express","title":"Engineer III","link":"https://www.americanexpress.com/","description":["Worked on multiple features and bug fixes for the non-card lending organization & the international card applications using Javascript, React, NodeJS","Completed code refactors in different codebases in order to improve code quality and reduce redundant code","Contributed to innovation features to improve some technical aspects of our applications","Developed testing suites for the front-end and back-end, involving unit test and automation scripts to ensure code reliability using Jest, Webdriver.io, Selenium, Cucumber","Deployed applications to production environments by utilizing the CI/CD pipeline","Acted temporarily as Scrum Master while still holding my engineeting responsabilties, leading Agile ceremonies and team planning, and collaborating with Product Owner and Tech Lead","Proficient in QA responsibilities such as manual testing, automation testing and regression testing, following SDET model of development and testing","Participated in Hackathons and innovation events"]},{"company":"Optym","title":"Software Engineer Intern","link":"https://optym.com/","description":["Designed, implemented, tested, and delivered a data visualization web app for Optym using Python and React","Interacted with the Microsoft SQL server, created the backend API using Flask, and created the User Interface","Learned how to start and complete a complex project from scratch, working alongside my mentor fully understanding the business aspect of the application and its impact for the client"]},{"company":"American Express","title":"Software Engineer Intern","link":"https://www.americanexpress.com/","description":["Worked on an internal application of American Express in the LETT team, composed of 10 other full-time employees, under the Marketing Insights & Technology","Developed in the front-end of the web application using React, and interacted with the API","Developed multiple tests in the Java back-end using the TestNG testing framework"]},{"company":"Booz Allen Hamilton","title":"Technical Analyst","link":"https://www.boozallen.com/","description":["Worked within a multidisciplinary team of 6 to plan, design, and develop an internal use program using business machine learning and data mining with python and multiple libraries, including Scikit-Learn, and Selenium","Developed both the front and back end of the application, to ultimately help increase the efficiency of the partnering process"]}]},"d":{"header":"Skills","list":["haha","idk"]}}')}},[[50,1,2]]]);
//# sourceMappingURL=main.b9e28a9f.chunk.js.map