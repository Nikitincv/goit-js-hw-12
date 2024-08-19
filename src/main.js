import iziToast from 'izitoast';
import 'modern-normalize/modern-normalize.css';
import 'izitoast/dist/css/iziToast.min.css';



import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
const form = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery');

let maxPage = 0;
let currentPage = 1;
let currentQuerry = '';

form.addEventListener('submit', formSubmit);
async function formSubmit(evt) {
  evt.preventDefault();

  gallery.innerHTML = '';

  const { search } = evt.currentTarget.elements;
  currentQuerry = search.value.trim();
  currentPage = 1;
  if (currentQuerry === '') {
    return iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  loader.classList.remove('isheaden');
try {
  const data = await getPhotos(currentQuerry, currentPage)
    if (data.hits.length === 0) {
      loadMore.classList.add('isheaden')
      return iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    createMarkup(data.hits);
    smuthScroll();
    maxPage = Math.ceil(data.totalHits / 15)
    form.reset();
  if (data.totalHits > 15) {
    // const lastElement = gallery.lastElementChild
    loadMore.classList.remove('isheaden');
    // obServer.observe(lastElement)
  }
  
} catch (error) {
  
    iziToast.error({ position: 'topRight', message: error.message })
  
} finally {
  loader.classList.add('isheaden');
}

   
   
}

loadMore.addEventListener("click", onLoadMore)
// const obServer = new IntersectionObserver(gard, {threshold:0.3})
// function gard (entries, obServer) {
//   entries.forEach(element => {
//     if (element.isIntersecting) {
//       obServer.unobserve(element.target)
//       onLoadMore()
//     }
//   });
// }

async function onLoadMore () {

  loader.classList.remove('isheaden');
  currentPage += 1;
try {
  const data = await getPhotos(currentQuerry, currentPage)
  createMarkup(data.hits);
  // const lastElement = gallery.lastElementChild
  // if (lastElement) {
    
    // obServer.observe(lastElement)
  // }
  smuthScroll ()
    if (maxPage === currentPage) {
      loadMore.classList.add('isheaden');
      // obServer.unobserve(lastElement)
      return iziToast.warning({
        message:
        "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

 
  
} catch (error) {
  
    iziToast.error({ position: 'topRight', message: error.message })
  
} finally {
  loader.classList.add('isheaden');
}


}



function smuthScroll () {
const  {height} = gallery.firstElementChild.getBoundingClientRect()
console.log(height);
window.scrollBy({
  top: height * 2,
  behavior: "smooth",
});
}

