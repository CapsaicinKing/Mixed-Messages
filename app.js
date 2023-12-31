const people = ['You', 'I', 'Sarah', 'Smith', 'My teacher', 'Your cat'];
const verbs = ['eat', 'buy', 'fight', 'bite', 'punch', 'scold'];
const nouns = ['me', 'pizza', 'United States', 'Pokemon', 'songs'];
const punctuations = ['!', '?', '.', '...', '!?'];
const emoticons = [':)', ':<', ':(', '-_-', 'XD', '-.-'];

const person = people[Math.floor(Math.random() * people.length)]
const verb = verbs[Math.floor(Math.random() * verbs.length)]
const noun = nouns[Math.floor(Math.random() * nouns.length)]
const punctuation = punctuations[Math.floor(Math.random() * punctuations.length)]
const emoticon = emoticons[Math.floor(Math.random() * emoticons.length)]

console.log(`${person} should ${verb} ${noun}${punctuation} ${emoticon}`);
