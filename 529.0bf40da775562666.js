"use strict";(self.webpackChunkproyecto_imprenta=self.webpackChunkproyecto_imprenta||[]).push([[529],{2529:(Z,l,s)=>{s.r(l),s.d(l,{loginModule:()=>C});var u=s(6814),e=s(6223),c=s(1896);class p{constructor(){this.usuario="",this.contrasena=""}}var o=s(5879),g=s(1313);let d=(()=>{class n{constructor(t,r,a){this.fb=t,this.loginAuth=r,this.routerprd=a,this.loginDto=new p,sessionStorage.getItem("token")&&this.routerprd.navigate(["/admin/users"])}login(t){this.loginAuth.logIn(t).subscribe({next:r=>{localStorage.setItem("token",r.token),localStorage.setItem("name",r.name),localStorage.setItem("rol",r.rol),this.logI()},error:r=>{alert("Usuario o contrase\xf1a incorrecto"),console.log("error: "+r.data)}})}ngOnInit(){this.loginAuth.cargar(["animacionLogin"]),this.myForm=this.createMyForm()}logI(){const t=localStorage.getItem("rol");"Administrador"==t&&this.routerprd.navigateByUrl("/admin/users"),"Encargado"==t&&this.routerprd.navigateByUrl("/encargado/home"),"Gerente"==t&&this.routerprd.navigateByUrl("/gerente/home"),"Empleado"==t&&this.routerprd.navigateByUrl("/empleado/home"),"Cliente"==t&&this.routerprd.navigateByUrl("/cliente/home")}createMyForm(){return this.fb.group({usuario:["",[e.kI.required]],password:["",e.kI.required]})}submitFormulario(){this.myForm.invalid?Object.values(this.myForm.controls).forEach(t=>{t.markAllAsTouched()}):(this.loginDto.usuario=this.myForm.value.usuario,this.loginDto.contrasena=this.myForm.value.password,this.login(this.loginDto))}Registrarse(){this.routerprd.navigateByUrl("/sinsesion/registro")}get f(){return this.myForm.controls}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(e.qu),o.Y36(g.T),o.Y36(c.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:58,vars:5,consts:[[1,"principal"],[1,"contenedor__todo"],[1,"caja__trasera"],[1,"caja__trasera-login"],["id","btn__iniciar-sesion"],[1,"caja__trasera-recuperar"],["id","btn__recuperar"],[3,"click"],[1,"contenedor__login-recuperar"],["id","formulario__login",1,"formulario__login",3,"formGroup","ngSubmit"],["src","assets/images/logo_margraf_nombre.jpg","alt","logo-empresa",1,"logo-empresa"],[1,"form-floating","mb-3"],["type","text","formControlName","usuario","id","floatingInput","placeholder","name@example.com","id","exampleFormControlInput1",1,"form-control"],["for","floatingInput",1,"mb-3",2,"font-size","14px"],[1,"bi","bi-envelope-fill"],["id","validationServer03Feedback",1,"invalid-feedback"],[1,"form-floating","position-relative"],["id","campo-password-valitaion","formControlName","password","type","password","placeholder","Password",1,"form-control"],["for","floatingPassword",2,"font-size","14px"],[1,"bi","bi-lock-fill"],[1,"position-absolute","top-50","end-0","translate-middle-y"],["onclick","functionVisibilidadPassword()","type","button",1,"configuracion-boton-icon"],["id","icono-eye",1,"bi","bi-eye-slash-fill"],[1,"btn","btn-success"],["action","",1,"formulario__recuperar"],[1,"form-floating","mb-1"],["type","email","id","floatingInput","placeholder","name@example.com",1,"form-control","inputRecuperar"],["for","floatingInput",2,"font-size","14px"],["id","pOcultoValidacion",1,"mt-2","d-none",2,"color","rgb(236, 35, 35)","font-size","14.5px"],[1,"errorRecuperar"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"main")(2,"div",1)(3,"div",2)(4,"div",3)(5,"h3"),o._uU(6,"\xbfYa has sido registrado?"),o.qZA(),o.TgZ(7,"p"),o._uU(8,"Inicia sesi\xf3n para entrar en la p\xe1gina"),o.qZA(),o.TgZ(9,"button",4),o._uU(10,"Iniciar Sesi\xf3n"),o.qZA()(),o.TgZ(11,"div",5)(12,"h3"),o._uU(13,"\xbf Olvidaste tu contrase\xf1a ?"),o.qZA(),o.TgZ(14,"p"),o._uU(15,"Te ayudamos a recuperarla"),o.qZA(),o.TgZ(16,"button",6),o._uU(17,"Recuperar contrase\xf1a"),o.qZA(),o.TgZ(18,"button",7),o.NdJ("click",function(){return r.Registrarse()}),o._uU(19,"Registrarse"),o.qZA()()(),o.TgZ(20,"div",8)(21,"form",9),o.NdJ("ngSubmit",function(){return r.submitFormulario()}),o._UZ(22,"img",10),o.TgZ(23,"h2"),o._uU(24,"Iniciar Sesi\xf3n"),o.qZA(),o.TgZ(25,"div",11),o._UZ(26,"input",12),o.TgZ(27,"label",13),o._UZ(28,"i",14),o._uU(29," \xa0Ingrese su usuario"),o.qZA(),o.TgZ(30,"div",15),o._uU(31," Por favor ingrese el usuario. "),o.qZA()(),o.TgZ(32,"div",16),o._UZ(33,"input",17),o.TgZ(34,"label",18),o._UZ(35,"i",19),o._uU(36," \xa0Ingrese su contrase\xf1a"),o.qZA(),o.TgZ(37,"div",15),o._uU(38," Por favor ingrese contrase\xf1a. "),o.qZA(),o.TgZ(39,"div",20)(40,"button",21),o._UZ(41,"i",22),o.qZA()()(),o.TgZ(42,"button",23),o._uU(43,"Entrar"),o.qZA()(),o.TgZ(44,"form",24),o._UZ(45,"img",10),o.TgZ(46,"h2"),o._uU(47,"Recuperar contrase\xf1a"),o.qZA(),o.TgZ(48,"div",25),o._UZ(49,"input",26),o.TgZ(50,"label",27),o._UZ(51,"i",14),o._uU(52," \xa0Ingrese su correo"),o.qZA(),o.TgZ(53,"p",28),o._uU(54,"Tu correo electr\xf3nico debe ser: name@example.com"),o.qZA()(),o.TgZ(55,"button"),o._uU(56,"Enviar Email"),o.qZA(),o._UZ(57,"div",29),o.qZA()()()()()),2&t&&(o.xp6(21),o.Q6J("formGroup",r.myForm),o.xp6(5),o.ekj("is-invalid",r.f.usuario.errors&&r.f.usuario.touched),o.xp6(7),o.ekj("is-invalid",r.f.password.errors&&r.f.password.touched))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.F,e.sg,e.u],styles:["main[_ngcontent-%COMP%]{width:100%;padding:100px 20px 20px;margin:auto;background-size:cover}.contenedor__todo[_ngcontent-%COMP%]{width:100%;max-width:850px;margin:auto;position:relative}.caja__trasera[_ngcontent-%COMP%]{width:100%;padding:0 20px;display:flex;justify-content:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:#1904d280}.caja__trasera[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:100px 40px;color:#fff;transition:all .5s}.caja__trasera[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .caja__trasera[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:30px}.caja__trasera[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:400;font-size:26px}.caja__trasera[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:300}.caja__trasera[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 40px;border:2px solid #fff;font-size:14px;background:transparent;font-weight:600;cursor:pointer;color:#fff;outline:none;transition:all .3s}.caja__trasera[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#fff;color:#1d1783}.contenedor__login-recuperar[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;max-width:380px;position:relative;top:-185px;left:10px;transition:left .5s cubic-bezier(.175,.885,.32,1.275)}.contenedor__login-recuperar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;padding:35px 20px 45px;background:white;position:absolute;border-radius:20px}.contenedor__login-recuperar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;text-align:center;margin-bottom:20px;color:#1d1783}.contenedor__login-recuperar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;background:#F2F2F2;font-size:14px;outline:none}.contenedor__login-recuperar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:10px 40px;margin-top:30px;border:none;font-size:14px;background:#1D1783;font-weight:600;cursor:pointer;color:#fff;outline:none;border-radius:5px}.formulario__login[_ngcontent-%COMP%]{opacity:1;display:block}.formulario__recuperar[_ngcontent-%COMP%]{display:none}.logo-empresa[_ngcontent-%COMP%]{width:30%}.formulario__recuperar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .formulario__login[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px}@media screen and (max-width: 850px){.principal[_ngcontent-%COMP%]{height:auto}.caja__trasera[_ngcontent-%COMP%]{max-width:350px;height:300px;flex-direction:column;margin:auto}.caja__trasera[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:0;position:absolute}.contenedor__login-recuperar[_ngcontent-%COMP%]{top:-10px;left:-5px;margin:auto}.contenedor__login-recuperar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{position:relative}}.configuracion-boton-icon[_ngcontent-%COMP%]{border:none;background-color:transparent;font-size:18px!important;color:#000!important;margin-top:0!important;padding:0 10px!important;background:none!important}.style-texto-contrasena-olvidada[_ngcontent-%COMP%]:hover{color:#a0ffff}.tamano-icono[_ngcontent-%COMP%]{font-size:20px}.style-titulo-principal[_ngcontent-%COMP%]{color:#fff}.error[_ngcontent-%COMP%], .errorRecuperar[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fc0202;margin-top:10px;padding:5px;transform:scale(0);transition:transform 1s ease}"]}),n})();class m{constructor(){this.nombre="",this.apellido="",this.correo="",this.usuario="",this.contrasena=""}}let f=(()=>{class n{constructor(){}cargar(t){for(let r of t){let a=document.createElement("script");a.src="./assets/js/"+r+".js",document.getElementsByTagName("body")[0].appendChild(a)}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const _=[{path:"",children:[{path:"login",component:d},{path:"registro",component:(()=>{class n{constructor(t,r,a){this.fb=t,this.loginservicio=r,this.loginAuth=a,this.registroDto=new m}createMyForm(){return this.fb.group({nombre:["",e.kI.required],apellido:["",e.kI.required],correo:["",e.kI.required],usuario:["",e.kI.required],contrasena:["",e.kI.required]})}registro(t){this.loginAuth.registro(t).subscribe(r=>{r?(this.myFormReg.reset(),alert("Registro exitoso. Regrese e inicie sesi\xf3n")):alert("Error a registrar")})}registrar(){this.registroDto.nombre=this.myFormReg.value.nombre,this.registroDto.apellido=this.myFormReg.value.apellido,this.registroDto.correo=this.myFormReg.value.correo,this.registroDto.usuario=this.myFormReg.value.usuario,this.registroDto.contrasena=this.myFormReg.value.contrasena,this.registro(this.registroDto)}ngOnInit(){this.loginservicio.cargar(["animacionReg"]),this.myFormReg=this.createMyForm()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(e.qu),o.Y36(f),o.Y36(g.T))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-registro"]],decls:42,vars:1,consts:[[1,"principal"],[1,"contenedor_reg"],[1,"contenedor_form"],[1,"titulo"],["src","assets/images/logo_margraf_nombre.jpg","alt","logo-empresa",1,"logo-empresa"],[1,"formulario_reg",3,"formGroup","ngSubmit"],[1,"form-floating","mb-3"],["type","text","formControlName","nombre","id","floatingInput","placeholder","Nombre","id","exampleFormControlInput1",1,"form-control"],["for","floatingInput",1,"mb-3",2,"font-size","14px"],["id","validationServer03Feedback",1,"invalid-feedback"],["type","text","formControlName","apellido","id","floatingInput","placeholder","Apellido","id","exampleFormControlInput1",1,"form-control"],["type","email","formControlName","correo","id","floatingInput","placeholder","name@example.com","id","exampleFormControlInput1",1,"form-control"],["type","text","formControlName","usuario","id","floatingInput","placeholder","Usuario","id","exampleFormControlInput1",1,"form-control"],["id","campo-password-valitaion","formControlName","contrasena","type","password","placeholder","Password",1,"form-control"],["for","floatingPassword",2,"font-size","14px"],[1,"bi","bi-lock-fill"],[1,"position-absolute","top-50","end-0","translate-middle-y"],["onclick","functionVisibilidadPassword()","type","button",1,"configuracion-boton-icon"],["id","icono-eye",1,"bi","bi-eye-slash-fill"],["id","btn_complete_reg btn-success"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),o._uU(5,"Registarse"),o.qZA()(),o._UZ(6,"img",4),o.TgZ(7,"form",5),o.NdJ("ngSubmit",function(){return r.registrar()}),o.TgZ(8,"div",6),o._UZ(9,"input",7),o.TgZ(10,"label",8),o._uU(11," Ingrese su nombre"),o.qZA(),o.TgZ(12,"div",9),o._uU(13," Nombre necesario. "),o.qZA()(),o.TgZ(14,"div",6),o._UZ(15,"input",10),o.TgZ(16,"label",8),o._uU(17," Ingrese su apellido"),o.qZA(),o.TgZ(18,"div",9),o._uU(19," Apellido necesario. "),o.qZA()(),o.TgZ(20,"div",6),o._UZ(21,"input",11),o.TgZ(22,"label",8),o._uU(23," Ingrese su correo"),o.qZA(),o.TgZ(24,"div",9),o._uU(25," Correo necesario. "),o.qZA()(),o.TgZ(26,"div",6),o._UZ(27,"input",12),o.TgZ(28,"label",8),o._uU(29," Ingrese su usuario"),o.qZA(),o.TgZ(30,"div",9),o._uU(31," Usuario necesario. "),o.qZA()(),o.TgZ(32,"div",6),o._UZ(33,"input",13),o.TgZ(34,"label",14),o._UZ(35,"i",15),o._uU(36," \xa0Ingrese su contrase\xf1a"),o.qZA(),o.TgZ(37,"div",16)(38,"button",17),o._UZ(39,"i",18),o.qZA()()(),o.TgZ(40,"button",19),o._uU(41,"Registrarse"),o.qZA()()()()()),2&t&&(o.xp6(7),o.Q6J("formGroup",r.myFormReg))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:[".principal[_ngcontent-%COMP%]{display:flex;width:100vw;height:100vh;justify-content:center;align-items:center}.contenedor_reg[_ngcontent-%COMP%]{padding:20px;background-color:#1904d280;max-width:500px;margin:10px}.logo-empresa[_ngcontent-%COMP%]{width:30%;margin-top:20px;margin-bottom:32px}div.titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#000;font-weight:400;font-size:26px}.contenedor_form[_ngcontent-%COMP%]{border-radius:10px;padding:50px;background-color:#fff}.formulario_reg[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contenedor_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;background:#F2F2F2;font-size:14px;outline:none}.configuracion-boton-icon[_ngcontent-%COMP%]{border:none;background-color:transparent;font-size:18px!important;color:#000!important;margin-top:0!important;padding:0 10px!important;background:none!important}.contenedor_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:10px 40px;border:none;font-size:14px;background:#1D1783;font-weight:600;cursor:pointer;color:#fff;outline:none;border-radius:5px}"]}),n})()}]}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.Bz.forChild(_),c.Bz]}),n})();var b=s(2329);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[u.ez,e.u5,e.UX,h,b.m]}),n})()}}]);