document.documentElement.className='js';

// Test browser for modern image format support (for use in CSS).
(function(document) {
	function setHTMLClass(height, className) {
		if (height === 2) {
			document.documentElement.className += ' ' + className;
		} else {
			document.documentElement.className += ' not-' + className;
		}
	}

	var AVIF = new Image();
	AVIF.onload = AVIF.onerror = function () {
		setHTMLClass(AVIF.height, 'avif');
	};
	AVIF.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';

	var JXL = new Image();
	JXL.onload = JXL.onerror = function() {
		setHTMLClass(JXL.height, 'jxl');
	};
	JXL.src = 'data:image/jxl;base64,/woIELASCAgQAFwASxLFgkWAHL0xqnCBCV0qDp901Te/5QM=';

	var WebP = new Image();
	WebP.onload = WebP.onerror = function() {
		setHTMLClass(WebP.height, 'webp');
	};
	WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
})(window.sandboxApi && window.sandboxApi.parentWindow && window.sandboxApi.parentWindow.document || document);
