/* ================================================================
   ANIMAL DATA — every answer checked against real wildlife facts.
   q = question button, a = spoken answer, r = "Ranger Note" footer
   ================================================================ */
const ANIMALS = {
  cheetah: {
    name: 'Chika the Cheetah', emoji: '\u{1F406}', sub: 'Fastest animal on land',
    voice: { gender: 'female', idx: 0, pitch: 1.25, rate: 1.15 },
    greeting: "Hi there, speedy friend! I'm Chika the cheetah — the FASTEST runner on planet Earth! Nobody on land can catch me. What would you like to know?",
    questions: [
      { q: 'How fast can you run?', a: "Hold on to your hat! I can go from standing still to 60 miles per hour in about 3 seconds — that's faster than most sports cars! My top speed is around 70 miles per hour. But here's my secret: I can only sprint like that for about 20 or 30 seconds before I need a big rest.", r: 'Fastest land animal in the world!' },
      { q: 'Why do you have spots?', a: "My spots are camouflage! When I crouch in the tall golden grass, my spotted coat makes me almost invisible. Every cheetah has around 2,000 spots, and no two cheetahs have exactly the same pattern — my spots are like my fingerprint!", r: 'About 2,000 spots per cheetah' },
      { q: 'What are those lines on your face?', a: "Great eyes! Those black lines running from my eyes down to my mouth are called tear marks. They work just like the black stripes football players paint under their eyes — they soak up the bright sunlight so I can see far across the sunny savanna without squinting!", r: 'Tear marks = built-in sunglasses' },
      { q: 'Can you roar like a lion?', a: "Nope! Here's a surprise — I can't roar at all! Big cats like lions can roar, but I'm built differently. Instead, I chirp like a bird, and when I'm happy... I purr, just like a house cat! Chirp chirp!", r: 'Cheetahs chirp and purr — no roaring' },
      { q: 'What do you eat?', a: "I'm a carnivore, which means I eat meat. My favorite meal is a speedy gazelle. I hunt during the day when other big hunters are sleeping — I spot my dinner from a termite mound, sneak as close as I can, and then... ZOOM! The chase is on!", r: 'Daytime hunter — most big cats hunt at night' },
      { q: 'Tell me a fun fact!', a: "My claws work like the spikes on a runner's track shoes! Most cats can pull their claws all the way in, but mine stay partly out to grip the ground when I run. And my long tail? It's my steering wheel — I swing it to make super sharp turns at top speed!", r: 'The tail works like a rudder for turning' },
    ],
  },
  lion: {
    name: 'Leo the Lion', emoji: '\u{1F981}', sub: 'King of the savanna',
    voice: { gender: 'male', idx: 1, pitch: 0.65, rate: 0.88 },
    greeting: "ROARRR! Welcome to my pride lands, little explorer! I'm Leo the lion. Some call me the king of beasts. Come, ask me anything — a king always has time for curious visitors!",
    questions: [
      { q: 'How loud is your roar?', a: "My roar is the loudest of any big cat — you can hear it from 5 miles away! That's like roaring on one side of town and being heard on the other side. I roar to tell other lions 'this is MY home' and to call my family together. ROARRR!", r: 'A lion roar can be heard 5 miles away' },
      { q: 'Why do you have a mane?', a: "My big fluffy mane makes me look large and mighty! Only boy lions grow manes. A big, dark mane tells everyone I'm strong and healthy, and it also protects my neck like a furry shield. Think of it as my crown!", r: 'Only male lions grow manes' },
      { q: 'Who is in your family?', a: "Here's what makes me special: I'm the ONLY big cat that lives in a big family group! It's called a pride, and mine has lionesses, playful cubs, and me. The lionesses are amazing hunters and moms. We nap together, play together, and look out for each other.", r: 'A lion family is called a pride' },
      { q: 'Do you really sleep all day?', a: "Ha! You caught me. I sleep or rest up to 20 hours a day! It's not because I'm lazy — hunting takes a LOT of energy, and it's hot out here on the savanna. So we lions save our strength and do most of our work when it's cool. Napping is serious royal business!", r: 'Lions rest up to 20 hours a day' },
      { q: 'Are you king of the jungle?', a: "People call me that, but here's a funny secret: I don't live in the jungle at all! I live here on the savanna — wide open grassland with just a few trees. So really, I'm the King of the Savanna. But don't worry, the crown still fits!", r: 'Lions live in grasslands, not jungles' },
      { q: 'Who does the hunting?', a: "In my pride, the lionesses are the star hunters! They work together as a team, like players in a big game — some chase, and some wait to surprise the prey. Teamwork makes them super successful. My job is to protect the whole pride and our land from danger.", r: 'Lionesses hunt as a team' },
    ],
  },
  elephant: {
    name: 'Ellie the Elephant', emoji: '\u{1F418}', sub: 'Largest animal on land',
    voice: { gender: 'female', idx: 1, pitch: 0.8, rate: 0.85 },
    greeting: "Hellooo down there, little one! I'm Ellie the elephant — the biggest animal that walks the Earth! Don't be shy. Come stand by my big front leg and ask me anything you like!",
    questions: [
      { q: 'How big are you?', a: "I'm the largest land animal in the whole world! A grown-up African elephant like me can weigh as much as 6 tons — that's about as heavy as 4 cars stacked together! And I can grow taller than a basketball hoop. Even so, I walk on tip-toes — there's a squishy pad in my feet like built-in sneakers!", r: 'African elephants can weigh 6 tons' },
      { q: "What's your trunk for?", a: "My trunk is the coolest tool in the animal kingdom! It has about 40,000 muscles — your whole body has around 600! I use it to breathe, smell, drink, hug my family, rip up grass, give myself dust baths, and even snorkel when I swim. It's strong enough to lift a log but gentle enough to pick up one tiny berry.", r: 'A trunk has ~40,000 muscles' },
      { q: 'Why are your ears so big?', a: "My giant ears are my air conditioners! On hot days I flap them like big fans, and the breeze cools the blood flowing through my ears — which cools my whole body down. And here's something amazing: African elephant ears are shaped almost like the continent of Africa!", r: 'Ear-flapping cools an elephant down' },
      { q: 'Who leads your herd?', a: "Grandma does! Elephant herds are led by the oldest, wisest female — she's called the matriarch. She remembers where to find water even in the driest years, because elephants have incredible memories. Our herd is full of moms, aunties, sisters, and babies who all help raise each other.", r: 'The matriarch (grandma) leads the herd' },
      { q: 'What do you eat?', a: "I'm a plant-eating machine! Grass, leaves, bark, fruit — I munch for up to 16 hours a day and can eat around 300 pounds of food! That's like eating 1,200 peanut butter sandwiches every single day. All that eating helps the savanna too — I spread seeds everywhere I go.", r: 'Elephants eat ~300 lbs of plants a day' },
      { q: 'Tell me a fun fact!', a: "I can talk to elephants miles away using a secret rumble so low and deep that human ears can't even hear it! The rumbles travel through the air and the ground, and other elephants feel them through their feet. It's like sending messages through the earth itself!", r: 'Elephants send secret low rumbles' },
    ],
  },
  crocodile: {
    name: 'Snap the Crocodile', emoji: '\u{1F40A}', sub: 'Ancient river hunter',
    voice: { gender: 'male', idx: 2, pitch: 0.6, rate: 0.82 },
    greeting: "Wellll, hello there, land-walker... I'm Snap, the Nile crocodile. Don't worry — I just ate. Heh heh. My family has been around since the time of the dinosaurs. Ask me anything... if you dare!",
    questions: [
      { q: 'Did you really live with dinosaurs?', a: "My ancestors sure did! Crocodiles have been on Earth for about 200 million years — we swam in rivers while T-rex stomped around on land! The dinosaurs disappeared, but crocs survived. That's why some people call us living fossils. We found a body plan that works and kept it!", r: 'Crocs outlived the dinosaurs' },
      { q: 'How strong is your bite?', a: "My bite is the strongest of any animal alive today — my jaws slam shut with more crushing power than a lion, a shark, or a bear! But here's the funny part: the muscles that OPEN my mouth are weak. And I can't chew at all — I just swallow my food in big gulps!", r: 'Strongest bite force of any living animal' },
      { q: 'Why do you lie so still?', a: "Patience is my superpower! I float like a log with just my eyes and nose above the water — sometimes for hours. Animals come to the river for a drink and never even notice me... until SNAP! I'm also cold-blooded, so lying in the sun is how I warm up my body, like charging a battery.", r: 'Crocs sunbathe to warm their bodies' },
      { q: 'Can you hold your breath?', a: "I'm the champion of holding my breath! I can stay underwater for about an hour when I'm resting. Special flaps close over my nostrils and throat, and I even have a see-through third eyelid — like built-in swim goggles — so I can see underwater!", r: 'Crocs have see-through third eyelids' },
      { q: 'Are you a good parent?', a: "You might not believe it, but I'm one of the gentlest parents in the reptile world! A croc mom guards her nest for about three months. When the babies hatch, they squeak, and she scoops them up in the same giant jaws that crush bones — and carries them to the water as gently as you'd carry a kitten.", r: 'Croc moms carry babies in their mouths' },
      { q: 'Tell me a fun fact!', a: "I grow new teeth my whole life! When one of my 60-plus teeth wears out or falls out, another one grows in its place — a crocodile can go through 3,000 teeth in a lifetime! Imagine if the tooth fairy had to visit 3,000 times!", r: 'Up to 3,000 teeth in a lifetime' },
    ],
  },
  monkey: {
    name: 'Miko the Monkey', emoji: '\u{1F412}', sub: 'Cheeky vervet acrobat',
    voice: { gender: 'male', idx: 3, pitch: 1.4, rate: 1.18 },
    greeting: "Ooh-ooh-ah-ah! Up here! I'm Miko the vervet monkey — the cheekiest, bounciest acrobat in the whole safari! Come on, ask me something before I swing away!",
    questions: [
      { q: 'Can monkeys really talk?', a: "We vervet monkeys have something like words! We have a special alarm call for EAGLE that makes everyone dive out of the treetops, a different call for SNAKE that makes everyone stand tall and look at the ground, and another one for LEOPARD that sends us racing up the trees. Scientists were amazed — it's one of the closest things to language in the animal world!", r: 'Vervets use different calls for different dangers' },
      { q: 'What do you eat?', a: "A little of everything! Fruit, flowers, leaves, seeds, and crunchy insects — yum! And check this out: I have stretchy cheek pouches like built-in lunch boxes. I can stuff them full of food, scamper somewhere safe, and snack later!", r: 'Cheek pouches work like lunch boxes' },
      { q: 'Who is in your family?', a: "I live in a big noisy family group called a troop — moms, dads, aunties, and heaps of baby monkeys! We groom each other's fur to say 'you're my friend,' babysit each other's little ones, and play chase in the branches all day long. It's never boring in a monkey troop!", r: 'A monkey group is called a troop' },
      { q: 'How high can you jump?', a: "I'm a champion leaper! I can fling myself several meters from branch to branch — my long tail stretches out behind me like a tightrope-walker's pole to keep me balanced. My tail can't grab branches like a South American monkey's can, but for balance, it's perfect!", r: 'The tail is for balance, not grabbing' },
      { q: 'Why do you groom your friends?', a: "Grooming is how monkeys say 'I like you!' We pick tiny bits of dust and bugs out of each other's fur. It keeps us clean, but the real reason is friendship — it's like giving your best friend a high five and a hug at the same time. The more friends groom you, the more popular you are!", r: 'Grooming = monkey friendship' },
      { q: 'Tell me a fun fact!', a: "Baby vervets ride on their mom's tummy like a little backpack worn backwards! And young monkeys love to play — we wrestle, chase, and even tease sleepy old crocodiles by yanking their tails. Okay, okay... maybe don't try that one!", r: 'Play helps young monkeys learn skills' },
    ],
  },
  giraffe: {
    name: 'Stretch the Giraffe', emoji: '\u{1F992}', sub: 'Tallest animal in the world',
    voice: { gender: 'female', idx: 2, pitch: 1.05, rate: 0.92 },
    greeting: "Hello waaaay down there! I'm Stretch the giraffe — the tallest animal on Earth! From up here I can see the whole savanna. Ask me anything, little friend!",
    questions: [
      { q: 'How tall are you?', a: "I'm the tallest animal in the whole world! A grown-up giraffe can be 18 feet tall — that's taller than a two-story house! My neck alone is about 6 feet long. I can peek over treetops and spot a lion coming from super far away. Up here, I'm the savanna's watchtower!", r: 'Tallest animal on Earth — up to 18 ft' },
      { q: 'How many bones are in your neck?', a: "Get ready for a surprise... my incredibly long neck has just SEVEN neck bones — the exact same number as YOU! The difference is that each of my neck bones is huge — almost as long as your whole arm. Same blueprint, giraffe-sized pieces!", r: 'Giraffes & humans both have 7 neck bones' },
      { q: "What's with your long tongue?", a: "My tongue is amazing! It's about 20 inches long — longer than a school ruler — and it's dark bluish-purple! The dark color works like sunscreen so it doesn't get sunburned while I eat all day. I use it like a hand to grab leaves and slurp them right off thorny acacia branches without getting poked!", r: 'A 20-inch tongue with built-in sunscreen' },
      { q: 'How do you sleep?', a: "Very carefully! I only sleep around 30 minutes to 2 hours a day, mostly in tiny power naps while standing up! Lying down and standing back up takes time, and I need to be ready to run if a lion sneaks close. I'm one of the lightest sleepers in the animal kingdom.", r: 'Giraffes sleep less than almost any animal' },
      { q: 'Are your spots special?', a: "Every giraffe's coat pattern is one of a kind — no two giraffes have the same patches, just like no two people have the same fingerprints! My patches also help me hide among the trees, and scientists think the skin around them even helps me stay cool.", r: 'Every giraffe pattern is unique' },
      { q: 'Tell me a fun fact!', a: "When a baby giraffe is born, it drops about 6 feet to the ground — and that wake-up bump is totally fine! Within an hour, the calf is standing and can even run! And can you believe a newborn giraffe is already 6 feet tall? A baby that's taller than most grown-up humans!", r: 'Newborn giraffes stand within an hour' },
    ],
  },
  zebra: {
    name: 'Zuri the Zebra', emoji: '\u{1F993}', sub: 'Striped speedster of the plains',
    voice: { gender: 'female', idx: 3, pitch: 1.15, rate: 1.05 },
    greeting: "Hey hey, stripey greetings! I'm Zuri the zebra! Have you ever seen a horse in pajamas? Ta-da — that's me! Go ahead, ask me anything!",
    questions: [
      { q: 'Why do you have stripes?', a: "My stripes are full of tricks! When my whole herd runs together, all those moving stripes blur into a dizzy swirl that makes it hard for a lion to pick out just one zebra. And here's the newest discovery: stripes confuse biting flies too — they can't land on me properly! Stylish AND useful!", r: 'Stripes confuse predators AND flies' },
      { q: 'Are your stripes unique?', a: "Yes! No two zebras in the whole world have the same stripe pattern — mine is like my fingerprint! Baby zebras memorize their mom's special pattern, her smell, and her voice, so they can find her in a giant crowd of stripes. And guess what's under all this stripey fur? Black skin!", r: 'Every stripe pattern is one of a kind' },
      { q: 'How fast can you run?', a: "I can gallop about 40 miles per hour — fast enough to outrun a lion over a long chase! I also zig-zag from side to side to be extra hard to catch. And zebra foals are born ready: a baby zebra can stand in minutes and run with the herd within an hour!", r: 'Zebra foals run within an hour of birth' },
      { q: 'Who are your friends?', a: "I live in a family herd, and a big group of zebras has the best name ever — it's called a DAZZLE! We also love traveling with wildebeest. They're great pals: more eyes and ears to spot danger, and we don't fight over food because we like different parts of the same grass!", r: 'A group of zebras is called a dazzle' },
      { q: 'Do you sleep standing up?', a: "I sure can! My legs have a special locking trick that lets me doze standing up, ready to zoom away in a blink. But when the herd is together and lookouts are on duty, I'll lie down for a real snooze. We take turns keeping watch — herd teamwork!", r: 'Zebras can sleep standing up' },
      { q: 'Are you a horse?', a: "We're cousins! Zebras, horses, and donkeys are all in the same family. But zebras have never been tamed like horses — we're too wild and feisty for saddles! Our ancestors have galloped across Africa for millions of years, and we like it that way. Wild and free!", r: 'Zebras are wild cousins of horses' },
    ],
  },
  wildebeest: {
    name: 'Gnu the Wildebeest', emoji: '\u{1F403}', sub: 'Marathon champion of Africa',
    voice: { gender: 'male', idx: 4, pitch: 0.85, rate: 0.95 },
    greeting: "Hnnn-hello, young traveler! I'm Gnu the wildebeest — say it like 'new'! I may look a bit funny, but I'm part of the greatest animal journey on planet Earth. Ask away!",
    questions: [
      { q: 'What is the Great Migration?', a: "It's the biggest animal parade on Earth — and I'm in it! More than a MILLION wildebeest, plus hundreds of thousands of zebras and gazelles, march in a giant circle up to 1,000 miles long every year, following the rains to find fresh green grass. From space, our herds look like giant moving rivers!", r: 'Over a million animals migrate together' },
      { q: 'Why do you look so funny?', a: "Ha! People joke that I was built from spare parts — a cow's horns, a horse's tail, and a goat's beard! My name even means 'wild beast.' But every part works: strong shoulders for marathon walking, tough hooves for rocky ground, and horns for protection. I'm not funny-looking... I'm custom-built!", r: "'Gnu' is the wildebeest's other name" },
      { q: 'How fast can baby wildebeest run?', a: "This is our most amazing trick: a baby wildebeest stands up just minutes after being born and can RUN with the herd within a day! They're some of the quickest learners in the animal kingdom. Almost all our calves are born in the same few weeks — thousands of babies all at once!", r: 'Calves run with the herd on day one' },
      { q: 'Why travel with zebras?', a: "Zebras are our best travel buddies! They eat the tall tough grass on top, and we eat the short soft grass underneath — so there's plenty for everyone. Zebras have great eyes, we have a great sense of smell and hearing, so together we're an all-star danger-spotting team!", r: 'Zebras & wildebeest share the grass buffet' },
      { q: "What's the scariest part of the journey?", a: "The river crossings! To follow the fresh grass, our herds have to swim across rivers where crocodiles wait quietly. It's the bravest thing we do. We gather at the edge, hearts pounding, and then charge across all together — there's safety in numbers. It takes a lot of courage to be a wildebeest!", r: 'Herds cross croc-filled rivers together' },
      { q: 'Tell me a fun fact!', a: "Wildebeest are the lawnmowers of the savanna! Our millions of munching mouths keep the grass short and healthy, our hooves press seeds into the soil, and our plops fertilize everything. The whole savanna depends on our great journey. Not bad for a funny-looking fellow, hnnn?", r: 'Migration keeps the whole savanna healthy' },
    ],
  },
  tiger: {
    name: 'Raja the Tiger', emoji: '\u{1F405}', sub: 'Biggest cat in the world — visiting from Asia!',
    voice: { gender: 'male', idx: 0, pitch: 0.72, rate: 0.9 },
    greeting: "Greetings, young explorer. I'm Raja the tiger — the biggest cat in the entire world. I'm a special visitor here at the safari park, because wild tigers actually live far away in Asia. Come closer... I don't bite. Much. Just kidding! Ask me anything!",
    questions: [
      { q: 'Do tigers live in Africa?', a: "Great question — and here's the surprise: NO! Wild tigers don't live in Africa at all. We live in Asia — in the steamy jungles of India, the forests of Sumatra, and even the snowy woods of Russia! I'm here at the safari park as a special guest so you can meet me. Lions live in Africa; tigers rule Asia!", r: 'Wild tigers live in Asia, not Africa' },
      { q: 'Are you bigger than a lion?', a: "I am indeed! Tigers are the biggest cats on Earth. A big male Siberian tiger can weigh over 600 pounds and stretch 10 feet from nose to tail — that's longer than your bed! Lions are mighty, but on the scales, tigers take the crown.", r: 'Tigers are the largest cats on Earth' },
      { q: 'Why do you have stripes?', a: "My stripes slice up my shape in the shadowy jungle so deer can't see me sneaking... sneaking... pounce! Every tiger's stripes are unique, like your fingerprints. And here's the wildest part: if you shaved a tiger — please don't! — you'd find the SAME stripes printed on the skin underneath!", r: 'Tiger skin is striped under the fur' },
      { q: 'Do you like to swim?', a: "I LOVE swimming — and that makes me weird for a cat! Most cats hate getting wet, but on hot jungle days I lie right down in rivers and pools to cool off. I can swim across wide rivers, several miles if I need to. I'm basically a giant striped fish. Okay, not really. But close!", r: 'Tigers are powerful swimmers' },
      { q: 'Do you live in a pride like lions?', a: "No — I'm a lone ranger! Lions live in big family prides, but tigers mostly live and hunt alone. Each tiger has its own territory, marked with scratches and smells that say 'Raja was here!' A tiger mom raises her cubs by herself and teaches them everything for about two years.", r: 'Tigers live alone; lions live in prides' },
      { q: 'Tell me a fun fact!', a: "My night vision is about SIX TIMES better than yours — moonlight is all I need for my midnight patrols! And listen for the white spots on the backs of my ears; scientists think cubs follow them like little flags in the dark jungle. Tigers even have a special word with each other — a friendly puffing sound called a chuff. Chuff chuff — that means I like you!", r: "A tiger's friendly hello is a 'chuff'" },
    ],
  },
  rhino: {
    name: 'Rocky the Rhino', emoji: '\u{1F98F}', sub: 'Armored gentle giant',
    voice: { gender: 'male', idx: 1, pitch: 0.68, rate: 0.85 },
    greeting: "Hrrmph! Oh! Hello there, small human. I'm Rocky the white rhinoceros. I may look like a tank, but I'm really just a big grass-munching softie. What would you like to know?",
    questions: [
      { q: 'What is your horn made of?', a: "Would you believe... the same stuff as your FINGERNAILS? It's called keratin! My horn isn't bone at all — it's like one giant, super-packed fingernail, and it keeps growing my whole life. I use it to dig for water, guide my calf, and stand up to lions. No trimming needed!", r: 'Rhino horns are keratin, like fingernails' },
      { q: 'Why are you called a WHITE rhino?', a: "It's the silliest mix-up in safari history! I'm actually gray, not white. Long ago, Dutch settlers described my 'wijde' mouth — 'wijde' means WIDE — and English speakers heard 'white'! The name stuck. My wide, square lips are perfect for mowing grass like a lawnmower.", r: "'White' was a mix-up of 'wide' (mouth)" },
      { q: 'How big and fast are you?', a: "I'm the second-biggest land animal after the elephant — I can weigh over 2 tons, as much as a big truck! And surprise: this tank has TURBO. I can charge at 25 to 30 miles per hour — much faster than the fastest human sprinter. Never challenge a rhino to a race!", r: '2+ tons, yet faster than any human' },
      { q: 'Can you see well?', a: "Honestly? Not great. If you stood very still far away, I might mistake you for a bush! But my ears swivel around like satellite dishes to catch every sound, and my sense of smell is fantastic — I smell who walked by hours ago. I mostly explore the world nose-first!", r: 'Weak eyes, super ears and nose' },
      { q: 'Who is your little bird friend?', a: "That's the oxpecker — my tiny backpack buddy! It rides around on my back eating ticks and pesky bugs off my skin. Free snacks for the bird, free bug removal for me! Even better, when danger sneaks close, the oxpecker screeches an alarm. Its African name means 'the rhino's guard'!", r: 'Oxpecker birds are rhino bodyguards' },
      { q: 'Why do rhinos need our help?', a: "Because some people take rhino horns, there aren't many of us left in the wild — we're endangered. But here's the hopeful part: rangers guard us day and night, and kids who learn about rhinos grow up to protect us. Just by meeting me today, you're becoming a rhino protector. Thank you, little ranger!", r: 'Learning about rhinos helps protect them' },
    ],
  },
  hippo: {
    name: 'Hazel the Hippo', emoji: '\u{1F99B}', sub: 'River queen',
    voice: { gender: 'female', idx: 4, pitch: 0.9, rate: 0.88 },
    greeting: "Mwah-ha-hooo! Hello, sweetie! I'm Hazel the hippopotamus, queen of this river pool. My name means 'river horse,' but between you and me, I'm much more fabulous than any horse. Ask me anything!",
    questions: [
      { q: 'Can hippos swim?', a: "Here's my favorite secret: I can't really swim! I'm too heavy to float. Instead, I trot along the river bottom and push off in big graceful moon-bounces — boing, boing! I can hold my breath for around 5 minutes, and my ears and nostrils fold shut like little submarine hatches!", r: 'Hippos bounce along the bottom — no swimming!' },
      { q: 'Why do you stay in the water all day?', a: "Because my skin needs it! Hippo skin dries out fast in the hot African sun, so I soak all day like it's a giant spa. My eyes, ears, and nose sit right on top of my head, so I can see, hear, and breathe while the rest of me stays hidden underwater like a chubby periscope!", r: 'Water keeps hippo skin from drying out' },
      { q: 'Is it true you make your own sunscreen?', a: "Yes! I ooze a special reddish liquid that works as sunscreen AND germ-fighter all in one. Long ago, people saw the red shine and thought hippos sweat blood — eww, and also wrong! It's my own custom skin-care potion. Fabulous, right?", r: 'Hippos make natural red sunscreen' },
      { q: 'How big is your mouth?', a: "Enormous! I can open my mouth almost 4 feet wide — big enough to fit a whole beach ball! I open wide to show my giant teeth; that's hippo language for 'I'm the boss of this pool.' My longest teeth never stop growing and can reach the length of your arm!", r: 'A hippo yawn can fit a beach ball' },
      { q: 'What do you eat?', a: "You'd think a mouth this big eats fish — nope! I'm a grass girl. Every night I climb out of the river and stroll miles along my own hippo highways, munching around 80 pounds of grass under the stars. Then it's back to the pool before the sun gets hot. Night picnics every night!", r: 'Hippos graze grass all night long' },
      { q: 'Who are your relatives?', a: "Ready for the biggest surprise on the safari? My closest living relatives are... WHALES and DOLPHINS! Millions of years ago, we shared water-loving ancestors. So when I bounce through the river, I'm basically doing my best whale impression. We even talk with honks and rumbles both above AND under the water!", r: 'Hippos are cousins of whales & dolphins' },
    ],
  },
  meerkat: {
    name: 'Pip the Meerkat', emoji: '\u{1F9A6}', sub: 'Lookout of the Kalahari',
    voice: { gender: 'female', idx: 5, pitch: 1.45, rate: 1.2 },
    greeting: "Peep peep! Down here! I'm Pip the meerkat, chief lookout of my mob! I'm standing extra tall today — well, as tall as a ruler can stand. Quick, ask me something before my sentry shift starts!",
    questions: [
      { q: 'Why do you stand up like that?', a: "I'm on guard duty! Meerkats take turns standing tall as the sentry — the lookout — while everyone else digs and snacks. If I spot an eagle or a jackal, I sound the alarm and the whole mob dives into our burrows in seconds! We even use different calls for danger in the sky and danger on the ground. My tail props me up like a kickstand!", r: 'Meerkats take turns as lookouts' },
      { q: 'What are those dark rings around your eyes?', a: "My built-in sunglasses! These black patches soak up the blazing desert sunshine, so I can stare into the bright sky and spot an eagle from super far away. Football players copied our trick with those black stripes under their eyes — meerkats did it first!", r: 'Eye patches cut the desert glare' },
      { q: 'Do you really eat scorpions?', a: "Crunchy and delicious! Meerkats are famous scorpion-hunters — we're tough against some venom, and we know the trick: bite off the stinger first! Grown-ups even run a scorpion school for pups: first we bring them a stinger-free scorpion to practice on, then a live one when they're ready. Yes, we have homework — it's just crunchier than yours!", r: 'Meerkat grown-ups run scorpion school' },
      { q: 'Where do you live?', a: "In an underground castle! My family digs huge burrows with dozens of doorways and cozy sleeping rooms. It stays cool down there when the desert sizzles and warm when nights get cold. At bedtime, the whole mob piles into one furry heap — the world's snuggliest sleepover, every night!", r: 'Burrows have dozens of entrances' },
      { q: 'Who is in your mob?', a: "A meerkat family is called a mob or a gang, and mine has about 20 relatives! We do everything as a team: some babysit the pups, some dig, some hunt, and one lucky meerkat — me! — stands guard. Babysitters even stay home from breakfast to watch the little ones. Teamwork makes the mob work!", r: 'A meerkat family is called a mob' },
      { q: 'Tell me a fun fact!', a: "I'm a digging machine! I have see-through third eyelids that work like goggles, ears that fold shut so sand stays out, and claws like little shovels. A meerkat can dig its own weight in sand in just seconds. If there were a Desert Olympics, meerkats would win every digging medal!", r: 'Ears that close = no sand inside!' },
    ],
  },
};

if (typeof module !== 'undefined') module.exports = ANIMALS;
