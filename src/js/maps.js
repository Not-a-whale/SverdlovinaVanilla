function initMap() {
  const location = { lat: 50.62469, lng: 26.25447 };
  const map = new google.maps.Map(document.getElementById("mapRow"), {
    zoom: 4,
    center: location,
  });
  const API_KEY = "AIzaSyBRzcO-IyLJ44FM0IiUOqBtxHijOuhe8Ok";
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
