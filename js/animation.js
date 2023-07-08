const aboutImage = document.getElementById('about_us_image');
const aboutText = document.getElementById('about_us_text');

const uploadAboutImage = (inputs, observer) => {
    inputs.forEach(input => {
        if(input.isIntersecting){
            console.log('la imagen esta en el viewpoint');
            input.target.classList.add('visible');
        }else{
            input.target.classList.remove('visible');  
        }
    });
};
//const uploadAboutText = () => {};

const observer = new IntersectionObserver(uploadAboutImage, {
    root: null,
    rootMargin:'0px 0px 0px 0px',
    thresold:1.0,
 });

 observer.observe(aboutImage);

 https://www.youtube.com/watch?v=cVsqA4NhDoI