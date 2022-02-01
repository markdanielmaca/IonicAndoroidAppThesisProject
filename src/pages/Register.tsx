import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from '../toast';
import './Home.css';
import { registerUser } from '../firebaseConfig'

const Home: React.FC = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [busy, setbusy] = useState<boolean>(false)
    const history = useHistory()

   async function register(){
        // console.log("User: " + username, "Pass: " + password, "Cpass: " + cpassword)
        setbusy(true)
        if(password!==cpassword){
          return toast('Password do not match')
        }
        if(username.trim()===''|| password.trim()===''){
          return toast('Username and password are required')
        }
        const res = await registerUser(username,password)
        if (res) history.push('/home');{
          toast('You have registered successfully!')
        }
        setbusy(false)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registration in process!" duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username" onIonChange={(e: any) => setusername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setpassword(e.target.value)} />
        <IonInput type="password" placeholder="Confrim Password" onIonChange={(e: any) => setcpassword(e.target.value)} />
        <IonButton expand="block" onClick={register}>Register</IonButton>
        <p className="ion-text-center">Already have an account? <Link to="/">Login</Link></p>

      </IonContent>
    </IonPage>
  );
};

export default Home;
