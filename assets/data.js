export const tours = [
    {key: '1', name: 'City Center', active: 1, duration: '2h00m', distance: '1.45km', desc: 'Text Text Text', image:require('./images/Rectangle_476.png')},
    {key: '2', name: 'St. Michael\'s Cathedral', active: 0, duration: '3h00m', distance: '2.45km',desc: 'Text Text Text', image:require('./images/Rectangle_472.png')},
    {key: '3', name: 'Art Museum', active: 0, duration: '4h00m', distance: '3.45km',desc: 'Text Text Text', image:require('./images/Rectangle_474.png')},
    {key: '4', name: 'Museu Square', active: 0, duration: '5h00m', distance: '5.45km',desc: 'Text Text Text', image:require('./images/Rectangle_476.png')},
  ];

export const locations = {
    "City Center" : [
      {
        key: '1', name: 'Matthias Corvinus Monument', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros mi. Aliquam mattis nisl eget urna facilisis, ut luctus metus iaculis. Donec efficitur, quam nec efficitur fringilla, eros sapien ullamcorper sapien, at lacinia velit nisi sit amet tellus. Nam ipsum tellus, euismod vitae cursus ac, consectetur vel lectus. In est urna, dapibus ac nulla eu, molestie vulputate mi. Fusce efficitur purus sit amet mi rutrum egestas. Fusce felis tellus, iaculis quis congue a, blandit quis libero. Duis porta ligula et pulvinar congue. Nulla malesuada arcu vestibulum diam luctus finibus.", 
        
        image:require('./images/opengraph.png'),
        geolock: {latitude: '46.753179', longitude: '23.564511'}
      },
        {key: '2', name: 'St. Michael\'s Cathedral', desc: 'Text Text Text', image:require('./images/tour_background_1.png')},
        {key: '3', name: 'Art Museum', desc: 'Text Text Text', image:require('./images/tour_background_2.png')},
        {key: '4', name: 'Museu Square', desc: 'Text Text Text', image:require('./images/tour_background_3.png')},
        {key: '5', name: 'Franciscan Church', desc: 'Text Text Text', image:require('./images/tour_background_1.png')},
        {key: '6', name: 'Etnographic Museum', desc: 'Text Text Text', image:require('./images/opengraph.png')}
    ]
};