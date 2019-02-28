import { LayoutWrap } from '../components/Layout'
import Timer from '../components/Timer'


const TimerPage = () => (
    <div>
        <h1>Timer!!</h1>
        <Timer />
    </div>        
)

export default LayoutWrap(TimerPage)