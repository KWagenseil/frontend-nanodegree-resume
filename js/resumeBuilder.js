var bio = {
  "name" : "William T. Riker",
  "role" : "First Officer",
  "contactInfo" : ["804-647-7908","WTRiker35@gmail.com"],
  "pictureURL" : "<img style=\"width:200px;\" src =  \"http://images2.fanpop.com/image/photos/9400000/Commander-William-T-Riker-star-trek-the-next-generation-9406633-2219-2560.jpg\"/>",
  "welcomeMessage" : "CARRIER HAS ARRIVED",
  "skills" : ["Commanding Officers","Piloting Galaxy-Class Starships","Trombone","Diplomacy"]
};
 var work = {           // WRITE A JSON HERE NEXT WITH DIFFERENT JOB HISTORY
  "jobs" : [
    {
      "position" : "First Officer",
      "employer" : "Starfleet",
      "years" : 7,
      "Starship" : "USS Enterprise"
    },
    {
      "position" : "Lt. Commander",
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

// for (thing in (jobs) {console.log(thing[work]);}

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

var countries = ["Germany","Argentina","Brazil","Netherlands"]
for(country in countries) {console.log(countries[country]);}

for(jobs in work) {console.log(work[jobs]);}
