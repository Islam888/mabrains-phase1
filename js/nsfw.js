window.onload = () => {
    if (window.innerWidth < 768) {
        document.querySelector('.nsfw-img').classList.remove('animated')
        document.querySelector('.nsfw-img').classList.remove('fadeInDown')
        document.querySelector('.nsfw-text').classList.remove('animated')
        document.querySelector('.nsfw-text').classList.remove('fadeInUp')
    }
}