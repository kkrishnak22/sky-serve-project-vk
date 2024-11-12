const MAPBOX_TOKEN = import.meta.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

  
  const TABS = [
    { id: 'visualize', label: 'Visualize GeoJSON' },
    { id: 'calculateArea', label: 'Calculate Area' },
    { id: 'calculateDistance', label: 'Calculate Distance' },
    { id: 'addMarker', label: 'Add Marker' },
    { id: 'dragMarker', label: 'Draggable Markers' },
  ];
  export { MAPBOX_TOKEN, generateRandomColor, debounce, TABS };
