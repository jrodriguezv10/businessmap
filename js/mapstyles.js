/************************************
*  Style for Gray Google Maps Color *
*************************************/

var mapStylesGray = [
                      {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#d7ebef"
                          },
                          {
                            "saturation": -5
                          },
                          {
                            "lightness": 54
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#eceae6"
                          },
                          {
                            "saturation": -49
                          },
                          {
                            "lightness": 22
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#dddbd7"
                          },
                          {
                            "saturation": -81
                          },
                          {
                            "lightness": 34
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.medical",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#dddbd7"
                          },
                          {
                            "saturation": -80
                          },
                          {
                            "lightness": -2
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.school",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#c8c6c3"
                          },
                          {
                            "saturation": -91
                          },
                          {
                            "lightness": -7
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "landscape.natural",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#c8c6c3"
                          },
                          {
                            "saturation": -71
                          },
                          {
                            "lightness": -18
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#dddbd7"
                          },
                          {
                            "saturation": -92
                          },
                          {
                            "lightness": 60
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#dddbd7"
                          },
                          {
                            "saturation": -81
                          },
                          {
                            "lightness": 34
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                          {
                            "hue": "#dddbd7"
                          },
                          {
                            "saturation": -92
                          },
                          {
                            "lightness": 37
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "hue": "#c8c6c3"
                          },
                          {
                            "saturation": 4
                          },
                          {
                            "lightness": 10
                          },
                          {
                            "visibility": "on"
                          }
                        ]
                      }];

/************************************
*  Style for Night Google Maps Color *
*************************************/

var mapStylesNight = [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }];