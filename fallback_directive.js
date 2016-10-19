
(function () {
    angular.module('ImgFallback', [])
	   .directive('imgErr', () => {
    	  return {
    	    restrict: 'A',
    	    link: (scope, element, attrs) => {
    	      element.bind('error', () => {
          		if(attrs.src != attrs.imgErr){
          		    attrs.$set('src', attrs.imgErr)
          		}
    	      })
    	    }
    	  }
    	})
}())
