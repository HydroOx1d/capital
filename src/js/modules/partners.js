export default function slider() {
    let splide = new Splide('.splide', {
        type: 'loop',
        perPage: 5,
        rewind: true,
        pagination: false,
        arrows: false,
        autoplay: true,
    });
    
    splide.mount();
}