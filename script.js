const button = document.querySelector(".main-button");
const resetButton = document.querySelector(".reset-button");

let message ="Welcome to my website!";
let clickCount = 0;
if (button) { 
button.addEventListener("click", function() {

    clickCount++;

    if (clickCount === 1) {
        message = "Nice! You started!";
    } else if (clickCount === 3) {
        message = "Great job!";
    } else if (clickCount === 5) {
        message = "Amazing!";
    } else {
        message = "Welcome to my website!";
    }

    document.querySelector("#message").textContent = message;

    if (clickCount === 1) {
        document.querySelector("#clickCount").textContent =
            "You clicked 1 time.";
    } else {
        document.querySelector("#clickCount").textContent =
            "You clicked " + clickCount + " times.";
    }

    document.querySelector("#message").classList.add("message-animation");
    document.querySelector("#message").style.color = "purple";
    document.querySelector(".card").style.backgroundColor = "#fff0f5";

});
}
let age = 10;
    if (age >=18) {
      console.log("Adult"); 
} else if (age >= 13) {
    console.log("Teenager");  
}else {
    console.log("Child");
}
 function sayHello(name,age) {
    console.log("Hello" +name+"! You are 25 years old");   
 }
 sayHello("Areej",25);
 sayHello("sara",20);
 
 function checkAge(age) {
    if (age >= 18) {
        return"you are adult.";
    } else {
        return"you are a Teenager.";
    }
}
function addNumbers(num1, num2 ) {
   return num1 + num2; 
}
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
function divideNumbers(num1, num2) {
    return num1 / num2;
}

let result4 = divideNumbers(10, 2);
console.log(result4);
function remainder(num1, num2) {
    return num1 % num2;
}

let result5 = remainder(10, 3);
console.log(result5);
let result3 = multiplyNumbers(4, 3);
console.log(result3)
let total = addNumbers(10, 4);
console.log(total);
let result =checkAge(15);
console.log(result);
let result2 =checkAge(25);
console.log(result2);

if (result === "you are a Teenager.") {
    console.log("The result is correct!");
} else {
    console.log("The result is different!");
}
let number =7;
if (number % 2== 0) {
    console.log("even");
} else {
    console.log("odd")
    
}
function checkNumber(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let numberResult = checkNumber(7);
console.log(numberResult);

let anotherResult = checkNumber(12);
console.log(anotherResult);
const themebutton = document.querySelector(".theme-button");

if (themebutton) {

    themebutton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {

            themebutton.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");

        } else {

            themebutton.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");

        }

    });

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");
        themebutton.textContent = "Light Mode";

    } else {

        themebutton.textContent = "Dark Mode";

    }

}
const contactForm = document.getElementById("contactForm");
if (contactForm) {

    contactForm.onsubmit = function(event) {

        event.preventDefault();

        const contactName = document.getElementById("contactName");
        const contactEmail = document.getElementById("contactEmail");
        const contactMessage = document.getElementById("contactMessage");
        const formMessage = document.getElementById("formMessage");

        if (
            contactName.value.trim() === "" ||
            contactEmail.value.trim() === "" ||
            contactMessage.value.trim() === ""
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color = "red";

            return;
        }

        formMessage.textContent =
            "Thank you! Your message has been received.";

        formMessage.style.color = "green";
    };
}
const visitorName = document.querySelector("#visitorName");
const saveNameButton = document.querySelector("#saveNameButton");
const welcomeMessage = document.querySelector("#welcomeMessage");
const forgetNameButton = document.querySelector("#forgetNameButton");
const changeNameButton = document.querySelector("#changeNameButton");
if (visitorName && saveNameButton && welcomeMessage) {

    saveNameButton.addEventListener("click", function() {

        const name = visitorName.value.trim();
if (name.length < 3) {
    welcomeMessage.textContent = "Name must be at least 3 characters.";
    welcomeMessage.style.color = "red";
    return;
}
        if (name === "") {
            welcomeMessage.textContent = "Please enter your name.";
            welcomeMessage.style.color = "red";
            return;
        }

        localStorage.setItem("visitorName", name);
        document.title = "Welcome " + visitorName + " 👋";

        welcomeMessage.textContent = "Welcome, " + name + "!";
        welcomeMessage.style.color = "purple";
        saveNameButton.textContent = "Hi, " + name + "!";

    });

}
if (visitorName && welcomeMessage) {

    const savedName = localStorage.getItem("visitorName");

    if (savedName) {

        visitorName.value = savedName;

        welcomeMessage.textContent =
            "Welcome back, " + savedName + "!";

        welcomeMessage.style.color = "purple";
saveNameButton.textContent = "Hi, " + savedName + "!";
forgetNameButton.style.display = "block";
changeNameButton.style.display = "block";

    }

}


if (forgetNameButton) {

    forgetNameButton.addEventListener("click", function() {

        localStorage.removeItem("visitorName");

        visitorName.value = "";

        welcomeMessage.textContent = "";

        saveNameButton.textContent = "Save Name";

        forgetNameButton.style.display = "none";

        changeNameButton.style.display = "none";

    });

}

if (changeNameButton) {

    changeNameButton.addEventListener("click", function() {

        visitorName.focus();
        visitorName.select();

        saveNameButton.textContent = "Save Name";

        welcomeMessage.textContent = "";

        forgetNameButton.style.display = "none";
        changeNameButton.style.display = "none";
    });

}

const savedName = localStorage.getItem("visitorName");

if (forgetNameButton && changeNameButton) {
    if (savedName) {
        forgetNameButton.style.display = "block";
        changeNameButton.style.display = "block";
    } else {
        forgetNameButton.style.display = "none";
        changeNameButton.style.display = "none";
    }
}
const timeGreeting = document.querySelector("#timeGreeting");

const currentHour = new Date().getHours();

if (timeGreeting) {

    if (currentHour < 12) {

        timeGreeting.textContent = "Good Morning!";

    } else if (currentHour < 18) {

        timeGreeting.textContent = "Good Afternoon!";

    } else {

        timeGreeting.textContent = "Good Evening!";

    }

}
let visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

const visitCountElement = document.querySelector("#visitCount");

if (visitCountElement) {
    visitCountElement.textContent =
        "You have visited this website " + visitCount + " times.";
}
if (visitCountElement) {
    if (visitCount < 3) {
        visitCountElement.style.color = "#777";
    } else if (visitCount <= 5) {
        visitCountElement.style.color = "purple";
    } else {
        visitCountElement.style.color = "hotpink";
    }
}
const resetVisitsButton = document.querySelector("#resetVisitsButton");
const resetMessageElement = document.querySelector("#resetMessage");
if (resetVisitsButton) {

    if (visitCount > 0) {
        resetVisitsButton.style.display = "block";
    } else {
        resetVisitsButton.style.display = "none";
    }

}

if (resetVisitsButton) {

    resetVisitsButton.addEventListener("click", function() {
        let resetMessage;
        if (!confirm("Are you sure you want to reset your visit count?")) {
    return;
}

if (visitCount <= 3) {
    resetMessage = "Are you sure you want to reset your visit count?";
} else {
    resetMessage = "You have visited many times! Are you sure you want to reset the count?";
}

resetMessageElement.textContent = resetMessage;
resetMessageElement.style.color = "purple";
setTimeout(function() {
    resetMessageElement.style.opacity = "0";

    setTimeout(function() {
        resetMessageElement.textContent = "";
        resetMessageElement.style.opacity = "1";
    }, 500);

}, 3000);

        localStorage.removeItem("visitCount");

        visitCount = 0;

        visitCountElement.textContent =
            "You have visited this website 0 times.";
resetMessageElement.textContent =
    "Visit count has been reset successfully!";

resetMessageElement.style.color = "green";
resetMessageElement.style.opacity = "1";

            resetVisitsButton.style.display = "none";

    });

}
const addVisitButton = document.querySelector("#addVisitButton");

if (addVisitButton) {

    addVisitButton.addEventListener("click", function() {

        visitCount = Number(visitCount) + 1;

        localStorage.setItem("visitCount", visitCount);

        visitCountElement.textContent =
            "You have visited this website " + visitCount + " times.";

    });

}
if (visitorName && saveNameButton) {

    visitorName.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            saveNameButton.click();
        }

    });

}
if (visitorName) {

    visitorName.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            const savedName = localStorage.getItem("visitorName");

            if (savedName) {

                visitorName.value = savedName;

                welcomeMessage.textContent = "Welcome back, " + savedName + "!";

                welcomeMessage.style.color = "purple";

                saveNameButton.textContent = "Hi, " + savedName + "!";

            }

        }

    });

}
const nameCounter = document.querySelector("#nameCounter");

if (visitorName && nameCounter) {

   visitorName.addEventListener("input", function() {

    const currentLength = visitorName.value.length;

    nameCounter.textContent =
        currentLength + " / 20 characters";

   if (currentLength < 15) {

    nameCounter.style.color = "#999";

} else if (currentLength < 20) {

    nameCounter.style.color = "orange";

} else {

    nameCounter.style.color = "red";

}

if (currentLength < 20) {

    nameCounter.textContent =
        currentLength + " / 20 characters";

} else {

    nameCounter.textContent =
        "20 / 20 characters - Maximum reached!";

}

});
}
const topButton = document.querySelector("#topButton");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});
if (topButton) {
topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
}
const scrollProgress = document.querySelector("#scrollProgress");

window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / pageHeight) * 100;

    scrollProgress.style.width = scrollPercent + "%";
});
const copyEmailButton = document.querySelector("#copyEmailButton");
const copyMessage = document.querySelector("#copyMessage");

if (copyEmailButton && copyMessage) {
    copyEmailButton.addEventListener("click", function() {
        navigator.clipboard.writeText("example@gmail.com");

        copyMessage.textContent = "Email copied!";
        copyMessage.style.color = "purple";
    });
}

const projectButtons = document.querySelectorAll(".project-button");
const projectModal = document.querySelector("#projectModal");
const closeProjectModal = document.querySelector("#closeProjectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalProjectLink = document.querySelector("#modalProjectLink");

projectButtons.forEach(function(button, index) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        if (index === 0) {
            modalTitle.textContent = "My First Website";
            modalDescription.textContent =
                "A website I created while learning HTML, CSS, and JavaScript.";
                modalProjectLink.href = "index.html";
        }

        if (index === 1) {
            modalTitle.textContent = "My Portfolio";
            modalDescription.textContent =
                "A personal portfolio website to show my skills and projects.";
                modalProjectLink.href = "index.html";
        }

        if (index === 2) {
            modalTitle.textContent = "My Future Project";
            modalDescription.textContent =
                "A new project I will build as I continue learning web development.";
                modalProjectLink.href = "#";
        }

        projectModal.style.display = "flex";
    });
});

if (closeProjectModal && projectModal) {
    closeProjectModal.addEventListener("click", function() {
        projectModal.style.display = "none";
    });
}
if (projectModal) {
    projectModal.addEventListener("click", function(event) {
        if (event.target === projectModal) {
            projectModal.style.display = "none";
        }
    });
}
const currentDate = document.querySelector("#currentDate");

if (currentDate) {
    const today = new Date();

    currentDate.textContent = today.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
const liveClock = document.querySelector("#liveClock");

function updateClock() {
    const now = new Date();

    liveClock.textContent = now.toLocaleTimeString("en-US");
}

if (liveClock) {
    updateClock();
    setInterval(updateClock, 1000);
}

const favoriteButton = document.querySelector("#favoriteButton");
const favoriteMessage = document.querySelector("#favoriteMessage");

if (favoriteButton && favoriteMessage) {

    const isFavorite = localStorage.getItem("websiteFavorite");

    if (isFavorite === "true") {
        favoriteButton.textContent = "★ Added to Favorites";
        favoriteMessage.textContent = "Your favorite is saved!";
    }

    favoriteButton.addEventListener("click", function() {

        const currentlyFavorite =
            localStorage.getItem("websiteFavorite") === "true";

        if (currentlyFavorite) {

            localStorage.setItem("websiteFavorite", "false");

            favoriteButton.textContent = "☆ Add to Favorites";
            favoriteMessage.textContent = "Removed from favorites.";

        } else {

            localStorage.setItem("websiteFavorite", "true");

            favoriteButton.textContent = "★ Added to Favorites";
            favoriteMessage.textContent = "Your favorite is saved!";

        }

    });

}
const printButton = document.querySelector("#printButton");
const printMessage = document.querySelector("#printMessage");

if (printButton && printMessage) {

    printButton.addEventListener("click", function() {

        printMessage.textContent = "Preparing your website for printing...";

        window.print();

    });

}
const readingModeButton =
    document.querySelector("#readingModeButton");

if (readingModeButton) {

    readingModeButton.addEventListener("click", function() {

        document.body.classList.toggle("reading-mode");

        if (document.body.classList.contains("reading-mode")) {

            readingModeButton.textContent = "✖ Exit Reading Mode";

        } else {

            readingModeButton.textContent = "📖 Reading Mode";

        }

    });

}
const increaseFontButton =
    document.querySelector("#increaseFontButton");

const resetFontButton =
    document.querySelector("#resetFontButton");

const fontMessage =
    document.querySelector("#fontMessage");

let fontSize = 16;

if (increaseFontButton && resetFontButton && fontMessage) {

    increaseFontButton.addEventListener("click", function() {

        if (fontSize < 24) {
            fontSize += 2;
        }

        document.querySelectorAll(
            ".card p, .project p, .skills, #timeGreeting"
        ).forEach(function(element) {
            element.style.fontSize = fontSize + "px";
        });

        fontMessage.textContent =
            "Text size: " + fontSize + "px";

    });

    resetFontButton.addEventListener("click", function() {

        fontSize = 16;

        document.querySelectorAll(
            ".card p, .project p, .skills, #timeGreeting"
        ).forEach(function(element) {
            element.style.fontSize = "";
        });

        fontMessage.textContent = "Text size reset!";

    });

}
const contactMessageInput =
    document.querySelector("#contactMessage");

const contactMessageCounter =
    document.querySelector("#contactMessageCounter");

if (contactMessageInput && contactMessageCounter) {

    function updateContactCounter() {

        const currentLength = contactMessageInput.value.length;

        contactMessageCounter.textContent =
            currentLength + " / 300 characters";

        if (currentLength >= 300) {
            contactMessageCounter.style.color = "red";
        } else {
            contactMessageCounter.style.color = "#888";
        }

    }

    contactMessageInput.addEventListener(
        "input",
        updateContactCounter
    );

    updateContactCounter();

}
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const modal = document.querySelector("#projectModal");

        if (modal) {
            modal.style.display = "none";
        }
    }
});