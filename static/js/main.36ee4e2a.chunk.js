(this["webpackJsonprestaraunt-app"]=this["webpackJsonprestaraunt-app"]||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(35),n=s.n(i),r=(s(41),s(42),s(6)),l=s(7),o=s(8),d=s(12),j=s(0);function m(){var e=Object(d.b)().loginWithRedirect;return Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){return e()},children:"Iniciar sesi\xf3n"})}var b=s(5);function x(){var e=Object(d.b)().logout;return Object(j.jsxs)("button",{className:"btn btn-danger",onClick:function(){return e({returnTo:window.location.origin})},children:[" ",Object(j.jsx)(l.a,{icon:o.g})]})}function u(){var e=a.a.useState(!1),t=Object(b.a)(e,2),s=t[0],c=t[1],i=Object(d.b)(),n=i.user,r=i.isAuthenticated;if(i.isLoading)return Object(j.jsx)("div",{children:"Loading..."});return r&&Object(j.jsxs)("li",{className:"nav-item fs-5",children:[Object(j.jsx)("div",{className:"d-inline-block me-3 align-middle",children:Object(j.jsx)("img",{className:"rounded-circle",style:{width:"50px"},src:n.picture,alt:n.name,onClick:function(){c(!s),console.log(s)}})}),s?Object(j.jsxs)("div",{className:"d-inline-block align-middle me-3",children:[Object(j.jsx)("h6",{style:{color:"#9B9D9E"},children:n.name}),Object(j.jsx)("h6",{style:{color:"#9B9D9E"},children:n.email})]}):"",Object(j.jsx)("div",{className:"d-inline-block align-middle",children:Object(j.jsx)(x,{})})]})}function O(){var e=Object(d.b)().isAuthenticated;return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark opacity-85 p-3",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(r.b,{to:"/",className:"navbar-brand","aria-current":"page",children:"Sal&Salsa"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[Object(j.jsxs)("ul",{className:"navbar-nav mx-auto",children:[Object(j.jsx)("li",{className:"nav-item fs-5 me-3",children:Object(j.jsxs)(r.b,{to:"/",className:"nav-link","aria-current":"page",children:[Object(j.jsx)(l.a,{icon:o.d})," Inicio"]})}),Object(j.jsx)("li",{className:"nav-item fs-5 me-3",children:Object(j.jsxs)(r.b,{to:"/menu",className:"nav-link",children:[Object(j.jsx)(l.a,{icon:o.j})," El Men\xfa"]})}),Object(j.jsx)("li",{className:"nav-item fs-5 me-3",children:Object(j.jsxs)(r.b,{to:"/reservas",className:"nav-link",children:[Object(j.jsx)(l.a,{icon:o.a})," Reservas"]})}),Object(j.jsx)("li",{className:"nav-item fs-5 me-3",children:Object(j.jsxs)(r.b,{to:"/contacto",className:"nav-link",children:[Object(j.jsx)(l.a,{icon:o.e})," Contacto"]})}),Object(j.jsx)("li",{className:"nav-item fs-5 me-3",children:Object(j.jsxs)(r.b,{to:"/nosotros",className:"nav-link",children:[Object(j.jsx)(l.a,{icon:o.i})," Nosotros"]})}),e?Object(j.jsx)("li",{className:"nav-item fs-5 me-3",children:Object(j.jsxs)(r.b,{to:"/dashboard",className:"nav-link",children:[Object(j.jsx)(l.a,{icon:o.i}),"Dashboard"]})}):"",Object(j.jsx)("li",{className:"nav-item fs-5",children:Object(j.jsxs)(r.b,{to:"/carrito",className:"nav-link",children:[Object(j.jsx)(l.a,{icon:o.f})," 0 items"]})})]}),e?Object(j.jsx)(u,{}):Object(j.jsx)("li",{className:"nav-item fs-5",children:Object(j.jsx)(m,{})})]})]})})}s(65);function h(){return Object(j.jsx)("div",{className:"container-fluid footer-container",children:Object(j.jsx)("footer",{className:"py-5",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2 mx-5 footer-container",children:Object(j.jsx)("img",{src:"/assets/logo@2x.png",alt:"",className:"w-75"})}),Object(j.jsxs)("div",{className:"col-2",children:[Object(j.jsx)("h5",{children:"MAPA DEL SITIO"}),Object(j.jsxs)("ul",{className:"nav flex-column",children:[Object(j.jsx)("li",{className:"nav-item mb-2",children:Object(j.jsx)(r.b,{to:"/",className:"nav-link p-0 text-muted",children:"Restaurante Sal & Salsa Ltda"})}),Object(j.jsx)("li",{className:"nav-item mb-2",children:Object(j.jsx)(r.b,{to:"/",className:"nav-link p-0 text-muted",children:"Call 19 No. 7-30 Bogot\xe1"})}),Object(j.jsx)("li",{className:"nav-item mb-2",children:Object(j.jsx)(r.b,{to:"/",className:"nav-link p-0 text-muted",children:"reservas@salysalsa.com"})}),Object(j.jsx)("li",{className:"nav-item mb-2",children:Object(j.jsx)(r.b,{to:"/",className:"nav-link p-0 text-muted",children:"312 325 25 32"})}),Object(j.jsx)("li",{className:"nav-item mb-2",children:Object(j.jsx)(r.b,{to:"/",className:"nav-link p-0 text-muted",children:"\xa9Copyright"})})]})]}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("h5",{children:"CONT\xc1CTANOS"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("h5",{children:"RESERVAS"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("img",{src:"/assets/mapa.png",alt:"",className:"w-150"})})]})})})}var p=s(2);function v(){return Object(j.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(j.jsxs)("div",{className:"carousel-indicators",children:[Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(j.jsxs)("div",{className:"carousel-inner",children:[Object(j.jsx)("div",{className:"carousel-item active",children:Object(j.jsx)("img",{src:"assets/foto1@2x.png",className:"d-block w-100",alt:"..."})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{src:"assets/foto4@2x.png",className:"d-block w-100",alt:"..."})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{src:"assets/foto3@2x.png",className:"d-block w-100",alt:"..."})})]}),Object(j.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Anterior"})]}),Object(j.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Siguiente"})]})]})}s(66);function N(){return Object(j.jsxs)("section",{className:"propuesta",style:{backgroundImage:"url(assets/foto2@2x.png)"},children:[Object(j.jsx)("h3",{children:"Nuestra propuesta"}),Object(j.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae eum maiores laudantium ut nisi provident totam consequatur! Debitis molestiae possimus itaque quae quo explicabo porro fugiat, in doloribus sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quo suscipit eius maiores corporis inventore sequi vitae quas, eveniet tempore magnam dolore, sint quia saepe repudiandae asperiores. Rerum tempora, repudiandae."})]})}s(67);function g(){return Object(j.jsxs)("section",{className:"recomendados",children:[Object(j.jsx)("h3",{children:"Los recomendados del chef"}),Object(j.jsxs)("div",{className:"recomendadosContent",children:[Object(j.jsxs)("div",{className:"recContIzq",children:[Object(j.jsx)("div",{className:"contRecContIzq"}),Object(j.jsx)("div",{className:"contRecContIzq"}),Object(j.jsx)("div",{className:"contRecContIzq"}),Object(j.jsx)("div",{className:"contRecContIzq"})]}),Object(j.jsxs)("div",{className:"recContDer",children:[Object(j.jsx)("img",{src:"assets/menu@2x.png",alt:"",className:"menuRecomendados"}),Object(j.jsx)("div",{className:"btnMenu",children:Object(j.jsx)("p",{children:"Consultar men\xfa"})})]})]})]})}s(68);function f(){return Object(j.jsxs)("section",{className:"middle",style:{backgroundImage:"url(assets/foto3@2x.png)"},children:[Object(j.jsx)("div",{className:"titleMiddle",children:Object(j.jsx)("h2",{children:"Organizamos tu evento"})}),Object(j.jsxs)("div",{className:"contMiddle",children:[Object(j.jsxs)("div",{className:"box1Middle boxMiddle",children:[Object(j.jsx)("img",{src:"assets/icono1@2x.png",alt:"",className:"imagenBoxMiddle imgBxMddle"}),Object(j.jsx)("h3",{children:"Fiestas tem\xe1ticas"}),Object(j.jsx)("p",{children:"Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut."}),Object(j.jsx)("i",{className:"icofont-plus-circle"})]}),Object(j.jsxs)("div",{className:"box2Middle boxMiddle",children:[Object(j.jsx)("img",{src:"assets/icono2@2x.png",alt:"",className:"imagenBoxMiddle imgBxMddle"}),Object(j.jsx)("h3",{children:"Matrimonios"}),Object(j.jsx)("p",{children:"Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut."}),Object(j.jsx)("i",{className:"icofont-plus-circle"})]}),Object(j.jsxs)("div",{className:"box3Middle boxMiddle",children:[Object(j.jsx)("img",{src:"assets/icono3@2x.png",alt:"",className:"imagenBoxMiddle imgBxMddleEspecial"}),Object(j.jsx)("h3",{children:"Cenas empresariales"}),Object(j.jsx)("p",{children:"Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut."}),Object(j.jsx)("i",{className:"icofont-plus-circle"})]}),Object(j.jsxs)("div",{className:"box4Middle boxMiddle",children:[Object(j.jsx)("img",{src:"assets/icono4@2x.png",alt:"",className:"imagenBoxMiddle"}),Object(j.jsx)("h3",{children:"Cumplea\xf1os"}),Object(j.jsx)("p",{children:"Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis voluptates ipsum fugit similique, optio molestiae dolorem omnis veniam totam ipsa incidunt et praesentium odit. Suscipit voluptatibus, possimus recusandae aut."}),Object(j.jsx)("i",{className:"icofont-plus-circle"})]})]})]})}function C(){return Object(j.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide ","data-bs-ride":"carousel",children:[Object(j.jsxs)("div",{className:"carousel-inner carouselBottom",children:[Object(j.jsx)("div",{className:"carousel-item active",children:Object(j.jsx)("img",{src:"assets/imagen.png",className:"d-block w-100",alt:"..."})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{src:"assets/imagen2.png",className:"d-block w-100",alt:"..."})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)("img",{src:"assets/imagen3.png",className:"d-block w-100",alt:"..."})})]}),Object(j.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(j.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}s(18);function w(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(N,{}),Object(j.jsx)(g,{}),Object(j.jsx)(f,{}),Object(j.jsx)(C,{})]})}var y=s(9),k=(s(69),s(15)),S=s.n(k),q=s(22),M=function(){var e=Object(q.a)(),t=e.register,s=e.handleSubmit,c=e.formState.errors;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"contenedor-titulo-contacto",children:Object(j.jsx)("div",{className:"div-titulo-contacto",children:Object(j.jsx)("h1",{children:"Cont\xe1ctanos"})})}),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row contenedor-parrafos-contacto",children:[Object(j.jsxs)("div",{className:"col div-izq-contacto",children:[Object(j.jsx)("p",{className:"paragraph mb-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti."}),Object(j.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti."})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("form",{onSubmit:s((function(e,t){null!==e&&S.a.fire("Gracias por contactarnos","Estamos procesando tu solicitud, en unos momentos recibir\xe1s confirmaci\xf3n a tu correo electr\xf3nico","success")})),children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("input",Object(y.a)({type:"text",className:"form-control",placeholder:"Asunto",autoComplete:"off"},t("asunto",{required:!0}))),c.asunto&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("input",Object(y.a)({type:"text",className:"form-control",placeholder:"Nombre completo",autoComplete:"off"},t("nombre",{required:!0}))),c.nombre&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("input",Object(y.a)({type:"email",className:"form-control",placeholder:"Correo electr\xf3nico",autoComplete:"off"},t("correo",{required:!0}))),c.correo&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("textarea",Object(y.a)({className:"form-control my-textarea",rows:"4",placeholder:"Su Mensaje",autoComplete:"off"},t("mensaje",{required:!0}))),c.mensaje&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"form-check mb-4",children:[Object(j.jsx)("input",Object(y.a)({className:"form-check-input",type:"checkbox",id:"flexCheckDefault"},t("terminos",{required:!0}))),Object(j.jsx)("label",{className:"form-check-label fst-italic mb-2",htmlFor:"flexCheckDefault",children:"Acepto t\xe9rminos y condiciones"}),c.terminos&&Object(j.jsxs)("span",{className:"text-danger ms-2",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsx)("div",{className:"mb-4 text-center",children:Object(j.jsx)("button",{type:"submit",className:"btn boton-contacto mb-3",children:"Enviar Solicitud"})})]})})]})})})]})},E=s(3),I=s.n(E),R=s(10),A=(s(72),s(36)),D=function(){var e=Object(c.useRef)(),t=Object(c.useState)([]),s=Object(b.a)(t,2),a=s[0],i=s[1],n=Object(q.a)(),r=n.register,l=n.handleSubmit,o=n.formState.errors,m=Object(d.b)(),x=m.isAuthenticated,u=m.loginWithRedirect,O=function(){var e=Object(R.a)(I.a.mark((function e(){var t,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"data/reservas.json",e.next=4,fetch("data/reservas.json");case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,t.ok&&i(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);return Object(j.jsx)(j.Fragment,{children:x?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"contenedor-titulo",children:Object(j.jsx)("div",{className:"div-titulo",children:Object(j.jsx)("h1",{children:"Reservas"})})}),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row contenedor-parrafos",children:[Object(j.jsxs)("div",{className:"col div-izq",children:[Object(j.jsx)("p",{className:"paragraph mb-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti."}),Object(j.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat, cupiditate deleniti eveniet voluptate non praesentium numquam laudantium eaque quidem. Harum unde, sed iste assumenda minima eligendi eveniet quam corrupti."})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("form",{ref:e,onSubmit:l((function(t,s){null!==t&&x&&S.a.fire({title:t.nombre,text:"\xbfEst\xe1 seguro de hacer la reservaci\xf3n?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Reservar",cancelButtonText:"Cancelar"}).then((function(t){t.isConfirmed&&(S.a.fire("Gracias por tu solicitud","Hemos recibido tu solicitud exitosamente, te haremos llegar un correo de confirmaci\xf3n","success"),A.a.sendForm("service_dzw0goj","template_cbw4r9b",e.current,"user_x8z2mxojwDrBNMGJyIrnV").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})))}))})),children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("input",Object(y.a)({type:"text",className:"form-control",placeholder:"Nombre completo",autoComplete:"off"},r("nombre",{required:!0}))),o.nombre&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("input",Object(y.a)({type:"text",className:"form-control",placeholder:"N\xfamero de contacto",autoComplete:"off"},r("telefono",{required:!0}))),o.telefono&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("input",Object(y.a)({type:"email",className:"form-control",placeholder:"Correo Electr\xf3nico",autoComplete:"off"},r("correo",{required:!0}))),o.correo&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:"cantidad",children:"Cantidad de personas"}),Object(j.jsx)("input",Object(y.a)({type:"number",className:"form-control",placeholder:"Cantidad de personas",autoComplete:"off",min:"1",max:"99"},r("cantidad",{required:!0})))]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:"fecha",children:"Fecha de la reserva"}),Object(j.jsx)("input",Object(y.a)({type:"date",className:"form-control",placeholder:"Cantidad de personas"},r("fecha",{required:!0}))),o.fecha&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"mb-4 my-select",children:[Object(j.jsx)("select",Object(y.a)(Object(y.a)({className:"form-select","aria-label":"Default select example"},r("servicios",{required:!0})),{},{children:0!==a.length?a.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)})):Object(j.jsx)("option",{value:"0",children:"-No existen items-"})})),Object(j.jsx)("span",{className:"custom-arrow"}),o.servicios&&Object(j.jsx)("span",{children:"Campo obligatorio"})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("textarea",Object(y.a)({className:"form-control my-textarea",rows:"4",placeholder:"Su Mensaje"},r("mensaje",{required:!0}))),o.mensaje&&Object(j.jsxs)("span",{className:"text-danger",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsxs)("div",{className:"form-check mb-3",children:[Object(j.jsx)("input",Object(y.a)({className:"form-check-input",type:"checkbox",id:"flexCheckDefault"},r("terminos",{required:!0}))),Object(j.jsx)("label",{className:"form-check-label fst-italic mb-2",htmlFor:"flexCheckDefault",children:"Acepto t\xe9rminos y condiciones"}),o.terminos&&Object(j.jsxs)("span",{className:"text-danger ms-2",children:["(*) ",Object(j.jsx)("small",{children:"Campo obligatorio"})]})]}),Object(j.jsx)("div",{className:"mb-3 text-center",children:Object(j.jsx)("button",{type:"submit",className:"btn boton mb-3",children:"Enviar Solicitud"})})]})})]})})})]}):u()})},T=(s(73),function(e){var t=Object(c.useRef)(null),s=Object(c.useRef)(null),a=Object(c.useRef)(null),i=Object(c.useRef)(null),n=Object(c.useState)(1),r=Object(b.a)(n,2),l=r[0],o=r[1],d=Object(c.useState)(e.id),m=Object(b.a)(d,2),x=m[0],u=m[1];return Object(j.jsxs)("div",{className:"contenedorTarjetaProductos",children:[Object(j.jsx)("div",{className:"imagen",children:Object(j.jsx)("img",{ref:t,src:e.img,alt:"imagen"})}),Object(j.jsxs)("div",{className:"contenedorInfo",children:[Object(j.jsx)("h3",{ref:s,children:e.nombre}),Object(j.jsx)("p",{ref:a,children:e.descripcion}),Object(j.jsxs)("h4",{ref:i,children:["$",e.precio]})]}),Object(j.jsxs)("div",{className:"contenedorCantidad",children:[Object(j.jsx)("p",{children:"Cantidad"}),Object(j.jsxs)("div",{className:"contador mb-2",children:[Object(j.jsx)("button",{className:"btn btn-secondary border w-25 px-0",onClick:function(){return o(l-1)},children:"-"}),Object(j.jsx)("input",{className:"fs-5 w-25 text-center px-0",type:"text",value:l,readOnly:!0}),Object(j.jsx)("button",{className:"btn btn-secondary border w-25 px-0",onClick:function(){return o(l+1)},children:"+"})]}),Object(j.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(c){u(parseInt(c.target.id));var n=t.current.src,r=i.current.textContent.substring(1),o={id:x,nombre:s.current.textContent,descripcion:a.current.textContent,precio:r,url:n.substring(22),cantidad:l};e.agregar(o)},id:e.id,children:"Agregar al carrito"})]})]})});s(74);function B(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)((function(){var e=localStorage.getItem("carrito");return JSON.parse(e)||{}})),n=Object(b.a)(i,2),d=n[0],m=(n[1],Object(c.useState)(0)),x=Object(b.a)(m,2),u=(x[0],x[1],function(){var e=Object(R.a)(I.a.mark((function e(){var t,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("data/productos.json");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,t.ok&&a(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}());Object(c.useEffect)((function(){u()}),[]);var O=function(e){d[e.id]=Object(y.a)({},e),function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;S.a.fire({position:"center",icon:"success",title:e,showConfirmButton:t,timer:s})}("Producto a\xf1adido a la cesta"),localStorage.setItem("carrito",JSON.stringify(d))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"contenedor-titulo-menu",children:[Object(j.jsx)("div",{className:"div-titulo-menu",children:Object(j.jsx)("h1",{children:"El Men\xfa"})}),Object(j.jsx)("div",{className:"boton-descargar-menu mb-5",children:Object(j.jsxs)(r.b,{to:"/docs/menu2x.pdf",download:"Men\xfa_Sal&Salsa.pdf",target:"_blank",children:[Object(j.jsx)(l.a,{icon:o.b})," Descargar Men\xfa"]})})]}),Object(j.jsx)("div",{className:"contenedorMenu mb-5",children:Object(j.jsx)("div",{className:"container",children:0===s.length?Object(j.jsx)("h2",{children:"Cargando productos..."}):s.map((function(e){return Object(j.jsx)(T,{id:e.id,agregar:O,nombre:e.nombre,descripcion:e.descripcion,img:e.url,precio:e.precio},e.id)}))})})]})}function L(){return Object(j.jsxs)("div",{className:"container mb-5",children:[Object(j.jsx)("div",{className:"container mt-4",children:Object(j.jsx)("h2",{className:"text-center",children:"TESTIMONIOS"})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"container mb-4",children:Object(j.jsxs)("h5",{children:[Object(j.jsx)("span",{children:"4"})," COMENTARIOS"]})}),Object(j.jsxs)("div",{className:"container p-1 position-relative",children:[Object(j.jsx)("div",{className:"card mb-3 border-0",children:Object(j.jsxs)("div",{className:"row g-0",children:[Object(j.jsx)("div",{className:"col-md-2 text-center",children:Object(j.jsx)("img",{src:"https://i.imgur.com/stD0Q19.jpg",className:"rounded-circle",alt:"...",style:{width:"100px"}})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title d-inline me-2 align-mposition-relativeiddle",children:"Luisa Maria"}),Object(j.jsx)("p",{className:"card-text d-inline align-middle",children:Object(j.jsx)("small",{className:"text-muted",children:"on Diciembre 12 2019 at 11:55 am"})}),Object(j.jsx)("p",{className:"card-text mt-2",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(j.jsx)("div",{className:"position-absolute bottom-0 end-0",children:Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Responder"})})]})})]})}),Object(j.jsx)("div",{className:"card mb-3 border-0",children:Object(j.jsxs)("div",{className:"row g-0",children:[Object(j.jsx)("div",{className:"col-md-2 text-center",children:Object(j.jsx)("img",{src:"https://i.imgur.com/xELPaag.jpg",className:"rounded-circle",alt:"...",style:{width:"100px"}})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title d-inline me-2 align-mposition-relativeiddle",children:"Valentina Rivas"}),Object(j.jsx)("p",{className:"card-text d-inline align-middle",children:Object(j.jsx)("small",{className:"text-muted",children:"on Diciembre 12 2019 at 11:55 am"})}),Object(j.jsx)("p",{className:"card-text mt-2",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(j.jsx)("div",{className:"position-absolute bottom-0 end-0",children:Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Responder"})})]})})]})}),Object(j.jsx)("div",{className:"card mb-3 border-0",children:Object(j.jsxs)("div",{className:"row g-0",children:[Object(j.jsx)("div",{className:"col-md-2 text-center",children:Object(j.jsx)("img",{src:"https://i.imgur.com/HjKTNkG.jpg",className:"rounded-circle",alt:"...",style:{width:"100px"}})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title d-inline me-2 align-mposition-relativeiddle",children:"Carlos Rend\xf3n"}),Object(j.jsx)("p",{className:"card-text d-inline align-middle",children:Object(j.jsx)("small",{className:"text-muted",children:"on Diciembre 12 2019 at 11:55 am"})}),Object(j.jsx)("p",{className:"card-text mt-2",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(j.jsx)("div",{className:"position-absolute bottom-0 end-0",children:Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Responder"})})]})})]})}),Object(j.jsx)("div",{className:"card mb-3 border-0",children:Object(j.jsxs)("div",{className:"row g-0",children:[Object(j.jsx)("div",{className:"col-md-2 text-center",children:Object(j.jsx)("img",{src:"https://i.imgur.com/nAcoHRf.jpg",className:"rounded-circle",alt:"...",style:{width:"100px"}})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title d-inline me-2 align-mposition-relativeiddle",children:"Esteban Mart\xednez"}),Object(j.jsx)("p",{className:"card-text d-inline align-middle",children:Object(j.jsx)("small",{className:"text-muted",children:"on Diciembre 12 2019 at 11:55 am"})}),Object(j.jsx)("p",{className:"card-text mt-2",children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}),Object(j.jsx)("div",{className:"position-absolute bottom-0 end-0",children:Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Responder"})})]})})]})})]}),Object(j.jsxs)("div",{className:"container py-2 mt-2",children:[Object(j.jsx)("div",{className:"container mb-4 p-0",children:Object(j.jsx)("h5",{children:"Publicar"})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Escribe tu Comentario"})}),Object(j.jsx)("div",{className:"container text-end p-0",children:Object(j.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Comentar"})})]})]})}s(75),s(76);var F=s.p+"static/media/avatar.1a84bdf0.svg",z=function(e){e.sideBarOpen;var t=e.openSideBar;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"nav_icon",onClick:function(){return t()},children:Object(j.jsx)(l.a,{icon:o.d,className:"icono-nav-icon"})}),Object(j.jsxs)("div",{className:"navbar__left",children:[Object(j.jsx)("a",{children:"Suscriptores"}),Object(j.jsx)("a",{children:"Video"}),Object(j.jsx)("a",{className:"active_link",children:"Admin"})]}),Object(j.jsxs)("div",{className:"navbar__right",children:[Object(j.jsx)("a",{children:Object(j.jsx)(l.a,{icon:o.d,className:"icono-navbar-right"})}),Object(j.jsx)("a",{children:Object(j.jsx)(l.a,{icon:o.d,className:"icono-navbar-right"})}),Object(j.jsx)("a",{children:Object(j.jsx)("img",{width:"30",src:F,alt:"avatar"})})]})]})};function _(){var e=a.a.useState(),t=Object(b.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{className:"containerDash",children:[Object(j.jsx)(z,{sidebarOpen:s,openSidebar:function(){c(!0)}}),Object(j.jsx)("h1",{children:"React Dashboard"})]})}function P(e){var t=e.item,s=e.id,c=e.nombre,a=e.cantidad,i=e.precio;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:a}),Object(j.jsxs)("td",{children:["$",i]}),Object(j.jsxs)("td",{children:["$",a*i]}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("button",{className:"btn btn-dark me-2",children:Object(j.jsx)(l.a,{icon:o.c})}),Object(j.jsx)("button",{className:"btn btn-danger",children:Object(j.jsx)(l.a,{icon:o.h})})]})})]})}function H(){var e=Object(c.useState)((function(){var e=localStorage.getItem("carrito");return JSON.parse(e)||{}})),t=Object(b.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("carrito");if(e){var t=JSON.parse(e);a(t)}}()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"text-center mt-5",children:Object(j.jsx)("h3",{children:"Carrito de compras"})}),Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Item"}),Object(j.jsx)("th",{scope:"col",children:"ID"}),Object(j.jsx)("th",{scope:"col",children:"Nombre"}),Object(j.jsx)("th",{scope:"col",children:"Cantidad"}),Object(j.jsx)("th",{scope:"col",children:"Precio"}),Object(j.jsx)("th",{scope:"col",children:"Total"}),Object(j.jsx)("th",{scope:"col",children:"Acciones"})]})}),Object(j.jsx)("tbody",{children:null!==s?Object.values(s).map((function(e,t){return Object(j.jsx)(P,{item:t+1,id:e.id,nombre:e.nombre,cantidad:e.cantidad,precio:e.precio},e.id)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:"Carrito vacio"})})})]})}),Object(j.jsx)("div",{className:"container mt-5 mb-5",children:Object(j.jsx)("button",{className:"btn btn-success",children:"Finalizar compra"})})]})}var J=function(){return Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",element:Object(j.jsx)(w,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/menu",element:Object(j.jsx)(B,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/reservas",element:Object(j.jsx)(D,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/contacto",element:Object(j.jsx)(M,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/nosotros",element:Object(j.jsx)(L,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/dashboard",element:Object(j.jsx)(_,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/carrito",element:Object(j.jsx)(H,{})})]})};function G(){return Object(j.jsx)("div",{className:"body-container",children:Object(j.jsx)(J,{})})}n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{domain:"dev-vzw0o8x0.us.auth0.com",clientId:"P2fD4DjwE6QfEZAubwrsvmQ1mMAKXvsb",redirectUri:window.location.origin,children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(G,{}),Object(j.jsx)(h,{})]})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.36ee4e2a.chunk.js.map