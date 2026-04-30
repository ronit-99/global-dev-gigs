import React from "react";
import Card from "./assets/components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/favicon.ico",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      experienceLevel: "Junior",
      payPerHour: 45,
      location: "Bangalore, India",
      link: "https://careers.google.com/jobs/results/",
    },
    {
      brandLogo: "https://www.amazon.com/favicon.ico",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag: "Full Time",
      experienceLevel: "Junior",
      payPerHour: 35,
      location: "Hyderabad, India",
      link: "https://www.amazon.jobs/en/",
    },
    {
      brandLogo: "https://www.facebook.com/favicon.ico",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag: "Part Time",
      experienceLevel: "Senior",
      payPerHour: 60,
      location: "Remote",
      link: "https://www.metacareers.com/jobs/",
    },
    {
      brandLogo: "https://www.apple.com/favicon.ico",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag: "Full Time",
      experienceLevel: "Mid Level",
      payPerHour: 55,
      location: "Mumbai, India",
      link: "https://jobs.apple.com/en-in/search",
    },
    {
      brandLogo: "https://www.netflix.com/favicon.ico",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag: "Full Time",
      experienceLevel: "Senior",
      payPerHour: 70,
      location: "Remote",
      link: "https://jobs.netflix.com/",
    },
    {
      brandLogo: "https://www.microsoft.com/favicon.ico",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag: "Full Time",
      experienceLevel: "Mid Level",
      payPerHour: 50,
      location: "Noida, India",
      link: "https://careers.microsoft.com/",
    },
    {
      brandLogo: "https://www.tesla.com/favicon.ico",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Embedded Systems Engineer",
      tag: "Full Time",
      experienceLevel: "Senior",
      payPerHour: 65,
      location: "Pune, India",
      link: "https://www.tesla.com/careers",
    },
    {
      brandLogo: "https://www.adobe.com/favicon.ico",
      companyName: "Adobe",
      datePosted: "4 days ago",
      post: "UI/UX Developer",
      tag: "Part Time",
      experienceLevel: "Mid Level",
      payPerHour: 40,
      location: "Bangalore, India",
      link: "https://careers.adobe.com/",
    },
    {
      brandLogo: "https://www.uber.com/favicon.ico",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Data Engineer",
      tag: "Full Time",
      experienceLevel: "Senior",
      payPerHour: 58,
      location: "Hyderabad, India",
      link: "https://www.uber.com/global/en/careers/",
    },
    {
      brandLogo: "https://www.airbnb.com/favicon.ico",
      companyName: "Airbnb",
      datePosted: "12 days ago",
      post: "Full Stack Developer",
      tag: "Full Time",
      experienceLevel: "Mid Level",
      payPerHour: 52,
      location: "Remote",
      link: "https://careers.airbnb.com/",
    },
    {
      brandLogo: "https://www.ibm.com/favicon.ico",
      companyName: "IBM",
      datePosted: "7 days ago",
      post: "DevOps Engineer",
      tag: "Full Time",
      experienceLevel: "Senior",
      payPerHour: 62,
      location: "Pune, India",
      link: "https://www.ibm.com/careers",
    },
    {
      brandLogo: "https://www.intel.com/favicon.ico",
      companyName: "Intel",
      datePosted: "9 days ago",
      post: "Hardware Engineer",
      tag: "Full Time",
      experienceLevel: "Mid Level",
      payPerHour: 57,
      location: "Bangalore, India",
      link: "https://jobs.intel.com/",
    },
    {
      brandLogo: "https://www.oracle.com/favicon.ico",
      companyName: "Oracle",
      datePosted: "11 days ago",
      post: "Database Engineer",
      tag: "Full Time",
      experienceLevel: "Senior",
      payPerHour: 68,
      location: "Hyderabad, India",
      link: "https://careers.oracle.com/",
    },
    {
      brandLogo: "https://www.salesforce.com/favicon.ico",
      companyName: "Salesforce",
      datePosted: "6 days ago",
      post: "CRM Developer",
      tag: "Full Time",
      experienceLevel: "Mid Level",
      payPerHour: 54,
      location: "Remote",
      link: "https://www.salesforce.com/company/careers/",
    },
    {
      brandLogo: "https://www.spotify.com/favicon.ico",
      companyName: "Spotify",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag: "Part Time",
      experienceLevel: "Senior",
      payPerHour: 66,
      location: "Remote",
      link: "https://www.lifeatspotify.com/jobs",
    },
    {
      brandLogo: "https://www.twitter.com/favicon.ico",
      companyName: "Twitter",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag: "Full Time",
      experienceLevel: "Junior",
      payPerHour: 42,
      location: "Bangalore, India",
      link: "https://careers.x.com/",
    },
    {
      brandLogo: "https://www.linkedin.com/favicon.ico",
      companyName: "LinkedIn",
      datePosted: "2 weeks ago",
      post: "Full Stack Engineer",
      tag: "Full Time",
      experienceLevel: "Mid Level",
      payPerHour: 59,
      location: "Noida, India",
      link: "https://careers.linkedin.com/",
    },
    {
      brandLogo: "https://www.snapchat.com/favicon.ico",
      companyName: "Snapchat",
      datePosted: "8 days ago",
      post: "Mobile App Developer",
      tag: "Full Time",
      experienceLevel: "Junior",
      payPerHour: 47,
      location: "Mumbai, India",
      link: "https://careers.snap.com/",
    },
    {
      brandLogo: "https://www.paypal.com/favicon.ico",
      companyName: "PayPal",
      datePosted: "10 days ago",
      post: "Security Engineer",
      tag: "Full Time",
      experienceLevel: "Senior",
      payPerHour: 64,
      location: "Hyderabad, India",
      link: "https://www.paypal.com/careers",
    },
    {
      brandLogo: "https://www.dropbox.com/favicon.ico",
      companyName: "Dropbox",
      datePosted: "4 days ago",
      post: "Cloud Developer",
      tag: "Part Time",
      experienceLevel: "Mid Level",
      payPerHour: 53,
      location: "Remote",
      link: "https://jobs.dropbox.com/",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag}
              tag2={elem.experienceLevel}
              logo={elem.brandLogo}
              pay={elem.payPerHour}
              location={elem.location}
              link={elem.link}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
