/*!
 * The 2022 r/place Catalog
 * Copyright (c) 2017 Roland Rytz <roland@draemm.li>
 * Copyright (c) 2022 Place Atlas contributors
 * Copyright (c) 2022 Hans5958
 * Licensed under AGPL-3.0 (https://hans5958.github.io/place-catalog/license.txt)
 */
window.addEventListener("error",(function(e){console.error(e);let n='<h4 class="mb-3">An error has occurred:</h4>';n+='<p class="text-danger">'+e.message+"</p>",n+='<p class="text-danger">on line '+e.lineno+"</p>",n+='<p>If this keeps happening, feel free to tell us on <a href="https://discord.gg/pJkm23b2nA">our Discord server</a>.</p>',document.getElementById("loadingContent").innerHTML=n}));