import Clocks from './Clocks/Clock';
import ClockFC from './Clocks/ClockFC';
import PersonalDetails from './PersonalDetails';
import PersonalDetailsProps from './PersonalDetailsProps';
import PersonalDetailsPropsObjects from './PersonalDetailsPropsObjects';
import ThreeClocks from './Clocks/ThreeClocks';
import EventHandlingFC from './EventHandlingFC';
import EventHandlingCC from './EventHandlingCC';
import Counter from './counter-exercise/Counter';

const Learning = () => {
    let a = new Date();
    a.setHours(a.getHours() + 8);

    return (
        <div>
            <h3>Learning</h3>

            <h4>Clock</h4>
            <Clocks date={new Date()} />

            <h4>Personal Details</h4>
            <PersonalDetails />

            <PersonalDetailsProps name="Tomer Sagi" />

            <PersonalDetailsPropsObjects person={{ name: 'Tomer Sagi', phone: '0528684411', email: 'me@tomersagi.com' }} />

            <ClockFC date={a} />

            <ThreeClocks />

            <EventHandlingFC />

            <EventHandlingCC />

            <Counter />
        </div>
    )
}

export default Learning;
