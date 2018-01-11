module.exports = function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		// JS TASKS ================================================================
	    // check all js files for errors
	    clean:{
	    	js: {
		    	src: ["public/build/js"]
		    },
		    css:{
		    	src: ["public/build/css"]
		    },
		    all:{
		    	src:["public/build/"]
		    }
	    },
	    //expand true is maintain the folder structure
	     copy: {
		    html: {
		      files: [{
		        expand: true,
		        cwd: 'public/',   
		        src: ['**/*.html'],
		        dest: 'public/build/'
		      }]
		    }
		  },
		  	concat:{
			js:{
				src:['public/app.module.js','public/controllers/*.js','public/services/*.js'],
				dest:'public/build/js/app.min.js'
			},
			css:{
				src:['public/**/*.css'],
				dest:'public/build/css/app.min.css'
			},
			libs:{
				src:['bower_components/angular/angular.js','bower_components/angular-route/angular-route.js'],
				dest:'public/build/js/vendor.min.js'
			}
		},
	    jshint: {
	      all: ['public/**/*.js']
	    },
		uglify:{
			js:{
				src:['public/build/js/app.min.js'],
				dest:'public/build/js/app.min.js'
			},
			libs:{
				src:['public/build/js/vendor.min.js'],
				dest:'public/build/js/vendor.min.js'
			}
		},
		cssmin:{
			css:{
				src:['public/build/css/app.min.css'], 
				dest:'public/build/css/app.min.css'
			}
		}

	});
	// body...
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.registerTask("default",["clean","copy","concat","uglify","cssmin"]);

}