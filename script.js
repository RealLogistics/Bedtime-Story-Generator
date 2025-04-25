let storyPages = [];
let currentPage = 0;

document.getElementById('storyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const childName = document.getElementById('childName').value.trim();
  const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();
  const theme = document.getElementById('theme').value.trim();
  
  generateStory(childName, favoriteAnimal, theme);
});

function generateStory(name, animal, theme) {
  const forestNames = ["Whimsywood", "Starfall Grove", "Dreamlight Forest"];
  const sideCharacters = ["a wise old turtle", "a giggling squirrel", "a bashful badger", "a playful chipmunk"];
  const magicalObjects = ["a glowing feather", "a crystal berry", "a golden acorn", "a music box hidden in the roots of a tree"];
  const challenges = [
    "rescue a baby bird trapped in a bush",
    "find the path home through the mist",
    "help a sad owl remember her favorite song",
    "deliver a starlight seed before moonrise"
  ];
  const lessons = [
    "Sometimes, being small can be a big strength.",
    "Bravery isn’t about being fearless—it’s about helping others even when you’re scared.",
    "Kindness can light the darkest path.",
    "Friendship is the most magical treasure of all."
  ];

  const forest = forestNames[Math.floor(Math.random() * forestNames.length)];
  const friend = sideCharacters[Math.floor(Math.random() * sideCharacters.length)];
  const object = magicalObjects[Math.floor(Math.random() * magicalObjects.length)];
  const task = challenges[Math.floor(Math.random() * challenges.length)];
  const lesson = lessons[Math.floor(Math.random() * lessons.length)];

  const intro = `Once upon a time in the dreamy land of ${forest}, where stars twinkled even at noon, there lived a young and curious ${animal} named ${name}. ${name} was unlike any other — always full of questions, wonder, and giggles.`;
  const morning = `Each morning, ${name} would hop, trot, or scurry through meadows sprinkled with stardust, greeting bees with tiny hats and flowers that hummed lullabies. Today felt special — the wind whispered secrets and the trees rustled like they were clapping.`;
  const discovery = `While chasing a butterfly with rainbow wings, ${name} stumbled upon ${object}. As soon as it was touched, the ground gave a gentle rumble and a glowing path lit up beneath ${name}'s feet. Curious and excited, ${name} followed it.`;
  const friendScene = `Along the way, ${name} met ${friend}, who smiled warmly and said, “Only those with kind hearts can see this path. You must be here for a reason!” Together, they skipped along, laughing under cotton candy clouds.`;
  const challenge = `Suddenly, they reached a clearing wrapped in mist. There, a sign shimmered: “To pass, one must ${task}.” Though a bit nervous, ${name} took a deep breath and began the quest.`;
  const resolution = `With patience, cleverness, and courage, ${name} succeeded! The forest cheered. Leaves rustled joyfully, and stars blinked brighter than ever. The air filled with music as flowers bloomed in celebration.`;
  const reflection = `${friend} nodded wisely and said, “You’ve done something wonderful today, ${name}. And do you know what the forest teaches us?” ${name} smiled, knowing the answer: "${theme}"`;
  const finale = `As night softly wrapped the sky in navy blue, ${name} curled up on a bed of glowing moss. The moon winked down, proud and gentle. From then on, ${name} always remembered: ${lesson}`;

  storyPages = [intro, morning, discovery, friendScene, challenge, resolution, reflection, finale];
  currentPage = 0;
  renderPage();
}

function renderPage() {
  const storyPage = document.getElementById("storyPage");
  storyPage.innerHTML = `<p>${storyPages[currentPage]}</p>`;
}

function nextPage() {
  if (currentPage < storyPages.length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function downloadPDF() {
  const element = document.getElementById("storybook");
  const opt = {
    margin:       0.5,
    filename:     'bedtime-story.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}
