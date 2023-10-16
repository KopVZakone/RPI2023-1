const h_sliderline = document.querySelector('.home-slider-line');
const h_slidernext = document.querySelector('.home-slider-next');
const h_sliderprev = document.querySelector('.home-slider-prev');
const h_slides = Array.from(h_sliderline.querySelectorAll('img'));
const h_slidescount = h_slides.length;
const h_numbersline = document.querySelector('.home-numbers-line');
const h_numbers = Array.from(h_numbersline.querySelectorAll('p'));
const h_nymbercount = h_numbers.length;
let h_scrolloffset = 3;

h_slidernext.addEventListener('click', h_ShowNextSlide);
h_sliderprev.addEventListener('click', h_ShowPrevSlide);

function h_ShowNextSlide(){
    h_scrolloffset++;
    h_UpdateSlider();
};
function h_ShowPrevSlide(){
    h_scrolloffset--;
    h_UpdateSlider();
};
function h_UpdateSlider(){
    h_sliderline.style.right = h_scrolloffset*1444+'px';
    h_numbersline.style.right = (h_scrolloffset-1)*40+'px';
    h_numbers.forEach((number, index) => { 
        if(index == h_scrolloffset){
            number.style.fontSize = '100px';
            number.style.margin = '0px 30px 20px 0px';
            number.style.height = '100px';
        }else{
            number.style.fontSize = '30px';
            number.style.margin = '0px 30px 20px 0px';
            number.style.height = '30px';
        }
    });
    if (h_scrolloffset==0){
        h_sliderprev.hidden = true;
    }else
    {
        h_sliderprev.hidden = false;
    }
    if (h_scrolloffset==h_slidescount-1){
        h_slidernext.hidden = true;
    }else
    {
        h_slidernext.hidden = false;
    }
};

const m_sliderline = document.querySelector('.m-slider-line');
const m_slidernext = document.querySelector('.m-slider-next');
const m_sliderprev = document.querySelector('.m-slider-prev');
const m_slides = Array.from(m_sliderline.querySelectorAll('.m-slider-item'));
const m_slidescount = m_slides.length;
const m_captionsline = document.querySelector('.m-captions-line');
const m_captionscount =m_captionsline.length;
const m_radios = Array.from(document.querySelector('.m-slider-radios').querySelectorAll('input'));
const m_radioscount = m_radios.length;
let m_scrolloffset = 0;

m_radios.forEach((radio) => { 
    radio.addEventListener('click', m_ShowExactSlide);
});    
m_slidernext.addEventListener('click', m_ShowNextSlide);
m_sliderprev.addEventListener('click', m_ShowPrevSlide);

function m_ShowExactSlide(){
    m_scrolloffset = this.value;
    m_UpdateSlider(); 
}
function m_ShowNextSlide(){
    m_scrolloffset++;
    m_UpdateSlider();
};
function m_ShowPrevSlide(){
    m_scrolloffset--;
    m_UpdateSlider();
};
function m_UpdateSlider(){
    m_sliderline.style.right = m_scrolloffset*850+'px';
    m_captionsline.style.right = m_scrolloffset*300+'px';
    m_radios.forEach((radio, index) => { 
        if(index == m_scrolloffset){
            radio.checked = true;
        }else{
            radio.checked = false;
        }
    });
    if (m_scrolloffset==0){
        m_sliderprev.hidden = true;
    }else
    {
        m_sliderprev.hidden = false;
    }
    if (m_scrolloffset==m_slidescount-1){
        m_slidernext.hidden = true;
    }else
    {
        m_slidernext.hidden = false;
    }
};
h_UpdateSlider();
m_UpdateSlider();
