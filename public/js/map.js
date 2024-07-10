var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
});

if (transportationDetail) {
    var map = L.map('map', {
        center: [transportationDetail.latitude, transportationDetail.longitude],
        zoom: 16,
        layers: [osm, osmHOT]
    });
} else {
    var map = L.map('map', {
        center: [-6.175742761104458, 106.82497008779268],
        zoom: 10,
        layers: [osm, osmHOT]
    });
}


var baseMaps = {
    "OpenStreetMap.HOT": osmHOT,
    "OpenStreetMap": osm
};

L.control.layers(baseMaps).addTo(map);

for (let index = 0; index < transportations.length; index++) {
    const transportation = transportations[index];

    L.marker([transportation.latitude, transportation.longitude]).addTo(map)
        // .bindPopup(transportation.driver)
        // .openPopup();
}
