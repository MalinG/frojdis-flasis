import { colors } from '../theme'

const TimerSettings = ({
  sets, 
  time, 
  rest, 
  longRest, 
  onInputChange,
  toggleSettings,
}) => {

  return (
    <div className="wrapper">
      <div className="close" onClick={toggleSettings}></div>
      <div className="fields-wrapper">
        <div className="field">
          <label htmlFor="sets">Antal varv: </label>
          <input 
            onChange={(e) => onInputChange(e.target.value, 'sets')} 
            id="sets" 
            name="sets" 
            value={sets} 
            />
        </div>
        <div className="field">
          <label htmlFor="time">Aktiv tid: </label>
          <input 
            onChange={(e) => onInputChange(e.target.value, 'time')} 
            id="time" 
            name="time" 
            value={time} 
            />
        </div>
        <div className="field">
          <label htmlFor="rest">Vila: </label>
          <input 
            onChange={(e) => onInputChange(e.target.value, 'rest')} 
            id="rest" 
            name="rest" 
            value={rest} 
            />
        </div>
        <div className="field">
          <label htmlFor="longRest">Vila mellan varv: </label>
          <input 
            onChange={(e) => onInputChange(e.target.value, 'longRest')} 
            id="longRest" 
            name="longRest" 
            value={longRest} 
            />
        </div>
    </div>
     

      <style jsx>{`
        .wrapper {
          position: relative;
          margin: 24px 0;
        }

        .close {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 24px;
          height: 24px;
          background: url('/static/svg/close.svg') no-repeat;
          background-size: contain;
        }

        .fields-wrapper {
          padding: 16px;
          background: ${colors.pink};
          border-radius: 4px;
        }
        
        .field {
          margin: 8px 0;
        }

        input {
          width: 24px;
          border: none;
          background: none;
          color: white;
          font-size: 16px;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

TimerSettings.defaultProps = {
  sets: 3, 
  time: 45,
  rest: 15,
  longRest: 60 
}

export default TimerSettings
