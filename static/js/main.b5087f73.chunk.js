(this["webpackJsonpjonas-app"]=this["webpackJsonpjonas-app"]||[]).push([[0],{110:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=(t(48),t(25)),l=t.n(c),s=(t(74),t(75),t(9)),o=t(5),i=t(15),m=t(16),u=t(19),p=t(18),d=t(122),h=t(119),f=t(57),g=t(53),E=t.n(g),b=t(34),w=t.n(b),y=(t(76),t(77),t(78),t(79),t(80),t(81),t(82),t(83),t(41)),x=t.n(y),v=(t(84),t(85),t(114)),k=t(115),j=(t(86),t(54)),N=t.n(j),S=t(55),O=t.n(S),A=t(29),M=t(118),C=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).submitForm=n.submitForm.bind(Object(A.a)(n)),n.state={status:""},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.status;return r.a.createElement(v.a,null,r.a.createElement(M.a,{onSubmit:this.submitForm,action:"https://formspree.io/xlepyeja",method:"POST"},r.a.createElement(M.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(M.a.Label,null,"Email address"),r.a.createElement(M.a.Control,{type:"email",placeholder:"name@example.com"})),r.a.createElement(M.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(M.a.Label,null,"Message"),r.a.createElement(M.a.Control,{as:"textarea",rows:"3",type:"text",name:"message"})),"SUCCESS"===e?r.a.createElement("p",null,"Thanks!"):r.a.createElement("button",null,"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error.")))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},r.send(n)}}]),t}(r.a.Component),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"mt-4 border border-radius streamBox"},r.a.createElement(k.a,{className:"justify-content-center mt-5"},r.a.createElement("a",{href:"spotify:track:2pA7y8h2hsjMDpI0zyMZvI",target:"_blank",style:{display:"inline-block",overflow:"hidden",borderRadius:"13px",width:"250px",height:"83px"}},r.a.createElement("img",{src:N.a,style:{borderRadius:"13px",width:"250px",height:"83px"},alt:"Listen on Spotify"})," ")),r.a.createElement(k.a,{className:"justify-content-center mt-5"},r.a.createElement("a",{href:"https://geo.music.apple.com/us/album/when-i-wake-up-single/1496888782?itsct=music_box&itscg=30200&app=music&ls=1",style:{display:"inline-block",overflow:"hidden",borderRadius:"13px",width:"250px",height:"83px"}},r.a.createElement("img",{src:"https://tools.applemediaservices.com/api/badges/listen-on-apple-music/badge/en-US?size=250x83&releaseDate=1582675200&h=4f6f77d64571340a2be2ef81fdcf420e",style:{borderRadius:"13px",width:"250px",height:"83px"},alt:"Listen on Apple Music"})," ")),r.a.createElement(k.a,{className:"justify-content-center mt-5 mb-5"},r.a.createElement("a",{href:"https://www.deezer.com/album/128848832?utm_source=deezer&utm_content=album-128848832&utm_term=0_1597159260&utm_medium=web",style:{display:"inline-block",overflow:"hidden",borderRadius:"13px",width:"250px",height:"83px"}},r.a.createElement("img",{src:O.a,style:{borderRadius:"13px",width:"250px",height:"83px"},alt:"Listen on Deezer"})," "))),r.a.createElement(C,null))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"bg-dark text-white mt-sm-1"},r.a.createElement(d.a.Img,{className:"d-none d-lg-block",src:x.a,fluid:!0,alt:"Card image"}),r.a.createElement(d.a.ImgOverlay,{className:"col col-lg-3 ml-auto albumpos"},r.a.createElement(h.a.Link,{as:s.b,to:"/News",className:"enLarge2"},r.a.createElement(d.a.Img,{id:"card-bild",src:w.a,srcSet:"".concat(w.a," 300w, ").concat(w.a," 768w, ").concat(E.a," 1280w"),fluid:!0}),r.a.createElement(d.a.Title,{className:"text-secondary text-center mt-3"}," ",r.a.createElement("h4",null,"New Single Out Now!")),r.a.createElement(d.a.Text,{className:"text-secondary text-center"},"Listen to Can't Stop")))),r.a.createElement(f.a,{style:{textAlign:"center"},className:"d-lg-none"},r.a.createElement("iframe",{style:{height:"80px"},src:"https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI",width:"auto",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})))},I=t(116),F=t(62),T=t.n(F),J=t(35),D=t.n(J),_=t(45),W=t.n(_),z=(t(110),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{id:"topContainerMusic",className:""},r.a.createElement(k.a,null,r.a.createElement(f.a,{className:"",xs:5,md:5,style:{zIndex:9999,marginTop:50}},r.a.createElement("h4",null,"Listen To"),r.a.createElement("h2",{id:"whenIWakeUp"},"When I Wake Up"),r.a.createElement("iframe",{style:{marginTop:"10px"},src:"https://open.spotify.com/embed/track/2pA7y8h2hsjMDpI0zyMZvI",width:"300",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})),r.a.createElement(f.a,{xs:7,md:7},r.a.createElement(I.a,{className:"ml-1 redJacket",src:D.a,srcSet:"".concat(D.a," 300w, ").concat(D.a," 768w, ").concat(T.a," 1280w"),thumbnail:!0})))),r.a.createElement(v.a,{style:{margin:"50px auto 50px auto"}},r.a.createElement(k.a,null,r.a.createElement(f.a,{sm:6},r.a.createElement(W.a,{width:"auto",controls:!0,className:"mt-2",url:"https://www.youtube.com/watch?v=1RLrqmWsyqY"})),r.a.createElement(f.a,{sm:6},r.a.createElement(W.a,{width:"auto",controls:!0,className:"mt-2",url:"https://www.youtube.com/watch?v=-DMg87ON0f0&feature=emb_logo"})))))}),B=t(117),H=t(120),P=t(36),G=t.n(P),U=t(63),q=t.n(U),K=t(37),V=t.n(K),Z=t(64),X=t.n(Z),Y=t(38),$=t.n(Y),Q=t(65),ee=t.n(Q),ae=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"mt-1"},r.a.createElement(B.a,null,r.a.createElement("h2",null,"About"),r.a.createElement(H.a,null,r.a.createElement(H.a.Item,{className:"h-200",interval:300},r.a.createElement(I.a,{className:"d-block w-100",src:G.a,alt:"First slide",s:!0,srcSet:"".concat(G.a," 300w, ").concat(G.a," 768w, ").concat(q.a," 1280w")}),r.a.createElement(H.a.Caption,null)),r.a.createElement(H.a.Item,{interval:300},r.a.createElement(I.a,{className:"d-block w-100",src:V.a,alt:"First slide",srcSet:"".concat(V.a," 300w, ").concat(V.a," 768w, ").concat(X.a," 1280w")}),r.a.createElement(H.a.Caption,null)),r.a.createElement(H.a.Item,{interval:300},r.a.createElement(I.a,{className:"d-block w-100",src:$.a,alt:"First slide",srcSet:"".concat($.a," 300w, ").concat($.a," 768w, ").concat(ee.a," 1280w")}),r.a.createElement(H.a.Caption,null))),r.a.createElement(k.a,{className:"mx-lg-3 mt-3 mt-lg-4"},r.a.createElement(f.a,{className:"",md:6},r.a.createElement("p",null,' Jonas Snitt, Swedish Singer / Songwriter / Guitarist / Producer. Grew up in Paris and moved to Stockholm in year 2000. He got his first guitar at the age of 13 and played a lot of Blues and Rock, listening to Eric Clapton, B.B King and Jimi Hendrix. Later on he studied classical guitar and opera in a music highschool in Stockholm called Lilla Akademien. He participated in the television program The Voice Sweden 2012 and joined the team of Carola H\xe4ggkvist. She told Jonas was a \u201d record company\u2019s dream \u201d because of his voice and live appearance. During the spring of 2012 the song "Feel The Light" was played at the Swedish national radio channel P4. Since then he recorded several EP albums, played a great number of big shows in Sweden and was the lead guitarist with Mikael Rickfors during summer 2018.')),r.a.createElement(f.a,{md:0}),r.a.createElement(f.a,{className:"",md:6},r.a.createElement("p",null,"After the summer tour he took a break from playing live shows and started to work hard with songwriting and production. With all of his influences from Rock, Soul, Funk, Classical Guitar Jonas Snitt found his own Pop sound in the way he sings, writes and produces songs. This resulted to the new EP album with six Acoustic / Pop songs. The singel \u201dWhen I Wake Up\u201d was mastered by Randy Merrill at Sterling Sound NY (Adele, John Mayer, Taylor Swift...)  where Jonas received an email from Randy saying: \u201d Thank you for sending me this fantastic song to master today \u201d. Jonas Snitt musical journey will never stop, stay tuned!"))))))}}]),t}(n.Component),te=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null))}}]),t}(n.Component),ne=t(121),re=(t(111),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{className:"mt-1",collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark"},r.a.createElement("div",{className:"navbar-collapse collapse dual-nav ml-3"},r.a.createElement("ul",{className:"nav navbar-nav d-flex"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.facebook.com/JonasSnitt/"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",{className:"nav-item ml-2"},r.a.createElement("a",{className:"nav-link",href:"https://www.instagram.com/jonas_snitt/?hl=en"},r.a.createElement("i",{className:"fa fa-instagram"}))))),r.a.createElement(h.a,{className:"socialMedia"},r.a.createElement("li",{className:"nav-item fb-ikon"},r.a.createElement("a",{className:"nav-link",href:"https://www.facebook.com/JonasSnitt/"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",{className:"nav-item inst-ikon"},r.a.createElement("a",{className:"nav-link",href:"https://www.instagram.com/jonas_snitt/?hl=en"},r.a.createElement("i",{className:"fa fa-instagram"})))),r.a.createElement(ne.a.Brand,{className:"mx-auto coco",as:s.b,to:"/"},"JONAS SNITT"),r.a.createElement(ne.a.Toggle,{className:"","aria-controls":"responsive-navbar-nav ml-auto"}),r.a.createElement(ne.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{className:"text-center ml-auto"},r.a.createElement(h.a.Link,{as:s.b,href:"/",to:"/"},"Home"),r.a.createElement(h.a.Link,{as:s.b,href:"/Music+Videos",to:"/Music+Videos"},"Music + Videos"),r.a.createElement(h.a.Link,{as:s.b,href:"/About",to:"/About"},"About"),r.a.createElement(h.a.Link,{as:s.b,href:"/About",to:"/About"},"Contact")))))}}]),t}(n.Component));var ce=function(){return r.a.createElement(s.a,{basename:"/jonas-app/"},r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(o.a,{exact:!0,path:"/",component:te}),r.a.createElement(o.a,{path:"/jonas-app/",component:te}),r.a.createElement(o.a,{path:"/music+videos",component:z}),r.a.createElement(o.a,{path:"/news",component:R}),r.a.createElement(o.a,{path:"/about",component:ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,a,t){e.exports=t.p+"static/media/JonasAlbumMobil.03b2cb2e.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/RedJacket-Small.31d0ceaa.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/AboutMobil.5f0835f3.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/KungsanDrumsMobil.434c6962.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/KungsanGitarrerMobil.0ee2d2ab.jpg"},41:function(e,a,t){e.exports=t.p+"static/media/HeaderPic.9a2f9539.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/JonasAlbum.5028d72f.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/Spotify_Logo.11dc437a.png"},55:function(e,a,t){e.exports=t.p+"static/media/Deezer_Logo.7488968e.png"},62:function(e,a,t){e.exports=t.p+"static/media/RedJacket-Large.5ac45476.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/AboutDesktop.ae182676.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/KungsanDrumsDeskt.99c68373.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/KungsanGitarrer.7add32a2.jpg"},69:function(e,a,t){e.exports=t(112)},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){e.exports=t.p+"static/media/webb_cover.09dfe100.jpg"},77:function(e,a,t){e.exports=t.p+"static/media/1440.8905caa0.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/1280.6af356ca.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/cp.0e2febfe.jpg"},80:function(e,a,t){e.exports=t.p+"static/media/bredare_nologo.6eb9a348.jpg"},81:function(e,a,t){e.exports=t.p+"static/media/nologo.e6a98412.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/nologoleft.a1973af4.jpg"},83:function(e,a,t){e.exports=t.p+"static/media/Wake.4b130f81.jpg"},84:function(e,a,t){},85:function(e,a,t){e.exports=t.p+"static/media/ugly.c062ea47.jpg"},86:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.b5087f73.chunk.js.map