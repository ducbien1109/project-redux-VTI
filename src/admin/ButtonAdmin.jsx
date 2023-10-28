import { Button } from 'antd';

function ButtonAdmin(props){
    const {name, color,clickBtn} = props
    return(
        <>
            <Button type = {color} onClick = {clickBtn} danger>{name}</Button>
        </>
    )
}
export default ButtonAdmin