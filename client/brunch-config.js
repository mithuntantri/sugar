exports.config={
  files:{
    javascripts : {
      joinTo : {
        'js/app.js' : /^(web\/static\/js)/,
        'js/vendor.js': [
            /^(web\/static\/vendor)/,
        ]
      },
      order : {
        before : [
        ]
      }
    },
    stylesheets : {
      joinTo : {
        'css/app.css' : [
          /^(web\/static\/css)/,
          /^(web\/static\/sass)/
        ],
        'css/vendor.css' : [
        ]
      },
      order:{
        before : [
        ]
      }
    }
  },
  conventions: {
		assets: /^(web\/assets)/
	},

	paths: {
		watched: ['web/static', 'web/assets'],
		public: "public"
	},

	plugins: {

	},

	modules: {
		autoRequire: {
			"js/app.js": ["web/static/js/app"]
		}
	},

	npm: {
		enabled: true
	}
};
