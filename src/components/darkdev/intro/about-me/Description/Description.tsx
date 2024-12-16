import { aboutMe } from 'temp/data/aboutMe';
import './Description.scss';

const Description = () => (
    <div className="Description">
        <p>{aboutMe.description}</p>
    </div>
)

export default Description;
