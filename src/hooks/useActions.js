import { actions } from '@/src/store/reducers/sliders.slice';
import { useMemo } from "react"
import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux';

const rootAction = {
    ...actions
}
const  useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
export default useActions