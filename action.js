var styles, action, style1, firstDiv; // Declare variables outside the click event listener

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector('.c');
    btn.addEventListener("click", function () {
        styles = document.createElement('link');
        styles.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css');
        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('integrity', 'sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9');
        styles.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(styles);

        action = document.createElement("script");
        action.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js');
        action.setAttribute('integrity', 'sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm');
        action.setAttribute('crossorigin', 'anonymous');
        document.body.appendChild(action);

        style1 = document.createElement("link");
        style1.setAttribute('href', 'styles.css');
        style1.setAttribute('rel', 'stylesheet');
        document.head.appendChild(style1)

    });
    var rebtn1 = document.querySelector('.rm1');
    var rebtn2 = document.querySelector('.rm2');
    var rebtn3 = document.querySelector('.rm3');
    // console.log(rebtn1, rebtn2, rebtn3)
    rebtn1.addEventListener("click", function () {
        let card1 = document.getElementById("card1");
    
        card1.remove()

    });
    rebtn2.addEventListener("click", function () {
        let card1 = document.getElementById('card2');
        card1.remove()

    })

    rebtn3.addEventListener("click", function () {
        let card1 = document.getElementById('card3');
        card1.remove()

    })
});

setTimeout(function () {
    
    document.head.removeChild(styles);
    document.body.removeChild(action);
    document.head.removeChild(style1);
    console.log('done')
}, 30000);

