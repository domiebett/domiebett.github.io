import './Tech.scss';

const Tech = ({name}: Props) => (
    <li className="skill">{name}</li>
)

interface Props {
    name: string;
}

export default Tech;
