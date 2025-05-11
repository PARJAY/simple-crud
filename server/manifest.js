export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BjYhIPKd.js",app:"_app/immutable/entry/app.CEQQgVLq.js",imports:["_app/immutable/entry/start.BjYhIPKd.js","_app/immutable/chunks/DNGMb7IQ.js","_app/immutable/chunks/DxAGeSDj.js","_app/immutable/chunks/ZTuKbRUq.js","_app/immutable/entry/app.CEQQgVLq.js","_app/immutable/chunks/DxAGeSDj.js","_app/immutable/chunks/DUB8UGMA.js","_app/immutable/chunks/D8wmhNnS.js","_app/immutable/chunks/CjbLuVbg.js","_app/immutable/chunks/ZTuKbRUq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
