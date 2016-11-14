
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img id='project-thumb'/>");
var $title = $("<h2 id='project-title'>title</h2>");
var $description = $("<p id='project-description'>description</p>");
var $goTo = $("<a id='project-button' target='_blank'>View Live</a>");
var $skills = $("<p id='project-skills'>skills</p>");
var itemArray = []; // create array to fill with projects

//add it all to the overlay

$overlay.append($title);
$overlay.append($image);
$overlay.append($description);
$overlay.append($skills);
$overlay.append($goTo);

// add overlay to body

$("body").append($overlay);

// construtor function for projects

function Project(title, thumbnail, link, description, skills) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.link = link;
    this.description = description;
    this.skills = skills;
}

// add new projects to the array

function addProject(title, thumbnail, link, description, skills) {
    var newProject = new Project(title, thumbnail, link, description, skills);
    itemArray.push(newProject);
}

// array of projects

  addProject("Mobile First Responsive Layout","images/project2.png",
          "https://priscillaluna.github.io/Treehouse-Project-02/",
          "This project was my first go at a responsive, mobile-first layout. The design was required to respond to small, medium, and large viewport sizes and devices; and demonstrate an understanding of responsive design. I also refactored this stylesheet later in the course (project 5) using SCSS partials, variables, extends, and mixins. I <3 Sass.",
          "Skills: HTML, CSS, Sass");

  addProject("Registration Form","images/project3.png",
            "https://priscillaluna.github.io/Treehouse-Project-03/",
            "In this project I was supplied mockup files and required to build a registration form using a wide variety of HTML form input types and attributes, using a “mobile-first” approach.",
            "Skills: HTML, CSS");

  addProject("Lightbox Photo Gallery","images/project4.png",
            "https://priscillaluna.github.io/Treehouse-Project-04/",
            "This project was my first attempt at using JavaScript! It was a challenge but incredibly rewarding, and boy did I learn a lot. This interactive photo gallery supplies a search area where photos hide/show depending on user input. When a thumbnail is clicked, the photo displays in a lightbox with arrows to navigate.",
            "Skills: HTML, CSS, JavaScript, jQuery");

  addProject("Interactive Video Player","images/project7.png",
            "https://priscillaluna.github.io/Treehouse-Project-07/",
            "This is an HTML5 video player with custom control elements using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, I built an interactive video player that synchronizes the video and the transcript. The transcript highlights as the video progresses.",
            "Skills: HTML, CSS, JavaScript");

  addProject("Web App Dashboard","images/project9.png",
            "https://priscillaluna.github.io/Treehouse-Project-09/",
            "In this project, I took a mockup and a few icons and built a web dashboard complete with JavaScript driven charts and graphs. This front-end only project was a great time to implement Flexbox, which I promptly fell in love with, of course!",
            "Skills: HTML, CSS, JavaScript, Flexbox");

  addProject("API Gallery","images/project10.png",
            "https://priscillaluna.github.io/Treehouse-Project-10/",
            "A simple search form that utilizes Spotify to search for albums. The search results are displayed in grid format, and you can click on them for further information about the item.",
            "Skills: HTML, CSS, JavaScript, jQuery");

// create project in overlay

  function displayProject(num) {

       var projectTitle = itemArray[num].title;
          $title.text(projectTitle);

       var projectDescription = itemArray[num].description;
          $description.text(projectDescription);

       var projectThumb = itemArray[num].thumbnail;
          $image.attr('src', projectThumb);

        var projectSkills = itemArray[num].skills;
          $skills.text(projectSkills);

        var projectLink = itemArray[num].link;
          $goTo.attr('href', projectLink);

               $overlay.children().hide(0).fadeIn(500);
               $overlay.fadeIn(500); //fade in overlay
    }


// when a project is clicked...

  $(".projectPhotos a").click(function(event) {
          var item = $(this).index(); // keep this list item index in a variable
          event.preventDefault();
          displayProject(item);    // show the info for that index in the array
  });


// hide overlay when clicked

  $overlay.click(function(){
    $overlay.fadeOut(500);

  });
