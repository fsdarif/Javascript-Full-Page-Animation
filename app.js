new fullpage("#fullpage", {
    autoScroll: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section =destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: .5});

        tl.fromTo(title, 0.5, {y: "50", opacity: 0}, {y: 0, opacity: 1});

        if(destination.index === 1) {
            const chairs = document.querySelectorAll('.chair');
            const descriptions = document.querySelector('.description');

            tl.fromTo(chairs, 07, {x: "100%" }, {x: "-35%" })
            .fromTo(chairs[0], .5, {opacity: 1}, {opacity: 1})
            .fromTo(chairs[1], .5, {opacity: 0}, {opacity: 1})
            .fromTo(chairs[2], .5, {opacity: 0}, {opacity: 1})
        }
    }
})