import MeetupList from "../Components/Meetups/MeetupList";
import { useState, useEffect } from "react";

const apiKey = "AIzaSyAj3yybiNCSe02YGRwx28hBglBJp3LsaGw";

function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-9bd89-default-rtdb.firebaseio.com/meetups.json?auth=${apiKey}').then(response => {
    return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup)
      }

        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
  }, []);

  

  if (isLoading) {
    return <section>
      <img src='https://s3.scoopwhoop.com/anj/loading/594155876.gif' alt="Loading..."/>
    </section>
  }

    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>;
}

export default AllMeetupsPage;