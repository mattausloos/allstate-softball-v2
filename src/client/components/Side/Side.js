import Navigation from '../Navigation/Navigation'

const Side = () => {
    return (
      <div id="side" style={{ backgroundColor: '#2D2D2D', width: '15%', display: 'flex', flexDirection: 'column'}}>
          <div id="logo" style={{ height: '200px'}}>
            logo
          </div>
          <Navigation />
      </div>
    );
  }
  
  export default Side;