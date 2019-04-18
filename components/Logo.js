const Logo = ({size = 'large', text}) => {
  const large = size === 'large'
  return (
    <div>
      <h1>
        <span className="logo-text">{text}</span>
        <span className="logo-image"></span>
      </h1>
      <style jsx>{`
          h1 {
            text-align: center;
            margin: ${large ? '112px  0 0' : '0 0 5px' };
            display: ${large ? 'block' : 'flex' };
          }

          .logo-image {
            display: block;
            margin: ${large ? '32px auto' : '6px 0 0 8px' }; 
            height: ${large ? '88px' : '32px' };
            width: ${large ? '100px' : '40px' };
            background: url('/static/svg/heart.svg') no-repeat;
            background-size: contain;
            animation: pulse 1s ease-in infinite;
          }

          .logo-text {
            display: block;
            font-size: 36px;
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

export default Logo