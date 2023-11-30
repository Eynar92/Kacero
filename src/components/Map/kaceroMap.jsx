import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export default function KaceroMap() {
  return (
    <MapContainer className='h-auto w-auto' center={[-17.435567, -66.121747]} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-17.435567, -66.121747]} />
    </MapContainer>
  )
}