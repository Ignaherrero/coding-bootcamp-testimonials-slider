const people = [{
   nam: 'Tanya Sinclair',
   profesion: 'UX Engineer',
   description: '"I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future."',
   img: '../images/image-tanya.jpg'
}, {
   nam: 'Jon Tarkpor',
   profesion: 'Junior Front-end Developer',
   description: '"If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
   img: '../images/image-john.jpg'
}]

const NEXT = document.getElementById('next');
const PREVIOUS = document.getElementById('previous');

let profesion = document.getElementById('profesion');
let nam = document.getElementById('nam');
let description = document.getElementById('description');
let img = document.getElementById('img');

let i = 0;

next.addEventListener('mousedown', () => {
   i += 1;
   i = i % people.length;
   profesion.textContent = people[i].profesion;
   nam.textContent = people[i].nam;
   description.textContent = people[i].description;
   img.src = people[i].img;
   profesion.replaceWith(profesion);
   nam.replaceWith(nam);
   description.replaceWith(description);
   img.replaceWith(img);
});

previous.addEventListener('mousedown', () => {
   if (i === 0) {
      i = people.length;
   }
   i -= 1;
   profesion.textContent = people[i].profesion;
   nam.textContent = people[i].nam;
   description.textContent = people[i].description;
   img.src = people[i].img;
   profesion.replaceWith(profesion);
   nam.replaceWith(nam);
   description.replaceWith(description);
   img.replaceWith(img);
});

