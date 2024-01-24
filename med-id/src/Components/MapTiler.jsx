const MY_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

const maptiler = {
  url: `https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}@2x.png?key=${MY_API_KEY}`,
  attribution:
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
};
export default maptiler;
