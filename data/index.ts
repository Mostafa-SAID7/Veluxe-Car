import { Car, Review, FAQ } from "@/types"

export const cars: Car[] = [
  {
    brand: "BMW",
    model: "3 SERIES (G20)",
    image: "/fleet1.jpg",
    passengers: 5,
    rating: 5.0,
    year: "2022",
    transmission: "automatic",
    fuel: "gasoline",
    price: "65 €",
  },
  {
    brand: "MERCEDES-BENZ",
    model: "E-CLASS W213",
    image: "/fleet2.jpg",
    passengers: 5,
    rating: 5.0,
    year: "2022",
    transmission: "automatic",
    fuel: "gasoline",
    price: "75 €",
  },
  {
    brand: "BMW",
    model: "3 SERIES (G20 LCI)",
    image: "/fleet1.jpg",
    passengers: 5,
    rating: 5.0,
    year: "2022",
    transmission: "automatic",
    fuel: "gasoline",
    price: "70 €",
  },
]

export const reviews: Review[] = [
  {
    name: "OLENA MARCHENKO",
    stars: 5,
    text: "The rental went easily and without unnecessary questions. The car is clean, in perfect condition, picked up right at the airport. 10 minutes and we were on the road! Very convenient. Now only with you!",
    active: false,
  },
  {
    name: "IRYNA NESTERENKO",
    stars: 5,
    text: "Rented a Range Rover Vogue for the weekend — the car is just fire! Everything went perfectly: clean interior, powerful engine, incredible emotions. Comfort, power, feeling of confidence on the road. Very grateful to the manager for prompt assistance. Thank you team!",
    active: true,
  },
  {
    name: "IVAN KOVALCHUK",
    stars: 4,
    text: "Booking took a few minutes, documents were processed quickly. No hidden fees. Highly recommend for business trips!",
    active: false,
  },
]

export const faqs: FAQ[] = [
  {
    num: "01",
    q: "What documents are needed to rent a car?",
    bold: "documents",
    answer: "To rent a car without a driver you need:\n• Passport or ID card\n• Driver's license (valid for at least 2 years)\n• Bank card for payment (or cash, if provided by the terms)",
  },
  {
    num: "02",
    q: "Are there age restrictions for rental?",
    bold: "age restrictions",
    answer: "Drivers must be at least 21 years old with a minimum of 2 years driving experience.",
  },
  {
    num: "03",
    q: "Does insurance come with the rental cost?",
    bold: "insurance",
    answer: "Basic insurance is included in the rental price. Comprehensive coverage is available as an additional option.",
  },
  {
    num: "04",
    q: "Is car delivery to an address possible?",
    bold: "car delivery",
    answer: "Yes! We deliver to any point: home address, hotel, airport or business center.",
  },
]

export const navLinks: string[] = ["Home", "Fleet", "Services", "Terms", "About Us", "Contact"]
