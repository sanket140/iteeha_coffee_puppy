export interface Location {
  id: string;
  name: string;
  address: string;
  phone?: string;
  residentPups: number;
  specialFeature: string;
  hours: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const locations: Location[] = [
  {
    id: "mahalaxmi",
    name: "Mahalaxmi",
    address: "Ground Floor, Urmi Axis Building, West, behind Famous studio, opp. Doctor Elijah Moses Road, Mahalakshmi, Mumbai, Maharashtra 400011",
    residentPups: 5,
    specialFeature: "Dog-Friendly Patio",
    hours: "7:30 AM - 11:30 PM",
    coordinates: {
      lat: 18.9820,
      lng: 72.8228
    }
  },
  {
    id: "lower-parel",
    name: "Lower Parel",
    address: "95, Ganpatrao Kadam Marg, Opposite Peninsula Business Park, Lower Parel West, Mumbai, Maharashtra 400013",
    residentPups: 4,
    specialFeature: "Indoor Play Area",
    hours: "7:30 AM - 11:30 PM",
    coordinates: {
      lat: 19.0176,
      lng: 72.8313
    }
  },
  {
    id: "bandra-west",
    name: "Bandra West",
    address: "Shop 6, Shanti Vanam, Hill Road, Bandra West, Mumbai",
    residentPups: 3,
    specialFeature: "Cozy Corner Seating",
    hours: "7:30 AM - 11:30 PM",
    coordinates: {
      lat: 19.0596,
      lng: 72.8295
    }
  }
];

export const getLocationById = (id: string): Location | undefined => {
  return locations.find(location => location.id === id);
};
