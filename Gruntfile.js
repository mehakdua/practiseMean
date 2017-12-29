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
			}
		},
	    jshint: {
	      all: ['public/**/*.js']
	    },
		uglify:{
			js:{
				src:['public/build/js/app.min.js'],
				dest:'public/build/js/app.min.js'
			}
		},
		cssmin:{
			css:{
				src:['public/build/css/app.min.css'], 
				dest:'public/build/css/app.min.css'
			}
		},
	
		watch:{
			js:{
				files:['public/**/*.js'],
				tasks:['clean:js','concat:js','uglify']	
			},
			css:{
				files:['public/**/*.css'],
				tasks:['clean:css','concat:css','cssmin']
			}
		},

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
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.registerTask("default",["clean","copy","concat","uglify","cssmin","watch"]);

}