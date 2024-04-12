export default function TextMenu(props) {
  return (
    <li className={props.classe}>
        {props.icone}
        {props.nome}
    </li>
  );
}