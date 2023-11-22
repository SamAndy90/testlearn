// const cursor = document.querySelector(".cursor")
// const cursor2 = document.querySelector(".cursor2")

// document.addEventListener("mousemove", (e) => {
//     cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
// })

document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".rating");

    if (ratings.length > 0) {
        initRatings();
    }

    function initRatings() {
        let ratingActive, ratingValue;
        for (let i = 0; i < ratings.length; i++) {
            let rating = ratings[i];
            initRating(rating);
        }

        function initRating(rating) {
            initRatingVars(rating);
            setActiveRatingWidth();

            if (rating.classList.contains("rating-set")) {
                setRating(rating);
            }
        }
        function initRatingVars(rating) {
            ratingActive = rating.querySelector(".rating__active");
            ratingValue = rating.querySelector(".rating__value");
        }
        function setActiveRatingWidth(index = ratingValue.innerHTML) {
            let ratingActiveWidth = index / 0.05;
            ratingActive.style.width = ratingActiveWidth + "%";
        }

        function setRating(rating) {
            const ratingItems = rating.querySelectorAll(".rating__item");
            for (let i = 0; i < ratingItems.length; i++) {
                let ratingItem = ratingItems[i];
                ratingItem.addEventListener("mouseenter", () => {
                    initRatingVars(rating);
                    setActiveRatingWidth(ratingItem.value);
                });
                ratingItem.addEventListener("mouseleave", () => {
                    setActiveRatingWidth();
                });
                ratingItem.addEventListener("click", () => {
                    initRatingVars(rating);
                    ratingValue.innerHTML = i + 1;
                    setActiveRatingWidth();
                });
            }
        }
    }
});
