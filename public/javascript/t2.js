class Post {
  constructor(userId, title, body) {
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.name = this.getUserName(userId);
  }

  getUserName(userId) {
    const users = {
      1: "Athota Srilatha",
      2: "Bandaru Sampath Kumar",
      3: "Gollakaram Ganga Bhavani",
      4: "Gowtham Meka",
      5: "Mayuraj Ranawat",
      6: "Narendiran K",
      7: "Pratham Madhunapanthula",
      8: "Riya Reddy",
      9: "Shaik Sameer",
      10: "Suriyan K",
      11: "Vaishnavi Panta",
      12: "Yateesh Tangudu",
    };

    return users[userId] || "Unknown";
  }
}