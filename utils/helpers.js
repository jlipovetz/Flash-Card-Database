module.exports = {
  format_loop: (index) => {
    return index + 1;
  },
  is_same_user: (username, loggedIn) => {
    if (username === true && loggedIn === true)
      return true;
    else
      return false;
  }
};
