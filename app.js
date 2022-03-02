// instantiate the github class
const github = new Github();

const ui = new UI();

// search input element
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", function () {
  // get input textContent
  const searchText = searchUser.value;

  // check if input is not empty
  if (searchText !== "") {
    github.getUser(searchText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert in the UI

        ui.showAlert("User Not Available", "alert alert-danger");
      } else {
        // Show the profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
