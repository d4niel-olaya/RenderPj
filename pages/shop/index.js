import template from './index.html?raw';

export function render(dom){
    dom.innerHTML = template;
}