// Corporate Dressing

import corporate1 from "../assets/img/corporate/1.jpg";
import corporate2 from "../assets/img/corporate/2.jpg";
import corporate3 from "../assets/img/corporate/3.jpg";

// Trads

import trad1 from "../assets/img/Traditional/1.jpg";
import trad2 from "../assets/img/Traditional/2.jpg";
import trad3 from "../assets/img/Traditional/3.jpg";
import trad4 from "../assets/img/Traditional/4.jpg";

// Beach

import beach1 from "../assets/img/beach/beach1.jpg";
import beach2 from "../assets/img/beach/beach2.jpg";

// Graduation

import graduation1 from "../assets/img/graduation/graduation1.jpg";
import graduation2 from "../assets/img/graduation/graduation2.jpg";
import graduation3 from "../assets/img/graduation/graduation3.jpg";

// Throwbacks

import throwback1 from "../assets/img/throwbacks/throwback1.jpg";
import throwback2 from "../assets/img/throwbacks/throwback2.jpg";
import throwback4 from "../assets/img/throwbacks/throwback4.jpg";
import throwback5 from "../assets/img/throwbacks/throwback5.jpg";

// Randoms

import random1 from "../assets/img/randoms/random1.jpg";
import random2 from "../assets/img/randoms/random2.jpg";
import random3 from "../assets/img/randoms/random3.jpg";
import random4 from "../assets/img/randoms/random4.jpg";

const photos = [
	{ id: 1, category: "corporate", image: corporate1 },
	{ id: 2, category: "corporate", image: corporate2 },
	{ id: 3, category: "corporate", image: corporate3 },
	{ id: 4, category: "traditional", image: trad1 },
	{ id: 5, category: "traditional", image: trad2 },
	{ id: 6, category: "traditional", image: trad3 },
	{ id: 7, category: "traditional", image: trad4 },
	{ id: 8, category: "beach", image: beach1 },
	{ id: 9, category: "beach", image: beach2 },
	{ id: 10, category: "graduation", image: graduation1 },
	{ id: 11, category: "graduation", image: graduation2 },
	{ id: 12, category: "graduation", image: graduation3 },
	{ id: 13, category: "throwback", image: throwback1 },
	{ id: 14, category: "throwback", image: throwback2 },
	{ id: 16, category: "throwback", image: throwback4 },
	{ id: 17, category: "throwback", image: throwback5 },
	{ id: 18, category: "random", image: random1 },
	{ id: 19, category: "random", image: random2 },
	{ id: 20, category: "random", image: random3 },
	{ id: 21, category: "random", image: random4 },
];

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

// Export shuffled photos
export default shuffleArray([...photos]);
