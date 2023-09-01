import NewMeetupForm from "../Components/Meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage(){
    const apiKey = "AIzaSyAj3yybiNCSe02YGRwx28hBglBJp3LsaGw";
    const history = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-getting-started-9bd89-default-rtdb.firebaseio.com/meetups.json?auth=${apiKey}',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            history('/');
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>;
}

export default NewMeetupsPage;