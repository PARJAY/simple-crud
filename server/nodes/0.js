

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4vqu_SSx.js","_app/immutable/chunks/D8wmhNnS.js","_app/immutable/chunks/DxAGeSDj.js"];
export const stylesheets = ["_app/immutable/assets/0.CjKodFti.css"];
export const fonts = [];
