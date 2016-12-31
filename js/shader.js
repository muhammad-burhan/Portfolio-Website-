var config = {};

$(function() {
	
    var $body = $(document.body),
        $window = $(window);

    // Background
    var canvas = document.createElement('canvas');
	
    backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#background-container').css('display') != 'none';

    if (backgroundEnabled) {
        config.background = {
            enabled: true,

            RENDER: {
				// Takes all the information in a Scene and renders it to a context.
                // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
				renderer: 'canvas'
            },

            MESH: {
				ambient: '#1e1e1e', // Default
                diffuse: '#FFFFFF', // Default
                width: 1.2, // Triangle Width
                height: 1.2, // Triangle Height
                depth: 10, // Transparency of the triangles
                segments: 16, // Number of triangles to display in 1 row
                slices: 8, // Number of triangles to display in 1 column
                xRange: 0.8, // Wideness of the triangles in X Position
                yRange: 0.1, // Wideness of the triangles in Y Position
                zRange: 1.0, // Wideness of the triangles in Z Position
                speed: 0.002 // Speed of the moving traingles
            },

            LIGHT: {
				autopilot: false, // Set this to true if you want the light to follow your mouse cursor
				ambient: '#323d70',
                diffuse: '#00298c',
				count: 2, // Contrast
                zOffset: 100,
				
				xyScalar: 1,
                speed: 0.09,
                gravity: 1200,
                dampening: 0.15,
                minLimit: 8,
                maxLimit: null,
                minDistance: 20,
                maxDistance: 400,
                draw: false // Set to true if you want to just draw a background image (static).
            }
        };
		
		// Initialize the background
        initBackground();
    }
});