function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    var element = document.querySelector("#nav");
    element.classList.toggle("dark_nav");

    var element = document.querySelectorAll("button");
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("dark_btn");
    }

    var element = document.querySelector(".vtab");
    element.classList.toggle("dark_btn");

    var element = document.querySelector(".vtab2");
    element.classList.toggle("dark_btn");

    var element = document.querySelector(".htab");
    element.classList.toggle("dark_btn");

    var element = document.querySelector(".btns");
    element.classList.toggle("dark_btn");

    var element = document.querySelectorAll(".btncontent");
    for (var j = 0; j < element.length; j++) {
        element[j].classList.toggle("dark_project")
    }

    var element = document.querySelector("#desert");
    element.classList.toggle("desertdark");

    var element = document.querySelector("#sea");
    element.classList.toggle("seadark");

    var element = document.querySelector(".home_flex");
    element.classList.toggle("home_flexdark");

    var element = document.querySelector(".home_top");
    element.classList.toggle("home_topdark");

    var element = document.querySelector(".self");
    element.classList.toggle("selfdark");

    var element = document.querySelector(".navR");
    element.classList.toggle("navRdark");

    var element = document.querySelector(".home_name");
    element.classList.toggle("home_namedark");
    
    var element = document.querySelectorAll(".icon");
    for (var k = 0; k < element.length; k++) {
        element[k].classList.toggle("icon_dark")
    }

    var element = document.querySelector("#submit");
    element.classList.toggle("submitdark");
}






// Makes it where one tab is always open for each set when the site is opened
document.getElementById("defaultOpenv").click();
document.getElementById("defaultOpenv2").click();
document.getElementById("defaultOpenh").click();
document.getElementById("defaultOpenb").click();


// vertical tab Left
function openEdu(evt, element) {
    var i, vtabcontent, vtablinks;

    vtabcontent = document.getElementsByClassName("vtabcontent");
    for (i = 0; i < vtabcontent.length; i++) {
        vtabcontent[i].style.display = "none";
    }

    vtablinks = document.getElementsByClassName("vtablinks");
    for (i = 0; i < vtablinks.length; i++) {
        vtablinks[i].className = vtablinks[i].className.replace(" active", "");
    }

    document.getElementById(element).style.display = "block";
    evt.currentTarget.className += " active";
}

// vertical tab Right
function openWork(evt2, element) {
    var i, vtabcontent2, vtablinks2;

    vtabcontent2 = document.getElementsByClassName("vtabcontent2");
    for (i = 0; i < vtabcontent2.length; i++) {
        vtabcontent2[i].style.display = "none";
    }

    vtablinks2 = document.getElementsByClassName("vtablinks2");
    for (i = 0; i < vtablinks2.length; i++) {
        vtablinks2[i].className = vtablinks2[i].className.replace(" active", "");
    }

    document.getElementById(element).style.display = "block";
    evt2.currentTarget.className += " active";
}

// Horizonal tab
function openAct(evt, element) {
    var i, htabcontent, htablinks;

    htabcontent = document.getElementsByClassName("htabcontent");
    for (i = 0; i < htabcontent.length; i++) {
        htabcontent[i].style.display = "none";
    }

    htablinks = document.getElementsByClassName("htablinks");
    for (i = 0; i < htablinks.length; i++) {
        htablinks[i].className = htablinks[i].className.replace(" active", "");
    }

    document.getElementById(element).style.display = "block";
    evt.currentTarget.className += " active";
}

// Projects
function openPro(evt, element) {
    var i, btncontent, btnlinks;

    btncontent = document.getElementsByClassName("btncontent");
    for (i = 0; i < btncontent.length; i++) {
        btncontent[i].style.display = "none";
    }

    btnlinks = document.getElementsByClassName("btnlinks");
    for (i = 0; i < btnlinks.length; i++) {
        btnlinks[i].className = btnlinks[i].className.replace(" active", "");
    }

    document.getElementById(element).style.display = "block";
    evt.currentTarget.className += " active";
}



// EMAIL FORM!!!!!!!!!!

(function () {
    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;
        var honeypot;

        var fields = Object.keys(elements).filter(function (k) {
            if (elements[k].name === "honeypot") {
                honeypot = elements[k].value;
                return false;
            }
            return true;
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) == pos && item;
        });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail
            = form.dataset.email || ""; // no email by default

        return { data: formData, honeypot: honeypot };
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;

        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
            return false;
        }

        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                var formElements = form.querySelector(".form-elements")
                if (formElements) {
                    formElements.style.display = "none"; // hide form
                }
                var thankYouMessage = form.querySelector(".thankyou_message");
                if (thankYouMessage) {
                    thankYouMessage.style.display = "block";
                }
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }

    function loaded() {
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();



var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});