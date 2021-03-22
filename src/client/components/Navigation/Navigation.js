import NavigationLink from '../NavigationLink/NavigationLink';

const Navigation = () => {
    return (
      <div id="navigation" style={{ fontSize: '20px', fontWeight: '400', backgroundColor: '#4767B7'}}>
          <NavigationLink text="News" />
          <NavigationLink text="Schedule" selected/>
          <NavigationLink text="Stats" />
          <NavigationLink text="Roster" />
      </div>
    );
  }
  
  export default Navigation;