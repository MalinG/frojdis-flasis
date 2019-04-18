import Router from 'next/router'
import { LayoutWrap } from '../components/Layout'
import Logo from '../components/Logo'
import { colors } from '../theme'

const Index = () => {
  const onPressStart = () => {
    Router.push('/create-workout')
  }
  
  return (
    <div>
      <Logo text='Fröjdis & Flåsis'/>
      <button onClick={onPressStart}>
        Nu kör vi!
      </button>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button {
          background: ${colors.purple};
          margin-top: 40px;
        }
      `}</style>
    </div>  
  )
}

export default LayoutWrap(Index, {test: 'korv'})