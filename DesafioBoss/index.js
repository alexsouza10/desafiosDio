const myHero = "Batman"; // Hero's Name
const heroXp = 7000; // Value given to the hero's level Ranking

// Function to determine hero level using switch case
const determineLevel = (xp) => {
  let level;
  switch (true) {
    case xp < 1000:
      level = "Iron";
      break;
    case xp <= 2000:
      level = "Bronze";
      break;
    case xp <= 5000:
      level = "Silver";
      break;
    case xp <= 7000:
      level = "Gold";
      break;
    case xp <= 8000:
      level = "Platinum";
      break;
    case xp <= 9000:
      level = "Ascending";
      break;
    case xp <= 10000:
      level = "Immortal";
      break;
    default:
      level = "Radiant";
  }
  return level;
}

// Call the function to determine the level
const heroLevel = determineLevel(heroXp);

// Console output
console.log(`Hero ${myHero} is ranked at ${heroLevel}`);
