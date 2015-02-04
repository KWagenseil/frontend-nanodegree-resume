var name = "Wiliam T. Riker";
var role = "First Officer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
  "contactInfo" : ["mobile: 804-647-7908","Email: WTRiker35@gmail.com", "GitHub: KWagenseil", "Twitter: @Callme#1"],
  "pictureURL" : "<img style=\"width:200px;\" src =  \"http://images2.fanpop.com/image/photos/9400000/Commander-William-T-Riker-star-trek-the-next-generation-9406633-2219-2560.jpg\"/>",
  "welcomeMessage" : "CARRIER HAS ARRIVED",
  "skills" : ["Commanding Officers","Piloting Galaxy-Class Starships","Trombone","Diplomacy"]
};
 var work = {
  "jobs" : [
    {
      "title" : "First Officer",
      "employer" : "Starfleet",
      "years" : 7,
      "Starship" : "USS Enterprise"
    },
    {
      "title" : "Lt. Commander",
      "employer" : "Starfleet",
      "years" : 8,
      "Starship" : "USS Titan"
    }
  ]
};
var education = {
  "schools" : [
    {
      "name" : "Starfleet Academy",
      "city" : "San Francisco",
      "major" : ["Piloting", "Diplomacy"],
      "graduation" : 2357
    },
    {
      "name" : "Udacity",
      "city" : "The internet",
      "major" : "Front End Web Developer",
      "graduation" : 2362
    }
  ]
};

var projects = {
  "learning" : [
    {
      "Project1" : "Portfolio",
      "Project2" : "Resume",
      "Project3" : "Frogger"
},
    {
      "Class1" : "Intro to Meterology",
      "Class2" : "Physical Geology"
    }
  ]
};

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  $("#header").prepend(bio.pictureURL);

}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

for (job in work.jobs)
{
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}
