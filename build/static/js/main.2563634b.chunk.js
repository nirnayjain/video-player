(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),i=a.n(r),c=a(12),s=a(41),l=a.n(s),o=a(52),d=a(18),j=a(22),u=a(172),b=a(175),m=a(177),g=a(93),h=a(178),p=a(186),x=a(179),O=a(180),f=a(187),v=a(83),y=(a(135),v.a.initializeApp({apiKey:"AIzaSyD_NoHe9L9rrBU2riJ0YXSXzdUxzmutKGE",authDomain:"video-player-d70fa.firebaseapp.com",projectId:"video-player-d70fa",storageBucket:"video-player-d70fa.appspot.com",messagingSenderId:"610561483260",appId:"1:610561483260:web:5f10e229f0b5868fba9279",measurementId:"G-TLT25GXPXT"})),w=(y.storage(),y),S=a(54),k=a.n(S),C=a(3),I=Object(u.a)((function(e){return{root:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}})),D=function(){var e=Object(c.f)(),t=Object(n.useState)(!1),a=Object(j.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(!1),u=Object(j.a)(s,2),v=u[0],y=u[1],S=Object(n.useState)(null),D=Object(j.a)(S,2),N=D[0],F=D[1],M=Object(n.useState)({}),B=Object(j.a)(M,2),z=B[0],L=B[1];Object(n.useEffect)((function(){null!=N&&w.storage().ref("image").child(N.name).getDownloadURL().then((function(e){return E(Object(d.a)(Object(d.a)({},U),{},{image:e}))}))}),[N]),Object(n.useEffect)((function(){null!=N&&w.storage().ref("video").child(z.name).getDownloadURL().then((function(e){return E(Object(d.a)(Object(d.a)({},U),{},{video:e}))}))}),[z]);var T=Object(n.useState)({name:"",release:"",language:"",image:"",video:""}),W=Object(j.a)(T,2),U=W[0],E=W[1],R=function(){var t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==U.name&&""!==U.release&&""!==U.image&&""!==U.video&&""!==U.language){t.next=3;break}return alert("Please fill all required field"),t.abrupt("return");case 3:return t.prev=3,t.next=6,k.a.post("/api/user/register",U);case 6:E(""),e.push("/movies"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}(),G=new Date,H=("".concat(G.getFullYear(),"-").concat(String(G.getMonth()+1).padStart(2,"0"),"-").concat(String(G.getDate()).padStart(2,"0")),I());return Object(C.jsxs)(b.a,{maxWidth:"md",className:H.root,children:[Object(C.jsx)(m.a,{variant:"h5",children:"Movie Data"}),Object(C.jsx)(g.a,{elevation:2,style:{padding:30,margin:10},children:Object(C.jsxs)(h.a,{container:!0,spacing:3,lg:12,children:[Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:12,xl:12,children:Object(C.jsx)(p.a,{id:"release",fullWidth:!0,required:!0,variant:"standard",label:"Movie Name",value:U.name,onChange:function(e){E(Object(d.a)(Object(d.a)({},U),{},{name:e.target.value}))}})}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:12,xl:12,children:Object(C.jsx)(p.a,{fullWidth:!0,required:!0,id:"release",placeholder:"Enter Release Date",type:"date",variant:"standard",value:U.release,onChange:function(e){E(Object(d.a)(Object(d.a)({},U),{},{release:e.target.value}))}})}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:12,xl:12,children:Object(C.jsx)(p.a,{fullWidth:!0,required:!0,variant:"standard",label:"Language",value:U.language,onChange:function(e){E(Object(d.a)(Object(d.a)({},U),{},{language:e.target.value}))}})}),Object(C.jsxs)(h.a,{item:!0,xs:12,sm:12,lg:12,xl:12,md:12,container:!0,spacing:1,children:[Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:4,xl:4,md:4,container:!0,alignItems:"center",children:Object(C.jsx)(m.a,{variant:"h6",children:"Thumbnail"})}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:4,xl:4,md:4,container:!0,alignItems:"center",children:Object(C.jsxs)("label",{htmlFor:"btn-upload",children:[Object(C.jsx)("input",{id:"btn-upload",name:"btn-upload",style:{display:"none"},type:"file",onChange:function(e){e.target.files[0].type.endsWith("jpeg")||e.target.files[0].type.endsWith("jpg")||e.target.files[0].type.endsWith("png")?(i(!0),w.storage().ref("image").child(e.target.files[0].name).put(e.target.files[0]).then((function(t){F(e.target.files[0]),i(!1)}))):alert("Please upload image with extension jpeg,jpg or png")}}),Object(C.jsx)(x.a,{disabled:r,className:"btn-choose",variant:"contained",component:"span",color:"primary",children:"Upload Image"})]})}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:4,xl:4,md:4,container:!0,alignItems:"center",children:r?Object(C.jsx)(O.a,{}):!1===r&&""!==U.image&&Object(C.jsx)(f.a,{severity:"success",children:"Image uploaded Successfully!"})})]}),Object(C.jsxs)(h.a,{item:!0,xs:12,sm:12,lg:12,xl:12,md:12,container:!0,spacing:1,children:[Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:4,xl:4,md:4,container:!0,alignItems:"center",children:Object(C.jsx)(m.a,{variant:"h6",children:"Video"})}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:4,xl:4,md:4,container:!0,alignItems:"center",children:Object(C.jsxs)("label",{htmlFor:"btn-video-upload",children:[Object(C.jsx)("input",{id:"btn-video-upload",name:"btn-upload",style:{display:"none"},type:"file",onChange:function(e){e.target.files[0].type.endsWith("mp4")?(y(!0),w.storage().ref("video").child(e.target.files[0].name).put(e.target.files[0]).then((function(t){L(e.target.files[0]),y(!1)}))):alert("Please upload video with extension mp4")}}),Object(C.jsx)(x.a,{disabled:v,className:"btn-choose",variant:"contained",component:"span",color:"primary",children:"Upload Video"})]})}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:4,xl:4,md:4,container:!0,alignItems:"center",children:v?Object(C.jsx)(O.a,{}):!1===v&&""!==U.video&&Object(C.jsx)(f.a,{severity:"success",children:"Video Uploaded Successfully!"})})]}),Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:12,xl:12,container:!0,justify:"center",children:Object(C.jsx)(x.a,{variant:"contained",color:"primary",onClick:R,children:"Submit"})})]})})]})},N=a(188),F=a(53),M=a(181),B=a(182),z=a(183),L=a(90),T=a.n(L),W=a(91),U=a.n(W),E=Object(u.a)((function(e){return{root:Object(F.a)({transition:"transform 0.20s ease-in-out",height:"340px",width:"280px",border:"2px solid black",borderRadius:"10px"},e.breakpoints.down("xs"),{}),cardHovered:{transform:"scale3d(1.09, 1.09, 1)"},cardContent:{marginLeft:10,marginRight:10,marginTop:10,padding:0,display:"flex",flexDirection:"column"},play:{cursor:"pointer",width:"max-content"}}}));function R(e){var t=e.name,a=e.image,r=e.video,i=e.release,c=e.language,s=new Date(i),l=s.getFullYear(),o=s.getMonth()+1,d=s.getDate();d<10&&(d="0"+d),o<10&&(o="0"+o);var u=l+"-"+o+"-"+d,b=Object(n.useState)(!1),g=Object(j.a)(b,2),p=g[0],x=g[1],O=E(),f=Object(n.useState)({raised:!1,shadow:1}),v=Object(j.a)(f,2),y=v[0],w=v[1];return Object(C.jsx)(h.a,{item:!0,lg:3,md:4,sm:6,xs:12,container:!0,justify:"center",children:Object(C.jsxs)(M.a,{className:O.root,classes:{root:y.raised?O.cardHovered:""},onMouseOver:function(){return w({raised:!0,shadow:3})},onMouseOut:function(){return w({raised:!1,shadow:1})},raised:y.raised,zdepth:y.shadow,children:[p?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(B.a,{component:"video",style:{objectFit:"cover"},src:r,width:"280",height:"200",controls:!0}),Object(C.jsx)("div",{className:O.play,children:Object(C.jsx)(U.a,{fontSize:"large",onClick:function(){return x(!1)}})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{style:{position:"relative"},children:Object(C.jsx)("img",{onClick:function(){return x(!0)},src:a,style:{height:200,width:280,cursor:"pointer"}})}),Object(C.jsx)("div",{className:O.play,children:Object(C.jsx)(T.a,{fontSize:"large",onClick:function(){return x(!0)}})})]}),Object(C.jsxs)(z.a,{className:O.cardContent,children:[Object(C.jsxs)(m.a,{gutterBottom:!0,variant:"body2",children:["Title:\xa0",t]}),Object(C.jsxs)("div",{children:[Object(C.jsxs)(m.a,{gutterBottom:!0,variant:"body2",children:["Date :\xa0",u]}),Object(C.jsxs)(m.a,{gutterBottom:!0,variant:"body2",children:["Language :\xa0",c]})]})]})]})})}var G=function(){var e=Object(n.useState)({pageSize:4,page:1}),t=Object(j.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),c=Object(j.a)(i,2),s=c[0],u=c[1],g=Object(n.useState)(null),p=Object(j.a)(g,2),x=p[0],f=p[1];Object(n.useEffect)((function(){v()}),[a]);var v=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/api/user/viewMovie",a);case 3:t=e.sent,u(t.data.users),f(Math.ceil(t.data.total/a.pageSize)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(b.a,{maxWidth:"lg",style:{paddingTop:30,display:"flex",justifyContent:"center",flexDirection:"column"},children:[Object(C.jsx)(m.a,{variant:"h4",style:{margin:50},align:"center",children:"Movies List"}),Object(C.jsx)(h.a,{container:!0,spacing:3,justify:"center",children:null!=s?Object(C.jsx)(C.Fragment,{children:0===s.length?Object(C.jsx)(m.a,{children:"No Movies There"}):Object(C.jsxs)(C.Fragment,{children:[s.map((function(e){return Object(C.jsx)(R,Object(d.a)({},e))})),x?Object(C.jsx)(h.a,{item:!0,xs:12,sm:12,lg:12,md:12,container:!0,justify:"center",children:Object(C.jsx)(N.a,{style:{marginTop:"50px",marginBottom:"20px"},showFirstButton:!0,showLastButton:!0,count:x,page:a.page,onChange:function(e,t){r(Object(d.a)(Object(d.a)({},a),{},{page:t})),u(null)},color:"primary"})}):""]})}):Object(C.jsx)(O.a,{})})]})},H=a(184),q=a(185),P=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function X(){var e=Object(c.f)(),t=P();return Object(C.jsx)("div",{className:t.root,children:Object(C.jsx)(H.a,{position:"static",children:Object(C.jsxs)(q.a,{children:[Object(C.jsx)(m.a,{variant:"h6",className:t.title,style:{cursor:"pointer"},onClick:function(){return e.push("/")},children:"Home"}),Object(C.jsx)(m.a,{variant:"h6",style:{cursor:"pointer"},onClick:function(){return e.push("/movies")},children:"Movies list"})]})})})}var J=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(X,{}),Object(C.jsxs)(c.c,{children:[Object(C.jsx)(c.a,{exact:!0,path:"/",component:D}),Object(C.jsx)(c.a,{path:"/movies",component:G})]})]})},V=a(44);a(133);i.a.render(Object(C.jsx)(V.a,{children:Object(C.jsx)(J,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.2563634b.chunk.js.map