document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("loadMoreButton"),
        t = document.querySelector(".hige-rating-article-block").querySelectorAll(".article-rating"),
        i = [
            {
                width: 0,
                defaultToShow: 6,
                perClick: 2
            },
            {
                width: 480,
                defaultToShow: 6,
                perClick: 2
            },
            {
                width: 992,
                defaultToShow: 6,
                perClick: 3
            },
            {
                width: 1250,
                defaultToShow: 8,
                perClick: 4
            }
        ];
    let n = null,
        r = 0;

    function o() {
        const e = window.innerWidth;
        for (let t = i.length - 1; t >= 0; t--) {
            if (e >= i[t].width) {
                n = i[t];
                r = n.defaultToShow;
                s();
                break;
            }
        }
    }

    function s() {
        t.forEach(((e, t) => {
            e.style.display = t < r ? "flex" : "none";
        }));
    }

    e.addEventListener("click", (() => {
        r += n.perClick;
        s();
    }));
    
    window.addEventListener("resize", o);
    o();
});
