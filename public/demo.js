// Replace renderDemo to connect a real product prototype; keep the platform shell.
window.renderDemo=function(selection){
 const root=document.querySelector('#demo-root');
 root.innerHTML=`<div class="sample-view layout-${selection.layout} ${selection.material}"><header class="sample-header"><h2>页面标题</h2><button aria-label="示例页面工具">⋯</button></header><div class="sample-search">⌕　搜索内容</div><section class="sample-banner"><h3>演示内容区</h3><p>这里替换为新项目的页面与交互。<br>当前仅用于检查模板结构。</p></section><div class="sample-list">${['信息示例一','信息示例二','信息示例三'].map((text,i)=>`<article class="sample-card"><span class="sample-picture">${i+1}</span><div><b>${text}</b><p>替换为项目中的真实内容</p></div></article>`).join('')}</div><p class="sample-caption">通用占位示例</p><div class="sample-actions ${selection.action}"><button>主要操作</button><button>次要操作</button></div></div>`;
 root.querySelectorAll('button').forEach(b=>b.onclick=()=>{root.querySelector('.sample-toast')?.remove();const toast=document.createElement('div');toast.className='sample-toast';toast.setAttribute('role','status');toast.textContent='示例交互：'+(b.getAttribute('aria-label')||b.textContent);root.append(toast);setTimeout(()=>toast.remove(),1600)});
};
