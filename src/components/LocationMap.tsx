import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = () => {
  // Hackney coordinates (approximate center of Hackney, London)
  const hackneyPosition: [number, number] = [51.5450, -0.0553];

  return (
    <div className="rounded-lg text-card-foreground p-6 mb-8 bg-white border-0 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Location</h2>
      <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
        <MapContainer
          center={hackneyPosition}
          zoom={14}
          style={{ 
            height: '100%', 
            width: '100%',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
          className="rounded-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={hackneyPosition}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-[#333333] mb-1">
                  Deluxe 2 Bed Flat with Balcony
                </h3>
                <p className="text-sm text-[#5C5C5A]">
                  Hackney, London
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Browse more <span className="text-primary cursor-pointer underline">short term apartments in London</span>
      </p>
    </div>
  );
};

export default LocationMap;