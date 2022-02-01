import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonNav, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './Home.css';
import './Login.css';
import {loginUser} from '../firebaseConfig'
import { toast } from '../toast';
import { NavigationRoute, Route } from 'workbox-routing';

// import { NavigationRoute, Router } from 'workbox-routing';

const Home: React.FC = () => {
    // const [username, setusername] = useState('')
    // const [password, setpassword] = useState('')
    const [busy, setbusy] = useState<boolean>(false)
    const [userDetails, setUserDetails] = useState(
      {
        username:"",
        password:""
      }
    )
    const history = useHistory()
    // const [sensor, setSensor] = useState({
    //   red:"",
    //   blue:"",
    //   green:""
    // })
    
   async function login(){
        // setbusy(true)
        const res =  await loginUser(userDetails.username, userDetails.password)
        console.log(userDetails.username, userDetails.password)
        if(res) history.push('/home');{
          toast('You have logged in!') 
        }
        // setbusy(false)
        
    }
    const handleChange = (e:any) =>{
      setUserDetails({
        ...userDetails,
        [e.target.id] : e.target.value,
      })
    }
    // useEffect(() => {
      // firebse =kuha ng data 
      // setSensor({
      //   red:"20",
      //   blue:"70",
      //   green:"70"
      // })
    // }, [])
    useEffect(()=>{
      console.log(userDetails)
      // console.log(sensor)
    },[userDetails])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Mushroom Farming Thesis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
        <IonInput  type="email" placeholder="Username" id="username" onIonChange={handleChange} />
        <IonInput type="password" placeholder="Password" id="password" onIonChange={handleChange} />
        <IonButton className="ion-margin-top" expand="full" onClick={login} >Login</IonButton>
        <p className="ion-text-center">New here? <Link to="/register">Register</Link></p>
      </IonContent>
    </IonPage>
  );
};
export default Home;
