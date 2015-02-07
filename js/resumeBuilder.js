var bio = {
  "name" : "William T. Riker",
  "role" : "First Officer",
  "contactInfo" :
          {
          "mobile": "804-647-7908",
          "email": "WTRiker35@gmail.com",
          "github": "KWagenseil",
          "twitter": "@Callme#1",
          "location" : "Richmond, VA"
        },
  "bioPic" : "images/Riker.jpg",
  "welcomeMessage" : "CARRIER HAS ARRIVED",
  "skills" : ["Commanding Officers","Piloting Galaxy-Class Starships","Trombone","Diplomacy"]
};

function displayBio()
{
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
  $("#topContacts").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
  $("#topContacts").append(formattedLocation);
  var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);}
};
displayBio();
                          // Here starts the WORK var and function
var work = {
  "jobs" : [
    {
      "title" : "First Officer",
      "employer" : "Starfleet",
      "dates" : "2368 - 2375",
      "location" : "Richmond, VA",
      "description" : "Served with the venerable Captain Jean-Luc Picard, through many exciting and dangerous adventures over the 7 years we were on the ship"
    },
    {
      "title" : "Lt. Commander",
      "employer" : "Starfleet",
      "dates" : "2360 - 2368",
      "location" : "San Francisco, CA",
      "description" : "Dude I practically ran this ship, no joke."
    }
  ]
};

function displayWork()
{
  for (job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();
                        // Here starts the Education var and function
var education = {
  "schools" : [
    {
      "name" : "Starfleet Academy",
      "location" : "San Francisco, CA",
      "degree" : "BA",
      "majors" : ["Piloting", " Diplomacy"],
      "dates" : "2350 - 2357"
    },
    {
    "name" : "Virginia Commonwealth University",
    "location" : "Richmond VA",
    "degree" : "BA",
    "majors" : ["English", "French"],
    "dates" : "2014 - 2018"
    },
    {
      "name" : "Virginia Commonwealth University",
      "location" : "Richmond VA",
      "degree" : "BS",
      "majors" : "Environmental Studies",
      "dates" : "2014 - 2018"
    }
  ],
    "onlineCourses" : [
      {
        "title" : "Front-end Web Developer",
        "school" : "Udacity",
        "dates" : "December 2014 - Spring 2014",
        "url" : "www.udacity.com"
      }
    ]
};

function displayEducation()
{
    for (school in education.schools)
    {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedNameDegree);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedMajors);
    }
      for (courses in education.onlineCourses)
      {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
        var formattedName = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
        var formattedTitleName = formattedTitle + formattedName;
        $(".education-entry:last").append(formattedTitleName);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
        $(".education-entry:last").append(formattedURL);
      }
};

displayEducation();

                        // Here starts the projects var and function
var projects = {
  "projects": [
    {
      "title": "Project 1-A: Orange Mug",
      "start" : "December 2014",
      "dates" : "2014",
      "description": "Create an online page from a mockup using HTML/CSS",
      "images": "images/OrangeMug.jpg",
      "url": "www.udacity.com"
    },
    {
      "title": "Project 1-B: Portfolio",
      "start" : "December 2014",
      "dates" : "2014",
      "description": "Create an online portfolio from a mockup using HTML/CSS",
      "images": "images/Portfolio.jpg",
      "url": "www.udacity.com"
    }
  ]
};

function displayProjects()
{
    for (project in projects.projects)
      {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImages);
      }
};
displayProjects();

/* function locationizer (work_obj) {
  var locationArray = [];


  return locations;
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
}); */

 $("#mapDiv").append(googleMap);
