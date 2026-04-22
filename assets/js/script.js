function toggleFollow(button) {
  button.classList.toggle("following");

  if (button.classList.contains("following")) {
    button.innerText = "Following";
  } else {
    button.innerText = "Follow";
  }
}
function toggleLike(button) {
  button.classList.toggle("liked");

  if (button.classList.contains("liked")) {
    button.innerText = "❤️ Liked";
  } else {
    button.innerText = "❤️ Like";
  }
}