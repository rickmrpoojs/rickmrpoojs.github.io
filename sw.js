/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "rickmrpoojs-2.04";

/**  Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "b_sw.html",
  "favicon.ico",
  "index.html",
  "LICENSE",
  "site.webmanifest",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "c_funciones/1_funciones.html",
  "c_funciones/2_funciones_funciones.html",
  "c_funciones/3_funciones_parametros.html",
  "c_funciones/4_funciones_parametros_expresiones.html",
  "c_funciones/5_funciones_return.html",
  "c_funciones/6_flecha.html",
  "c_funciones/7_recursividad.html",
  "c_funciones/src/1_funciones.js",
  "c_funciones/src/2_funciones_funciones.js",
  "c_funciones/src/3_funciones_parametros.js",
  "c_funciones/src/4_funciones_parametros_expresiones.js",
  "c_funciones/src/5_funciones_return.js",
  "d_obj_basicos/1_paso.html",
  "d_obj_basicos/2_literales.html",
  "d_obj_basicos/3_string.html",
  "d_obj_basicos/img/hormiga1.svg",
  "d_obj_basicos/img/hormiga2.svg",
  "d_obj_basicos/img/hormiga3.svg",
  "d_obj_basicos/img/hormiga4.svg",
  "e_clases/1_clases.html",
  "e_clases/3_inst_obj.html",
  "e_clases/4_setters.html",
  "e_clases/2_objetos/objeto0101.html",
  "e_clases/2_objetos/objeto0102.html",
  "e_clases/2_objetos/objeto0103.html",
  "e_clases/2_objetos/objeto0104.html",
  "e_clases/2_objetos/objeto0105.html",
  "e_clases/2_objetos/objeto0106.html",
  "e_clases/2_objetos/objeto0107.html",
  "e_clases/2_objetos/objeto0108.html",
  "e_clases/2_objetos/objeto0109.html",
  "e_clases/2_objetos/objeto0110.html",
  "e_clases/2_objetos/objeto0111.html",
  "e_clases/2_objetos/objeto0112.html",
  "e_clases/2_objetos/objeto0113.html",
  "e_clases/2_objetos/objeto0114.html",
  "e_clases/2_objetos/objeto0115.html",
  "e_clases/img/reina.svg",
  "f_herencia/1_constructores.html",
  "f_herencia/2_sobreescritura.html",
  "g_arreglos/1_basicos.html",
  "g_arreglos/2_objetos.html",
  "g_arreglos/img/arreglos.svg",
  "g_arreglos/img/arrobjs.svg",
  "h_asociaciones/1_uno.html",
  "h_asociaciones/2_muchos.html",
  "h_asociaciones/3_uno_a_uno.html",
  "h_asociaciones/4_uno_a_muchos.html",
  "h_asociaciones/5_muchos_a_muchos.html",
  "h_asociaciones/6_agregacion.html",
  "h_asociaciones/7_composicion.html",
  "h_asociaciones/img/agregacion.svg",
  "h_asociaciones/img/a_muchos.svg",
  "h_asociaciones/img/a_uno.svg",
  "h_asociaciones/img/clases_a_muchos.svg",
  "h_asociaciones/img/clases_a_uno.svg",
  "h_asociaciones/img/clases_muchos_a_muchos.svg",
  "h_asociaciones/img/clases_uno_a_muchos.svg",
  "h_asociaciones/img/clases_uno_a_uno.svg",
  "h_asociaciones/img/clases_uno_a_uno_flechas.svg",
  "h_asociaciones/img/composicion.svg",
  "h_asociaciones/img/muchos_a_muchos.svg",
  "h_asociaciones/img/uno_a_muchos.svg",
  "h_asociaciones/img/uno_a_uno.svg",
  "img/icono1024.png",
  "img/icono2048.png",
  "img/icono256.png",
  "i_polimorfismo/1_sobreescritura.html",
  "i_polimorfismo/2_interfaces.html",
  "i_polimorfismo/3_interfaces_js.html",
  "i_polimorfismo/4_abstractas.html",
  "js/config.js",
  "j_excepciones/1_throw.html",
  "j_excepciones/2_try-catch.html",
  "j_excepciones/3_try-finally.html",
  "j_excepciones/4_try-catch-finally.html",
  "j_excepciones/5_anidado.html",
  "j_excepciones/6_formulario.html",
  "j_excepciones/img/throw.svg",
  "j_excepciones/img/try-catch-finally.svg",
  "j_excepciones/img/try-catch.svg",
  "j_excepciones/img/try-error-catch-finally.svg",
  "j_excepciones/img/try-error-catch.svg",
  "j_excepciones/img/try-error-finally.svg",
  "j_excepciones/img/try-finally.svg",
  "k_patrones/1_concepto.html",
  "k_patrones/2_singleton.html",
  "k_patrones/3_factory.html",
  "k_patrones/4_proxy.html",
  "k_patrones/5_mvc.html",
  "lib/layout-cajon.js",
  "lib/layout-cajon_shadow.js",
  "lib/mi-footer.js",
  "lib/muestra-codigo.js",
  "lib/muestra-codigo_shadow.js",
  "lib/utilHtml.js",
  "lib/css/estilos.css",
  "lib/css/gentium-book-basic-v11-latin-700.woff",
  "lib/css/gentium-book-basic-v11-latin-700.woff2",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-italic.woff",
  "lib/css/gentium-book-basic-v11-latin-italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-regular.woff",
  "lib/css/gentium-book-basic-v11-latin-regular.woff2",
  "lib/css/gentium-book-basic.css",
  "lib/css/material-icons.css",
  "lib/css/MaterialIcons-Regular.codepoints",
  "lib/css/MaterialIcons-Regular.ttf",
  "lib/css/mi-footer.css",
  "lib/css/prueba.css",
  "lib/css/ubuntu-mono-v10-latin-700.woff",
  "lib/css/ubuntu-mono-v10-latin-700.woff2",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-italic.woff",
  "lib/css/ubuntu-mono-v10-latin-italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-regular.woff",
  "lib/css/ubuntu-mono-v10-latin-regular.woff2",
  "lib/css/ubuntu-mono.css",
  "lib/css/ubuntu-v15-latin-700.woff",
  "lib/css/ubuntu-v15-latin-700.woff2",
  "lib/css/ubuntu-v15-latin-700italic.woff",
  "lib/css/ubuntu-v15-latin-700italic.woff2",
  "lib/css/ubuntu-v15-latin-italic.woff",
  "lib/css/ubuntu-v15-latin-italic.woff2",
  "lib/css/ubuntu-v15-latin-regular.woff",
  "lib/css/ubuntu-v15-latin-regular.woff2",
  "lib/css/ubuntu.css",
  "l_promesas/1_original.html",
  "l_promesas/2_async-await.html",
  "l_promesas/3_crea.html",
  "l_promesas/4_all.html",
  '/'
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  // @ts-ignore
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  // @ts-ignore
  if (evt.request.method === "GET") {
    // @ts-ignore
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
