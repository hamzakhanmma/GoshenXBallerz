export const site = {
  name: "Goshen XBallerz",
  phone: "+44 7570 598187",
  phoneHref: "tel:+447570598187",
  facebook: "https://www.facebook.com/p/Goshen-XBallerz-61590894713942/",
  location: "Leicestershire, United Kingdom",
  venue: "Brookvale Groby Learning Campus, Leicestershire",
  email: "hello@goshenxballerz.co.uk",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Coaching", to: "/coaching" },
  { label: "Player Development", to: "/player-development" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

/**
 * Photography note: these are licensed stock images used as temporary
 * editorial placeholders. They do not depict Goshen XBallerz players.
 */
export const img = {
  hero: "/img/hero.webp",
  intro: "/img/intro.webp",
  cta: "/img/cta.webp",
  team: "/img/team.webp",
  one2one: "/img/one2one.webp",
  contact: "/img/contact.webp",
  about1: "/img/about1.webp",
  about2: "/img/about2.webp",
  dev: "/img/dev.webp",
  night: "/img/night.webp",
  goal: "/img/goal.webp",
};

export type Pillar = {
  id: string;
  index: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  image: string;
  accent: string;
};

export const pillars: Pillar[] = [
  {
    id: "ball-mastery",
    index: "01",
    title: "Ball Mastery",
    short: "Close control, coordination, confidence and comfort on the ball.",
    body: "Everything starts with the ball. Ball mastery sessions build the touches, coordination and comfort that let a player express themselves instead of worrying about the ball getting away. We work on both feet, in tight areas, with repetition that turns awkward into automatic.",
    points: ["Close control in tight areas", "Both-foot confidence", "Coordination & balance", "Repetition that builds instinct"],
    image: "/img/g4.webp",
    accent: "#b8f34a",
  },
  {
    id: "technical",
    index: "02",
    title: "Technical Ability",
    short: "First touch, passing, receiving, dribbling and execution.",
    body: "Technical ability is what turns good intentions into good football. We focus on the details — the quality of the first touch, the weight of a pass, the body shape before receiving — so players can execute reliably when the game asks more of them.",
    points: ["First touch & receiving", "Passing weight & accuracy", "Dribbling & change of direction", "Striking & finishing technique"],
    image: "/img/g9.webp",
    accent: "#8ce07a",
  },
  {
    id: "game-intelligence",
    index: "03",
    title: "Game Intelligence",
    short: "Awareness, decision-making and performing under pressure.",
    body: "Football intelligence is about what a player sees and decides before the ball arrives. Through small-sided games, guided questioning and realistic pressure, players learn to scan, recognise pictures and make better decisions in real moments.",
    points: ["Scanning & awareness", "Decision-making under pressure", "Positioning & movement", "Understanding the game"],
    image: "/img/g7.webp",
    accent: "#5cc99a",
  },
  {
    id: "mindset",
    index: "04",
    title: "Mindset & Confidence",
    short: "Resilience, self-belief, discipline and a positive attitude.",
    body: "Confidence is a skill, and it grows through evidence. We help players understand mistakes as information, take ownership of their development and carry themselves with the kind of discipline and attitude that serves them long after football.",
    points: ["Resilience after setbacks", "Self-belief on the ball", "Discipline & standards", "A positive team attitude"],
    image: "/img/about2.webp",
    accent: "#b8f34a",
  },
];

export type Programme = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  cta: string;
  href: string;
};

export const programmes: Programme[] = [
  {
    id: "team-training",
    number: "01",
    title: "Team Training",
    tagline: "Develop alongside others",
    description:
      "Develop alongside others through structured football sessions designed to improve technical ability, confidence and understanding of the game.",
    features: ["Team environment", "Technical development", "Confidence building", "Football fundamentals"],
    image: img.team,
    cta: "Explore Team Training",
    href: "/coaching#team-training",
  },
  {
    id: "one-to-one",
    number: "02",
    title: "1-to-1 Development",
    tagline: "Coaching built around the player",
    description:
      "Focused individual coaching designed around the player's development needs, helping identify areas for improvement and build confidence through personalised attention.",
    features: ["Individual attention", "Personalised development", "Technical improvement", "Focused coaching"],
    image: img.one2one,
    cta: "Explore 1-to-1 Coaching",
    href: "/coaching#one-to-one",
  },
];

export const journey = [
  {
    step: "01",
    title: "Build the Foundation",
    body: "Develop fundamental ball skills, coordination and control so the player feels comfortable and confident with the ball at their feet.",
  },
  {
    step: "02",
    title: "Master the Techniques",
    body: "Improve passing, receiving, dribbling and first touch — the technical tools a player needs to influence the game.",
  },
  {
    step: "03",
    title: "Think the Game",
    body: "Develop awareness, confidence and decision-making so players recognise pictures and choose the right option under pressure.",
  },
  {
    step: "04",
    title: "Take Your Game Further",
    body: "Apply improved abilities with greater confidence and consistency, bringing technique, intelligence and mentality together.",
  },
];

export type Shot = { src: string; w: number; h: number; caption: string; cat: string; alt: string };

export const gallery: Shot[] = [
  { src: "/img/g1.webp", w: 1000, h: 1500, cat: "Individual Development", caption: "Close control work", alt: "Young footballer practising close control" },
  { src: "/img/g2.webp", w: 1500, h: 1000, cat: "Team Sessions", caption: "Training session", alt: "Junior footballers during a training session" },
  { src: "/img/g3.webp", w: 1500, h: 1000, cat: "Football Moments", caption: "Ball & cone work", alt: "Football resting on grass beside a training marker" },
  { src: "/img/g4.webp", w: 1000, h: 1500, cat: "Training", caption: "Boots on the ball", alt: "Close-up of a boot on the ball" },
  { src: "/img/g5.webp", w: 1500, h: 1125, cat: "Football Moments", caption: "Matchday light", alt: "Football on grass in daylight" },
  { src: "/img/g6.webp", w: 1500, h: 1000, cat: "Training", caption: "Session setup", alt: "Training equipment on a pitch" },
  { src: "/img/g7.webp", w: 1500, h: 1000, cat: "Team Sessions", caption: "Working as a unit", alt: "Young players in a group session" },
  { src: "/img/g8.webp", w: 1500, h: 1000, cat: "Individual Development", caption: "Sharpening the touch", alt: "Player controlling a football" },
  { src: "/img/g9.webp", w: 1500, h: 1000, cat: "Individual Development", caption: "Technical repetition", alt: "Player kicking a football at speed" },
  { src: "/img/g10.webp", w: 1500, h: 1000, cat: "Football Moments", caption: "Quiet focus", alt: "Football on a grass pitch" },
  { src: "/img/g11.webp", w: 1500, h: 1012, cat: "Team Sessions", caption: "Matchday energy", alt: "Youth footballers competing for the ball" },
  { src: "/img/g12.webp", w: 1500, h: 1000, cat: "Team Sessions", caption: "Together on the pitch", alt: "Group of young footballers on a pitch" },
  { src: "/img/g13.webp", w: 1500, h: 1000, cat: "Football Moments", caption: "Sunset football", alt: "Young players at sunset" },
  { src: "/img/g14.webp", w: 1280, h: 1920, cat: "Training", caption: "Skills in motion", alt: "Footballer showing skills" },
  { src: "/img/g15.webp", w: 1500, h: 1000, cat: "Training", caption: "Ready to learn", alt: "Young footballer on the pitch" },
];

export const galleryCats = ["All", "Training", "Individual Development", "Team Sessions", "Football Moments"];

export const values = [
  {
    title: "More than a drill",
    body: "Every session is built to develop a footballer, not to fill an hour. Skills are taught with purpose and then applied in game-realistic situations.",
  },
  {
    title: "Confidence is coached",
    body: "We create an environment where players are willing to try, fail and try again — because that is how self-belief is genuinely built.",
  },
  {
    title: "Individual progress matters",
    body: "Players develop at different speeds. We look at where each player is now and what the next realistic step looks like for them.",
  },
  {
    title: "Attitude travels",
    body: "Discipline, respect and ownership are part of the coaching, because the habits players learn on the pitch follow them everywhere.",
  },
];

export const faqs = [
  {
    q: "Who is Goshen XBallerz for?",
    a: "Young footballers in and around Leicestershire who want to develop their game — from grassroots players building fundamentals to players already in academy environments looking for focused technical work.",
  },
  {
    q: "Do you offer both team sessions and individual coaching?",
    a: "Yes. Team training develops players alongside others in a structured group environment, while 1-to-1 development gives a player focused attention on their own needs.",
  },
  {
    q: "How do I find out about session availability?",
    a: "Get in touch using the enquiry form or call +44 7570 598187. We'll talk through your player's current level and which format makes sense.",
  },
  {
    q: "What should a player bring to a session?",
    a: "Football boots or trainers suitable for the surface, shin pads, a water bottle and a ball if you have one. We'll confirm any specific requirements when you enquire.",
  },
];

export const development = [
  {
    id: "ball-mastery",
    number: "01",
    title: "Ball Mastery",
    intro: "Control the ball. Control the game.",
    body: "Ball mastery is the foundation every other skill sits on. When a player is genuinely comfortable with the ball, they stop thinking about controlling it and start thinking about what to do next.",
    skills: [
      "Touches in tight areas",
      "Both-foot control",
      "Turning & shielding",
      "Coordination and balance",
      "Rhythm and repetition",
      "Comfort under pressure",
    ],
    drill: "Foundation: 100 touches, both feet, every session.",
  },
  {
    id: "technical-ability",
    number: "02",
    title: "Technical Ability",
    intro: "Make the technique reliable.",
    body: "Technique only counts when it holds up at speed and under pressure. We build quality first touch, passing and striking mechanics, then test them in game-realistic conditions.",
    skills: [
      "First touch & receiving",
      "Passing accuracy & weight",
      "Dribbling & change of direction",
      "Striking & finishing",
      "Body shape before receiving",
      "Playing off both feet",
    ],
    drill: "Detail: the first touch sets up the next action.",
  },
  {
    id: "game-intelligence",
    number: "03",
    title: "Game Intelligence",
    intro: "See it before it happens.",
    body: "The best players are constantly collecting information. We coach scanning, positioning and decision-making through small-sided games and guided questions, so choices become faster and clearer.",
    skills: [
      "Scanning & awareness",
      "Decision-making",
      "Positioning & movement",
      "Playing under pressure",
      "Recognising pictures",
      "Game understanding",
    ],
    drill: "Habit: check your shoulder before the ball arrives.",
  },
  {
    id: "mindset",
    number: "04",
    title: "Mindset & Confidence",
    intro: "Build the player behind the player.",
    body: "Talent needs a mentality to carry it. We help players respond to mistakes, take ownership of their progress and compete with discipline and belief.",
    skills: [
      "Resilience",
      "Self-belief",
      "Discipline & standards",
      "Positive attitude",
      "Ownership of development",
      "Composure",
    ],
    drill: "Mindset: the next action is the most important one.",
  },
];
