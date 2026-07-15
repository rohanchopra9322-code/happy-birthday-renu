document.addEventListener("DOMContentLoaded", () => {
    // 100 Reasons Array (Aap apne hisaab se jitne chahein badal/bada sakte hain)
    const loveReasons = [
        "Because your smile makes my whole day infinitely better. ❤️",
        "Because aap gusse mein bhi itni cute lagti ho ki mera gussa gayab ho jata hai. 🥺👉👈",
        "Because jab aap thodi der bhi baat nahi karti, toh mera poora din adhoora lagta hai. 🤍",
        "Because mere har rone-dhone aur silly bacho jaisi baaton ko aap itne pyaar se jhelti ho. 🧸",
        "Because aapki har ek smile par main sau baar marne ko tayyar hoon. 😍",
        "Because aap sirf meri girlfriend nahi, mera sukoon ho. 🏠❤️",
        "Because jab aap halke se apna haq jatati ho na, toh lagta hai poeri duniya mil gayi. 👑",
        "Because you are my everything... Mere dil ki rani! 💖"
    ];
    
    let reasonIndex = 0;

    // Elements Selectors
    const loader = document.getElementById("loader");
    const pages = document.querySelectorAll(".page");
    
    // Buttons Selectors
    const startBtn = document.getElementById("startBtn");
    const giftBtn = document.getElementById("giftBtn");
    const giftBox = document.querySelector(".gift-box");
    const storyBtn = document.getElementById("storyBtn");
    const galleryBtn = document.getElementById("galleryBtn");
    const letterBtn = document.getElementById("letterBtn");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const reasonBtn = document.getElementById("reasonBtn");
    const nextReason = document.getElementById("nextReason");
    const futureBtn = document.getElementById("futureBtn");

    // Smooth Page Navigation Function
    function navigateTo(targetId) {
        pages.forEach(page => page.classList.add("hidden"));
        loader.classList.add("hidden");
        document.getElementById(targetId).classList.remove("hidden");
        window.scrollTo(0, 0);
    }

    // Auto-hide Loader after 2.5 seconds and show Home page
    setTimeout(() => {
        navigateTo("home");
    }, 2500);

    // Click Actions for workflow
    startBtn.addEventListener("click", () => navigateTo("giftPage"));
    
    // Gift Opening triggers
    giftBtn.addEventListener("click", () => navigateTo("storyPage"));
    giftBox.addEventListener("click", () => navigateTo("storyPage"));
    
    storyBtn.addEventListener("click", () => navigateTo("galleryPage"));
    galleryBtn.addEventListener("click", () => navigateTo("letterPage"));
    letterBtn.addEventListener("click", () => navigateTo("lovePage"));
    yesBtn.addEventListener("click", () => navigateTo("yesPage"));
    reasonBtn.addEventListener("click", () => navigateTo("reasonPage"));

    // Next Reason Button click handler
    nextReason.addEventListener("click", () => {
        reasonIndex++;
        if (reasonIndex < loveReasons.length) {
            document.getElementById("reasonBox").innerHTML = loveReasons[reasonIndex];
        } else {
            // Jab saare reasons khatam ho jayein, final surprise page par le jao
            navigateTo("finalPage");
        }
    });

    futureBtn.addEventListener("click", () => navigateTo("futurePage"));

    // Ziddi "NO" Button Logic (Moving away on hover/touch)
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;
        
        noBtn.style.position = "fixed";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveNoButton();
    });
});
