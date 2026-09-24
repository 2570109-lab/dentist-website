export const clinic = {
  name: 'Shivaay Dental Care & Orthodontic Center',
  shortName: 'Shivaay Dental Care',
  tagline: 'Confident smiles begin here.',
  area: 'Bareilly, Uttar Pradesh',
  phone: '+91 70061 62599',
  phoneHref: 'tel:+917006162599',
  whatsapp: '917006162599',
  instagram: 'https://www.instagram.com/shivaaydentalcare/',
  instagramHandle: '@shivaaydentalcare',
  address: 'Dobra Road, Krishna Vanti Colony, Bareilly - 243005, Uttar Pradesh',
  directionsUrl: 'https://www.google.com/maps/place/28%C2%B021%2743.7%22N+79%C2%B027%2746.2%22E/@28.3621277,79.4628296,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.3621277!4d79.4628296?entry=ttu',
  hours: [
    { day: 'Monday — Friday', time: '10:00 AM — 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM — 6:00 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  logo: '/logo.jpg',
  images: {
    hero: 'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1600',
    feature: 'https://images.pexels.com/photos/4270379/pexels-photo-4270379.jpeg?auto=compress&cs=tinysrgb&w=1200',
    doctors: [
      { src: '/Dr. Dhruv.png', alt: 'Dr. Dhruv at Shivaay Dental Care' },
      { src: '/Dr. Nipun.png', alt: 'Dr. Nipun at Shivaay Dental Care' },
    ],
  },
  gallery: [
    { src: 'https://images.pexels.com/photos/6812429/pexels-photo-6812429.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Dentist talking with a patient', label: 'A calm start to every visit' },
    { src: 'https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Dentist caring for a patient', label: 'Care with precision' },
    { src: 'https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Modern dental treatment room', label: 'A considered environment' },
    { src: 'https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Dental checkup in progress', label: 'Attention to detail' },
  ],
  treatments: [
    { number: '01', title: 'Preventive care', text: 'Regular check-ups and cleanings that keep your smile feeling its best.' },
    { number: '02', title: 'Restorative dentistry', text: 'Thoughtful treatment for teeth that need renewed strength and comfort.' },
    { number: '03', title: 'Smile confidence', text: 'Explore options designed to help you feel more at ease with your smile.' },
    { number: '04', title: 'Orthodontic care', text: 'Personalized guidance for a healthier, more balanced bite.' },
  ],
  trust: [
    { number: '01', title: 'Comfort first', sub: 'Care that feels considered' },
    { number: '02', title: 'Personalized care', sub: 'A plan made for you' },
    { number: '03', title: 'Modern approach', sub: 'Thoughtful, precise dentistry' },
    { number: '04', title: 'Real conversations', sub: 'Clear guidance at every step' },
  ],
  journey: [
    { step: '01', title: 'Book your appointment', text: 'Send us a WhatsApp message and find a time that works for you.' },
    { step: '02', title: 'Share your concerns', text: 'Have an open conversation about what you need and how you feel.' },
    { step: '03', title: 'Explore your options', text: 'Understand your treatment choices before making a decision.' },
    { step: '04', title: 'Begin with confidence', text: 'Move forward with a plan that feels right for you.' },
  ],
};

export const messages = {
  appointment: 'Hello, I would like to book an appointment with the dentist. Please let me know the available date and time.',
  consultation: 'Hello, I would like to book a consultation with the dentist.',
  treatmentInfo: 'Hello, I would like to know more about your dental treatment options.',
  treatment: (name: string) => `Hello, I would like to know more about ${name} and would like to book an appointment.`,
};

export function waLink(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}
