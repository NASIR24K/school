// Add any JavaScript code related to the map display here
// You can use JavaScript libraries like Leaflet, Google Maps API, or Mapbox.
// For example, you can initialize a map with the specified location coordinates.
// Please replace the `YOUR_MAP_ACCESS_TOKEN` with your actual API key if using Mapbox or Google Maps API.

// Initialize the map
function initMap() {
    // Coordinates of the school location
    const schoolLocation = { lat: 40.7128, lng: -74.0060 };
    
    // Create a map centered at the school location
    const map = new google.maps.Map(document.getElementById('map'), {
      center: schoolLocation,
      zoom: 15,
    });
  
    // Add a marker at the school location
    new google.maps.Marker({
      position: schoolLocation,
      map: map,
      title: 'Downs Online School',
    });
  }
  