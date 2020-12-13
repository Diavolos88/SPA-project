import s from "./Preloader.module.css";
import preloader from "../../../img/load.gif";


let Preloader = () => {
    return (
        <div className={s.preloader__blok}><img className={s.preloader} src={preloader}/></div>
    );
}

export default Preloader