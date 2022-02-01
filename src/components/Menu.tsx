import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
    IonText,
    IonRouterOutlet,
  } from "@ionic/react";
  
  
  export const Home: React.FC = () => {
    return (
    //   <IonMenu side="end" contentId="main">
    //     <IonHeader>
    //       <IonToolbar color="light">
    //         <IonTitle>MENU</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonContent>
    //       <IonList>
    //         <IonMenuToggle >
    //           <IonItem button routerLink={"/home"} routerDirection="none">
    //             <IonLabel>Home</IonLabel>
    //           </IonItem>
    //         </IonMenuToggle>
    //         <IonMenuToggle auto-hide="false">
    //           <IonItem button routerLink={"/page-1"} routerDirection="none">
    //             <IonLabel>Page One</IonLabel>
    //           </IonItem>
    //           <IonItem button routerLink={"/page-2"} routerDirection="none">
    //             <IonLabel>Page Two</IonLabel>
    //           </IonItem>
    //         </IonMenuToggle>
    //       </IonList>
    //     </IonContent>
    //   </IonMenu>
    <IonMenu menuId="main-menu" contentId="main">
      <IonContent>
        <IonList lines="none">
            <IonMenuToggle>
                <IonItem routerLink="/home" routerDirection="none">
                    <IonIcon name="speedometer-outline"></IonIcon>
                    <IonLabel>Dashboard</IonLabel>
                </IonItem>
            </IonMenuToggle>
            <IonText>
                <h4>Actions</h4>
            </IonText>

            <IonMenuToggle>
                {/* <IonItem routerLink="/controls"> */}
                    <IonIcon name="water-outline"></IonIcon>
                    <IonLabel>Controls</IonLabel>
                {/* </IonItem> */}
            </IonMenuToggle>
            <IonMenuToggle>
                    <IonIcon name="pencil-outline"></IonIcon>
                    <IonLabel>Schedule</IonLabel>
            </IonMenuToggle>
            <IonText>
                <h4>Information</h4>
            </IonText>

            <IonMenuToggle>
                {/* <IonItem routerLink="/controls"> */}
                    <IonIcon name="water-outline"></IonIcon>
                    <IonLabel>Controls</IonLabel>
                {/* </IonItem> */}
            </IonMenuToggle>
            <IonMenuToggle>
                    <IonIcon name="pencil-outline"></IonIcon>
                    <IonLabel>Schedule</IonLabel>
            </IonMenuToggle>
            <IonText>
                <h4>EXTRAS</h4>
            </IonText>

        </IonList>
      </IonContent>
  </IonMenu>
  
    );
  };


  

//   <IonMenu contentId="main">
//       <IonContent>
//         <IonList lines="none">
//             <IonMenuToggle>
//                 <IonItem routerLink="/home">
//                     <IonIcon name="speedometer-outline"></IonIcon>
//                     <IonLabel>Dashboard</IonLabel>
//                 </IonItem>
//             </IonMenuToggle>
//             <IonText>
//                 <h4>Actions</h4>
//             </IonText>

//             <IonMenuToggle>
//                 {/* <IonItem routerLink="/controls"> */}
//                     <IonIcon name="water-outline"></IonIcon>
//                     <IonLabel>Controls</IonLabel>
//                 {/* </IonItem> */}
//             </IonMenuToggle>
//             <IonMenuToggle>
//                     <IonIcon name="pencil-outline"></IonIcon>
//                     <IonLabel>Schedule</IonLabel>
//             </IonMenuToggle>
//             <IonText>
//                 <h4>Information</h4>
//             </IonText>

//             <IonMenuToggle>
//                 {/* <IonItem routerLink="/controls"> */}
//                     <IonIcon name="water-outline"></IonIcon>
//                     <IonLabel>Controls</IonLabel>
//                 {/* </IonItem> */}
//             </IonMenuToggle>
//             <IonMenuToggle>
//                     <IonIcon name="pencil-outline"></IonIcon>
//                     <IonLabel>Schedule</IonLabel>
//             </IonMenuToggle>
//             <IonText>
//                 <h4>EXTRAS</h4>
//             </IonText>

//         </IonList>
//       </IonContent>
//   </IonMenu>







