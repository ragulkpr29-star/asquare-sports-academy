import {
  Activity,
  CalendarCheck,
  Dumbbell,
  Goal,
  MapPin,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Waves,
  IndianRupee
} from 'lucide-react';

export const academy = {
  name: 'A Square Sports Academy',
  tagline: 'Where Talent Meets Opportunity',
  phone: '9443757559',
  email: 'ragulkpr@gmail.com',
  adminPassword: '9443757559',
  address: 'Vaipadi Rd, Vijayapuri, Tamil Nadu 638056',
  hours: 'Daily 5:00 AM - 9:00 PM IST',
  whatsappNumber: '9443757559',
  whatsapp: 'https://wa.me/919443757559',
  instagram: 'https://www.instagram.com/asquaresportss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  instagramId: '@asquaresportss',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Vaipadi%20Rd%2C%20Vijayapuri%2C%20Tamil%20Nadu%20638056'
};

export const images = {
  hero:
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1800&q=85',
  cricket:
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85',
  turf:
    'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=85',
  badminton:
    'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=85',
  gym:
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
  nets:
    'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1200&q=85'
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Turf Booking', to: '/turf-booking' },
  { label: 'Badminton', to: '/badminton-booking' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Admin', to: '/secure-admin' }
];

export const stats = [
  ['1', 'Turf Ground'],
  ['2', 'Badminton Courts'],
  ['5 AM - 9 PM IST', 'Open Daily'],
  ['Pro', 'Coaching Team']
];

export const facilities = [
  { title: 'Cricket Coaching', icon: Trophy, text: 'Structured coaching for young players and competitive athletes.' },
  { title: 'Cricket Ground', icon: Goal, text: 'Premium turf experience for practice sessions and matches.' },
  { title: 'Practice Nets', icon: Target, text: 'Focused batting and bowling drills with coach feedback.' },
  { title: 'Bowling Machine', icon: Activity, text: 'High repetition batting practice against varied pace and length.' },
  { title: 'Own Gym', icon: Dumbbell, text: 'Fitness support for strength, mobility and match readiness.' },
  { title: 'Badminton Courts', icon: Waves, text: 'Two maintained courts for hourly booking and training.' }
];

export const galleryItems = [
  { id: 1, category: 'Cricket Coaching', title: 'Focused batting session', image: images.cricket },
  { id: 2, category: 'Turf Ground', title: 'Evening turf play', image: images.turf },
  { id: 3, category: 'Badminton Courts', title: 'Indoor badminton court', image: images.badminton },
  { id: 4, category: 'Gym', title: 'Strength and fitness area', image: images.gym },
  { id: 5, category: 'Practice Nets', title: 'Net practice setup', image: images.nets },
  {
    id: 6,
    category: 'Bowling Machine',
    title: 'Machine assisted batting drills',
    image:
      'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 7,
    category: 'Cricket Coaching',
    title: 'Match preparation',
    image:
      'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 8,
    category: 'Turf Ground',
    title: 'Floodlight practice',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85'
  }
];

export const testimonials = [
  {
    name: 'Parent of U-15 Player',
    text: 'The academy brings discipline, fitness and opportunity together. The coaching structure is clear and encouraging.'
  },
  {
    name: 'Weekend Player',
    text: 'Booking the turf is simple, and the facilities are maintained well for early morning and evening play.'
  },
  {
    name: 'Badminton Member',
    text: 'The court availability experience is transparent, and the staff keeps the sessions organized.'
  }
];

export const timeline = [
  ['Academy Story', 'Built to give local athletes a serious place to train, play and grow with confidence.'],
  ['Mission', 'Make quality coaching and sports infrastructure accessible every day of the week.'],
  ['Vision', 'Create a reliable pathway from grassroots talent to competitive opportunity.'],
  ['Infrastructure', 'Cricket ground, practice nets, bowling machine, gym and two badminton courts in one campus.']
];

export const adminCards = [
  { label: "Today's Turf Bookings", icon: CalendarCheck },
  { label: "Today's Badminton Bookings", icon: Users },
  { label: "Today's Turf Collection", icon: IndianRupee },
  { label: "Today's Total Collection", icon: ShieldCheck },
  { label: 'Upcoming Sessions', icon: MapPin }
];
