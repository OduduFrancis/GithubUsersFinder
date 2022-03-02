class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // show profile
  showProfile(user) {
    if (user.hireable === null) {
      user.hireable = "Not available";
    }
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class ='img-fluid mb-2' src="${user.avatar_url}">
    <a href ='${user.html_url}' target='_blank' class='btn btn-info d-grid gap-2 mb-4 '>Profile Info</a>

    </div>
    <div class="col-md-9">
    <span class='badge bg-secondary'>Public Repos: ${user.public_repos}</span>
    <span class='badge bg-success'>Followers: ${user.followers}</span>
    <span class='badge bg-success'>Following: ${user.following}</span>
    <span class='badge bg-warning'>Gists: ${user.public_gists}</span>
    <span class='badge bg-primary'>Fit To Hire: ${user.hireable}</span>
    <br><br>

    <ul class='list-group'>
    <li class='list-group-item'>Company: ${user.blog}</li>
    <li class='list-group-item'>Bio: ${user.bio}</li>
    <li class='list-group-item'>Location: ${user.location}</li>
    
    </ul>
    </div>
    </div>
    </div>
    <h4 class='page-heading mb-3'>New Repos</h3>
    <div id='repos'</div>
    `;
  }

  // show Alert

  showAlert(message, className) {
    //  CLEAR ANY LEFTOVER ALERT
    this.clearAlert();
    // create div element'
    const div = document.createElement("div");
    // Add a className to div
    div.className = className;
    //Add text Content
    div.appendChild(document.createTextNode(message));

    // get parent ELement
    const seachContainer = document.querySelector(".searchContainer");
    // get element you want div to be inserted before
    const search = document.querySelector(".search");

    // Insert div Element

    seachContainer.insertBefore(div, search);

    // setTimeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear Alert
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) currentAlert.remove();
  }
  // clear profile

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
