webpackJsonp([2,0],[function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=s(14),i=a(n),c=s(17),r=a(c),o=s(61),l=a(o);new i.default({el:"#app",store:r.default,render:function(t){return t(l.default)}})},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{path:"index",cn:"简介",en:"Home"},{path:"introductions",cn:"自我介绍",en:"About me"},{path:"skills",cn:"技能",en:"Skills"},{path:"projects",cn:"项目经历",en:"Projects"}]},,,,,function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(8),i=a(n),c=s(2),r=a(c),o={title:"Shaoye 的简历",name:"邵叶",shortDescription:"大二学生，Web工程师进阶中...",description:"高中接触 Web 开发和设计，上了大学正式学习前端、PHP、Node.js，大一开始在校不间断负责多个公众号、小程序的开发。",infomations:[{icon:"../static/svgs/info/birthday.svg",key:"生日",value:"1996.11.11"},{icon:"../static/svgs/info/education.svg",key:"教育经历",value:"南京邮电大学 · 计算机科学与技术"},{icon:"../static/svgs/info/nowCity.svg",key:"居住地",value:"江苏 · 南京"},{icon:"../static/svgs/info/email.svg",key:"邮箱",value:"shaoye1124@gmail.com"},{icon:"../static/svgs/info/phone.svg",key:"手机号",value:"+86 15380868406"}],skills:[{value:"HTML",logo:"../static/images/logos/html.png"},{value:"CSS",logo:"../static/images/logos/css.png"},{value:"JavaScript",logo:"../static/images/logos/javascript.png",style:{background:"linear-gradient(to bottom, #ffeb0e , #efdd1b)","border-color":"#ffeb0e"}},{value:"Node.js",logo:"../static/images/logos/nodejs.png",style:{background:"linear-gradient(to bottom, #8ccf00 , #80bd01)","border-color":"#8ccf00"}},{value:"PHP",logo:"../static/images/logos/php.png",style:{background:"linear-gradient(to bottom, #8093d1 , #7b8ec9)","border-color":"#8093d1"}},{value:"Python",logo:"../static/images/logos/python.png"},{value:"Photoshop",logo:"../static/images/logos/photoshop.png",style:{background:"#001d26",border:"5px solid #00c8ff"}},{value:"Sketch",logo:"../static/images/logos/sketch.png",style:{background:"linear-gradient(to bottom, #1d0f4f , #130a33)","border-color":"#1d0f4f"}}],projects:[{image:"../static/images/projects/sastindex.png",desc:"南京邮电大学大学生科学技术协会主页。前端使用 JavaScript 开发，后端使用 PHP 和 MySQL 搭建。",url:"http://sast.njupt.edu.cn/",qrcode:"../static/images/projects/sastindex.png"},{image:"../static/images/projects/wechat.png",desc:"这是南京邮电大学微信小程序，集教务信息，成绩查询，跑操查询，课表查询，饭卡查询功能于一身。",url:"https://mp.weixin.qq.com",qrcode:"../static/images/projects/wechat.png"},{image:"../static/images/projects/spider.png",desc:"使用Pyhton开发的分布式爬虫管理系统，可对爬虫进行分布式管理与监控。",url:"https://github.com/shaoye/distributed_crawler",qrcode:"../static/images/projects/spider.png"}],projectRefer:"在我的 Github 查看更多项目"},l={title:"Shaoye's resume",name:"Ye Shao",shortDescription:"A student, web developer...",description:"I started learning front-end development and participating in development and maintenance of a number of WeChat public accounts in school when I was a freshman at university. At the same time, I began to follow the open source community and the front-end ecosystem closely.",infomations:[{icon:"../static/svgs/info/birthday.svg",key:"Birthday",value:"1996.11.11"},{icon:"../static/svgs/info/education.svg",key:"Education",value:"NJUPT · Computer Science"},{icon:"../static/svgs/info/nowCity.svg",key:"Live in",value:"Nanjing, Jiangsu, RPC"},{icon:"../static/svgs/info/email.svg",key:"Email",value:"shaoye1124@gmail.com"},{icon:"../static/svgs/info/phone.svg",key:"Phone Number",value:"+86 15380869406"}],projects:[{image:"../static/images/projects/sastindex.png",desc:"南京邮电大学大学生科学技术协会主页。前端使用 JavaScript 开发，后端使用 PHP 和 MySQL 搭建。",url:"http://sast.njupt.edu.cn/",qrcode:"../static/images/projects/sastindex.png"},{image:"../static/images/projects/wechat.png",desc:"这是南京邮电大学微信小程序，集教务信息，成绩查询，跑操查询，课表查询，饭卡查询功能于一身。",url:"https://mp.weixin.qq.com",qrcode:"../static/images/projects/wechat.png"},{image:"../static/images/projects/spider.png",desc:"使用Pyhton开发的分布式爬虫管理系统，可对爬虫进行分布式管理与监控。",url:"https://github.com/shaoye/distributed_crawler",qrcode:"../static/images/projects/spider.png"}],projectRefer:"See morinse projects in my Github"};e.default={cn:{website:o,route:r.default.map(function(t){return t.cn})},en:{website:(0,i.default)({},o,l),route:r.default.map(function(t){return t.en})}}},,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={changeLanguage:function(t,e){var s=t.commit,a=t.state;a.lang!==e&&(s("CHANGELANG",e),window.localStorage.setItem("x-language",e))}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(14),i=a(n),c=s(15),r=a(c),o=s(7),l=a(o),u=s(16),d=a(u),g=s(18),h=a(g);i.default.use(r.default);var v=window.localStorage.getItem("x-language");v||(window.localStorage.setItem("x-language","cn"),v="cn"),document.title=l.default[v].website.title,e.default=new r.default.Store({state:{lang:v,data:l.default[v]},actions:d.default,mutations:h.default})},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(7),i=a(n);e.default={CHANGELANG:function(t,e){t.lang=e,t.data=i.default[e]}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(63),i=a(n),c=s(62),r=a(c),o=s(2),l=a(o),u=s(64),d=a(u),g=s(65),h=a(g),v=s(67),f=a(v),p=s(66),m=a(p);e.default={name:"entry",data:function(){return{transitionName:"slideUpIn",currentPage:0,routeMap:[],touchStartX:0,outdatedbrowser:!1}},beforeMount:function(){this.routeMap=l.default.map(function(t,e){return t.id=e,t})},mounted:function(){var t=this;window.onmousewheel=function(e){if(e.stopPropagation(),e.preventDefault(),!t.scrollingLock)if(e.wheelDelta<-40){if(t.scrollingLock=!0,setTimeout(function(){t.scrollingLock=!1},700),t.currentPage===t.routeMap.length-1)return;t.currentPage++}else if(e.wheelDelta>40){if(t.scrollingLock=!0,setTimeout(function(){t.scrollingLock=!1},700),0===t.currentPage)return;t.currentPage--}}},methods:{linkTo:function(t){this.currentPage=t},touchmove:function(t){t.preventDefault(),0===this.touchStartX&&(this.touchStartX=t.changedTouches[0].screenY)},touchend:function(t){var e=this;if(t.preventDefault(),0!==this.touchStartX){var s=t.changedTouches[0].screenY;if(!this.scrollingLock){if(this.touchStartX-s>80){if(this.scrollingLock=!0,setTimeout(function(){e.scrollingLock=!1},700),this.currentPage===this.routeMap.length-1)return;this.currentPage++}else if(this.touchStartX-s<-80){if(this.scrollingLock=!0,setTimeout(function(){e.scrollingLock=!1},700),0===this.currentPage)return;this.currentPage--}this.touchStartX=0}}}},components:{navigator:i.default,languageSwitcher:r.default,index:d.default,introductions:h.default,skills:f.default,projects:m.default}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(26),i=a(n),c=s(15);e.default={name:"languageSwitcher",methods:(0,i.default)({},(0,c.mapActions)(["changeLanguage"]))}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),i=a(n);e.default={name:"navigator",props:["id"],data:function(){return{routeMap:i.default,scrollingLock:!1}},methods:{linkTo:function(t){this.$emit("linkTo",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"introductions",props:["id"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"projects",props:["id"],data:function(){return{activeQrcodeUrl:"",showQrcode:!1,touchStartY:0,currentPage:0}},methods:{showQrcodeFunc:function(t){this.showQrcode=!0,this.activeQrcodeUrl=t},hideQrcode:function(){this.showQrcode=!1},touchmove:function(t){0===this.touchStartX&&(this.touchStartX=t.changedTouches[0].screenX)},touchend:function(t){if(0!==this.touchStartX){var e=t.changedTouches[0].screenX;if(this.touchStartX-e>20){if(this.currentPage===this.$store.state.data.website.projects.length-1)return;this.currentPage++}else if(this.touchStartX-e<-20){if(0===this.currentPage)return;this.currentPage--}this.touchStartX=0}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"skills",props:["id"]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(57);var a=s(1)(s(19),s(71),null,null);t.exports=a.exports},function(t,e,s){s(55);var a=s(1)(s(20),s(69),"data-v-2762a59a",null);t.exports=a.exports},function(t,e,s){s(60);var a=s(1)(s(21),s(74),"data-v-dfa73226",null);t.exports=a.exports},function(t,e,s){s(54);var a=s(1)(s(22),s(68),"data-v-0eef43cb",null);t.exports=a.exports},function(t,e,s){s(58);var a=s(1)(s(23),s(72),"data-v-8a14085c",null);t.exports=a.exports},function(t,e,s){s(59);var a=s(1)(s(24),s(73),"data-v-9cafd012",null);t.exports=a.exports},function(t,e,s){s(56);var a=s(1)(s(25),s(70),"data-v-2fe1363f",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page index"},[t._m(0),t._v(" "),s("h1",{staticClass:"name"},[t._v(t._s(t.$store.state.data.website.name))]),t._v(" "),s("p",{staticClass:"shortDescription"},[t._v(t._s(t.$store.state.data.website.shortDescription))]),t._v(" "),s("div",{staticClass:"social"},[s("div",{staticClass:"blog"},[s("svg",{attrs:{viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{staticClass:"circle",attrs:{cy:"35",cx:"35",r:"30"}})]),t._v(" "),s("a",{staticClass:"icon",attrs:{href:"#",target:"_blank"}},[s("svg",{staticStyle:{"padding-top":"3px"},attrs:{t:"1484204795585",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"42",height:"42"}},[s("path",{attrs:{d:"M940.220387 311.358307 74.928015 311.358307c-16.622586 0-30.099529 13.475919-30.099529 30.098505l0 297.960159c0 16.622586 13.475919 30.098505 30.099529 30.098505l865.291348 0c16.623609 0 30.098505-13.475919 30.098505-30.098505L970.317868 341.456812C970.318892 324.834226 956.843996 311.358307 940.220387 311.358307zM942.478823 618.350167c0 11.30344-9.162684 20.466124-20.466124 20.466124l-828.878021 0c-11.30344 0-20.466124-9.162684-20.466124-20.466124l0-255.82655c0-11.30344 9.162684-20.466124 20.466124-20.466124l828.878021 0c11.30344 0 20.466124 9.162684 20.466124 20.466124L942.478823 618.350167z"}}),t._v(" "),s("path",{attrs:{d:"M152.587746 449.987644c0-0.602727 0-1.355881 0-2.25946s0-1.755993 0-2.560312c0-1.001817 0.099261-2.004657 0.300852-3.012613 0.197498-1.001817 0.400113-2.004657 0.602727-3.012613 1.00284-7.028067 3.059686-13.707187 6.175653-20.033265 3.111874-6.326079 7.380084-12.398378 12.803607-18.226107 5.219885-5.822612 11.946077-10.341532 20.184715-13.556761 8.232498-3.210112 17.873066-5.121648 28.92068-5.724375 8.835226 0 17.119913 1.205455 24.854061 3.615341 7.729032 2.409886 14.911618 5.92699 21.539572 10.544147 6.627954 4.819772 11.598152 10.797927 14.911618 17.924231 3.313465 7.131421 4.970198 15.416108 4.970198 24.854061 0 6.627954-0.353041 12.253068-1.054005 16.870226-0.706081 4.622274-1.859347 8.335852-3.464915 11.146874-1.407046 2.814092-3.266393 5.4225-5.572926 7.832386-2.310625 2.409886-4.871961 4.721535-7.68196 6.928806-0.202615 0.202615-0.451278 0.405229-0.753153 0.602727-0.300852 0.202615-0.654916 0.405229-1.055029 0.601704-0.202615 0.202615-0.451278 0.405229-0.753153 0.602727-0.300852 0.202615-0.653893 0.405229-1.054005 0.602727 5.4225 2.009773 10.138918 4.471848 14.158465 7.381108 4.015454 2.913353 7.229658 6.279007 9.640568 10.091846 2.409886 3.816932 4.316306 7.634888 5.723352 11.447726 1.402953 3.817955 2.409886 7.734148 3.012613 11.748578 0 0.405229 0 0.805342 0 1.205455 0 0.405229 0.099261 0.804319 0.300852 1.205455 0 0.405229 0 0.804319 0 1.205455 0 0.405229 0 0.804319 0 1.205455 0 0.405229 0 0.804319 0 1.204431 0 0.405229 0.099261 0.706081 0.300852 0.904603 0 0.405229 0 0.75213 0 1.054005 0 0.300852 0 0.654916 0 1.054005 0 0.405229 0 0.804319 0 1.205455 0 0.405229 0 0.804319 0 1.205455 0 0.201591 0 0.503467 0 0.903579 0 0.202615 0.047072 0.405229 0.150426 0.602727 0.098237 0.201591 0.150426 0.405229 0.150426 0.602727 0 8.636704-1.407046 16.470113-4.218068 23.49818-2.814092 7.03216-7.03216 13.359262-12.653181 18.97926-5.625114 5.625114-11.800767 9.78997-18.526959 12.501732-6.731308 2.710738-14.112416 4.067642-22.1423 4.067642-0.202615 0-0.503467 0-0.903579 0-0.202615 0-0.405229 0-0.602727 0-0.202615 0-0.405229 0-0.602727 0-0.202615 0-0.503467 0-0.903579 0-0.202615 0-0.405229 0-0.602727 0-0.202615 0-0.405229 0-0.602727 0l-45.188178 0 0-28.317952 37.95852 0c5.220908 0.405229 10.191106-0.047072 14.912641-1.355881 4.716418-1.303692 9.084912-3.2623 13.104459-5.873778 4.015454-2.608407 7.079232-6.025227 9.188266-10.243295 2.109034-4.217045 3.163039-9.338692 3.163039-15.363919 0-6.42534-1.106194-11.9471-3.313465-16.569374-2.212388-4.618181-5.4225-8.232498-9.640568-10.844999-4.218068-2.811022-9.03784-4.866844-14.46034-6.175653-5.4225-1.303692-11.348466-1.958608-17.773805-1.958608l-33.138748-0.602727 0-25.908066 26.209942 0c6.627954 0.405229 12.351306-0.047072 17.171078-1.355881 4.819772-1.303692 8.736988-3.2623 11.748578-5.874801 3.012613-2.607384 5.4225-5.319146 7.229658-8.134261 1.807159-2.809999 3.012613-5.822612 3.615341-9.03784 0-0.197498 0-0.400113 0-0.602727 0-0.197498 0.099261-0.49835 0.300852-0.903579 0-0.197498 0-0.452301 0-0.753153s0-0.550539 0-0.753153c0-0.197498 0-0.400113 0-0.602727 0-0.197498 0.099261-0.49835 0.300852-0.903579 0-0.197498 0-0.452301 0-0.753153s0-0.550539 0-0.753153c0-5.220908-0.856507-9.988492-2.560312-14.309914-1.708921-4.316306-4.269233-8.082072-7.68196-11.2973-3.215228-3.412726-7.182586-5.921873-11.899004-7.531534-4.721535-1.605567-9.993608-2.409886-15.816221-2.409886-6.430456 0-12.003382 0.903579-16.7198 2.711761-4.721535 1.807159-8.487302 4.51892-11.2973 8.133238-2.814092 3.615341-5.022387 7.433296-6.627954 11.447726-1.609661 4.02057-2.612501 8.134261-3.012613 12.351306-0.202615 0.602727-0.300852 1.158383-0.300852 1.656733 0 0.503467 0 0.955768 0 1.355881 0 0.405229 0 0.856507 0 1.355881 0 0.503467 0 0.955768 0 1.355881l0 148.820444-31.029714 0L152.583652 449.987644z"}}),t._v(" "),s("path",{attrs:{d:"M354.124831 385.820206l0 137.674593c0 7.03216 0.701988 13.359262 2.109034 18.97926 1.402953 5.625114 3.412726 10.745738 6.025227 15.363919 2.809999 4.419659 6.825452 7.832386 12.050454 10.243295 5.219885 2.409886 11.748578 3.614317 19.581987 3.614317 0.197498 0 0.400113 0 0.602727 0 0.197498 0 0.400113 0 0.601704 0 0.197498 0 0.348947 0 0.452301 0 0.099261 0 0.249687 0 0.451278 0 0.197498-0.196475 0.400113-0.300852 0.602727-0.300852 0.197498 0 0.400113 0 0.602727 0 0.197498 0 0.400113 0 0.602727 0 0.197498 0 0.347924 0 0.451278 0 0.099261 0 0.249687 0 0.452301 0 0.197498 0 0.400113 0 0.601704 0l23.799032-0.602727 0 26.208918-33.137725 0c-1.808182 0-3.765767-0.047072-5.874801-0.150426-2.109034-0.099261-4.269233-0.248663-6.477528-0.451278-2.212388-0.400113-4.471848-0.903579-6.77838-1.506307-2.310625-0.602727-4.669346-1.303692-7.079232-2.109034-4.819772-1.808182-9.390881-4.26514-13.707187-7.381108-4.321422-3.111874-8.486278-6.877641-12.501732-11.2973-3.816932-4.414543-6.731308-9.78997-8.736988-16.117073-2.009773-6.327102-3.012613-13.707187-3.012613-22.1423L325.805856 385.820206 354.124831 385.820206z"}}),t._v(" "),s("path",{attrs:{d:"M438.171016 445.468724c5.219885-12.652158 13.052271-23.596418 23.49818-32.836873 10.440793-9.437953 21.389146-16.7198 32.836873-21.841447 11.447726-5.120624 23.393803-8.082072 35.849486-8.887414 0.400113 0 0.701988 0 0.903579 0 0.197498 0 0.49835-0.099261 0.903579-0.300852 0.197498 0 0.452301 0 0.753153 0 0.301875 0 0.550539 0 0.753153 0 0.400113 0 0.701988 0 0.903579 0 0.197498 0 0.49835 0 0.904603 0 0.196475 0 0.451278 0 0.75213 0 0.301875 0 0.550539 0 0.753153 0 2.607384 0 5.27105 0.104377 7.983835 0.300852 2.710738 0.202615 5.469572 0.503467 8.284687 0.903579 2.809999 0.405229 5.672186 0.903579 8.585539 1.506307 2.90926 0.601704 5.874801 1.308809 8.887414 2.109034 9.438976 2.815115 18.475793 7.03216 27.113521 12.653181 8.632611 5.625114 16.968463 12.55392 25.004487 20.786419 8.030907 8.237615 14.159488 18.277272 18.376533 30.125111 4.217045 11.852956 6.627954 25.507954 7.229658 40.971134 0 14.262842-2.409886 27.715225-7.229658 40.368406-4.819772 12.652158-11.952216 24.505114-21.389146 35.547611-9.44307 11.047614-20.635993 19.23304-33.589003 24.552186-12.954033 5.323239-27.768437 7.983835-44.436048 7.983835-15.467273 0-29.777187-2.311649-42.928718-6.928806-13.155624-4.618181-25.154913-11.545964-35.999912-20.786419-10.844999-9.437953-18.97926-21.087271-24.40176-34.944883-5.4225-13.857613-8.134261-29.92352-8.134261-48.200792L430.339654 487.946165C430.33863 472.28037 432.946015 458.121905 438.171016 445.468724zM461.066469 489.753323c0 0.405229 0 0.804319 0 1.204431 0 0.202615 0 0.503467 0 0.903579 0 0.202615 0 0.405229 0 0.602727 0 0.202615 0 0.405229 0 0.602727-0.202615 10.844999 1.506307 20.936845 5.121648 30.275537 3.615341 9.338692 9.136078 18.126846 16.568351 26.360368 7.229658 8.035 15.561417 14.059204 25.004487 18.074657 9.437953 4.02057 19.981077 6.02625 31.632441 6.02625 2.207271 0 4.565992-0.099261 7.079232-0.301875 2.508123-0.197498 5.069459-0.49835 7.68196-0.903579 2.809999-0.401136 5.672186-0.951675 8.586562-1.656733 2.90926-0.701988 5.873778-1.656733 8.887414-2.862187 5.821589-2.207271 11.344373-5.220908 16.568351-9.03784 5.220908-3.812839 10.243295-8.534374 15.063067-14.159488 4.819772-5.821589 8.435113-13.000082 10.846022-21.539572 2.408863-8.53335 3.614317-18.526959 3.614317-29.974685 0-10.642384-1.557472-20.88568-4.669346-30.727839-3.115967-9.838066-7.883551-19.176758-14.308891-28.0171-6.227842-8.835226-14.512529-15.514345-24.853038-20.033265-10.346649-4.51892-22.646789-6.77838-36.903491-6.77838-11.852956 0-22.444175 2.109034-31.782867 6.327102s-17.322527 10.544147-23.949458 18.97926c-6.830569 8.435113-11.900028 17.274432-15.213493 26.510794-3.313465 9.239432-4.970198 18.879999-4.970198 28.92068L461.069539 487.946165C461.066469 488.750483 461.066469 489.353211 461.066469 489.753323z"}}),t._v(" "),s("path",{attrs:{d:"M671.041738 452.547956c3.812839-11.146874 9.437953-20.833491 16.870226-29.071106 7.629771-8.232498 15.561417-15.260565 23.799032-21.087271 8.232498-5.822612 16.870226-10.341532 25.907043-13.556761 1.605567-0.601704 3.2623-1.153266 4.970198-1.656733 1.704828-0.49835 3.464915-1.054005 5.272074-1.656733 1.604544-0.400113 3.2623-0.800225 4.970198-1.204431 1.703805-0.400113 3.360538-0.701988 4.970198-0.903579 3.412726-0.602727 6.674003-1.054005 9.790994-1.355881 3.110851-0.300852 6.175653-0.452301 9.188266-0.452301 8.233522 0 16.164145 0.805342 23.800056 2.409886 7.629771 1.609661 14.859429 3.916193 21.689998 6.928806 6.825452 3.012613 13.555737 6.928806 20.183691 11.748578 6.628978 4.819772 13.152555 10.444886 19.581987 16.870226l-18.97926 20.786419c-0.804319-0.400113-1.557472-0.903579-2.25946-1.506307-0.705058-0.602727-1.459235-1.303692-2.25946-2.109034-0.405229-0.400113-0.804319-0.800225-1.204431-1.205455-0.405229-0.400113-0.805342-0.800225-1.205455-1.205455-0.602727-0.400113-1.106194-0.800225-1.50733-1.204431-0.405229-0.400113-0.804319-0.800225-1.204431-1.205455-3.615341-3.012613-7.531534-5.874801-11.748578-8.585539-4.218068-2.711761-8.736988-5.371334-13.556761-7.983835-4.819772-2.409886-9.842159-4.264117-15.063067-5.572926-5.223978-1.303692-10.647501-1.958608-16.267499-1.958608-12.253068 0-23.045879 1.76111-32.384571 5.272074-9.338692 3.517103-17.223267 8.788154-23.647583 15.816221-6.227842 6.829546-11.2973 14.112416-15.213493 21.840424-3.916193 7.734148-6.580882 15.816221-7.983835 24.251334-0.201591 1.407046-0.451278 2.762927-0.75213 4.067642-0.301875 1.308809-0.452301 2.664689-0.452301 4.066619-0.201591 1.407046-0.300852 2.762927-0.300852 4.067642 0 1.308809 0 2.560312 0 3.765767 0 10.044774 1.656733 19.732413 4.970198 29.071106 3.313465 9.338692 8.284687 18.226107 14.911618 26.66122s15.010879 14.911618 25.154913 19.430538c10.138918 4.51892 22.038946 7.080256 35.69906 7.682983 0.197498 0 0.348947 0 0.451278 0 0.099261 0 0.249687 0 0.452301 0 0.196475 0 0.400113 0 0.602727 0 0.196475 0 0.400113 0 0.601704 0 0.401136 0 0.701988 0 0.904603 0 0.197498 0 0.347924 0 0.451278 0 0.099261 0 0.249687 0 0.451278 0 9.03784 0.201591 17.270339-1.00284 24.703635-3.615341 7.42818-2.607384 13.956873-6.627954 19.581987-12.04943 5.821589-5.220908 10.694573-10.793834 14.610766-16.7198 3.916193-5.921873 6.974855-12.097526 9.188266-18.526959 0.602727-1.605567 1.153266-3.163039 1.656733-4.669346 0.49835-1.506307 0.852414-2.960425 1.054005-4.368494 0.197498-0.800225 0.348947-1.553379 0.451278-2.25946 0.099261-0.700965 0.150426-1.454118 0.150426-2.25946 0.197498-0.602727 0.348947-1.252527 0.451278-1.958608 0.099261-0.700965 0.150426-1.454118 0.150426-2.25946l-73.506131-0.601704 0-28.619828 104.233969 0 0 26.208918c-1.205455 15.867386-4.720511 29.77821-10.544147 41.723264-5.826705 11.952216-13.857613 22.143323-24.100908 30.578436-10.444886 8.43409-21.642926 14.71412-33.590026 18.827811-11.951193 4.114714-24.753777 6.175653-38.409798 6.175653-16.070001 0-30.727839-2.456958-43.982724-7.381108-13.254885-4.919033-25.004487-12.502755-35.246759-22.745027-10.242272-10.04068-18.074657-21.638833-23.49818-34.795481-5.4225-13.151531-8.335852-27.66406-8.735965-43.531446l0-0.602727C665.317363 476.299917 667.223782 463.694831 671.041738 452.547956z"}})])])]),t._v(" "),s("div",{staticClass:"github"},[s("svg",{attrs:{viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{staticClass:"circle",attrs:{cy:"35",cx:"35",r:"30"}})]),t._v(" "),s("a",{staticClass:"icon",attrs:{href:"http://github.com/shaoye",target:"_blank"}},[s("svg",{attrs:{t:"1484204795585",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"}},[s("path",{attrs:{d:"M512 38.4a473.6 473.6 0 0 0-149.792 922.944 23.936 23.936 0 0 0 32.576-22.4c0-11.232-0.608-48.544-0.608-88.192-118.976 21.888-149.76-28.992-159.264-55.648a172.224 172.224 0 0 0-48.544-66.912c-16.576-8.864-40.256-30.784-0.576-31.36a94.784 94.784 0 0 1 72.832 48.544 101.216 101.216 0 0 0 137.92 39.072 99.616 99.616 0 0 1 30.176-63.328c-105.376-11.84-215.488-52.704-215.488-233.824a184.32 184.32 0 0 1 48.544-127.296 170.176 170.176 0 0 1 4.736-125.504s39.68-12.448 130.24 48.544a446.496 446.496 0 0 1 236.8 0c90.56-61.568 130.24-48.544 130.24-48.544a170.176 170.176 0 0 1 4.736 125.504 183.232 183.232 0 0 1 48.544 127.296c0 181.76-110.688 222.016-216.064 233.856a112 112 0 0 1 32 87.616c0 63.328-0.608 114.272-0.608 130.24a23.744 23.744 0 0 0 32.576 22.4A473.856 473.856 0 0 0 512 38.4z"}})])])]),t._v(" "),s("div",{staticClass:"zhihu"},[s("svg",{attrs:{viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{staticClass:"circle",attrs:{cy:"35",cx:"35",r:"30"}})]),t._v(" "),s("a",{staticClass:"icon",attrs:{href:"https://www.zhihu.com/people/ye-shao/activities",target:"_blank"}},[s("svg",{attrs:{t:"1484204795585",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"}},[s("path",{attrs:{d:"M506.995009 496.907257 381.830335 496.907257 381.830335 305.519322l110.707404 0c18.09103 0 32.809243-14.604626 32.809243-32.556487 0-17.949814-14.718213-32.552393-32.809243-32.552393l-212.008578 0c5.584182-23.909549 7.270591-45.157479 8.683776-62.956867l0.166799-2.055822c0.404206-4.989641 0.784876-9.702989 1.260713-14.012132 0.945535-8.618285-1.537006-17.092283-6.990205-23.858384-5.500271-6.825452-13.348006-11.096732-22.102391-12.028964-8.810666-0.978281-17.389042 1.475608-24.163329 6.900154-6.77838 5.428639-11.032264 13.226233-11.977799 21.940708-0.603751 5.51255-1.064238 11.294231-1.550309 17.414625l-0.042979 0.552585c-3.815909 48.001247-8.565073 107.74084-87.151919 179.124633-6.497994 5.895267-10.275018 13.948687-10.636245 22.679535-0.361227 8.729825 2.737344 17.066701 8.734942 23.485901 6.187933 6.611581 14.95255 10.403954 24.046672 10.403954 8.203846 0 16.063861-3.025916 22.152533-8.538467 33.040511-30.011524 57.760518-60.869323 75.247798-93.991698 0.602727 0.032746 1.209548 0.049119 1.816369 0.049119l58.189284 0 0 191.387935L167.024038 496.907257c-18.09103 0-32.809243 14.603603-32.809243 32.553417 0 17.951861 14.718213 32.556487 32.809243 32.556487l148.147108 0c-5.961782 94.7909-40.229237 213.795271-162.89909 275.067776-7.884574 3.936659-13.727653 10.694573-16.452717 19.030425-2.707668 8.27957-2.000564 17.105586 1.980097 24.829502 5.624091 10.958586 16.82827 17.765619 29.241998 17.765619 5.136997 0 10.255575-1.215688 14.733563-3.480264 88.605014-44.24469 149.058874-117.018134 178.777733-213.754339 1.201361 4.614088 3.431146 8.942673 6.603395 12.70844l103.458303 122.777301c6.258541 7.408737 15.435551 11.659551 25.178449 11.659551 7.604188 0 15.014972-2.644223 20.849864-7.429203 6.801916-5.561669 10.993378-13.422707 11.802814-22.13616 0.806365-8.695033-1.856277-17.171078-7.497765-23.864524L417.504836 652.429333c-11.55415-13.715373-32.223912-15.609513-46.040592-4.245697-0.938372 0.76748-1.822508 1.583055-2.659573 2.433422 6.377244-27.808346 10.44284-57.367569 12.125155-88.598874l126.066207 0c18.09103 0 32.809243-14.604626 32.809243-32.556487C539.804253 511.51086 525.08604 496.907257 506.995009 496.907257z"}}),t._v(" "),s("path",{attrs:{d:"M865.192088 234.109945 609.331769 234.109945c-18.09103 0-32.809243 14.604626-32.809243 32.556487l0 472.916866c0 17.951861 14.718213 32.556487 32.809243 32.556487l19.237133 0 4.499477 79.69918 0.057305 0.711198c1.227967 11.884678 8.886391 22.132066 19.968797 26.734898 4.01443 1.673106 8.278547 2.521426 12.675694 2.521426 7.419993 0 14.678304-2.517333 20.436448-7.088442l0.663102-0.527003 102.988606-102.113679 75.334779 0.062422c8.584516 0 17.006326-3.441379 23.121604-9.455349 6.248308-6.161327 9.689686-14.365172 9.689686-23.101137L898.004401 266.666432C898.003378 248.714572 883.284141 234.109945 865.192088 234.109945zM658.862859 707.034998l-16.721847 0L642.141012 299.214732l190.240809 0 0 407.79366-54.960753-0.040932c-7.393387 0-14.641465 2.509147-20.408819 7.065929l-0.821715 0.648776-62.605873 65.067948-2.01489-42.603307-0.063445-0.840134C689.796382 719.618595 675.761738 707.034998 658.862859 707.034998z"}})])])]),t._v(" "),s("div",{staticClass:"weibo"},[s("svg",{attrs:{viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{staticClass:"circle",attrs:{cy:"35",cx:"35",r:"30"}})]),t._v(" "),s("a",{staticClass:"icon",attrs:{href:"https://weibo.com",target:"_blank"}},[s("svg",{attrs:{t:"1484204795585",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"}},[s("path",{attrs:{d:"M448 226.88C392.064 212.928 219.904 264.128 80.256 468.928c-139.648 204.8-79.104 372.352 79.104 451.52 139.648 69.824 414.272 69.824 572.48-32.576 148.992-97.728 190.848-232.768 125.696-307.264-65.216-74.432-111.68-55.808-111.68-65.152-4.672-9.344 41.856-102.4-4.672-144.32C694.656 329.344 559.616 361.856 517.76 389.824 499.136 403.776 499.136 380.48 503.808 361.856 503.808 343.296 527.104 250.176 448 226.88zM736.512 231.552c-41.856 4.672-46.528 74.496 4.672 69.824s97.728 23.296 74.432 97.728C806.4 422.4 857.536 454.976 880.896 417.728c27.904-41.92 4.608-125.696-37.248-158.272C797.056 231.552 764.48 226.88 736.512 231.552zM717.952 82.624c-55.872 9.344-55.872 93.12 4.672 88.448C783.104 166.4 848.256 166.4 899.456 231.552s55.872 144.256 37.248 200.128c-18.624 51.2 55.808 79.104 74.432 27.904 18.624-51.2 18.624-195.456-46.528-269.952C899.456 110.592 815.616 73.344 717.952 82.624zM395.648 487.552C563.2 473.6 702.848 552.768 712.128 669.12c9.344 116.288-116.352 223.36-283.904 241.984-167.552 14.016-307.2-65.152-316.48-181.504S232.704 506.176 395.648 487.552zM563.2 655.104c-18.56-83.776-107.008-125.696-195.456-102.4-88.448 27.904-144.32 111.68-125.696 190.784 18.624 83.84 107.072 125.696 195.52 102.464C525.952 822.656 581.824 734.272 563.2 655.104zM367.744 780.8c-27.968 9.344-60.544-4.672-65.216-32.576-4.608-23.296 13.952-51.264 41.92-60.48C372.352 678.4 404.928 692.352 409.6 720.256 414.272 748.224 395.648 776.128 367.744 780.8zM442.176 697.024c-13.952 0-23.296-4.608-27.968-13.952 0-9.344 4.672-18.624 18.624-23.296C446.848 655.104 456.128 664.448 460.8 673.728S456.128 697.024 442.176 697.024z"}})])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"avatar"},[s("img",{attrs:{src:"/static/avatar.jpg"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("a",{attrs:{href:"https://github.com/shaoye",target:"_blank"}},[t._v("Star or fork this page at Github")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"selector",class:t.$store.state.lang},[s("span",{staticClass:"langCn",on:{click:function(e){t.changeLanguage("cn")},touchstart:function(e){t.changeLanguage("cn")}}},[t._v("中")]),t._v(" "),s("span",{staticClass:"langEn",on:{click:function(e){t.changeLanguage("en")},touchstart:function(e){t.changeLanguage("en")}}},[t._v("Eng")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page skills"},[s("h1",{staticClass:"title"},[t._v(t._s(t.$store.state.data.route[t.id]))]),t._v(" "),s("div",{staticClass:"pagebody"},[s("div",{staticClass:"cardContainer"},t._l(t.$store.state.data.website.skills,function(t){return s("div",{staticClass:"card",style:t.style?t.style:"",attrs:{"data-desc":t.value}},[s("img",{attrs:{src:t.logo}})])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"entry",on:{touchmove:t.touchmove,touchend:t.touchend}},[s("navigator",{attrs:{id:t.currentPage},on:{linkTo:t.linkTo}}),t._v(" "),s("language-switcher"),t._v(" "),s("index",{class:{currentPage:0===t.currentPage,prePage:t.currentPage>0,nextPage:t.currentPage<0},attrs:{id:"0"}}),t._v(" "),s("introductions",{class:{currentPage:1===t.currentPage,prePage:t.currentPage>1,nextPage:t.currentPage<1},attrs:{id:"1"}}),t._v(" "),s("skills",{class:{currentPage:2===t.currentPage,prePage:t.currentPage>2,nextPage:t.currentPage<2},attrs:{id:"2"}}),t._v(" "),s("projects",{class:{currentPage:3===t.currentPage,prePage:t.currentPage>3,nextPage:t.currentPage<3},attrs:{id:"3"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page introductions"},[s("h1",{staticClass:"title"},[t._v(t._s(t.$store.state.data.route[t.id]))]),t._v(" "),s("div",{staticClass:"pagebody"},[s("div",{staticClass:"selfIntroduction"},[s("p",[t._v(t._s(t.$store.state.data.website.description))])]),t._v(" "),s("div",{staticClass:"selfInformations"},[t._l(Array(Math.ceil(t.$store.state.data.website.infomations.length/3)).fill(0).map(function(t,e){return e}),function(e){return s("div",{staticClass:"infoRow"},[s("div",{staticClass:"placeholder"}),t._v(" "),t._l(t.$store.state.data.website.infomations,function(a,n){return n>=3*e&&n<3*(e+1)?s("div",{staticClass:"infoItem"},[s("img",{attrs:{src:a.icon,alt:a.key,title:a.key}}),t._v(" "),s("p",[t._v(t._s(a.value))])]):t._e()}),t._v(" "),s("div",{staticClass:"placeholder"})],2)}),t._v(" "),s("div",{staticClass:"infoRow infoCol"},t._l(t.$store.state.data.website.infomations,function(e,a){return s("div",{staticClass:"infoItem"},[s("img",{
attrs:{src:e.icon}}),t._v(" "),s("p",[t._v(t._s(e.key+"："+e.value))])])}))],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page projects"},[s("h1",{staticClass:"title"},[t._v(t._s(t.$store.state.data.route[t.id]))]),t._v(" "),s("div",{staticClass:"pagebody"},[s("div",{staticClass:"cardContainer",on:{touchmove:t.touchmove,touchend:t.touchend}},t._l(t.$store.state.data.website.projects,function(e,a){return s("div",{staticClass:"card",class:{currentSection:a===t.currentPage,preSection:a<t.currentPage,nextSection:a>t.currentPage},style:{"z-index":a<t.currentPage?a:t.$store.state.data.website.projects.length-a}},[s("img",{staticClass:"screenshot",attrs:{src:e.image}}),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.desc))]),t._v(" "),s("div",{staticClass:"tool"},[e.url?s("a",{staticClass:"btn",attrs:{href:e.url,target:"_blank"}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24",height:"24"}},[s("path",{attrs:{d:"M630.88 528.36c-7.264 0-14.512-0.576-21.664-1.736l73.896-73.936 0.568-0.376a27.52 27.52 0 0 0 3.336-2.872l100.792-101.056c30.944-31.016 30.944-81.488 0-112.504a78.68 78.68 0 0 0-56.112-23.304 78.848 78.848 0 0 0-56.152 23.304l-96.68 96.96-4.304 4.192-76.824 76.832c-6.424-42.224 7.424-85.632 37.76-116.064l100.92-101.208a133.68 133.68 0 0 1 95.264-39.576c35.984 0 69.824 14.056 95.272 39.576 52.552 52.688 52.552 138.408 0 191.08L726.024 488.904a133.48 133.48 0 0 1-95.144 39.456z"}}),t._v(" "),s("path",{attrs:{d:"M391.624 661.72a28.304 28.304 0 0 1-28.256-28.264c0-7.856 3.224-15.184 9.096-20.656L612.56 372.664c5.648-6.064 12.976-9.288 20.832-9.288a28.28 28.28 0 0 1 28.248 28.256 28.24 28.24 0 0 1-8.16 19.864l-6.112 6.232 0.064 0.048-230.576 230.584-0.056-0.032-5.088 4.936a27.92 27.92 0 0 1-20.088 8.456z"}}),t._v(" "),s("path",{attrs:{d:"M292.288 867a133.672 133.672 0 0 1-95.264-39.56c-52.536-52.688-52.536-138.44 0-191.128l100.92-101.184a133.456 133.456 0 0 1 95.104-39.456c7.128 0 14.224 0.56 21.248 1.68l-76.152 76.136a10.84 10.84 0 0 0-0.672 0.528L236.152 675.64c-30.928 31.016-30.928 81.472 0 112.472a78.792 78.792 0 0 0 56.136 23.312 78.696 78.696 0 0 0 56.112-23.312l100.92-101.168c0.656-0.656 1.24-1.392 1.8-2.128l75.056-75.144c6.608 42.392-7.216 86-37.688 116.592l-100.96 101.176a133.6 133.6 0 0 1-95.24 39.56z"}})])]):t._e(),t._v(" "),e.qrcode?s("button",{staticClass:"btn qrcodebtn",on:{click:function(s){t.showQrcodeFunc(e.qrcode)}}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"18",height:"18"}},[s("path",{attrs:{d:"M796.444444 1024 796.444444 910.222222 910.222222 910.222222 910.222222 796.444444 1024 796.444444 1024 1024 796.444444 1024ZM910.222222 568.888889 1024 568.888889 1024 682.666667 910.222222 682.666667 910.222222 568.888889ZM967.111111 455.111111 625.777778 455.111111C594.375111 455.111111 568.888889 429.624889 568.888889 398.222222L568.888889 56.888889C568.888889 25.486222 594.375111 0 625.777778 0L967.111111 0C998.513778 0 1024 25.486222 1024 56.888889L1024 398.222222C1024 429.624889 998.513778 455.111111 967.111111 455.111111ZM910.222222 113.777778 682.666667 113.777778 682.666667 341.333333 910.222222 341.333333 910.222222 113.777778ZM853.333333 284.444444 739.555556 284.444444 739.555556 170.666667 853.333333 170.666667 853.333333 284.444444ZM398.222222 1024 56.888889 1024C25.486222 1024 0 998.513778 0 967.111111L0 625.777778C0 594.375111 25.486222 568.888889 56.888889 568.888889L398.222222 568.888889C429.624889 568.888889 455.111111 594.375111 455.111111 625.777778L455.111111 967.111111C455.111111 998.513778 429.624889 1024 398.222222 1024ZM341.333333 682.666667 113.777778 682.666667 113.777778 910.222222 341.333333 910.222222 341.333333 682.666667ZM284.444444 853.333333 170.666667 853.333333 170.666667 739.555556 284.444444 739.555556 284.444444 853.333333ZM398.222222 455.111111 56.888889 455.111111C25.486222 455.111111 0 429.624889 0 398.222222L0 56.888889C0 25.486222 25.486222 0 56.888889 0L398.222222 0C429.624889 0 455.111111 25.486222 455.111111 56.888889L455.111111 398.222222C455.111111 429.624889 429.624889 455.111111 398.222222 455.111111ZM341.333333 113.777778 113.777778 113.777778 113.777778 341.333333 341.333333 341.333333 341.333333 113.777778ZM284.444444 284.444444 170.666667 284.444444 170.666667 170.666667 284.444444 170.666667 284.444444 284.444444ZM796.444444 796.444444 568.888889 796.444444 568.888889 568.888889 796.444444 568.888889 796.444444 796.444444ZM682.666667 1024 568.888889 1024 568.888889 910.222222 682.666667 910.222222 682.666667 1024Z"}})])]):t._e()])])})),t._v(" "),s("a",{staticClass:"seeGithub",attrs:{href:"https://github.com/shaoye",target:"_blank"}},[s("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24",height:"24"}},[s("path",{attrs:{d:"M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z",fill:"#ffffff"}})]),t._v(" "),s("p",[t._v(t._s(t.$store.state.data.website.projectRefer))])])]),t._v(" "),s("div",{staticClass:"qrcodeContainerMask",class:{showQrcode:t.showQrcode},on:{click:t.hideQrcode}},[s("div",{staticClass:"qrcodeContainer"},[s("img",{staticClass:"qrcode",attrs:{src:t.activeQrcodeUrl}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},t._l(t.routeMap,function(e,a){return s("div",{staticClass:"item"},[s("a",{staticClass:"link",class:{"active-link":t.id===a},on:{click:function(e){t.linkTo(a)}}},[s("img",{attrs:{src:"static/svgs/navigator/"+e.path+".svg"}})]),t._v(" "),s("span",{staticClass:"description"},[t._v(t._s(e[t.$store.state.lang]))])])}))},staticRenderFns:[]}}]);
//# sourceMappingURL=app.0a08cdeb298fb0772a87.js.map