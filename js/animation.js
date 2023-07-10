const aboutImage = document.getElementById('about_us_image_id');
const aboutText = document.getElementById('about_us_text_id');
const visionImage = document.getElementById('vision_image_id');
const visionText = document.getElementById('vision_text_id');
const equipment = document.getElementById('equipment');
const formFooter = document.getElementById('form_footer_id');
const imageTruck = document.getElementById('image_truck_id');
const certifications = document.getElementById('certification_images_id');
const supplyChain = document.getElementById('supply_chain');
const WeAreLocatedText = document.getElementById('we_are_located_text_id');
const WeAreLocatedImage = document.getElementById('we_are_located_image_id');
const transportationServicesImage = document.getElementById('image_transportation_services_id');
const transportationServicesCarousel = document.getElementById('transportation_services_carousel_id');

const uploadData = (inputs) => {
    inputs.forEach(input => {
        if(input.isIntersecting){
            console.log('la imagen esta en el viewpoint');
            input.target.classList.add('show');
        }else{
            input.target.classList.remove('show');  
        }
    });
};

const observer = new IntersectionObserver(uploadData, {
    root: null,
    rootMargin:'0px 0px 0px 0px',
    thresold: 1.0,
 });

observer.observe(transportationServicesCarousel);
observer.observe(transportationServicesImage);
observer.observe(WeAreLocatedText);
observer.observe(certifications);
observer.observe(imageTruck);
observer.observe(WeAreLocatedImage);
observer.observe(formFooter);
observer.observe(supplyChain);
observer.observe(equipment);
observer.observe(visionImage);
observer.observe(visionText);
observer.observe(aboutImage);
observer.observe(aboutText);

