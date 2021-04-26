/* This work by Ricardo Armando Machorro Reyes is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const SHADOW_HTML = /* html */
  `<style>
    @import "/lib/css/material-icons.css";
    :host {
      display: block;
    }
    #abre {
      position: fixed;
      top: 0.5rem;
      left: 0.5rem;
      z-index: 1000;
    }
    #nav {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      padding: var(--padMiNav);
      box-sizing: border-box;
      color: var(--colLetra, black);
      background-color: var(--colFondoNav);
      overflow: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--colThumb) var(--colScrollbar);
      transition: transform 0.7s ease-in-out;
      z-index: 1003;
    }
    #nav::-webkit-scrollbar {
      width: var(--anchoThumb);
      height: var(--anchoThumb);
    }
    #nav::-webkit-scrollbar-track {
      background: var(--colScrollbar);
    }
    #nav::-webkit-scrollbar-thumb {
      background-color: var(--colThumb) ;
      border-radius: var(--borderRadiusThumb);
    }
    #nav::-webkit-scrollbar-thumb:active {
      background-color: var(--colThumbActivo);
    }
    #nav>header {
      background-color: transparent;
      position: sticky;
      top: 0;
      padding-top: 0.5rem;
      text-align: end;
    }
    #principal {
      box-sizing: border-box;
      background-color: var(--colFondo, white);
    }
    :host(:not(.pres)) #principal {
      animation-timing-function: var(--introFuncion, ease-out);
      animation-duration: var(--introDuracion, 3s);
      animation-name: desplaza;
    }
    
    #siguientes {
      display: flex;
      position: sticky;
      top: 0rem;
      align-items: center;
    }
    #siguientes>a.bye {
      display: none;
    }
    #siguientes>a {
      display: inline-block;
      background-color: var(--colAnclaToolbarFondo);
      vertical-align: middle;
    }

    #siguientes>a:last-of-type {
      margin-left: auto;
      text-align: end;
    }

    @media screen and (max-width: 999px) {
      #cierra {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--colSombra);
        transform: translateX(-150%);
        transition: transform 0.7s ease-out;
        z-index: 1002;
      }
      #siguientes {
        padding-left: 2rem;
      }
      :host>#nav {
        width: min(var(--anchoNav), 70%);
        box-shadow: 0.5rem 0 0.5rem var(--colSombra);
      }
      :host(.xmenu)>#nav {
        transform: translateX(-150%);
      }
      :host(.menu)>#nav,
      :host(.menu)>#cierra {
        transform: translateX(0);
      }
    }
    @media screen and (min-width: 1000px) {
      #cierra {
        display: none;
      }
      #siguientes {
        transition: padding-left 0.7s ease-in-out;
      }
      :host(.menu) #siguientes {
        padding-left: 2rem;
      }
      #nav {
        width: var(--anchoNav, 200px);
      }
      :host(.menu)>#nav {
        transform: translateX(-150%);
      }
      #principal {
        transition: margin-left 0.7s ease-in-out;
      }
      :host(.xmenu)>#principal {
        margin-left: calc(var(--anchoNav, 200px) + 0.5rem);
      }
      :host(.menu)>#principal {
        margin-left: 0.5rem;
      }
    }
    @keyframes desplaza {
      from {
        transform: translateX(150%);
      }
      to {
        transform: translateX(0);
      }
    }
    @media print {
      #abre, #cierra, #nav, #siguientes {
        display: none;
      }
    }
  </style>
  <button id="abre" type="button" title="Menú" class="cambiaMenú">
    &#x2630;
  </button>
  <div id="cierra" class="cambiaMenú"></div>
  <nav id="nav">
    <header>
      <button type="button" title="Cierra" class="cambiaMenú">
        &#x2715;
      </button>
    </header>
    <slot id=slotNav name=nav></slot>
  </nav>
  <div id=principal>
  <nav id="siguientes">
    <a id=anterior title="Página Anterior"><span class="material-icons">
        arrow_back
      </span></a>
    <a id=siguiente title="Página Siguiente"><span class="material-icons">
        arrow_forward
      </span></a>
  </nav>
  <slot id=contenido></slot>
  </div>`;