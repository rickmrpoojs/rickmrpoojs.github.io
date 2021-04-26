/* This work by Ricardo Armando Machorro Reyes is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol type="A">
        <li><p><a href="/index.html">Inicio</a></p></li>
        <li><p><a href="/b_sw.html">Software a Instalar</a></p></li>
        <li>
          <details>
            <summary>
              <h3>Funciones</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/c_funciones/1_funciones.html">Funciones</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_funciones/2_funciones_funciones.html">Funciones
                    que invocan funciones</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_funciones/3_funciones_parametros.html">Funciones
                    con parámetros</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_funciones/4_funciones_parametros_expresiones.html">Funciones
                    con expresiones en los parámetros</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_funciones/5_funciones_return.html">Funciones con
                    valor de regreso</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_funciones/6_flecha.html">Funciones flecha</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_funciones/7_recursividad.html">Recursividad</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Objetos básicos</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/d_obj_basicos/1_paso.html">Objetos paso a paso</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/d_obj_basicos/2_literales.html">Literales de
                    objeto</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/d_obj_basicos/3_string.html">Propiedades y
                    métodos de string</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Clases</h3>
            </summary>
            <ol>
              <li><p><a href="/e_clases/1_clases.html">Clases</a></p></li>
              <li>
                <details>
                  <summary>Prueba de escritorio de 1 objeto</summary>
                  <ol start="0">
                    <li><p><a href="/e_clases/2_objetos/objeto0101.html">Prueba de escritorio de 1 objeto</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0102.html">Inicializa</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0103.html">Ejecuta <code>new Cl01(4)</code></a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0104.html">Congela el Stack</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0105.html">Crea el registro de activación del constructor</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0106.html">Ejecuta <code>this.a = b;</code></a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0107.html">Termina el registro de activación del constructor</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0108.html">Descongela el registro del Script</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0109.html">Crea la constante a</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0110.html">Invoca <code>a.mensaje(2)</code></a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0111.html">Crea el registro de activación para <code>Cl01.mensaje</code></a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0112.html">Calcula <code>c + this.a</code></a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0113.html">Ejecuta <code>console.log(c + this.a);</code></a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0114.html">Elimina el registro de activación</a></p></li>
                    <li><p><a href="/e_clases/2_objetos/objeto0115.html">Descongela y termina</a></p></li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/e_clases/3_inst_obj.html">Instancias y Objetos</a></p>
              </li>
              <li>
                <p><a href="/e_clases/4_setters.html">Setters y Getters</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Herencia</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/f_herencia/1_constructores.html">Constructores</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/f_herencia/2_sobreescritura.html">Sobreescritura de
                    métodos</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Arreglos</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/g_arreglos/1_basicos.html">Arreglos básicos</a></p>
              </li>
              <li>
                <p>
                  <a href="/g_arreglos/2_objetos.html">Arreglos de objetos</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Asociaciones</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/h_asociaciones/1_uno.html">Asociaciones a uno</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_asociaciones/2_muchos.html">Asociaciones a
                    muchos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_asociaciones/3_uno_a_uno.html">Asociaciones uno a
                    uno</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_asociaciones/4_uno_a_muchos.html">Asociaciones uno
                    a muchos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_asociaciones/5_muchos_a_muchos.html">Asociaciones
                    muchos a muchos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_asociaciones/6_agregacion.html">Agregación</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_asociaciones/7_composicion.html">Composición</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Polimorfismo</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/i_polimorfismo/1_sobreescritura.html">Sobreescritura
                    de métodos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/i_polimorfismo/2_interfaces.html">Interfaces</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/i_polimorfismo/3_interfaces_js.html">Interfaces en
                    JavaScript</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/i_polimorfismo/4_abstractas.html">Clases
                    abstractas</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Excepciones</h3>
            </summary>
            <ol>
              <li><p><a href="/j_excepciones/1_throw.html">throw</a></p></li>
              <li>
                <p><a href="/j_excepciones/2_try-catch.html">try-catch</a></p>
              </li>
              <li>
                <p>
                  <a href="/j_excepciones/3_try-finally.html">try-finally</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/j_excepciones/4_try-catch-finally.html">try-catch-finally</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/j_excepciones/5_anidado.html">Procesamiento
                    anidado</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/j_excepciones/6_formulario.html">Formulario con
                    validaciones</a>
                </p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Patrones de diseño</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/k_patrones/1_concepto.html">Concepto de patrón de
                    diseño</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/k_patrones/2_singleton.html">Patrón Singleton</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/k_patrones/3_factory.html">Patrón Abstract
                    Factory</a>
                </p>
              </li>
              <li>
                <p><a href="/k_patrones/4_proxy.html">Patrón Proxy</a></p>
              </li>
              <li><p><a href="/k_patrones/5_mvc.html">Patrón MVC</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Promesas</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/l_promesas/1_original.html">Promesas originales</a>
                </p>
              </li>
              <li>
                <p><a href="/l_promesas/2_async-await.html">async-await</a></p>
              </li>
              <li>
                <p><a href="/l_promesas/3_crea.html">Creando promesas</a></p>
              </li>
              <li>
                <p><a href="/l_promesas/4_all.html">Promise.all</a></p>
              </li>
            </ol>
          </details>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);