// Coordinates for major districts in Bangladesh
export const districts = [
  { id: 'dhaka', name: 'Dhaka', bnName: 'ঢাকা', division: 'Dhaka', lat: 23.8103, lng: 90.4125 },
  { id: 'chittagong', name: 'Chittagong', bnName: 'চট্টগ্রাম', division: 'Chittagong', lat: 22.3569, lng: 91.7832 },
  { id: 'sylhet', name: 'Sylhet', bnName: 'সিলেট', division: 'Sylhet', lat: 24.8949, lng: 91.8687 },
  { id: 'rajshahi', name: 'Rajshahi', bnName: 'রাজশাহী', division: 'Rajshahi', lat: 24.3636, lng: 88.6241 },
  { id: 'khulna', name: 'Khulna', bnName: 'খুলনা', division: 'Khulna', lat: 22.8456, lng: 89.5403 },
  { id: 'barisal', name: 'Barisal', bnName: 'বরিশাল', division: 'Barisal', lat: 22.7010, lng: 90.3535 },
  { id: 'rangpur', name: 'Rangpur', bnName: 'রংপুর', division: 'Rangpur', lat: 25.7439, lng: 89.2752 },
  { id: 'mymensingh', name: 'Mymensingh', bnName: 'ময়মনসিংহ', division: 'Mymensingh', lat: 24.7471, lng: 90.4203 },
  { id: 'comilla', name: 'Comilla', bnName: 'কুমিল্লা', division: 'Chittagong', lat: 23.4607, lng: 91.1809 },
  { id: 'feni', name: 'Feni', bnName: 'ফেনী', division: 'Chittagong', lat: 23.0186, lng: 91.3966 },
  { id: 'bogura', name: 'Bogura', bnName: 'বগুড়া', division: 'Rajshahi', lat: 24.8481, lng: 89.3730 },
  { id: 'gazipur', name: 'Gazipur', bnName: 'গাজীপুর', division: 'Dhaka', lat: 24.0958, lng: 90.4125 },
  { id: 'narayanganj', name: 'Narayanganj', bnName: 'নারায়ণগঞ্জ', division: 'Dhaka', lat: 23.6238, lng: 90.5000 },
  { id: 'gopalganj', name: 'Gopalganj', bnName: 'গোপালগঞ্জ', division: 'Dhaka', lat: 23.0051, lng: 89.8265 },
  { id: 'bagerhat', name: 'Bagerhat', bnName: 'বাগেরহাট', division: 'Khulna', lat: 22.6515, lng: 89.7859 },
  { id: 'coxsbazar', name: 'Cox\'s Bazar', bnName: 'কক্সবাজার', division: 'Chittagong', lat: 21.4391, lng: 92.0006 },
  { id: 'jessore', name: 'Jessore', bnName: 'যশোর', division: 'Khulna', lat: 23.1697, lng: 89.2137 },
  { id: 'dinajpur', name: 'Dinajpur', bnName: 'দিনাজপুর', division: 'Rangpur', lat: 25.6217, lng: 88.6355 },
  { id: 'jamalpur', name: 'Jamalpur', bnName: 'জামালপুর', division: 'Mymensingh', lat: 24.9375, lng: 89.9377 },
  { id: 'pabna', name: 'Pabna', bnName: 'পাবনা', division: 'Rajshahi', lat: 24.0063, lng: 89.2500 }
];

export const getDistrictById = (id) => districts.find(d => d.id === id);
