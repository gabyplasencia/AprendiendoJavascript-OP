function initMap() {
    
    const radazul = { lat: 28.401792, lng: -16.325883}
    const fogon = { lat: 28.47559571586665, lng: -16.32886147858037}
    const rojas = {lat: 28.468480222609244, lng: -16.45570281306456}

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: radazul,
    })
    // The marker, positioned at Uluru
    const marker1 = new google.maps.Marker({
      position: radazul,
      map: map,
    })
    const marker2 = new google.maps.Marker({
        position: fogon,
        map: map,
      })
      const marker3 = new google.maps.Marker({
        position: rojas,
        map: map,
      })
  }
  
  window.initMap = initMap