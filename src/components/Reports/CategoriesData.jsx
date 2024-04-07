import { ReactComponent as Products } from '../../icons/Group 62.svg';
import { ReactComponent as Alcohol } from '../../icons/cocktail 1.svg';
import { ReactComponent as Entertaiment } from '../../icons/kite 1.svg';
import { ReactComponent as Health } from '../../icons/hands-holding-heart 1.svg';
import { ReactComponent as Car } from '../../icons/car 1.svg';
import { ReactComponent as Housing } from '../../icons/couch 1.svg';
import { ReactComponent as Technique } from '../../icons/tools 1.svg';
import { ReactComponent as Communication } from '../../icons/invoice 1.svg';
import { ReactComponent as SportsHobbies } from '../../icons/clay 1.svg';
import { ReactComponent as Education } from '../../icons/book 1.svg';
import { ReactComponent as Other } from '../../icons/ufo 1.svg';

export const categoriesData = [
  {
    name: 'Products',
    icon: Products,
    items: [
      { name: 'Fruits', value: 10 },
      { name: 'Vegetables', value: 20 },
      { name: 'Meat', value: 10 },
      { name: 'Dairy', value: 30 },
      { name: 'Beverages', value: 40 },
      { name: 'Bread', value: 20 },
      { name: 'Snacks', value: 10 },
      { name: 'Canned Goods', value: 50 },
      { name: 'Frozen Foods', value: 20 },
      { name: 'Spices', value: 30 },
      { name: 'Condiments', value: 20 },
      { name: 'Pasta', value: 10 },
      { name: 'Rice', value: 40 },
      { name: 'Cereal', value: 10 },
    ],
  },
  {
    name: 'Alcohol',
    icon: Alcohol,
    items: [
      { name: 'Vodka', value: 10 },
      { name: 'Wine', value: 20 },
      { name: 'Wisky', value: 30 },
      { name: 'Beer', value: 5 },
    ],
  },
  {
    name: 'Entertainment',
    icon: Entertaiment,
    items: [
      { name: 'Concerts', value: 10 },
      { name: 'Movies', value: 20 },
      { name: 'Games', value: 10 },
    ],
  },
  {
    name: 'Health',
    icon: Health,
    items: [
      { name: 'Medications', value: 15},
      { name: 'Doctor Visits', value: 25 },
      { name: 'Dental Care', value: 15 },
      { name: 'Gym Memberships', value: 20 },
      { name: 'Health Supplements', value: 30 },
      { name: 'Medical Equipment', value: 20 },
    ],
  },
  {
    name: 'Transport',
    icon: Car,
    items: [
      { name: 'Fuel', value: 10 },
      { name: 'Public Transport', value: 10 },
      { name: 'Car Maintenance', value: 15 },
      { name: 'Parking Fees', value: 20 },
      { name: 'Tolls', value: 25 },
      { name: 'Car Insurance', value: 10 },
    ],
  },
  {
    name: 'Housing',
    icon: Housing,
    items: [
      { name: 'Rent', value: 20 },
      { name: 'Mortgage', value: 40 },
      { name: 'Utilities', value: 11 },
      { name: 'Property Taxes', value: 25 },
      { name: 'Home Insurance', value: 30 },
      { name: 'Maintenance', value: 35 },
    ],
  },
  {
    name: 'Technique',
    icon: Technique,
    items: [
      { name: 'Electronics', value: 30 },
      { name: 'Gadgets', value: 10 },
      { name: 'Computer Accessories', value: 15 },
      { name: 'Software', value: 10 },
      { name: 'Tech Services', value: 15 },
      { name: 'Upgrades', value: 20 },
    ],
  },
  {
    name: 'Communal, Communication',
    icon: Communication,
    items: [
      { name: 'Phone Bills', value: 10 },
      { name: 'Internet Subscription', value: 30 },
      { name: 'Postal Services', value: 20 },
      { name: 'Community Events', value: 5 },
      { name: 'Social Clubs', value: 15 },
      { name: 'Networking Events', value: 40 },
      { name: 'Meetups', value: 25 },
    ],
  },
  {
    name: 'Sports, Hobbies',
    icon: SportsHobbies,
    items: [
      { name: 'Football', value: 30 },
      { name: 'Basketball', value: 50 },
      { name: 'Running', value: 10 },
      { name: 'Swimming', value: 15 },
      { name: 'Cycling', value: 10 },
      { name: 'Chess', value: 5 },
      { name: 'Photography', value: 25 },
    ],
  },
  {
    name: 'Education',
    icon: Education,
    items: [
      { name: 'Books', value: 20 },
      { name: 'Courses', value: 40 },
      { name: 'Workshops', value: 10 },
      { name: 'Tutorials', value: 20 },
      { name: 'Online Classes', value: 25 },
      { name: 'Seminars', value: 15 },
      { name: 'Webinars', value: 30 },
      { name: 'Lectures', value: 10 },
    ],
  },
  {
    name: 'Other',
    icon: Other,
    items: [{ name: 'Other', value: 0 }],
  },
];
