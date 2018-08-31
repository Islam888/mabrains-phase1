window.onload = () => {
    //listen to scroll and show the scrollTotopBtn button when scrolling more than 650 when the navbar slides up.
    window.onscroll = () => {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            document.getElementById('scrollTotopBtn').style.display = "block";
        } else {
            document.getElementById('scrollTotopBtn').style.display = "none";
        }
    }
    //listen to click on scrollTotopBtn and move to the top of the page.
    document.getElementById('scrollTotopBtn').addEventListener('click', () => {
        //To make scrolling to top not immediate.
        let scrollToTopTimeInterval = setInterval(scrollToTop, 10)

        function scrollToTop() {
            document.body.scrollTop -= 50; // For Safari
            document.documentElement.scrollTop -= 50; // For Chrome, Firefox, IE and Opera
            if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
                clearInterval(scrollToTopTimeInterval)
            }
        }
    })
    const allLinks = document.getElementsByTagName('a')
    let scrollToElementInterval
    for (const link of allLinks) {
        if ((link.parentElement.tagName === "LI") || (link.parentElement.classList.contains('carousel-caption'))) {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                let element = document.getElementById(e.target.hash.substring(1))
                scrollToElementInterval = setInterval(scrollToElement, 10);

                function scrollToElement() {
                    document.body.scrollTop += 50; // For Safari
                    document.documentElement.scrollTop += 50; // For Chrome, Firefox, IE and Opera
                    if (element.getBoundingClientRect().top < 30) {
                        clearInterval(scrollToElementInterval)
                    }
                }
            })
        }
    }
    //open apis cards when click on button and close it when click again while open
    const openCloseApis = (apisCard, clickedCircle) => {
        const apisCardText = apisCard.querySelector('.card-inner').children
        if (apisCard.classList.contains('card-part-height')) {
            apisCard.classList.add('card-height-transition')
            apisCard.classList.add('card-full-height')
            apisCard.classList.remove('card-part-height')
            clickedCircle.classList.add('circle-triangle-rotate-transition')
            clickedCircle.classList.add('circle-triangle-rotate')
            clickedCircle.classList.add('circle-shadow-transition')
            clickedCircle.classList.add('circle-shadow-rotate')
        } else {
            apisCard.classList.add('card-part-height')
            apisCard.classList.remove('card-full-height')
            clickedCircle.classList.remove('circle-triangle-rotate')
            clickedCircle.classList.remove('circle-shadow-rotate')

        }
        for (var i = 2; i < 4; i++) {
            if (apisCardText[i].classList.contains('hidden')) {
                apisCardText[i].classList.add('show-text-transition')
                apisCardText[i].classList.add('show-text')
                apisCardText[i].classList.remove('hidden-transition')
                apisCardText[i].classList.remove('hidden')

            } else {
                apisCardText[i].classList.remove('show-text-transition')
                apisCardText[i].classList.remove('show-text')
                apisCardText[i].classList.add('hidden-transition')
                apisCardText[i].classList.add('hidden')
            }
        }
    }
    const allCircles = document.querySelectorAll('.circle')
    for (const circle of allCircles) {
        circle.addEventListener('click', (e) => {
            openCloseApis(e.target.parentElement, e.target)
        })
    }

}