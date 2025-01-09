function submitSearch() {
  const query = document.getElementById("searchQuery").value;
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}`;
}

function imFeelingLucky() {
  const query = document.getElementById("searchQuery").value;
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}&btnI`;
}
