const testimonials = [
  {
    img: "imgs/01.webp",
    text: `If you aren't sure, always go for Touati Karim.
               I will let my mum know about this, she could really
               make use of Touati Karim !`,
    author: `- Heloise K.`,
  },
  {
    img: "imgs/02.webp",
    text: `I am so pleased with this product. It's the perfect
           solution for our business. I can't say enough about
           Touati Karim . Very easy to use.`,
    author: `- Marchall J.`,
  },
  {
    img: "imgs/03.webp",
    text: `I just can't get enough of Touati Karim . I want to
           get a T-Shirt with Touati Karim on it so I can show
           it off to everyone. I will let my mum know about this,
           she could really make use of Touati Karim !`,
    author: `- Dory P.`,
  },
  {
    img: "imgs/04.webp",
    text: `Without Touati Karim , we would have gone bankrupt by now.
           Really good. If you want real marketing that works and
           effective implementation - Touati Karim 's got you covered.`,
    author: `- Jillene Y.`,
  },
];

const imgEl = document.querySelector(".image");
const textEl = document.querySelector("#text");
const authorEl = document.querySelector("#author");

let index = 0;

function getTestimonials() {
  const { img, text, author } = testimonials[index++];
  //    console.log(img);
  //    console.log(text);
  //    console.log(author);

  //    index++;
  imgEl.src = img;
  textEl.innerText = text;
  authorEl.innerText = author;

  setTimeout(getTestimonials, 5000);

  //    console.log(index)
  if (index === testimonials.length) {
    index = 0;
  }
}

getTestimonials();
