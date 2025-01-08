import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg ...attributes aria-hidden=\"true\" focusable=\"false\" role=\"img\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.29 12.783l-1.51 1.508a.708.708 0 01-1.005 0L8 10.518l-3.773 3.773a.712.712 0 01-1.008 0l-1.51-1.508a.712.712 0 010-1.007L5.482 8 1.709 4.227a.717.717 0 010-1.007l1.51-1.51a.712.712 0 011.008 0L8 5.484l3.775-3.776a.708.708 0 011.005 0l1.51 1.508c.279.279.28.73.003 1.01L10.518 8l3.772 3.776a.712.712 0 010 1.007z\" fill=\"currentColor\" fill-rule=\"nonzero\"/></svg>");

var ecnIconClose = setComponentTemplate(TEMPLATE, templateOnly());

export { ecnIconClose as default };
//# sourceMappingURL=ecn-icon-close.js.map
