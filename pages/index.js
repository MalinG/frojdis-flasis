import Router from 'next/router'
import { LayoutWrap } from '../components/Layout'
import { colors } from '../theme'

const Index = () => {
  const onPressStart = () => {
    Router.push('/create-workout')
  }
  
  return (
    <div>
      <h1>
        <span className="logo-text">Fröjdis & Flåsis</span>
        <span className="logo-image"></span>
          
      </h1>
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
        h1 {
          text-align: center;
          margin-top: 112px;
        }

        .logo-image {
          display: block;
          margin: 32px auto;
          height: 88px;
          width: 100px;
          background: url('/static/svg/heart.svg') no-repeat;
          animation: pulse 1s ease-in infinite;
        }

        .logo-text {
          display: block;
          font-size: 36px;
        }

        button {
          background: ${colors.yellow};
          margin-top: 40px;
        }

        @keyframes pulse {
          0% { transform: scale(0.95)}
          65% { transform: scale(1.06)}
          100% { transform: scale(0.95)}
        }
      `}</style>
    </div>  
  )
}

export default LayoutWrap(Index)