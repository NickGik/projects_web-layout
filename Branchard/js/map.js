ymaps.ready(init);
        function init(){
            var myMapY = new ymaps.Map("map", {
                center: [55.759859, 37.613318],
                zoom: 14,
                controls: []
            });


            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [55.8, 37.6]
                }
            });


            var myPlacemark = new ymaps.Placemark([55.759859, 37.613318], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/pointer.svg',
                iconImageSize: [20, 20],
                iconImageOffset: [-10, -20]
            });


            myMapY.geoObjects.add(myGeoObject);
            myMapY.geoObjects.add(myPlacemark);
            myMapY.controls.add(new ymaps.control.ZoomControl({options: { position: { right:10, top: 150 }}}));
            myMapY.controls.add('geolocationControl', {
              float: 'none',
              position: {
                top: '120px',
                right: '10px'
              }
          });

        }
