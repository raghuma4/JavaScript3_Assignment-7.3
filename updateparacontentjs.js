 window.onload = function()  {

    // Anonymous function
		var updateParaContent = function() {
    		
           // disable the button after it is clicked
           document.getElementById("btnClick").disabled = true;   	   

           // use window.setTimeout to update the paragraph content after 5 seconds
           setTimeout(function() {
                
                // update the html of para
                document.getElementById('para').innerHTML = "This paragraph content has been updated";

                // enable the button after 5 seconds
                document.getElementById("btnClick").disabled = false;

            }, 5000); // set a delay of 5 seconds
        }
        

        // Calling Anonymous function and make this function as global so that it can be accessed from html code
        this.displayParagraphContent = function DisplayContent() {

    		  updateParaContent();
    	}
	}