// РАБОТАЕТ ЧЕРЕЗ РАЗ. ЧТО НЕ ТАК?
window.getWinner = function (matrix) {
var countX=0;
var count0=0;
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j]==='X') {
	  countX++;
       if (countX === matrix.length) {
	      if (i===j) {
		  return 'X';
	       }
        }
    } else if (matrix[i][j]==='0') {
	    count0++;
          if (count0 === matrix.length) {
	        if (i===j) {
		      return '0';
	        }
          }
	   } else if (matrix[i][j]==='0') {
	      for (var n = 0; n < matrix.length; n++) {
		    if ((j = i+n)||(i = j+n)) {
			  count0++;
	            if (count0 === matrix.length) {
			      return '0';
		        }
	        }
	      }
	   } else if (matrix[i][j]==='X') {
	       countX++;
	         if (countX === matrix.length) {
	           for (var n = 0; n < matrix.length; n++) {
		         if ((j = i+n)||(i = j+n)) {
			       return 'X'
		         }
	           }
	         }
	      } else {
             return null;
            }
    }
  }
}