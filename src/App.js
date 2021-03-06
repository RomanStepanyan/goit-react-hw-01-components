
import Profile from './сomponents/Profile/Profile'
import user from './user.json'
import Statistics from './сomponents/Statistics/Statistics'
import statisticalData from './statistical-data.json'
import FriendList from './сomponents/FriendList/FriendList'
import friends from './friends.json'
import TransactionHistory from './сomponents/TransactionHistory/TransactionHistory'
import transactions from './transactions.json'


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
    <FriendList  friends = {friends}/>
    <TransactionHistory items={transactions} />  
  </div>  
  ) 
};
