(this.webpackJsonpproject6=this.webpackJsonpproject6||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/logo.545e9040.png"},48:function(e,t,a){e.exports=a(89)},53:function(e,t,a){},54:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),s=a(41),i=a.n(s),c=(a(53),a(47)),o=a(8),u=a(9),m=a(11),d=a(10),p=(a(54),a(42)),h=a(12),g=a(43),f=a.n(g),y=(n={},Object(h.a)(n,"400","400 - There is something wrong on your end, please try again"),Object(h.a)(n,"401","401 - Wrong API key or problems with account"),Object(h.a)(n,"404","404 - No results found, please try again"),Object(h.a)(n,"429","429 - API quota exceeded - please try again later"),Object(h.a)(n,"500","500 - Unexpected server errors - please try again later"),n);function v(e,t){return f()({url:"https://listen-api.listennotes.com/api/v2/"+e,params:Object(p.a)({},t),headers:Object(h.a)({},"X-ListenAPI-Key","49ec7884ad4a47f2be99eed90a061cf4")})}function E(e){console.log(typeof e);var t=e.response.status,a="Unknown error, please refresh and try again";for(var n in y)t==n&&(a=y[n]);return a}var b=a(25),P=a.n(b);a(71),a(73);P.a.initializeApp({apiKey:"AIzaSyBwLq_-FMp8lGW3_AVNC71e_tUWM6vefR8",authDomain:"podcast-planner-fde21.firebaseapp.com",databaseURL:"https://podcast-planner-fde21.firebaseio.com",projectId:"podcast-planner-fde21",storageBucket:"podcast-planner-fde21.appspot.com",messagingSenderId:"457751978532",appId:"1:457751978532:web:5196b0b12f491402fcaeb1"});var N=P.a,S=a(24),T=a(2);a(75);function k(e){var t=e.setUserTime,a=e.userTime,n=e.selectGenre,l=e.genres,s=e.handleSubmit;return r.a.createElement("form",{action:"submit",className:"form"},r.a.createElement("label",{htmlFor:"time"},"How much time do you have?"),r.a.createElement("input",{onChange:t,type:"range",name:"time",id:"time",min:"0",max:"120",value:a}),r.a.createElement("span",null,a," minute(s)"),r.a.createElement("label",{htmlFor:"genre"}),r.a.createElement("label",{htmlFor:"genre",className:"sr-only"},"Select genre"),r.a.createElement("select",{onChange:n,name:"genre",id:"genre"},r.a.createElement("option",{value:""},"Select Genre \u25bc"),l.map((function(e){return r.a.createElement("option",{className:"options",key:e.id,value:e.id},e.name)}))),r.a.createElement("button",{onClick:s,type:"submit",className:"headerButton"},"Submit"))}a(76);var j=a(44),_=a.n(j);a(77);function C(e){var t=e.loading;return r.a.createElement("div",{className:"loading-bar ".concat(t?"":"disabled")})}var O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.setUserTime,a=e.userTime,n=e.selectGenre,l=e.genres,s=e.handleSubmit,i=e.loading;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navBar"}),r.a.createElement("div",{className:"flexContainer wrapper"},r.a.createElement("div",{className:"containerOne"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{alt:"logo",src:_.a,className:"logo"}),r.a.createElement("h1",null,"Podcast Planner")),r.a.createElement("p",null,"Welcome to the Podcast Planner! Whether you're walking, hiking, road tripping or just plain hanging out, use this app to select podcast durations based on your journey time and create playlists!")),r.a.createElement("div",{className:"containerTwo"},r.a.createElement(k,{setUserTime:t,userTime:a,selectGenre:n,genres:l,handleSubmit:s}))),r.a.createElement(C,{loading:i}),r.a.createElement("div",{className:"shape"}))}}]),a}(l.Component);a(78);function w(e){var t=e.podcasts,a=e.add,n=e.isStarted,l=e.sort;return r.a.createElement("div",null,n?t.length?r.a.createElement("div",null,r.a.createElement("h2",{className:"podcastHeading"},"Your Podcast Selections:"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"sortContainer"},r.a.createElement("div",{className:"childContainer"},r.a.createElement("p",{className:"sortTitle"},"Sort by Podcast Length:")),r.a.createElement("div",{className:"childTwoContainer"},r.a.createElement("button",{className:"sorting",onClick:function(){return l("asc")}},"Ascending \u25b2"),r.a.createElement("button",{className:"sorting",onClick:function(){return l("desc")}},"Descending \u25bc"))),r.a.createElement("ul",{className:"podcastList"},t.map((function(e){return r.a.createElement("li",{className:"podcast",key:e.id},I(e,a))}))))):r.a.createElement("h2",{className:"podcastHeading"},"No podcasts found! Try searching for something else"):"")}var I=function(e,t){var a=e.audio_length_sec,n=e.description_original,l=e.thumbnail,s=e.title_original,i=e.listennotes_url,c=e.podcast.title_original,o=Math.round(parseInt(a/60)),u=n.split(" ").slice(0,20).join(" ");return u+="...",r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c),r.a.createElement("a",{href:i,rel:"noreferrer"},r.a.createElement("img",{src:l,alt:"Thumbnail for ".concat(s)})),r.a.createElement("h3",null,s),r.a.createElement("p",null,"Length: ",o," minutes"),r.a.createElement("p",null,u),r.a.createElement("button",{onClick:function(){return t(e)}},"Add To Playlist"))},A=a(16),x=a(13),B=(a(82),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={currentTitle:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({currentTitle:this.props.playlist.playlist_title})}},{key:"render",value:function(){var e=this,t=this.props,a=t.playlist,n=t.removeItem,l=t.remove,s=t.setActive,i=t.current,c=t.updateName,o=t.userTime,u=a.key,m=a.playlist_title,d=[];return r.a.createElement("li",{key:u,className:"Playlist ".concat(u===i?"selected":""),onClick:function(){return s(u,e.state.currentTitle)}},r.a.createElement("button",{onClick:function(){return s(u,e.state.currentTitle)},className:"selectPlaylist","aria-label":"Select Playlist"}),r.a.createElement("h3",null,r.a.createElement("label",{className:"sr-only",htmlFor:u},m),r.a.createElement("input",{onChange:c,onKeyDown:function(e){"Enter"===e.key&&document.getElementById(a.key).blur()},type:"text",id:u,value:m,placeholder:"Untitled Playlist"})),r.a.createElement("button",{className:"Playlist-delete",onClick:function(){return l(u)},"aria-label":"Delete Playlist"},r.a.createElement(A.a,{icon:x.c})),r.a.createElement("ul",null,a.data.map((function(e){if(e.data&&"playlist_title"!==e.key){var t=e.data,a=t.title_original,l=t.listennotes_url,s=t.audio_length_sec,i=parseInt(s)/60;return d.push(i),r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:l,rel:"noreferrer"},a),r.a.createElement("button",{className:"remove",onClick:function(){return n(e.key)},"aria-label":"Remove Podcast"},r.a.createElement(A.a,{icon:x.d})))}}))),r.a.createElement("ul",null,0!==d.length?function(){var e=Math.round(d.reduce((function(e,t){return e+t})));return r.a.createElement("li",{className:"showTime"},r.a.createElement("p",null," ",r.a.createElement("span",{className:e>o?"alert":""},e)," / ",o," Minutes"))}():null))}}]),a}(l.Component)),F=(a(83),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).toggle=function(t){e.setState({isToggled:t.target.checked})},e.state={isToggled:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.playlists,a=e.remove,n=e.removeItem,l=e.createPlaylist,s=e.setActive,i=e.current,c=e.rename,o=e.updateName,u=e.title,m=e.userTime;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:this.toggle,type:"checkbox",name:"hamburger",id:"hamburger"}),r.a.createElement("label",{htmlFor:"hamburger"},r.a.createElement(A.a,{icon:this.state.isToggled?x.c:x.a})),r.a.createElement("div",{className:"SideMenu"},r.a.createElement("h2",null,"Your Playlists"),r.a.createElement("button",{onClick:function(){return l(0)}},r.a.createElement(A.a,{icon:x.b})),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(B,{playlist:e,remove:a,removeItem:n,setActive:s,current:i,rename:c,updateName:o,title:u,userTime:m})})))))}}]),a}(l.Component)),U=a(45),L=(a(86),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footerBar"},r.a.createElement("div",{className:"wrapper container"},r.a.createElement("div",null,r.a.createElement(U.VerticleButton,{StopPosition:0,ShowAtPosition:130,EasingType:"easeOutCubic",AnimationDuration:500,ContainerClassName:"ScrollUpButton__Container",TransitionClassName:"ScrollUpButton__Toggled",style:{},ToggledStyle:{}}))),r.a.createElement("div",{className:"containerDiv"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h3",null,"Podcast Planner")),r.a.createElement("div",{className:"junoMade"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Created at ",r.a.createElement("a",{href:"https://junocollege.com/"},"Juno College")," by"),r.a.createElement("ul",{className:"creators"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/nkanigsberg"},"Nathan Kanigsberg")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/pfreemanc"},"Paige Freeman-Cyopeck")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/redawaseem"},"Reda Waseem")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/jalexgould"},"Alex Gould"))),r.a.createElement("p",null,"\xa9 Copyright 2020"))))))}}]),a}(l.Component)),G=a(17),M=a.n(G),D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).selectGenre=function(t){e.setState({genre:t.target.value,genreString:t.target[t.target.selectedIndex].text})},e.setUserTime=function(t){e.setState({userTime:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.genre?e.getPodcasts():M()("Please select a genre!")},e.removePlaylistItem=function(t){var a=N.database().ref(),n=e.state,l=n.uid,r=n.currentPlaylist;a.child("users").child(l).child(r).child(t).remove()},e.removePlaylist=function(t){var a=N.database().ref(),n=e.state.uid;a.child("users").child(n).child(t).remove(),e.setState({currentPlaylist:""})},e.addToPlaylist=function(t){var a=N.database().ref(),n=e.state,l=n.uid,r=n.userPlaylists,s=n.currentPlaylist;r.length?a.child("users").child(l).child(s).push(t):e.createPlaylist(t),document.getElementById("hamburger").checked=!0},e.createPlaylist=function(t){var a=N.database().ref(),n=e.state.uid,l=a.child("users").child(n).push().key;e.setState({currentPlaylist:l},(function(){a.child("users").child(n).child(l).set({playlist_title:"Untitled Playlist"}),a.child("users").child(n).child(l).push(t)}))},e.setActivePlaylist=function(t,a){e.setState({currentPlaylist:t,playlistName:a})},e.renamePlaylist=function(t){var a=N.database().ref(),n=e.state,l=n.uid,r=n.currentPlaylist,s=n.playlistName;a.child("users").child(l).child(r).child("playlist_title").set(s)},e.updatePlaylistName=function(t){var a=t.target.value;e.setState({playlistName:a},e.renamePlaylist)},e.nextPage=function(t){setTimeout((function(){e.setState({offset:e.state.offset+10}),e.getPodcasts()}),400),document.body.scrollTop=0,document.documentElement.scrollTop=0},e.prevPage=function(t){setTimeout((function(){e.setState({offset:e.state.offset-10}),e.getPodcasts()}),400),document.body.scrollTop=0,document.documentElement.scrollTop=0},e.sortPodcasts=function(t){var a=Object(c.a)(e.state.podcasts);a.sort((function(e,a){return"asc"===t?parseFloat(e.audio_length_sec)-parseFloat(a.audio_length_sec):parseFloat(a.audio_length_sec)-parseFloat(e.audio_length_sec)})),e.setState({podcasts:a})},e.state={genres:[],genre:"",genreString:"",podcasts:[],userTime:20,selectedTime:20,isStarted:!1,isLoading:!1,userPlaylist:[],uid:"",userPlaylists:[],currentPlaylist:"",playlistName:"",offset:10},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("genres",{top_level_only:1}).then((function(t){e.setState({genres:t.data.genres})})).catch((function(e){M()(E(e))})),N.database().ref().on("value",(function(t){var a=[],n=t.val();if(n){var l=n.users[e.state.uid];if(l){for(var r in l){e.state.currentPlaylist||e.setState({currentPlaylist:r});var s=[];for(var i in l[r])"playlist_title"!==i&&s.push({key:i,data:l[r][i]});a.push({key:r,playlist_title:l[r].playlist_title,data:s})}e.setState({userPlaylists:a})}else e.setState({userPlaylists:[]})}else e.setState({userPlaylists:[]})})),N.auth().signInAnonymously().catch((function(e){var t=e.message;M()(t)})),N.auth().onAuthStateChanged((function(t){if(t){var a=t.uid;e.setState({uid:a})}}))}},{key:"getPodcasts",value:function(){var e=this;this.setState({isStarted:!0,isLoading:!0,selectedTime:this.state.userTime});var t=this.state,a=t.genre,n=t.genreString,l=t.userTime,r=t.offset;v("search",{q:n,len_min:4,len_max:parseInt(l)+5,offset:r,genre_ids:a,language:"English"}).then((function(t){e.setState({podcasts:t.data.results,isLoading:!1})})).catch((function(e){M()(E(e))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.podcasts,l=t.userPlaylists,s=t.userTime,i=t.genres,c=t.currentPlaylist,o=t.playlistName,u=t.isStarted;return r.a.createElement(S.a,{basename:"/podcast-planner"},r.a.createElement("div",{className:"App"},r.a.createElement(T.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(O,Object.assign({},t,{setUserTime:e.setUserTime,userTime:s,selectGenre:e.selectGenre,genres:i,handleSubmit:e.handleSubmit,loading:a}))}}),u?a?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement("main",{className:"podcastContainer"},r.a.createElement(T.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(w,Object.assign({},t,{podcasts:n,add:e.addToPlaylist,sort:e.sortPodcasts,isStarted:u}))}}),r.a.createElement("div",{class:"page wrapper"},0!==this.state.podcasts.length?r.a.createElement(r.a.Fragment,null,this.state.offset>=20?r.a.createElement("button",{className:"pageButton",onClick:function(){return e.prevPage()}},"\u25c4 Previous Page"):null,r.a.createElement("button",{className:"pageButton",onClick:function(){return e.nextPage()}},"Next Page \u25ba")):null)):r.a.createElement("p",{className:"loading"},"Select Genre to Continue"),r.a.createElement(T.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(F,Object.assign({},t,{playlists:l,remove:e.removePlaylist,removeItem:e.removePlaylistItem,createPlaylist:e.createPlaylist,setActive:e.setActivePlaylist,current:c,rename:e.renamePlaylist,updateName:e.updatePlaylistName,userTime:e.state.selectedTime,title:o}))}}),r.a.createElement(T.a,{path:"/",render:function(t){return r.a.createElement(L,Object.assign({},t,{isStarted:e.state.isStarted}))}})))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.7bd8ffc6.chunk.js.map