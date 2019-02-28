import { LayoutWrap } from '../components/Layout'
import ExerciseList from '../components/ExerciseList'

const CreateWorkout = () => (
    <div>
        <h1>A list of exercieses that you can add to your workout</h1>
        <ExerciseList />
    </div>
)

export default LayoutWrap(CreateWorkout)