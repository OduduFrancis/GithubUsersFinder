// Github constructor using ES6 classes

class Github {
  constructor() {
    this.client_id = "a142967c3d90b9867c1c";
    this.client_secret = "8c6a66119291ad1104d993f8654aa614f0d35736";
  }

  async getUser(user) {
    const profileresponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileresponse.json();

    return { profile };
  }
}

// check number of request left per hour
// curl -i https://api.github.com/ratelimit?client_id=a142967c3d90b9867c1c&client_secret=8c6a66119291ad1104d993f8654aa614f0d35736

// const db = new Date(1646257981 * 1000);
