import Clock from './Clock';
import ClockFC from './ClockFC';
import EventHandlingCC from './EventHandlingCC';
import EventHandlingFC from './EventHandlingFC';
import PersonalDetails from './PersonalDetails';
import PersonalDetailsProps from './PersonalDetailsProps';
import PersonalDetailsPropsObjects from './PersonalDetailsPropsObjects';
import ThreeClocks from './ThreeClocks';


const Learning = () => {
    let a = new Date();
    a.setHours(a.getHours() + 8);

    return (
        <div>
            <h3>Learning</h3>

            <h4>Clock</h4>
            <Clock date={new Date()} />

            <h4>Personal Details </h4>
            <PersonalDetails />

            <PersonalDetailsProps name="Maria pechen" />

            <PersonalDetailsPropsObjects person={{ name: 'maria', phone: '054', email: 'maria@gmail.com' }} />

            <ClockFC date={a} />

            <ThreeClocks />

            <EventHandlingFC />

            <EventHandlingCC />


        </div>
    )
}

export default Learning;