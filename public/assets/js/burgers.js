// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-ate").on("click", function(event) {
      var id = $(this).data("id");
      var newAte = $(this).attr("data-newAte");
  
      var newAteState = {
        ate: newAte
      };
      console.log (newAte)
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newAteState
      }).then(
        function() {
          console.log("changed ate to", newAte);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        ate: $("[name=ate]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  