document.addEventListener("DOMContentLoaded", function() {
const images = [
  {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
    {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
    const gallery = document.querySelector(".gallery");

    images.forEach(image => {
        const li = document.createElement("li");
        const img = document.createElement("img");

        img.src = image.src;
        img.alt = image.alt;

        li.appendChild(img);
        gallery.appendChild(li);
    });
});

gallery.style.display = 'flex';
gallery.style.listStyle = 'none';
gallery.style.flexDirection = 'row';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '48px 24px';
gallery.style.padding = '100px 0';
gallery.style.justifyContent = 'center';

img.style.width = '360px';
img.style.height = '300px';


