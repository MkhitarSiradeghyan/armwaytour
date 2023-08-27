import s from './Title.module.sass';


const Title = ({title, priority=1}) => {
    const Tag = `h${priority}`
    return(
            <Tag className={s.title}>{title}</Tag>
    )
}


export default Title;