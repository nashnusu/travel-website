/* jshint esversion: 11 */

// List of all destination info
const destinationsData = [
  {
    id: "paris",
    title: "Paris",
    description: "Paris is loved for its charming streets, art, and safe atmosphere for solo female travelers.",
    restaurants: ["Le Bouillon Chartier", "Café de Flore"],
    attractions: ["Eiffel Tower", "Louvre Museum", "Montmartre"]
  },
  {
    id: "bali",
    title: "Bali",
    description: "Bali is a tropical paradise known for its beautiful beaches, spiritual retreats, and vibrant culture, offering the perfect blend of relaxation and adventure.",
    restaurants: ["Locavore", "Mozaic Restaurant"],
    attractions: ["Uluwatu Temple", "Sacred Monkey Forest Sanctuary", "Mount Batur"]
  },
  {
    id: "tokyo",
    title: "Tokyo",
    description: "Tokyo is a bustling metropolis with a unique blend of traditional culture and cutting-edge technology, offering a wide variety of experiences for female travelers.",
    restaurants: ["Sukiyabashi Jiro", "Ippudo Ramen"],
    attractions: ["Tokyo Tower", "Senso-ji Temple", "Shibuya Crossing"]
  },
  {
    id: "cape-town",
    title: "Cape Town",
    description: "Cape Town is known for its dramatic scenery, rich history, and the welcoming atmosphere, making it an ideal destination for women seeking adventure and culture.",
    restaurants: ["The Test Kitchen", "La Colombe"],
    attractions: ["Table Mountain", "Robben Island", "Cape of Good Hope"]
  },
  {
    id: "berlin",
    title: "Berlin",
    description: "Berlin is a vibrant city known for its rich history, art scene, and progressive atmosphere, making it welcoming and inspiring for female travelers.",
    restaurants: ["Zur letzten Instanz", "Katz Orange"],
    attractions: ["Brandenburg Gate", "East Side Gallery", "Museum Island"]
  },
  {
    id: "rome",
    title: "Rome",
    description: "Rome captivates visitors with its ancient history, stunning architecture, and lively street culture, perfect for women exploring both culture and cuisine.",
    restaurants: ["Roscioli", "Pizzarium Bonci"],
    attractions: ["Colosseum", "Trevi Fountain", "Vatican Museums"]
  },
  {
    id: "madrid",
    title: "Madrid",
    description: "Madrid offers a lively cultural scene, friendly locals, and beautiful parks, ideal for women travelers seeking vibrant urban life.",
    restaurants: ["Sobrino de Botín", "Mercado de San Miguel"],
    attractions: ["Prado Museum", "Retiro Park", "Royal Palace"]
  },
  {
    id: "dublin",
    title: "Dublin",
    description: "Dublin blends historic charm with a welcoming vibe, great pubs, and beautiful parks, making it a cozy destination for solo and group travelers alike.",
    restaurants: ["Chapter One", "Forest Avenue"],
    attractions: ["Trinity College & Book of Kells", "Dublin Castle", "St. Stephen's Green"]
  },
  {
    id: "london",
    title: "London",
    description: "London offers a cosmopolitan mix of history, fashion, and arts, with safe neighborhoods and diverse activities perfect for women travelers.",
    restaurants: ["Dishoom", "The Ledbury"],
    attractions: ["Big Ben & Houses of Parliament", "London Eye", "Borough Market"]
  },
  {
    id: "sydney",
    title: "Sydney",
    description: "Sydney combines stunning natural landscapes with a laid-back vibe, great beaches, and a welcoming culture that makes every visit memorable.",
    restaurants: ["Quay Restaurant", "Icebergs Dining Room"],
    attractions: ["Sydney Opera House", "Bondi Beach", "Royal Botanic Garden"]
  },
  {
    id: "seoul",
    title: "Seoul",
    description: "Seoul is a dynamic city mixing tradition and modernity, with fantastic shopping, skincare culture, and historic palaces.",
    restaurants: ["Jungsik", "Mingles"],
    attractions: ["Gyeongbokgung Palace", "Myeongdong Shopping Street", "Bukchon Hanok Village"]
  },
  {
    id: "beijing",
    title: "Beijing",
    description: "Beijing blends imperial history with modern energy, featuring iconic landmarks and cultural experiences cherished by travelers worldwide.",
    restaurants: ["Da Dong Roast Duck", "TRB Hutong"],
    attractions: ["The Great Wall", "Forbidden City", "Temple of Heaven"]
  },
  {
    id: "bangkok",
    title: "Bangkok",
    description: "Bangkok is vibrant and energetic, with incredible street food, temples, and shopping, perfect for adventurous female travelers.",
    restaurants: ["Gaggan", "Bo.lan"],
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market"]
  },
  {
    id: "maldives",
    title: "Maldives",
    description: "The Maldives is a tropical paradise offering privacy, crystal-clear waters, and luxury resorts perfect for relaxing getaways.",
    restaurants: ["Ithaa Undersea Restaurant", "5.8 Undersea Restaurant"],
    attractions: ["Overwater Bungalows", "Snorkeling and Diving Spots", "Sunset Cruises"]
  },
  {
    id: "havana",
    title: "Havana",
    description: "Havana enchants with colorful streets, rich culture, and lively music, making it an exciting and vibrant destination for women.",
    restaurants: ["La Guarida", "San Cristobal Paladar"],
    attractions: ["Old Havana", "Malecón", "Revolution Museum"]
  },
  {
    id: "rio-de-janeiro",
    title: "Rio de Janeiro",
    description: "Rio dazzles with stunning beaches, lively festivals, and iconic landmarks, creating a joyful and adventurous environment for women travelers.",
    restaurants: ["Oro Restaurant", "Aprazível"],
    attractions: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach"]
  }
];

// Get references to modal and its content elements
const modal = document.querySelector('[data-modal]');
const destinationName = document.getElementById("destination-name");
const contentDiv = document.getElementById("destination-content");
const closeModal = document.querySelector("[data-close-modal]");

// Add click listeners to destination cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".destination-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const destinationId = card.dataset.destination;
      showDestinationInfo(destinationId);
      modal.showModal(); // Show modal when a card is clicked
    });
  });
});

// Show details inside modal
function showDestinationInfo(destinationId) {
  const destination = destinationsData.find(dest => dest.id === destinationId);
  if (!destination) return;

  // Set the destination title
  destinationName.innerText = destination.title;

  // Fill the modal with info
  contentDiv.innerHTML = `
    <p>${destination.description}</p>
    <h3>Suggested Restaurants</h3>
    <ul>${destination.restaurants.map(item => `<li>${item}</li>`).join('')}</ul>
    <h3>Famous Attractions</h3>
    <ul>${destination.attractions.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
}

// Close modal when "Close" button is clicked
closeModal.addEventListener("click", () => {
  modal.close();
});
