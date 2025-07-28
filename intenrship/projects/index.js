const cityData = {

  mumbai: {
    sightseeing: [
      { name: "Gateway of India", description: "Iconic landmark by the sea." },
      { name: "Marine Drive", description: "Scenic promenade along the coast." }
    ],
    food: [
      { name: "Mohammed Ali Road", description: "Famous for street food and kebabs." }
    ],
    nature: [
      { name: "Sanjay Gandhi National Park", description: "Dense forest & wildlife." }
    ],
    history: [
      { name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", description: "Historical museum." }
    ],
    shopping: [
      { name: "Colaba Causeway", description: "Street shopping and cafés." }
    ],
    nightlife: [
      { name: "Lower Parel", description: "Trendy clubs and rooftop bars." }
    ]
  },

  pune: {
    sightseeing: [
      { name: "Shaniwar Wada", description: "Historical fort in the city center." },
      { name: "Aga Khan Palace", description: "Landmark with Gandhi memorabilia." }
    ],
    food: [
      { name: "FC Road", description: "Popular for snacks and cafés." }
    ],
    nature: [
      { name: "Vetal Tekdi", description: "Hill with scenic views and trails." }
    ],
    history: [
      { name: "Sinhagad Fort", description: "Hilltop fort with historical significance." }
    ],
    shopping: [
      { name: "Laxmi Road", description: "Bustling market street." }
    ],
    nightlife: [
      { name: "Koregaon Park", description: "Lively pubs and restaurants." }
    ]
  },

  delhi: {
    sightseeing: [
      { name: "Red Fort", description: "Mughal-era fortress with museums." },
      { name: "India Gate", description: "War memorial and park." }
    ],
    food: [
      { name: "Chandni Chowk", description: "Street food paradise." }
    ],
    nature: [
      { name: "Lodhi Garden", description: "Serene garden with tombs." }
    ],
    history: [
      { name: "Qutub Minar", description: "World's tallest brick minaret." }
    ],
    shopping: [
      { name: "Sarojini Nagar", description: "Affordable fashion market." }
    ],
    nightlife: [
      { name: "Hauz Khas", description: "Trendy party area with cafes." }
    ]
  },

  bangalore: {
    sightseeing: [
      { name: "Lalbagh Botanical Garden", description: "Expansive garden with lake." },
      { name: "Bangalore Palace", description: "Historic palace open to tourists." }
    ],
    food: [
      { name: "Koramangala", description: "Trendy area with cafes and eateries." }
    ],
    nature: [
      { name: "Cubbon Park", description: "Large city park with greenery." }
    ],
    history: [
      { name: "Tipu Sultan's Palace", description: "Historic Indo-Islamic palace." }
    ],
    shopping: [
      { name: "Commercial Street", description: "Popular for clothes and accessories." }
    ],
    nightlife: [
      { name: "MG Road", description: "Bars, pubs, and nightlife." }
    ]
  },

  goa: {
    sightseeing: [
      { name: "Basilica of Bom Jesus", description: "UNESCO World Heritage Site." },
      { name: "Fort Aguada", description: "Seaside fort with lighthouse." }
    ],
    food: [
      { name: "Fisherman’s Wharf", description: "Seafood restaurant by the river." }
    ],
    nature: [
      { name: "Dudhsagar Falls", description: "Massive waterfall in forest." }
    ],
    history: [
      { name: "Chapora Fort", description: "Famous sunset spot with views." }
    ],
    shopping: [
      { name: "Anjuna Flea Market", description: "Bohemian shopping experience." }
    ],
    nightlife: [
      { name: "Baga Beach", description: "Beachside clubs and bars." }
    ]
  },

  kolkata: {
    sightseeing: [
      { name: "Victoria Memorial", description: "Iconic marble building and museum." },
      { name: "Howrah Bridge", description: "Famous cantilever bridge." }
    ],
    food: [
      { name: "Park Street", description: "Known for its restaurants and nightlife." }
    ],
    history: [
      { name: "Dakshineswar Kali Temple", description: "Historic temple on the banks of the Ganges." }
    ],
    shopping: [
      { name: "New Market", description: "Popular shopping destination." }
    ],
  },

  chennai: {
    sightseeing: [
      { name: "Marina Beach", description: "One of the longest beaches in the world." },
      { name: "Kapaleeshwarar Temple", description: "Historic Hindu temple." }
    ],
    food: [
      { name: "T. Nagar", description: "Famous for South Indian cuisine." }
    ],
    history: [
      { name: "Fort St. George", description: "Historic fort and museum." }
    ],
    shopping: [
      { name: "Pondy Bazaar", description: "Popular shopping area." }
    ],
  },

  // USA
  newyork: {
    sightseeing: [
      { name: "Statue of Liberty", description: "Famous symbol of freedom." },
      { name: "Central Park", description: "Large urban park in Manhattan." }
    ],
    food: [
      { name: "Katz's Delicatessen", description: "Iconic deli for sandwiches." }
    ],
    nightlife: [
      { name: "Times Square", description: "Bright lights and theaters." }
    ],
    shopping: [
      { name: "Fifth Avenue", description: "Luxury shopping street." }
    ],
  },
  losangeles: {
    sightseeing: [
      { name: "Hollywood Sign", description: "Iconic landmark in LA Hills." },
      { name: "Santa Monica Pier", description: "Famous pier with rides & restaurants." }
    ],
    food: [
      { name: "Grand Central Market", description: "Diverse food vendors." }
    ],
    nightlife: [
      { name: "Sunset Boulevard", description: "Popular clubs and bars." }
    ],
  },
  chicago: {
    sightseeing: [
      { name: "Millennium Park", description: "Famous park with public art." },
      { name: "Willis Tower", description: "Skydeck with stunning views." }
    ],
    food: [
      { name: "Deep-Dish Pizza", description: "Chicago's famous pizza style." }
    ],
    nightlife: [
      { name: "River North", description: "Known for nightlife and bars." }
    ],
  },

  paris: {
    sightseeing: [
      { name: "Eiffel Tower", description: "World-famous iron tower." },
      { name: "Louvre Museum", description: "Largest art museum." }
    ],
    food: [
      { name: "Le Marais", description: "Trendy neighborhood with cafes." }
    ],
    history: [
      { name: "Notre-Dame Cathedral", description: "Gothic cathedral." }
    ],
    shopping: [
      { name: "Champs-Élysées", description: "Famous shopping street." }
    ],
  },
  lyon: {
    sightseeing: [
      { name: "Basilica of Notre-Dame de Fourvière", description: "Historic church with views." }
    ],
    food: [
      { name: "Les Halles de Lyon", description: "Famous food market." }
    ],
  },
  nice: {
    sightseeing: [
      { name: "Promenade des Anglais", description: "Famous waterfront walkway." },
      { name: "Castle Hill", description: "Park with panoramic views." }
    ],
    food: [
      { name: "Old Town", description: "Known for local cuisine and markets." }
    ],
  },
  tokyo: {
    sightseeing: [
      { name: "Shibuya Crossing", description: "World's busiest pedestrian crossing." },
      { name: "Tokyo Tower", description: "Communications tower & observatory." }
    ],
    food: [
      { name: "Tsukiji Market", description: "Famous fish market." }
    ],
    nightlife: [
      { name: "Roppongi", description: "Known for nightlife and clubs." }
    ],
  },
  kyoto: {
    sightseeing: [
      { name: "Fushimi Inari Shrine", description: "Famous for thousands of red torii gates." },
      { name: "Kinkaku-ji", description: "Golden Pavilion, a historic temple." }
    ],
    food: [
      { name: "Gion District", description: "Famous for traditional tea houses." }
    ],
  },
  osaka: {
    sightseeing: [
      { name: "Osaka Castle", description: "Historic castle with beautiful gardens." },
      { name: "Dotonbori", description: "Famous for street food and neon lights." }
    ],
    food: [
      { name: "Takoyaki", description: "Popular street food made of octopus." }
    ],
  }
};


const button = document.getElementById("planBtn");
const feedback = document.getElementById("feedback");
const recommendations = document.getElementById("recommendations");

function showSpinner() {
  document.getElementById("spinner").style.display = "inline-block";
}

function hideSpinner() {
  document.getElementById("spinner").style.display = "none";
}

function displayRecommendationsList(places, city, interest) {
  recommendations.innerHTML = "";

  if (!places.length) {
    recommendations.innerHTML = `
      <p>No specific recommendations found for <strong>${interest}</strong> in <strong>${capitalize(city)}</strong>.</p>
      <p>Try selecting a different interest or city!</p>`;
    return;
  }

  places.forEach(p => {
    const el = document.createElement("div");
    el.className = "place-card";
    el.innerHTML = `<div class="place-name">${p.name}</div><div>${p.description || ""}</div>`;
    recommendations.appendChild(el);
  });
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function onPlanBtnClick() {
  const city = document.getElementById("destination").value;
  const interest = document.getElementById("interest").value;

  feedback.textContent = "";
  displayRecommendationsList([], city, interest);

  if (!city) {
    feedback.textContent = "Please select a city.";
    return;
  }

  button.disabled = true;
  showSpinner();
  feedback.textContent = "Fetching recommendations...";

  setTimeout(() => {
    const places = cityData[city]?.[interest] || [];
    if (!places.length) {
      feedback.textContent = "No recommendations found for this interest.";
    } else {
      feedback.textContent = "";
    }
    displayRecommendationsList(places, city, interest);
    button.disabled = false;
    hideSpinner();
  }, 700);
}

button.addEventListener("click", onPlanBtnClick);
