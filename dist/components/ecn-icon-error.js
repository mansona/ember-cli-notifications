import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg ...attributes aria-hidden=\"true\" focusable=\"false\" role=\"img\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.714 0H2.286A2.286 2.286 0 000 2.286v11.428A2.286 2.286 0 002.286 16h11.428A2.286 2.286 0 0016 13.714V2.286A2.287 2.287 0 0013.714 0zM7 4.086c0-.472.529-.857 1-.857s1 .383 1 .857v4.571c0 .473-.527.857-1 .857s-1-.382-1-.857V4.086zm1 8.934a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6z\" fill=\"currentColor\" fill-rule=\"nonzero\"/></svg>");

var ecnIconError = setComponentTemplate(TEMPLATE, templateOnly());

export { ecnIconError as default };
//# sourceMappingURL=ecn-icon-error.js.map
