window.onload = () => {

    //listen to scroll and show the scollTotopBtn button when scrolling more than 650 when the navbar slides up.
    window.onscroll = () => {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            document.getElementById('scollTotopBtn').style.display = "block";
        } else {
            document.getElementById('scollTotopBtn').style.display = "none";
        }
        //Start line animation when element is in view port.
        const services = document.getElementById('services')
        const apis = document.getElementById('apis')
        const contactUs = document.getElementById('contactus')
        const articles = document.getElementById('articles')
        var isInViewport = (elem) => {
            const bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        if (isInViewport(services)) {
            services.children[1].classList.add('lineMove')
        }
        if (isInViewport(apis)) {
            apis.children[1].classList.add('lineMove')
        }
        if (isInViewport(contactUs)) {
            contactUs.children[1].classList.add('lineMove')
        }
        if (isInViewport(articles)) {
            articles.children[1].classList.add('lineMove')
        }
    }
    //listen to click on scollTotopBtn and move to the top of the page.
    document.getElementById('scollTotopBtn').addEventListener('click', () => {
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
        if (link.parentElement.tagName === "LI") {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                let element = document.getElementById(e.target.textContent.split(' ').join('').toLowerCase())
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
    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 768) {
            document.querySelector('.right').children[0].setAttribute('src', 'img/face-swapping3.jpg')
        } else if (window.innerWidth > 1100) {
            document.querySelector('.main').children[0].setAttribute('src', 'img/sentiment-analysis.jpeg')
            document.querySelector('.right').children[0].setAttribute('src', 'img/face-swapping.jpg')
        } else if (window.innerWidth <= 1100) {
            document.querySelector('.main').children[0].setAttribute('src', 'img/sentiment-analysis2.jpeg')
            document.querySelector('.right').children[0].setAttribute('src', 'img/face-swapping2.jpg')
        }
    })

}


