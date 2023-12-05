$(document).ready(function () {
    // Load pets data from the JSON file using AJAX
    $.ajax({
      url: 'pets.json',
      dataType: 'json',
      success: function (data) {
        displayPets(data);
      },
      error: function (error) {
        console.error('Error loading JSON file:', error);
      }
    });
  
    function displayPets(pets) {
      var petsContainer = $('#pets-container');
  
      if (pets.length === 0) {
        petsContainer.html('<p>No pets found.</p>');
        return;
      }
  
      // Create HTML for each pet and append it to the container
      pets.forEach(function (pet) {
        var petHtml = `
          <div class="pet">
            <h2>${pet.name}</h2>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <p>Color: ${pet.color}</p>
          </div>
        `;
        petsContainer.append(petHtml);
      });
    }
  });
  