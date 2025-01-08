import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg ...attributes aria-hidden=\"true\" focusable=\"false\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\"><path fill=\"currentColor\" d=\"M7.75 0a7.751 7.751 0 000 15.5 7.75 7.75 0 100-15.5zm0 3.438a1.312 1.312 0 110 2.624 1.312 1.312 0 010-2.625zm1.248 7.937a.375.375 0 01-.375.375H6.928a.375.375 0 01-.375-.375v-.75-3.254c0-.207.168-.375.375-.375h1.695c.207 0 .375.168.375.375v4.004z\"></path></svg>");

var ecnIconInfo = setComponentTemplate(TEMPLATE, templateOnly());

export { ecnIconInfo as default };
//# sourceMappingURL=ecn-icon-info.js.map
