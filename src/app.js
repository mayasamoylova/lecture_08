window.getWinner = function (matrix) {
  var countX=0;
  var count0=0;
     for (var j = 0; j < matrix.length; j++) {
	   var row=[];
	     for (var i = 0; i < matrix.length; i++) {
	       row.push(matrix[i][j]);
	     }
	       if (row.every(function(element) {
		     return element === 'X';
               })) {
		       return 'X';
	        } else if (row.every(function(element) {
		        return element === '0';
	              })) {
		          return '0';
	          }
      }
	  for (i = 0; i < matrix.length; i++) {
	    if (matrix[i].every(function (element) {
          return element === 'X';
          })) {
            return 'X';
        } else if (matrix[i].every(function (element) {
            return element === '0';
            })) {
              return '0';
        }
		  for (j = 0; j < matrix.length; j++) {
            if (matrix[i][j]==='X') {
	          if ((i===matrix.length-j-1)||(i===j)) {
		        countX++;
                  if (countX === matrix.length) {
	                return 'X';
	              }
              }
            } else if (matrix[i][j]==='0') {
	            if ((i===matrix.length-j-1)||(i===j)) {
		          count0++;
                    if (count0 === matrix.length) {
		              return '0';
	                }
                }
	          } else {
                 return null;
                }
           }
      }
}

  
	
  
	