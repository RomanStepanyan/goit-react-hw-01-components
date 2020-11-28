
import Profile from './сomponents/Profile/Profile'
import user from './user.json'
import Statistics from './сomponents/Statistics/Statistics'
import statisticalData from './statistical-data.json'

export default function App(){
  return(
  <div>
    <Profile
    avatar = {user.avatar}
    name = {user.name}
    tag = {user.tag}
    location = {user.location}
    followers = {user.stats.followers}
    views = {user.stats.views}
    likes = {user.stats.likes}
    />

  
    <Statistics 
    stats = {statisticalData}     
    />
      
  
  
  </div>
  
  ) 
};
