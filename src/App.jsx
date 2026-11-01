 import Card from './components/Card';

 

const App = () => {

      
const jobOpenings = [
    {
      
        brandLogo:"https://www.google.com/s2/favicons?domain=meta.com&sz=128",
        companyName: "Meta",
        datePosted: "5 days ago",
        post: "Frontend Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$65/hour",
        location: "Menlo Park, USA"
    },
    {
      
        brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
        companyName: "Amazon",
        datePosted: "2 days ago",
        post: "Senior UI/UX Designer",
        tag1: "Part-Time",
        tag2: "Senior Level",
        pay: "$120/hour",
        location: "Mumbai, India"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=google.com&sz=128",
        companyName: "Google",
        datePosted: "3 days ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$80/hour",
        location: "New York, USA"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
        companyName: "Microsoft",
        datePosted: "1 day ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$95/hour",
        location: "Bangalore, India"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
        companyName: "Netflix",
        datePosted: "4 days ago",
        post: "UI/UX Designer",
        tag1: "Remote",
        tag2: "Mid Level",
        pay: "$75/hour",
        location: "California, USA"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=apple.com&sz=128",
        companyName: "Apple",
        datePosted: "6 days ago",
        post: "iOS Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$100/hour",
        location: "California, USA"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
        companyName: "Adobe",
        datePosted: "2 days ago",
        post: "Graphic Designer",
        tag1: "Part-Time",
        tag2: "Mid Level",
        pay: "$55/hour",
        location: "Noida, India"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
        companyName: "Spotify",
        datePosted: "1 day ago",
        post: "Backend Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        pay: "$70/hour",
        location: "London, UK"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
        companyName: "IBM",
        datePosted: "3 days ago",
        post: "Data Analyst",
        tag1: "Full Time",
        tag2: "Mid Level",
        pay: "$60/hour",
        location: "Pune, India"
    },
    {
        brandLogo:"https://www.google.com/s2/favicons?domain=samsung.com&sz=128",
        companyName: "Samsung",
        datePosted: "5 days ago",
        post: "Product Designer",
        tag1: "Full Time",
        tag2: "Senior Level",
        pay: "$85/hour",
        location: "Seoul, South Korea"
    },

    {
    brandLogo:"https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hour",
    location: "Hyderabad, India"
},
{
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Bangalore, India"
}
];


console.log(jobOpenings);

  return (
        <>
           <div className='heading'>

          <h1>Find Your Deam Job</h1>
          <p>Explore exciting opportunities from top companies.</p>
      </div>

    <div className='parent'>
         {jobOpenings.map(function(elem,idx){
              return (
                      

              <Card key={idx}
              brandLogo={elem.brandLogo}
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
              />
             
              )
         })}
          
      </div>
      </> 
  )}


export default App;
