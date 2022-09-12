$(document).ready(function () {
    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 30000, // How many particles will be generated: one particle every n pixels
        dotColor: '#27e9c6',
        lineColor: '#27e9c6',
        particleRadius: 7, // Dot size
        lineWidth: 0.5,
        curvedLines: false,
        proximity: 140, // How close two dots need to be before they join
        parallax: true,
        parallaxMultiplier: 10, // The lower the number, the more extreme the parallax effect
        onInit: function () { },
        onDestroy: function () { }
    });
});

const navigationHeight = document.querySelector('.header-section').offsetHeight;

// console.log(document.documentElement);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 + "px");